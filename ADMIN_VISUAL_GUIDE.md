# Admin Panel Visual Guide

## 📍 Site Map

```
Phoenix Tech Academy Website
│
├── 🏠 Home
├── ℹ️ About Us
├── 📚 Courses (Public)
├── 📋 Admissions (Public)
├── 🖼️ Gallery (Public)
├── ✉️ Contact
└── 🔐 Admin Panel (New!)
    │
    ├── 🔑 Login Page
    │   └── Enter username & password
    │
    └── 📊 Admin Dashboard (After Login)
        │
        ├── 📈 Dashboard Home
        │   ├── Statistics Cards
        │   ├── Recent Activities
        │   └── Quick Actions
        │
        ├── 📋 Admission Responses
        │   ├── Response List
        │   ├── Detailed View
        │   ├── Status Updates
        │   └── CSV Export
        │
        ├── 🖼️ Gallery Manager
        │   ├── Add Images
        │   ├── Categorize
        │   ├── Search & Filter
        │   └── Delete Images
        │
        ├── 📚 Course Manager
        │   ├── Create Courses
        │   ├── Edit Courses
        │   ├── View Enrollment
        │   └── Delete Courses
        │
        └── 👁️ Website Preview
            ├── Page Links
            ├── Status Checker
            └── Update Monitor
```

---

## 🎨 UI Layout

### Admin Header
```
┌─────────────────────────────────────────────────────────────┐
│ 🏛️ Phoenix Tech Academy  │  Dashboard  │  👤 Welcome admin 🚪│
│ Admin Panel              │             │                    │
└─────────────────────────────────────────────────────────────┘
```

### Main Layout (Desktop)
```
┌───────────────────────────────────────────────────────────────┐
│ [HEADER]                                                      │
├──────────────────┬──────────────────────────────────────────┤
│  SIDEBAR         │  CONTENT AREA                            │
│  ========        │  =============                           │
│  📊 Dashboard    │  ┌────────────────────────────────────┐ │
│  📋 Responses    │  │ Dashboard / Responses / Gallery    │ │
│  🖼️ Gallery     │  │ Courses / Preview                  │ │
│  📚 Courses      │  │                                    │ │
│  👁️ Preview     │  │ [Dynamic Content Based on]         │ │
│                  │  │  [Selected Section]                │ │
│                  │  └────────────────────────────────────┘ │
└──────────────────┴──────────────────────────────────────────┘
```

### Mobile Layout
```
┌─────────────────────┐
│ [HEADER]            │
│ ☰ [Menu Button]     │
├─────────────────────┤
│ [SIDEBAR - Hidden]  │
├─────────────────────┤
│ [CONTENT AREA]      │
│ Full Width          │
└─────────────────────┘
```

---

## 🎯 User Workflows

### Workflow 1: Login
```
1. Click "Admin" button in header
   ↓
2. See login page with form
   ↓
3. Enter: admin / admin@123
   ↓
4. Click "Login" button
   ↓
5. ✅ Redirected to Dashboard
```

### Workflow 2: View Admission Responses
```
1. Click "Admission Responses" in sidebar
   ↓
2. See list of all submissions
   ↓
3. Click on a response
   ↓
4. See detailed information
   ↓
5. Update status if needed
   ↓
6. Option to delete or keep
```

### Workflow 3: Add Gallery Image
```
1. Click "Gallery Manager" in sidebar
   ↓
2. Click "Add Image" button
   ↓
3. Fill in:
   - Image Title
   - Category (dropdown)
   - Image URL
   ↓
4. Click "Upload Image"
   ↓
5. ✅ Image appears in gallery
```

### Workflow 4: Create Course
```
1. Click "Course Manager" in sidebar
   ↓
2. Click "Create Course" button
   ↓
3. Fill in course details:
   - Title
   - Instructor Name
   - Duration
   - Level (Beginner/Intermediate/Advanced)
   - Description
   ↓
4. Click "Create Course"
   ↓
5. ✅ Course appears in list
```

### Workflow 5: Logout
```
1. Click "Logout" button (top-right)
   ↓
2. Confirm logout
   ↓
3. ✅ Redirected to login page
```

---

## 🎨 Color Scheme

```
Primary Colors
┌──────────────────────┐
│ ■ #0F0F12 Dark Navy  │ Main text, buttons, backgrounds
│ ■ #C9A24D Gold      │ Accents, highlights, active states
│ ■ #ffffff White     │ Cards, containers
└──────────────────────┘

Status Indicators
┌──────────────────────┐
│ 🟦 Blue - New        │
│ 🟨 Yellow - Reviewed │
│ 🟩 Green - Accepted  │
│ 🟥 Red - Rejected    │
└──────────────────────┘
```

---

## 📋 Dashboard Components

### Statistics Cards
```
┌──────────────────┐
│ 👥 TOTAL VISITORS│
│     1,250        │
└──────────────────┘

┌──────────────────┐
│ 📧 ADMISSIONS    │
│     24           │
│ [View Responses] │
└──────────────────┘

┌──────────────────┐
│ 📚 COURSES       │
│     8            │
│ [Manage Courses] │
└──────────────────┘

┌──────────────────┐
│ 🖼️ GALLERY      │
│     42 images    │
│ [Add Images]     │
└──────────────────┘
```

### Recent Activities
```
● New admission request from John Doe
  2 hours ago

● Gallery updated with 5 new images
  5 hours ago

● Web Development course created
  1 day ago

● New admission request from Jane Smith
  2 days ago
```

---

## 📊 Responses Management Interface

