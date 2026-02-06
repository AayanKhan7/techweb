import { useState } from "react";
import { useAdmin } from "../contexts/AdminContext";
import { Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export function EnquiryForm() {
  const { addResponse } = useAdmin();
  const [formData, setFormData] = useState({
    email: "", fullName: "", mobileNumber: "", inquiryType: "",
    currentClass: "", interestedCourses: [] as string[],
    preferredBatch: "", consentToContact: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addResponse(formData); // Sends all Google Form fields to Admin
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleCourseChange = (course: string) => {
    setFormData(prev => ({
      ...prev,
      interestedCourses: prev.interestedCourses.includes(course)
        ? prev.interestedCourses.filter(c => c !== course)
        : [...prev.interestedCourses, course]
    }));
  };

  if (submitted) return <div className="p-8 text-center text-green-600 font-bold">Enquiry Submitted Successfully!</div>;

  return (
    <Card className="bg-white border-none shadow-lg">
      <CardHeader className="bg-[#C9A24D] text-white p-6">
        <h2 className="text-xl font-bold text-center">Course Enquiry & Admission Form</h2>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email and Name */}
          <input className="w-full p-3 border rounded" placeholder="Email *" type="email" required 
            onChange={e => setFormData({...formData, email: e.target.value})} />
          <input className="w-full p-3 border rounded" placeholder="Full Name *" required 
            onChange={e => setFormData({...formData, fullName: e.target.value})} />
          <input className="w-full p-3 border rounded" placeholder="Mobile Number *" required 
            onChange={e => setFormData({...formData, mobileNumber: e.target.value})} />

          {/* Inquiry Type */}
          <select className="w-full p-3 border rounded" required onChange={e => setFormData({...formData, inquiryType: e.target.value})}>
            <option value="">Select Inquiry Type *</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="professional">Working Professional</option>
          </select>

          {/* Current Class/Qualification */}
          <input className="w-full p-3 border rounded" placeholder="Current Class/Qualification *" required 
            onChange={e => setFormData({...formData, currentClass: e.target.value})} />

          {/* Courses (Checkboxes) */}
          <div className="space-y-2">
            <label className="font-medium text-sm">Interested Courses *</label>
            {["MS-CIT", "Basic Computer", "Coding", "English Speaking"].map(course => (
              <div key={course} className="flex items-center gap-2">
                <input type="checkbox" onChange={() => handleCourseChange(course)} />
                <span className="text-sm">{course}</span>
              </div>
            ))}
          </div>

          {/* Preferred Batch Timing */}
          <select className="w-full p-3 border rounded" required onChange={e => setFormData({...formData, preferredBatch: e.target.value})}>
            <option value="">Select Preferred Batch *</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
            <option value="weekend">Weekend</option>
          </select>

          {/* Consent to Contact */}
          <div className="flex items-center gap-2">
            <input type="checkbox" required onChange={e => setFormData({...formData, consentToContact: e.target.checked ? "Yes" : "No"})} />
            <span className="text-sm">I consent to be contacted by Phoenix Tech Academy *</span>
          </div>

          <Button type="submit" className="w-full bg-[#C9A24D] hover:bg-[#b8923d] text-white font-bold">
            <Send className="w-4 h-4 mr-2" /> Submit Enquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}