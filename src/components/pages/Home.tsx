import { Award, Users, Clock, BookOpen, Code, Laptop, MessageSquare, GraduationCap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import logoImage from "../../assets/1cbc1581d4749db19e33aadbbabb706fc733038a.png";

interface HomeProps {
  onNavigate: (page: "home" | "about" | "courses" | "admissions" | "gallery" | "contact") => void;
}

export function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced and certified instructors"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Government Approved",
      description: "MS-CIT certified by MKCL, Govt. of Maharashtra"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Modern Infrastructure",
      description: "Well-equipped computer labs with latest technology"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Batches",
      description: "Personalized attention with limited students per batch"
    }
  ];

  const courses = [
    {
      title: "MS-CIT",
      duration: "3 Months",
      description: "Government approved certification by MKCL",
      icon: <Award className="w-10 h-10 text-[#C9A24D]" />
    },
    {
      title: "Basic Computer Course",
      duration: "1-2 Months",
      description: "Fundamentals, typing, and internet basics",
      icon: <Laptop className="w-10 h-10 text-[#C9A24D]" />
    },
    {
      title: "Coding Classes",
      duration: "3-6 Months",
      description: "Scratch, HTML/CSS, Python for students",
      icon: <Code className="w-10 h-10 text-[#C9A24D]" />
    },
    {
      title: "English Speaking",
      duration: "Flexible",
      description: "Grammar, spoken English, confidence building",
      icon: <MessageSquare className="w-10 h-10 text-[#C9A24D]" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Logo Display */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={logoImage} 
                  alt="Phoenix Tech Academy Logo" 
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                />
                <div>
                  <h2 className="text-lg sm:text-xl text-[#C9A24D] font-semibold">Phoenix Tech Academy</h2>
                  <p className="text-sm sm:text-base text-[#7A7A7A]">From Ideas to Impact</p>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0F0F12] mb-4 sm:mb-6 leading-tight">
                Welcome to Phoenix Tech Academy
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#4A4A4A] mb-6 sm:mb-8 leading-relaxed">
                Empowering students with essential computer skills and technology education in Hadapsar, Pune. From foundational courses to advanced coding classes.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button 
                  className="bg-[#C9A24D] hover:bg-[#b8923d] text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => onNavigate("admissions")}
                >
                  Enquire Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#0F0F12] text-[#0F0F12] hover:bg-[#F7F8FA] px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => onNavigate("courses")}
                >
                  View Courses
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNsYXNzcm9vbSUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcwMjExNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Computer classroom with students learning"
                className="w-full h-48 sm:h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Phoenix Tech */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0F0F12] mb-3 sm:mb-4">
              Why Choose Phoenix Tech Academy?
            </h2>
            <p className="text-sm sm:text-base text-[#7A7A7A] max-w-2xl mx-auto px-4">
              Trusted by students and parents across Pune for quality education and skill development
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-none">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#C9A24D]/10 rounded-full mb-3 sm:mb-4 text-[#C9A24D]">
                    {feature.icon}
                  </div>
                  <h3 className="text-[#0F0F12] mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-[#7A7A7A]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0F0F12] mb-3 sm:mb-4">
              Our Courses
            </h2>
            <p className="text-sm sm:text-base text-[#7A7A7A] max-w-2xl mx-auto px-4">
              Choose from our range of professional courses designed for students and beginners
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow border border-gray-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-[#0F0F12] mb-2 text-sm sm:text-base">{course.title}</h3>
                  <p className="text-xs sm:text-sm text-[#C9A24D] mb-2 sm:mb-3">{course.duration}</p>
                  <p className="text-xs sm:text-sm text-[#7A7A7A]">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button 
              variant="outline"
              className="border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
              onClick={() => onNavigate("courses")}
            >
              Explore All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAxNDk1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern classroom"
                className="w-full h-48 sm:h-64 md:h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0F0F12] mb-4 sm:mb-6">
                Modern Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-[#4A4A4A] mb-4 sm:mb-6 leading-relaxed">
                Our state-of-the-art facilities provide the perfect environment for learning. Each classroom is equipped with modern computers, high-speed internet, and comfortable seating.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9A24D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] sm:text-xs">✓</span>
                  </div>
                  <span className="text-sm sm:text-base text-[#4A4A4A]">Air-conditioned computer labs</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9A24D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] sm:text-xs">✓</span>
                  </div>
                  <span className="text-sm sm:text-base text-[#4A4A4A]">Latest hardware and software</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9A24D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] sm:text-xs">✓</span>
                  </div>
                  <span className="text-sm sm:text-base text-[#4A4A4A]">Interactive learning environment</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9A24D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] sm:text-xs">✓</span>
                  </div>
                  <span className="text-sm sm:text-base text-[#4A4A4A]">Individual attention to every student</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#0F0F12] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg px-4">
            Join hundreds of students who have transformed their careers with Phoenix Tech Academy
          </p>
          <Button 
            className="bg-[#C9A24D] hover:bg-[#b8923d] text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
            onClick={() => onNavigate("admissions")}
          >
            Apply for Admission
          </Button>
        </div>
      </section>
    </div>
  );
}