### Response List
```
┌────────────────┬──────────┬──────────┬────────┐
│ Name           │ Course   │ Status   │ Action │
├────────────────┼──────────┼──────────┼────────┤
│ John Doe       │ Full Stack│ 🟦 New  │ View   │
│ Jane Smith     │ Mobile   │ 🟨 Review│ View   │
│ Michael J.     │ Data Sci │ 🟩 Accept│ View   │
└────────────────┴──────────┴──────────┴────────┘
```

### Response Detail Panel
```
┌─────────────────────────────┐
│ Response Details            │
├─────────────────────────────┤
│ Name: John Doe              │
│ Email: john@example.com     │
│ Phone: +1-234-567-8900      │
│ Address: 123 Main St, NY    │
│ Course: Full Stack Dev      │
│ Experience: 3 years web dev │
│ Submitted: 2024-02-03       │
│                             │
│ Status: [New ▼]             │
│                             │
│ [Delete Response]           │
└─────────────────────────────┘
```

---

## 🖼️ Gallery Management Interface

### Gallery Grid
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Image 1  │  │ Image 2  │  │ Image 3  │
│ Campus   │  │ Classroom│  │ Events   │
│ 📸       │  │ 📸       │  │ 📸       │
│ [Delete] │  │ [Delete] │  │ [Delete] │
└──────────┘  └──────────┘  └──────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│ Image 4  │  │ Image 5  │  │ Image 6  │
│ Facilities│ │ Campus   │  │ Classroom│
│ 📸       │  │ 📸       │  │ 📸       │
│ [Delete] │  │ [Delete] │  │ [Delete] │
└──────────┘  └──────────┘  └──────────┘
```

### Add Image Form
```
┌──────────────────────────────────┐
│ Add New Image                    │
├──────────────────────────────────┤
│ Image Title:                     │
│ [________________]               │
│                                  │
│ Category:                        │
│ [Campus           ▼]             │
│                                  │
│ Image URL:                       │
│ [https://...........             │
│ ...........................]     │
│                                  │
│ [Upload Image]  [Cancel]         │
└──────────────────────────────────┘
```

---

## 📚 Course Management Interface

### Course Cards
```
┌────────────────────────────────┐
│ 📚 Full Stack Development      │
│ 👨‍🏫 John Smith                  │
│                                │
│ Learn full-stack web dev...   │
│                                │
│ ⏱️ 12 weeks   👥 45 enrolled   │
│ 🎯 Intermediate               │
│                                │
│ [Edit]  [Delete]               │
└────────────────────────────────┘

┌────────────────────────────────┐
│ 📱 Mobile App Development       │
│ 👨‍🏫 Sarah Johnson               │
│                                │
│ Build iOS and Android apps... │
│                                │
│ ⏱️ 10 weeks   👥 32 enrolled   │
│ 🎯 Intermediate               │
│                                │
│ [Edit]  [Delete]               │
└────────────────────────────────┘
```

### Create Course Form
```
┌────────────────────────────────┐
│ Create New Course              │
├────────────────────────────────┤
│ Course Title:                  │
│ [________________]              │
│                                │
│ Instructor Name:               │
│ [________________]              │
│                                │
│ Duration:                      │
│ [________] (e.g., 12 weeks)    │
│                                │
│ Level:                         │
│ [Beginner        ▼]            │
│                                │
│ Description:                   │
│ [                              │
│  ____________________________  │
│  ____________________________] │
│                                │
│ [Create]  [Cancel]             │
└────────────────────────────────┘
```

---

## 👁️ Website Preview Interface

### Page Links
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ 🏠 Home  │  │ ℹ️ About  │  │ 📚 Courses│
│ View     │  │ View     │  │ View     │
└──────────┘  └──────────┘  └──────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│📋Admissions│ │🖼️Gallery  │  │✉️ Contact │
│ View     │  │ View     │  │ View     │
└──────────┘  └──────────┘  └──────────┘
```

### Status Checklist
```
✅ Header Navigation - Last: 2024-02-03
✅ Logo and Branding - Last: 2024-02-02
✅ Responsive Design - Last: 2024-02-01
✅ Form Submissions - Last: 2024-02-03
✅ Gallery Images - Last: 2024-02-01
✅ Course Information - Last: 2024-02-02
```

---

## 🔑 Keyboard Shortcuts

```
Ctrl/Cmd + K    : Open search (if implemented)
Enter           : Submit forms
Escape          : Close modals/menus
Tab             : Navigate form fields
```

---

## 📱 Responsive Breakpoints

```
Mobile:  < 768px  (Sidebar hidden, hamburger menu shown)
Tablet:  768px    (Sidebar visible, single column)
Desktop: 1024px   (Full layout with multiple columns)
```

---

## 🎯 Common Tasks Quick Reference

| Task | Steps |
|------|-------|
| **Change Password** | Edit `src/contexts/AdminContext.tsx` |
| **Add Image** | Gallery → Add Image → Fill form |
| **Create Course** | Course Manager → Create → Fill form |
| **View Response** | Responses → Click response |
| **Export Data** | Responses → Export CSV button |
| **Logout** | Click Logout button (top-right) |
| **Change Password** | (Future feature - edit context file for now) |

---

## 🚀 Performance Tips

- Images load faster with proper URL paths
- Keep descriptions concise for better readability
- Use CSV export for large data sets
- Clear old data periodically
- Monitor database size (when implemented)

---

## ✅ Accessibility Features

- ✅ ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Responsive text sizing
- ✅ Form field labels
- ✅ Error messages clearly displayed

---

**Admin Panel Navigation Guide**  
For questions, refer to **ADMIN_QUICK_START.md** or **ADMIN_PANEL_GUIDE.md**
