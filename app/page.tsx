'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send data to your backend
      console.log('Form submitted:', formData);
      
      // Redirect to scale-training page
      router.push('/scale-training');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show toast, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#432459] to-[#646464]">
      {/* Logo Section */}
      <div className="bg-white py-2 flex justify-center">
        <div className="w-24 h-24 relative">
          {/* Lion Logo - Purple geometric design */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
            </defs>
            {/* Lion head geometric shape */}
            <polygon points="50,10 70,25 85,45 80,65 65,75 50,80 35,75 20,65 15,45 30,25" fill="url(#purpleGradient)" />
            {/* Mane details */}
            <polygon points="30,20 25,35 35,40 40,25" fill="#7C3AED" />
            <polygon points="70,20 75,35 65,40 60,25" fill="#7C3AED" />
            <polygon points="20,50 15,65 25,70 30,55" fill="#7C3AED" />
            <polygon points="80,50 85,65 75,70 70,55" fill="#7C3AED" />
            {/* Face features */}
            <circle cx="42" cy="45" r="3" fill="white" />
            <circle cx="58" cy="45" r="3" fill="white" />
            <polygon points="50,50 45,60 55,60" fill="white" />
          </svg>
        </div>
      </div>

      {/* Purple Hero Section */}
      <div className="bg-gradient-to-b from-[#432459] to-[#646464] px-4 py-10">
        {/* Course Value Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-3xl px-8 py-6 shadow-2xl">
            <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-black text-center leading-tight tracking-tight">
              ADVANCED MARKETING COURSE WORTH<br />
              <span className="text-purple-700">RS. 2.5L</span> SENT TO YOUR EMAIL FOR FREE
            </h2>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tight">
            LEARN HOW I FILTER HIGHEST QUALITY LEADS WITH{' '}
            <span className="text-yellow-300">"SCALE FUNNELS"</span>{' '}
            AND TURN DEAD CAMPAIGNS INTO{' '}
            <span className="text-yellow-300">40, 50 OR EVEN 80L+</span>{' '}
            REVENUE PER MONTH
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold opacity-95 tracking-wide">
            HOW TO GENERATE 20, 30 OR EVEN 40 HIGH TICKET SALES CALLS PER DAY ON AUTOMATION
          </p>
        </div>

        {/* Banner Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <img 
            src="https://quantumage.ai/wp-content/uploads/2025/05/Website-Banners-10.png" 
            alt="Marketing Funnel Process" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Lead Form */}
        <div className="max-w-2xl mx-auto ">
          <div className="bg-white rounded-2xl px-8 py-10 shadow-2xl">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 relative mr-4">
                  {/* Lion Logo - Purple geometric design */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="formPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#6D28D9" />
                      </linearGradient>
                    </defs>
                    {/* Lion head geometric shape */}
                    <polygon points="50,10 70,25 85,45 80,65 65,75 50,80 35,75 20,65 15,45 30,25" fill="url(#formPurpleGradient)" />
                    {/* Mane details */}
                    <polygon points="30,20 25,35 35,40 40,25" fill="#7C3AED" />
                    <polygon points="70,20 75,35 65,40 60,25" fill="#7C3AED" />
                    <polygon points="20,50 15,65 25,70 30,55" fill="#7C3AED" />
                    <polygon points="80,50 85,65 75,70 70,55" fill="#7C3AED" />
                    {/* Face features */}
                    <circle cx="42" cy="45" r="3" fill="white" />
                    <circle cx="58" cy="45" r="3" fill="white" />
                    <polygon points="50,50 45,60 55,60" fill="white" />
                    {/* Crown */}
                    <polygon points="30,5 35,15 45,10 50,20 55,10 65,15 70,5 50,0" fill="#FFD700" />
                  </svg>
                </div>
                <h2 className="text-4xl font-black text-purple-800 tracking-tight">
                  THE QUANTUM AGE
                </h2>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  P.S. You'll get access to the course via Email (make sure it is correct).
                </p>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-xl transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    SUBMITTING...
                  </div>
                ) : (
                  <>
                    WATCH NOW FOR FREE!
                    <div className="text-sm font-normal mt-1 opacity-90">
                      Instant access to masterclass & marketing course!
                    </div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Copyright */}
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              © QUANTUM AGE 2025
            </h3>
          </div>

          {/* Disclaimer */}
          <div className="mb-8">
            <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
              This website is not a part of the Facebook website or Facebook Inc., nor is it part of Google or affiliated with Google Inc. Additionally, this site is not endorsed by Facebook or Google in any way. Facebook is a trademark of Facebook, Inc., and Google is a trademark of Google Inc.
            </p>
            
            <p className="text-xs md:text-sm leading-relaxed text-gray-400">
              Results Disclaimer: Results may vary. All testimonials are real. These results are meant as a showcase of what the best, most motivated clients have done. By virtue of visiting this site or interacting with any portion of this site, you agree that you are fully responsible for the investments you make and any outcomes that may result.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
            <a href="#privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
            <span className="text-gray-500">|</span>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}