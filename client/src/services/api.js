import axios from 'axios';

// Base URL from environment variable or fallback to proxy
const API_BASE_URL = process.env.REACT_APP_API_URL || '/.netlify/functions/proxy';

// Fallback data
const fallbackCourses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master modern web development with React, Node.js, and MongoDB',
    category: 'Popular',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    duration: '12 weeks',
    level: 'Intermediate',
    students: 2847,
    rating: 4.8,
    price: '$299'
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    description: 'Learn Python, ML algorithms, and data visualization techniques',
    category: 'Trending',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    duration: '16 weeks',
    level: 'Advanced',
    students: 1923,
    rating: 4.9,
    price: '$399'
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Create stunning user interfaces with Figma and design thinking',
    category: 'Popular',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    duration: '8 weeks',
    level: 'Beginner',
    students: 3421,
    rating: 4.7,
    price: '$199'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Build native iOS and Android apps with React Native',
    category: 'New',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 1567,
    rating: 4.6,
    price: '$349'
  },
  {
    id: 5,
    title: 'Digital Marketing Bootcamp',
    description: 'Master SEO, social media, and content marketing strategies',
    category: 'Trending',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    duration: '6 weeks',
    level: 'Beginner',
    students: 2134,
    rating: 4.5,
    price: '$149'
  },
  {
    id: 6,
    title: 'Cloud Computing with AWS',
    description: 'Deploy scalable applications on Amazon Web Services',
    category: 'New',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    duration: '10 weeks',
    level: 'Advanced',
    students: 987,
    rating: 4.8,
    price: '$379'
  }
];

const fallbackTestimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Software Engineer at Google',
    avatar: 'https://i.pravatar.cc/150?img=32',
    testimonial: 'EduTech transformed my career! The courses are practical, engaging, and taught by industry experts. I landed my dream job within 3 months of completing the Full Stack program.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Data Scientist at Microsoft',
    avatar: 'https://i.pravatar.cc/150?img=60',
    testimonial: 'The Machine Learning course exceeded my expectations. The hands-on projects and mentorship helped me transition from finance to tech seamlessly.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'UX Designer at Airbnb',
    avatar: 'https://i.pravatar.cc/150?img=44',
    testimonial: 'Best investment in my career! The UI/UX Masterclass taught me design thinking and Figma skills that I use daily. The community support is incredible.',
    rating: 5
  }
];

const fallbackTeam = [
  {
    id: 1,
    name: 'Dr. Michael Stevens',
    role: 'Founder & CEO',
    tagline: 'Former Stanford Professor | EdTech Visionary',
    avatar: 'https://i.pravatar.cc/200?img=12',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Priya Kapoor',
    role: 'Chief Learning Officer',
    tagline: '15+ Years in Curriculum Design',
    avatar: 'https://i.pravatar.cc/200?img=45',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'David Park',
    role: 'Head of Engineering',
    tagline: 'Ex-Google | Full Stack Expert',
    avatar: 'https://i.pravatar.cc/200?img=33',
    linkedin: '#'
  },
  {
    id: 4,
    name: 'Sofia Martinez',
    role: 'Lead UX Designer',
    tagline: 'Award-Winning Designer | Apple Alumni',
    avatar: 'https://i.pravatar.cc/200?img=47',
    linkedin: '#'
  },
  {
    id: 5,
    name: 'Raj Malhotra',
    role: 'Data Science Lead',
    tagline: 'PhD in AI | Published Researcher',
    avatar: 'https://i.pravatar.cc/200?img=51',
    linkedin: '#'
  },
  {
    id: 6,
    name: 'Emma Thompson',
    role: 'Community Manager',
    tagline: 'Building Connections | Student Success',
    avatar: 'https://i.pravatar.cc/200?img=23',
    linkedin: '#'
  },
  {
    id: 7,
    name: 'Carlos Rivera',
    role: 'Marketing Director',
    tagline: 'Growth Hacker | Brand Strategist',
    avatar: 'https://i.pravatar.cc/200?img=68',
    linkedin: '#'
  },
  {
    id: 8,
    name: 'Yuki Tanaka',
    role: 'Senior Instructor',
    tagline: 'Web Dev Expert | 10K+ Students Taught',
    avatar: 'https://i.pravatar.cc/200?img=29',
    linkedin: '#'
  }
];

