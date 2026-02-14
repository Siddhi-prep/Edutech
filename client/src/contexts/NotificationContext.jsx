import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const { isLoggedIn, user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Initialize notifications from localStorage
  useEffect(() => {
    const loadNotifications = () => {
      try {
        const stored = localStorage.getItem('notifications');
        if (stored) {
          const parsedNotifications = JSON.parse(stored);
          setNotifications(parsedNotifications);
          updateUnreadCount(parsedNotifications);
        } else {
          // Initialize with some default notifications for demo
          initializeDefaultNotifications();
        }
      } catch (error) {
        console.error('Error loading notifications:', error);
        initializeDefaultNotifications();
      }
    };

    if (isLoggedIn) {
      loadNotifications();
    } else {
      setNotifications([]);
      setUnreadCount(0);
    }
  }, [isLoggedIn]);

  // Initialize default notifications for new users
  const initializeDefaultNotifications = useCallback(() => {
    const defaultNotifications = [
      {
        id: Date.now() + 1,
        type: 'course',
        title: 'New Course Available',
        message: 'Check out "Advanced React Patterns" - just released!',
        timestamp: Date.now(),
        read: false
      },
      {
        id: Date.now() + 2,
        type: 'suggestion',
        title: 'Recommended For You',
        message: 'Based on your progress, try "JavaScript ES6+ Essentials"',
        timestamp: Date.now() - 3600000,
        read: false
      }
    ];
    setNotifications(defaultNotifications);
    saveNotifications(defaultNotifications);
    updateUnreadCount(defaultNotifications);
  }, []);

  // Save notifications to localStorage
  const saveNotifications = (notifs) => {
    try {
      localStorage.setItem('notifications', JSON.stringify(notifs));
    } catch (error) {
      console.error('Error saving notifications:', error);
    }
  };

  // Update unread count
  const updateUnreadCount = (notifs) => {
    const count = notifs.filter(n => !n.read).length;
    setUnreadCount(count);
  };

  // Add a new notification
  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now() + Math.random(),
      timestamp: Date.now(),
      read: false,
      ...notification
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev].slice(0, 50); // Keep last 50
      saveNotifications(updated);
      updateUnreadCount(updated);
      return updated;
    });
  }, []);

  // Mark notification as read
  const markAsRead = useCallback((notificationId) => {
    setNotifications(prev => {
      const updated = prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      );
      saveNotifications(updated);
      updateUnreadCount(updated);
      return updated;
    });
  }, []);

  // Mark all notifications as read
  const markAllAsRead = useCallback(() => {
    setNotifications(prev => {
      const updated = prev.map(notif => ({ ...notif, read: true }));
      saveNotifications(updated);
      updateUnreadCount(updated);
      return updated;
    });
  }, []);

  // Delete notification
  const deleteNotification = useCallback((notificationId) => {
    setNotifications(prev => {
      const updated = prev.filter(notif => notif.id !== notificationId);
      saveNotifications(updated);
      updateUnreadCount(updated);
      return updated;
    });
  }, []);

  // Clear all notifications
  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
    saveNotifications([]);
    setUnreadCount(0);
  }, []);

  // Simulate live notifications (in a real app, this would be from WebSocket or API polling)
  useEffect(() => {
    if (!isLoggedIn) return;

    const simulateNotifications = () => {
      const notificationTypes = [
        {
          type: 'course',
          titles: [
            'New Course Available',
            'Course Update',
            'Popular Course Alert'
          ],
          messages: [
            'Check out "Advanced React Patterns" - just released!',
            'Your enrolled course has been updated with new content',
            'Top rated course: "Full Stack Development" is trending'
          ]
        },
        {
          type: 'achievement',
          titles: [
            'Achievement Unlocked!',
            'Milestone Reached!',
            'Congratulations!'
          ],
          messages: [
            'You completed 5 courses this month. Keep it up!',
            'You\'re on a 7-day learning streak!',
            'You earned the "Quick Learner" badge!'
          ]
        },
        {
          type: 'suggestion',
          titles: [
            'Recommended For You',
            'You Might Like',
            'Personalized Suggestion'
          ],
          messages: [
            'Based on your progress, try "JavaScript ES6+ Essentials"',
            'Students like you also enjoyed "Python Data Science"',
            'Continue your learning path with "Node.js Advanced"'
          ]
        },
        {
          type: 'system',
          titles: [
            'System Update',
            'New Features',
            'Platform Improvement'
          ],
          messages: [
            'New features added: Dark mode and progress tracking!',
            'We\'ve improved the course player experience',
            'Check out our new AI-powered study assistant'
          ]
        }
      ];

      const randomType = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
      const randomTitle = randomType.titles[Math.floor(Math.random() * randomType.titles.length)];
      const randomMessage = randomType.messages[Math.floor(Math.random() * randomType.messages.length)];

      // Random chance to add a notification (15% chance every interval)
      if (Math.random() < 0.15) {
        addNotification({
          type: randomType.type,
          title: randomTitle,
          message: randomMessage
        });
      }
    };

    // Check for new notifications every 45 seconds for demo
    const interval = setInterval(simulateNotifications, 45000);

    return () => clearInterval(interval);
  }, [isLoggedIn, addNotification]);

  // Trigger notification on user actions
  const notifyUserAction = useCallback((action, details) => {
    const actionNotifications = {
      'course_completed': {
        type: 'achievement',
        title: 'Course Completed!',
        message: `Congratulations! You completed "${details.courseName}"`
      },
      'quiz_passed': {
        type: 'achievement',
        title: 'Quiz Passed!',
        message: `Great job! You scored ${details.score}% on "${details.quizName}"`
      },
      'course_enrolled': {
        type: 'course',
        title: 'Enrollment Confirmed',
        message: `You're now enrolled in "${details.courseName}"`
      },
      'comment_reply': {
        type: 'social',
        title: 'New Reply',
        message: `${details.userName} replied to your comment`
      }
    };

    const notification = actionNotifications[action];
    if (notification) {
      addNotification(notification);
    }
  }, [addNotification]);

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  const value = {
    notifications,
    unreadCount,
    loading,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications,
    notifyUserAction,
    formatTimestamp
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;