# Admin Panel Documentation

## Overview

A comprehensive admin panel has been integrated into your Phoenix Tech Academy website. The admin panel allows administrators to manage website content, view form submissions, manage the gallery, create courses, and monitor website updates.

## Features

### 1. **Admin Authentication**
- Secure login system with username and password
- Session management with localStorage
- Demo credentials for testing:
  - Username: `admin`
  - Password: `admin@123`

### 2. **Dashboard**
- Overview statistics (visitors, admissions, courses, gallery images)
- Recent activities log
- Quick action buttons for rapid access to key features

### 3. **Admission Form Responses**
- View all admission form submissions
- Filter by status (New, Reviewed, Accepted, Rejected)
- Detailed response view with all submitted information
- Update response status
- Export data to CSV
- Delete responses

### 4. **Gallery Manager**
- Upload new images to the gallery
- Categorize images (Campus, Classroom, Events, Facilities)
- Search and filter images
- Delete images
- Image management interface

### 5. **Course Manager**
- Create new courses with:
  - Title, description, duration
  - Difficulty level (Beginner, Intermediate, Advanced)
  - Instructor information
- Edit existing courses
- Delete courses
- View enrolled student count
- Search and filter courses

### 6. **Website Preview**
- View all website pages
- Quick links to preview pages
- Monitor website component status
- Check for updates
- Implementation checklist

## File Structure

```
src/
├── components/
│   └── admin/
│       ├── AdminPanel.tsx          # Main admin panel component
│       ├── AdminLogin.tsx          # Login page
│       ├── AdminHeader.tsx         # Admin header with logout
│       ├── AdminSidebar.tsx        # Navigation sidebar
│       ├── AdminDashboard.tsx      # Dashboard page
│       ├── AdminResponses.tsx      # Admission responses page
│       ├── AdminGallery.tsx        # Gallery management page
│       ├── AdminCourses.tsx        # Course management page
│       └── AdminPreview.tsx        # Website preview page
├── contexts/
│   └── AdminContext.tsx            # Authentication context
└── App.tsx                         # Updated main app with admin routing
```

## How to Access the Admin Panel

### Method 1: Using the Admin Button
1. Click the "Admin" button in the website header (top right)
2. You'll be directed to the login page
3. Enter credentials:
   - Username: `admin`
   - Password: `admin@123`

### Method 2: Direct URL
Navigate to the admin panel using the website navigation.

## Default Credentials

**Username:** `admin`  
**Password:** `admin@123`

⚠️ **IMPORTANT:** Change these credentials immediately in production. Update them in:
- File: `src/contexts/AdminContext.tsx`
- Search for `ADMIN_CREDENTIALS`

## Features Detail

### Dashboard
- **Statistics Cards:** Display key metrics
- **Recent Activities:** Shows latest actions
- **Quick Actions:** Fast access to all admin features

### Admission Responses
- **List View:** Shows all submissions in a table
- **Detail View:** Click any response to view full details
- **Status Management:** Update the status of each response
- **Export:** Download all responses as CSV
- **Delete:** Remove responses (with confirmation)

### Gallery Manager
- **Image Upload:** Add new images via URL
- **Categories:** Organize images by category
- **Search:** Find images quickly
- **Delete:** Remove unwanted images

### Course Manager
- **Create Courses:** Add new courses with full details
- **Edit Courses:** Modify existing course information
- **View Stats:** See enrollment numbers
- **Delete Courses:** Remove courses from the system

### Website Preview
- **Page Links:** Quick access to view all pages
- **Status Check:** Monitor component status
- **Update Log:** See when updates were checked
- **Implementation Guide:** Checklist for development

## Design & Styling

The admin panel uses the same color theme as your main website:
- **Primary Color:** #0F0F12 (Dark Navy)
- **Accent Color:** #C9A24D (Gold)
- **Background:** #F7F8FA (Light Gray)
- **White:** #ffffff

This ensures a consistent and cohesive design across the entire application.

## Technical Details

### Technologies Used
- React with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React Context API for authentication

