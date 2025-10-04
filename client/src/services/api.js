import axios from 'axios';

// Base URL from environment variable or fallback to proxy
const API_BASE_URL = process.env.REACT_APP_API_URL || '/.netlify/functions/proxy';

// Fallback data
const fallbackCourses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    instructor: 'Jane Smith',
    price: 49.99,
    rating: 4.7,
    students: 1250,
    duration: '8 hours',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    category: 'Popular',
    featured: true
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'John Doe',
    price: 69.99,
    rating: 4.8,
    students: 980,
    duration: '10 hours',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
    category: 'Trending',
    featured: true
  },
  {
    id: 3,
    title: 'React Masterclass',
    instructor: 'Emily Chen',
    price: 59.99,
    rating: 4.9,
    students: 1500,
    duration: '12 hours',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    category: 'New',
    featured: true
  }
];

const fallbackTestimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Student',
    content: 'This platform transformed my learning experience. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Web Developer',
    content: 'The courses are well-structured and the instructors are knowledgeable.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'UI/UX Designer',
    content: 'Great platform for learning new skills and improving existing ones.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4
  }
];

const fallbackTeam = [
  {
    id: 1,
    name: 'Sarah Williams',
    role: 'Lead Instructor',
    bio: '10+ years of experience in web development',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    social: { twitter: '#', linkedin: '#' }
  },
  {
    id: 2,
    name: 'Michael Brown',
    role: 'Senior Developer',
    bio: 'Specializes in React and Node.js',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    social: { twitter: '#', linkedin: '#' }
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    bio: 'Passionate about creating beautiful user experiences',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    social: { twitter: '#', linkedin: '#' }
  }
];

const fallbackBlogs = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to simplify your components',
    category: 'React',
    date: '2023-10-01',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'CSS Grid Layout',
    excerpt: 'A comprehensive guide to CSS Grid Layout',
    category: 'CSS',
    date: '2023-09-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop'
  }
];

const fallbackQuizzes = [
  {
    id: 1,
    title: 'JavaScript Basics',
    questions: 10,
    category: 'JavaScript',
    difficulty: 'Beginner'
  },
  {
    id: 2,
    title: 'React Fundamentals',
    questions: 15,
    category: 'React',
    difficulty: 'Intermediate'
  }
];

const fallbackLeaderboard = [
  { id: 1, name: 'Alex Johnson', score: 950, rank: 1, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Maria Garcia', score: 920, rank: 2, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'James Wilson', score: 890, rank: 3, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
];

// Use a mock API in development or when the real API is not available
const useMockAPI = process.env.NODE_ENV === 'development' || 
                 !process.env.REACT_APP_API_URL || 
                 process.env.REACT_APP_API_URL.includes('localhost');

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Increased timeout to 10 seconds
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle errors
api.interceptors.request.use(
  (config) => {
    // You can add auth headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('API Error Response:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Error Request:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Helper function to handle API calls with fallback
export const fetchWithFallback = async (apiCall, fallbackData) => {
  try {
    if (process.env.NODE_ENV !== 'development') {
      const response = await apiCall();
      return response?.data || fallbackData;
    }
    // In development, use fallback data
    console.log('Using fallback data for development');
    return fallbackData;
  } catch (error) {
    console.error('API Error:', error.message);
    console.log('Falling back to default data');
    return fallbackData;
  }
};

// API functions with proper error handling and fallbacks
export const getCourses = async (category = null) => {
  const params = category ? { category } : {};
  return fetchWithFallback(
    () => api.get('/api/courses', { params }),
    fallbackCourses
  );
};

export const getBlogs = () => fetchWithFallback(
  () => api.get('/api/blogs'),
  fallbackBlogs
);

export const getLeaderboard = () => fetchWithFallback(
  () => api.get('/api/leaderboard'),
  fallbackLeaderboard
);

export const getQuizzes = () => fetchWithFallback(
  () => api.get('/api/quizzes'),
  fallbackQuizzes
);

export const getTestimonials = () => fetchWithFallback(
  () => api.get('/api/testimonials'),
  fallbackTestimonials
);

export const getTeam = () => fetchWithFallback(
  () => api.get('/api/team'),
  fallbackTeam
);

export const submitContact = (data) => {
  if (!useMockAPI) {
    return api.post('/contact', data)
      .catch(error => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
      });
  }
  // In development or when API is not available, return a resolved promise
  return Promise.resolve({ 
    data: { 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    } 
  });
};

// Export fallback data for testing and development
export const fallbackData = {
  courses: fallbackCourses,
  testimonials: fallbackTestimonials,
  team: fallbackTeam,
  blogs: fallbackBlogs,
  quizzes: fallbackQuizzes,
  leaderboard: fallbackLeaderboard
};

export default api;
