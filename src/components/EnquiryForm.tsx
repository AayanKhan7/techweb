import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    mobileNumber: "",
    inquiryType: "",
    currentClass: "",
    interestedCourses: [] as string[],
    preferredBatch: "",
    consentToContact: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        email: "",
        fullName: "",
        mobileNumber: "",
        inquiryType: "",
        currentClass: "",
        interestedCourses: [],
        preferredBatch: "",
        consentToContact: ""
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCourseChange = (course: string) => {
    setFormData(prev => {
      const courses = prev.interestedCourses.includes(course)
        ? prev.interestedCourses.filter(c => c !== course)
        : [...prev.interestedCourses, course];
      return { ...prev, interestedCourses: courses };
    });
  };

  const isFormValid = () => {
    return (
      formData.email &&
      formData.fullName &&
      formData.mobileNumber &&
      formData.inquiryType &&
      formData.currentClass &&
      formData.interestedCourses.length > 0 &&
      formData.consentToContact
    );
  };

  return (
    <Card className="bg-white border-none shadow-lg">
      <CardHeader className="bg-[#C9A24D] text-white p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold">
          Phoenix Tech – Course Enquiry & Admission Form
        </h2>
        <p className="text-center text-sm sm:text-base mt-2 text-white/90">
          Fill in your details and we'll get back to you within 24 hours
        </p>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 md:p-8">
        {submitted ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl text-[#0F0F12] mb-2">Thank You!</h3>
            <p className="text-sm sm:text-base text-[#7A7A7A]">
              Your enquiry has been submitted successfully. Our team will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base text-[#0F0F12] mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm sm:text-base text-[#0F0F12] mb-2 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent text-sm sm:text-base"
                placeholder="Enter your full name"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm sm:text-base text-[#0F0F12] mb-2 font-medium">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                pattern="[0-9]{10}"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent text-sm sm:text-base"
                placeholder="10-digit mobile number"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-sm sm:text-base text-[#0F0F12] mb-2 font-medium">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Select inquiry type</option>
                <option value="student">Student</option>
                <option value="parent">Parent / Guardian</option>
                <option value="professional">Working Professional</option>
              </select>
            </div>

            {/* Student's Current Class / Qualification */}
            <div>
              <label htmlFor="currentClass" className="block text-sm sm:text-base text-[#0F0F12] mb-2 font-medium">
                Student's Current Class / Qualification <span className="text-red-500">*</span>
              </label>
              <select
                id="currentClass"
                name="currentClass"
                required
                value={formData.currentClass}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Select class / qualification</option>
                <option value="class6">Class 6</option>
                <option value="class7">Class 7</option>
                <option value="class8">Class 8</option>
                <option value="class9">Class 9</option>
                <option value="class10">Class 10</option>
                <option value="class11">Class 11</option>
                <option value="class12">Class 12</option>
                <option value="college">College Student</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Interested Courses */}
            <div>
              <label className="block text-sm sm:text-base text-[#0F0F12] mb-3 font-medium">
                Interested Courses <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { id: "mscit", label: "MS-CIT (Government Approved)" },
                  { id: "basic", label: "Basic Computer Course" },
                  { id: "coding", label: "Coding Classes" },
                  { id: "english", label: "English Speaking" },
                  { id: "guidance", label: "Not Sure / Need Guidance" }
                ].map((course) => (
                  <div key={course.id} className="flex items-start">
                    <input
                      type="checkbox"
                      id={course.id}
                      checked={formData.interestedCourses.includes(course.id)}
                      onChange={() => handleCourseChange(course.id)}
                      className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24D] border-gray-300 rounded focus:ring-[#C9A24D] cursor-pointer"
                    />
                    <label htmlFor={course.id} className="ml-2 sm:ml-3 text-sm sm:text-base text-[#4A4A4A] cursor-pointer">
                      {course.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferred Batch Timing */}
            <div>
              <label htmlFor="preferredBatch" className="block text-sm sm:text-base text-[#0F0F12] mb-2 font-medium">
                Preferred Batch Timing
              </label>
              <select
                id="preferredBatch"
                name="preferredBatch"
                value={formData.preferredBatch}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Select preferred timing</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="weekend">Weekend</option>
              </select>
            </div>

            {/* Consent to Contact */}
            <div>
              <label className="block text-sm sm:text-base text-[#0F0F12] mb-3 font-medium">
                Consent to Contact <span className="text-red-500">*</span>
              </label>
              <p className="text-xs sm:text-sm text-[#7A7A7A] mb-3">
                I agree to be contacted by Phoenix Tech Academy via Call, SMS, or WhatsApp regarding this enquiry.
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "maybe", label: "Maybe" }
                ].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`consent-${option.value}`}
                      name="consentToContact"
                      value={option.value}
                      required
                      checked={formData.consentToContact === option.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24D] border-gray-300 focus:ring-[#C9A24D] cursor-pointer"
                    />
                    <label htmlFor={`consent-${option.value}`} className="ml-2 sm:ml-3 text-sm sm:text-base text-[#4A4A4A] cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <Button
                type="submit"
                disabled={!isFormValid()}
                className="w-full bg-[#C9A24D] hover:bg-[#b8923d] text-white py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Submit Enquiry
              </Button>
              <p className="text-xs sm:text-sm text-[#7A7A7A] text-center mt-3">
                Fields marked with <span className="text-red-500">*</span> are required
              </p>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