const fallbackBlogs = [
  {
    id: 1,
    title: '10 Tips to Boost Your Learning Productivity',
    preview: 'Discover proven strategies to maximize your study time and retain information more effectively. Learn from top performers...',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    author: 'Sarah Johnson',
    date: '2025-09-28',
    category: 'Productivity',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Future of AI in Education',
    preview: 'Explore how artificial intelligence is transforming the learning experience and personalizing education for millions...',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    author: 'Michael Chen',
    date: '2025-09-25',
    category: 'Technology',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Career Paths in Tech: A Complete Guide',
    preview: 'Navigate your tech career with insights on software engineering, data science, UX design, and emerging roles...',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    author: 'Emily Rodriguez',
    date: '2025-09-22',
    category: 'Career',
    readTime: '10 min read'
  }
];

const fallbackQuizzes = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of core JavaScript concepts',
    questions: 20,
    duration: '30 min',
    difficulty: 'Intermediate',
    completed: 75,
    icon: 'code'
  },
  {
    id: 2,
    title: 'React.js Essentials',
    description: 'Master React components, hooks, and state management',
    questions: 25,
    duration: '40 min',
    difficulty: 'Advanced',
    completed: 45,
    icon: 'layers'
  },
  {
    id: 3,
    title: 'Python Basics',
    description: 'Learn Python syntax and fundamental programming concepts',
    questions: 15,
    duration: '25 min',
    difficulty: 'Beginner',
    completed: 90,
    icon: 'terminal'
  },
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    description: 'Challenge yourself with DSA problems and solutions',
    questions: 30,
    duration: '60 min',
    difficulty: 'Advanced',
    completed: 30,
    icon: 'git-branch'
  },
  {
    id: 5,
    title: 'Web Design Principles',
    description: 'Understand UI/UX fundamentals and design thinking',
    questions: 18,
    duration: '35 min',
    difficulty: 'Intermediate',
    completed: 60,
    icon: 'layout'
  }
];

const fallbackLeaderboard = [
  {
    id: 1,
    rank: 1,
    name: 'Alex Thompson',
    avatar: 'https://i.pravatar.cc/150?img=12',
    points: 9850,
    progress: 98,
    badge: 'gold',
    coursesCompleted: 12
  },
  {
    id: 2,
    rank: 2,
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/150?img=45',
    points: 9420,
    progress: 94,
    badge: 'gold',
    coursesCompleted: 11
  },
  {
    id: 3,
    rank: 3,
    name: 'Marcus Johnson',
    avatar: 'https://i.pravatar.cc/150?img=33',
    points: 8975,
    progress: 89,
    badge: 'silver',
    coursesCompleted: 10
  },
  {
    id: 4,
    rank: 4,
    name: 'Sofia Martinez',
    avatar: 'https://i.pravatar.cc/150?img=47',
    points: 8650,
    progress: 86,
    badge: 'silver',
    coursesCompleted: 9
  },
  {
    id: 5,
    rank: 5,
    name: 'Chen Wei',
    avatar: 'https://i.pravatar.cc/150?img=68',
    points: 8320,
    progress: 83,
    badge: 'silver',
    coursesCompleted: 9
  }
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
      return { data: response?.data || fallbackData };
    }
    // In development, use fallback data
    console.log('Using fallback data for development');
    return { data: fallbackData };
  } catch (error) {
    console.error('API Error:', error.message);
    console.log('Falling back to default data');
    return { data: fallbackData };
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
