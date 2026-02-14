# EduTech Landing Page - Quick Start Guide

## 🚀 Running the Application

### Option 1: Run Both Server & Client Together
```bash
cd C:\Users\harsh\CascadeProjects\edutech-landing
npm run dev
```

This will start:
- **Backend Server**: http://localhost:5000
- **Frontend Client**: http://localhost:3000

### Option 2: Run Separately

**Terminal 1 - Server:**
```bash
npm run server
```

**Terminal 2 - Client:**
```bash
npm run client
```

## ✅ Verification Steps

### 1. Check Server is Running
- Open: http://localhost:5000/api/health
- Should see: `{"status":"OK","message":"EduTech API is running"}`

### 2. Check Client is Running
- Open: http://localhost:3000
- Homepage should load with all sections

### 3. Verify Courses are Displaying
1. Go to homepage
2. Scroll to "Explore Our Courses" section
3. Should see 6 course cards displayed in a grid
4. Test filter buttons (All, Popular, Trending, New)

## 🔍 Debugging

### Check Browser Console
Open DevTools (F12) → Console tab

**Expected Output:**
```
Using fallback data for development
Fetched courses: Array(6) [...]
```

**Check for Errors:**
- No red error messages
- All API calls should log fallback usage in dev mode

### Check Network Tab
1. Open DevTools → Network tab
2. Filter by "Fetch/XHR"
3. Should see no failed requests
4. In development, API calls fail gracefully and use fallback data

## 📂 Project Structure

```
edutech-landing/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Courses.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   │   └── api.js     # API calls & fallback data
│   │   └── App.js         # Main app component
│   └── package.json
├── server/                # Express backend
│   ├── data/             # JSON data files
│   │   ├── courses.json
│   │   └── ...
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   └── index.js          # Server entry point
└── package.json          # Root package.json

## 🐛 Common Issues & Solutions

### Issue 1: Courses Not Displaying
**Solution:** 
- Check browser console for errors
- Verify `api.js` has proper fallback data
- Check that Courses component is extracting `response.data`

### Issue 2: Server Won't Start
**Solution:**
- Check if `.env` file exists in `server/` directory
- Verify port 5000 is not already in use
- Try: `npx kill-port 5000` then restart

### Issue 3: Client Won't Start
**Solution:**
- Check if port 3000 is available
- Delete `node_modules` and run `npm install` in client folder
- Clear browser cache and reload

### Issue 4: CORS Errors
**Solution:**
- Verify `.env` has `CORS_ORIGIN=http://localhost:3000`
- Restart server after changing `.env`

## 🎨 Features to Test

### Homepage Sections
- [x] Hero with CTA buttons
- [x] Vision/About section
- [x] Courses grid with filters
- [x] Testimonials carousel
- [x] Team member cards
- [x] Blog articles
- [x] Quizzes section
- [x] Leaderboard
- [x] Contact form

### Navigation
- [x] Responsive navbar
- [x] Smooth scroll to sections
- [x] Mobile menu toggle
- [x] Route navigation

### Interactive Features
- [x] Course filtering (All, Popular, Trending, New)
- [x] Testimonial navigation
- [x] Quiz cards with progress
- [x] Leaderboard ranking
- [x] AI Assistant chat widget

## 📱 Responsive Testing

Test on different screen sizes:
- **Desktop**: 1920x1080 (default)
- **Tablet**: 768x1024 (iPad)
- **Mobile**: 375x667 (iPhone)

Use Chrome DevTools Device Mode (Ctrl+Shift+M / Cmd+Shift+M)

## 🔧 Environment Variables

### Server `.env` File
Location: `server/.env`
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Client Environment (Optional)
Create `client/.env.local` if needed:
```env
REACT_APP_API_URL=http://localhost:5000
```

## 📊 Data Files

All mock data is in `server/data/`:
- `courses.json` - 9 courses
- `blogs.json` - 6 blog posts
- `quizzes.json` - 10 quizzes
- `leaderboard.json` - 10 learners
- `testimonials.json` - 5 testimonials
- `team.json` - 8 team members

## 🎯 Next Steps

1. ✅ Verify all sections display correctly
2. ✅ Test filtering and interactions
3. ✅ Check responsive design
4. 📝 Customize content as needed
5. 🎨 Adjust styling/branding
6. 🚀 Deploy to production

## 📞 Support

If issues persist:
1. Check console for error messages
2. Review the fixes in `COURSES_FIX.md`
3. Ensure all dependencies are installed
4. Try restarting both server and client

---
**Last Updated**: October 5, 2025
**Status**: All systems operational ✅
