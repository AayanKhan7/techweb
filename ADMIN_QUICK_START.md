# Admin Panel Quick Start Guide

## 🎯 Getting Started

### Step 1: Access the Admin Panel
1. Visit your website: `http://localhost:5173` (or your deployment URL)
2. Click the **"Admin"** button in the top-right corner of the header
3. You'll be redirected to the login page

### Step 2: Login
**Demo Credentials:**
- **Username:** `admin`
- **Password:** `admin@123`

⚠️ **CHANGE THESE IMMEDIATELY** for production use!

### Step 3: Navigate the Dashboard
Once logged in, you'll see a dashboard with quick links to all admin features.

---

## 📊 Dashboard Features

### 1. **Dashboard Home**
- Overview statistics (visitors, admissions, courses, gallery)
- Recent activities feed
- Quick action buttons for rapid access

### 2. **Admission Responses**
- View all form submissions
- Filter by status (New, Reviewed, Accepted, Rejected)
- Update status for each response
- Export data to CSV
- Delete responses

### 3. **Gallery Manager**
- Add new images to gallery
- Categorize images (Campus, Classroom, Events, Facilities)
- Search and filter images
- Delete images

### 4. **Course Manager**
- Create new courses with:
  - Title, description, duration
  - Difficulty level
  - Instructor information
- Edit existing courses
- View enrollment statistics
- Delete courses

### 5. **Website Preview**
- View all website pages
- Quick links to preview pages
- Monitor website component status
- Check for updates

---

## 🔐 Security & Credentials

### Current Setup (Development)
The admin panel uses hardcoded credentials for demonstration.

### Change Admin Password
Edit the file: `src/contexts/AdminContext.tsx`

Find:
```typescript
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin@123", // Change this!
};
```

Replace with:
```typescript
const ADMIN_CREDENTIALS = {
  username: "your-username",
  password: "your-secure-password",
};
```

### For Production
See **ADMIN_PANEL_GUIDE.md** for detailed security recommendations and backend integration steps.

---

## 📝 Data Management

### Current System
- Data is stored in **browser memory** (component state)
- Data will be lost on page refresh
- Admission responses, courses, and images are temporary

### For Persistence
To keep data between sessions, you'll need to:
1. Set up a backend server
2. Connect to a database (MongoDB, PostgreSQL, etc.)
3. Implement API endpoints for CRUD operations
4. Use cloud storage for images (Cloudinary, AWS S3, etc.)

See **ADMIN_PANEL_GUIDE.md** for detailed integration instructions.

---

## 🖼️ Adding Images to Gallery

### Step-by-Step:
1. Go to **Gallery Manager** section
2. Click **"Add Image"** button
3. Fill in:
   - **Image Title:** Give your image a name
   - **Category:** Choose: Campus, Classroom, Events, or Facilities
   - **Image URL:** Paste the URL of your hosted image
4. Click **"Upload Image"**

### Hosting Images:
You need to upload images to an external service first:
- **Cloudinary** (recommended)
- **Imgur**
- **AWS S3**
- **Google Drive** (public link)
- Any web hosting service

[Get Cloudinary Free Account](https://cloudinary.com/users/register/free)

---

## 📚 Creating Courses

### Step-by-Step:
1. Go to **Course Manager** section
2. Click **"Create Course"** button
3. Fill in course details:
   - **Course Title:** e.g., "Full Stack Development"
   - **Instructor Name:** e.g., "John Smith"
   - **Duration:** e.g., "12 weeks"
   - **Level:** Beginner, Intermediate, or Advanced
   - **Description:** Detailed course description
4. Click **"Create Course"**

### Edit Existing Course:
1. Find the course card
2. Click **"Edit"** button
3. Update information
4. Click **"Update Course"**

### Delete Course:
1. Find the course card
2. Click **"Delete"** button
3. Confirm deletion

---

## 📋 Managing Admission Responses

### View Responses:
1. Go to **Admission Responses** section
2. See all form submissions
3. Click on any response to view full details

### Update Status:
1. Select a response
2. In the details panel, change the status:
   - **New:** Fresh submissions
   - **Reviewed:** You've reviewed it
   - **Accepted:** Applicant accepted
   - **Rejected:** Application rejected
3. Status updates automatically

### Export Data:
1. Click **"Export CSV"** button
2. File downloads with all responses
3. Open in Excel, Google Sheets, etc.

### Filter Responses:
Click filter buttons to show:
- All responses
- New submissions
- Reviewed responses
- Accepted applicants
- Rejected applications

---

## 👤 Logout

To logout:
1. Click **"Logout"** button (top-right of admin panel)
2. Confirm logout
3. You'll return to login page

---

## ❓ Troubleshooting

### Login Not Working
- Check credentials in `src/contexts/AdminContext.tsx`
- Ensure localStorage is enabled in your browser
- Check browser console for errors (F12)

### Data Disappeared After Refresh
- This is normal with current setup
- Data is only stored in memory
- See "For Persistence" section to add database

### Images Not Loading
- Check that image URL is correct and accessible
- Image URL must be publicly available
- Test URL in browser address bar

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh page (Ctrl+F5)
- Check browser console for CSS errors

---

## 🚀 Next Steps

1. **Change admin credentials** for security
2. **Add actual images** to your gallery
3. **Create courses** for your programs
4. **Test admission form** to generate test responses
5. **Review ADMIN_PANEL_GUIDE.md** for advanced features

---

## 📚 Additional Resources

- **ADMIN_PANEL_GUIDE.md** - Complete documentation
- **src/components/admin/** - Component source code
- **src/contexts/AdminContext.tsx** - Authentication logic

---

**Need Help?** Check the ADMIN_PANEL_GUIDE.md file for detailed documentation on all features, backend integration, and security best practices.

Last Updated: February 5, 2026
