import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Synchronized with the fields in your Courses.tsx and Home.tsx
export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  target: string;
  highlights: string[];
  syllabus: string[];
  iconType: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  url: string;
  category: string;
  uploadedAt: string;
}

export interface AdmissionResponse {
  id: number;
  email: string; // From Form
  fullName: string;
  mobileNumber: string; // Specific field from Form
  inquiryType: string; // Student/Parent/Professional
  currentClass: string; // Specific field from Form
  interestedCourses: string[]; // Array for multiple checkboxes
  preferredBatch: string; // From Form
  consentToContact: string; // From Form
  submittedAt: string;
  status: "new" | "reviewed" | "accepted" | "rejected";
}

interface AdminContextType {
  isLoggedIn: boolean;
  adminUsername: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  courses: Course[];
  addCourse: (course: Course) => void;
  deleteCourse: (id: number) => void;
  updateCourse: (course: Course) => void;
  gallery: GalleryImage[];
  addImage: (img: GalleryImage) => void;
  deleteImage: (id: number) => void;
  responses: AdmissionResponse[];
  addResponse: (res: any) => void;
  updateResponseStatus: (id: number, status: AdmissionResponse["status"]) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = { username: "irfan", password: "irfan@123" };

const DEFAULT_COURSES: Course[] = [
  {
    id: 1,
    title: "MS-CIT",
    subtitle: "Maharashtra State Certificate in Information Technology",
    iconType: "Award",
    duration: "3 Months",
    target: "Students, Job seekers, Government employees",
    description: "Government of Maharashtra approved certification program by MKCL. This comprehensive course covers essential computer skills required in today's digital workplace.",
    highlights: [
      "Government approved certification",
      "Recognized by MKCL",
      "Theory and practical training",
      "Official examination center",
      "Certificate valid across Maharashtra",
      "Mandatory for government jobs"
    ],
    syllabus: [
      "Introduction to Computers",
      "Windows Operating System",
      "MS Word - Document Processing",
      "MS Excel - Spreadsheets",
      "MS PowerPoint - Presentations",
      "Internet & Email",
      "Digital Security"
    ]
  },
  {
    id: 2,
    title: "Basic Computer Course",
    subtitle: "Foundation Course for Beginners",
    iconType: "Monitor",
    duration: "1-2 Months",
    target: "Complete beginners, School students, Homemakers",
    description: "Perfect for those starting their computer journey. Learn fundamental concepts and gain confidence in using computers for daily tasks.",
    highlights: [
      "No prior knowledge required",
      "Hands-on practical training",
      "Learn at your own pace",
      "Certificate on completion",
      "Typing speed development",
      "Real-world applications"
    ],
    syllabus: [
      "Computer Basics & Hardware",
      "Keyboard & Mouse Usage",
      "Typing Practice",
      "File Management",
      "Internet Browsing",
      "Email Usage",
      "Basic MS Office"
    ]
  },
  {
    id: 3,
    title: "Coding Classes for Students",
    subtitle: "Programming for Young Learners",
    iconType: "Code",
    duration: "3-6 Months",
    target: "Students (Class 6-12)",
    description: "Introduce your child to the world of programming with age-appropriate courses designed to build logical thinking and problem-solving skills.",
    highlights: [
      "Age-appropriate curriculum",
      "Visual programming with Scratch",
      "Web development basics",
      "Python programming",
      "Project-based learning",
      "Creative and logical thinking"
    ],
    syllabus: [
      "Scratch Programming (Beginners)",
      "HTML & CSS Basics",
      "JavaScript Introduction",
      "Python Fundamentals",
      "Game Development Concepts",
      "Project Work",
      "Problem Solving"
    ]
  },
  {
    id: 4,
    title: "English Speaking Course",
    subtitle: "Communicate with Confidence",
    iconType: "MessageSquare",
    duration: "Flexible Duration",
    target: "All age groups, Students, Professionals",
    description: "Improve your English speaking skills, build confidence, and enhance your communication abilities for personal and professional growth.",
    highlights: [
      "Grammar fundamentals",
      "Spoken English practice",
      "Vocabulary building",
      "Confidence development",
      "Interactive sessions",
      "Personality development"
    ],
    syllabus: [
      "Basic Grammar Rules",
      "Vocabulary Enhancement",
      "Pronunciation Practice",
      "Sentence Formation",
      "Conversation Skills",
      "Public Speaking Basics",
      "Interview Preparation"
    ]
  }
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("adminAuth") === "true");
  const [adminUsername, setAdminUsername] = useState<string | null>(null);

  // Initialize data from LocalStorage with defaults for courses
  const [courses, setCourses] = useState<Course[]>(() => {
    const stored = localStorage.getItem("phx_courses");
    return stored ? JSON.parse(stored) : DEFAULT_COURSES;
  });
  const [gallery, setGallery] = useState<GalleryImage[]>(() => JSON.parse(localStorage.getItem("phx_gallery") || "[]"));
  const [responses, setResponses] = useState<AdmissionResponse[]>(() => JSON.parse(localStorage.getItem("phx_responses") || "[]"));

  // Sync data to LocalStorage
  useEffect(() => {
    localStorage.setItem("phx_courses", JSON.stringify(courses));
    localStorage.setItem("phx_gallery", JSON.stringify(gallery));
    localStorage.setItem("phx_responses", JSON.stringify(responses));
  }, [courses, gallery, responses]);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setAdminUsername(username);
      localStorage.setItem("adminAuth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAdminUsername(null);
    localStorage.removeItem("adminAuth");
  };

  const addCourse = (c: Course) => setCourses([c, ...courses]);
  const deleteCourse = (id: number) => setCourses(courses.filter(c => c.id !== id));
  const updateCourse = (updatedCourse: Course) => setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
  const addImage = (img: GalleryImage) => setGallery([img, ...gallery]);
  const deleteImage = (id: number) => setGallery(gallery.filter(i => i.id !== id));
  const addResponse = (data: any) => {
    const newRes = { ...data, id: Date.now(), submittedAt: new Date().toLocaleDateString(), status: "new" };
    setResponses([newRes, ...responses]);
  };
  const updateResponseStatus = (id: number, status: AdmissionResponse["status"]) => {
    setResponses(responses.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <AdminContext.Provider value={{ 
      isLoggedIn, adminUsername, login, logout, 
      courses, addCourse, deleteCourse, updateCourse,
      gallery, addImage, deleteImage, 
      responses, addResponse, updateResponseStatus 
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) throw new Error("useAdmin must be used within AdminProvider");
  return context;
}