### Components Architecture
- **AdminPanel.tsx:** Main container component
- **AdminContext.tsx:** Global authentication state
- Individual section components for modularity

### State Management
- Context API for authentication state
- Local state for form data and filters
- localStorage for session persistence

## Data Management

### Current Implementation
- Data is stored in React component state
- Admission responses, courses, and gallery items are stored locally
- Data will be lost on page refresh

### For Production
You'll need to integrate with a backend database:
1. **Backend API:** Create endpoints for CRUD operations
2. **Database:** Store data persistently (MongoDB, PostgreSQL, etc.)
3. **Authentication:** Implement proper JWT/session authentication
4. **File Storage:** Use cloud storage for images (Cloudinary, AWS S3, etc.)

## Security Considerations

### Current Implementation (Development)
- Hardcoded credentials for testing
- Client-side state management only
- No actual data persistence

### For Production
1. **Authentication:**
   - Implement JWT tokens
   - Secure password hashing
   - Session management
   - HTTPS only

2. **Authorization:**
   - Role-based access control
   - Admin permission verification
   - API endpoint protection

3. **Data Protection:**
   - Encrypt sensitive data
   - Implement CORS policies
   - Validate all inputs
   - Sanitize outputs

4. **File Uploads:**
   - Validate file types
   - Check file sizes
   - Use secure upload services
   - Implement virus scanning

## Backend Integration Steps

### 1. Authentication
```typescript
// Replace the login function in AdminContext.tsx
const login = async (username: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  // Store token and set logged in state
};
```

### 2. Admission Responses
```typescript
// Fetch responses from backend
useEffect(() => {
  fetch('/api/admissions')
    .then(res => res.json())
    .then(data => setResponses(data));
}, []);
```

### 3. Courses & Gallery
Similar backend integration patterns for creating, updating, and deleting data.

## Customization

### Changing Admin Credentials
Edit `src/contexts/AdminContext.tsx`:
```typescript
const ADMIN_CREDENTIALS = {
  username: "your-username",
  password: "your-secure-password",
};
```

### Adding New Admin Features
1. Create a new component in `src/components/admin/`
2. Add section type to `AdminSection` type in AdminPanel.tsx
3. Add menu item to AdminSidebar.tsx
4. Add rendering logic to AdminPanel.tsx

### Styling Customization
All components use Tailwind CSS with custom color variables. Modify:
- `src/styles/globals.css` for color variables
- Individual component className strings for specific styling

## Deployment Considerations

1. **Environment Variables:**
   - Store sensitive data in environment variables
   - Use `.env` files (never commit to version control)

2. **CORS Configuration:**
   - Set up proper CORS on your backend
   - Whitelist admin domain

3. **Rate Limiting:**
   - Implement rate limiting on login attempts
   - Protect API endpoints from abuse

4. **Monitoring:**
   - Log all admin actions
   - Monitor for suspicious activity
   - Set up alerts for security events

## Troubleshooting

### Login Not Working
- Check the credentials in AdminContext.tsx
- Verify localStorage is enabled
- Check browser console for errors

### Data Not Persisting
- Remember that current data is stored in component state only
- Implement backend to persist data
- Use localStorage for temporary persistence

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that custom CSS variables are defined in globals.css
- Verify color values match the theme

## Future Enhancements

1. **Multi-Admin Support:**
   - User role management
   - Permission-based access

2. **Advanced Analytics:**
   - Visitor statistics
   - Form submission trends
   - Course enrollment charts

3. **Email Notifications:**
   - Send emails for new admissions
   - Notification preferences

4. **Backup & Recovery:**
   - Automated backups
   - Data recovery options

5. **Activity Logging:**
   - Track all admin actions
   - Maintain audit trail
   - Export logs

## Support & Maintenance

### Regular Tasks
- Monitor admin activity logs
- Update course information
- Review admission responses
- Manage gallery content
- Check website updates

### Security Audits
- Regularly update passwords
- Review access logs
- Audit user permissions
- Test security measures

---

For more information or to report issues, please contact your development team.

Last Updated: February 5, 2026
