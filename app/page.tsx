'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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

  // Load the form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
      <div className="elementor-element elementor-element-79d88927 e-con-full e-flex e-con e-parent e-lazyloaded bg-white py-4 flex justify-center" 
           data-id="79d88927" 
           data-element_type="container" 
           data-settings='{"background_background":"classic"}'>
        <div className="elementor-element elementor-element-3c60463f elementor-widget elementor-widget-image" 
             data-id="3c60463f" 
             data-element_type="widget" 
             data-widget_type="image.default">
          <div className="elementor-widget-container">
            <img 
              fetchPriority="high" 
              decoding="async" 
              width="500" 
              height="500" 
              src="https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE.png" 
              className="attachment-large size-large wp-image-16077 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain" 
              alt="Quantum Age Logo" 
              srcSet="https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE.png 500w, https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE-300x300.png 300w, https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE-150x150.png 150w, https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE-100x100.png 100w" 
              sizes="(max-width: 500px) 100vw, 500px"
            />
          </div>
        </div>
      </div>

      {/* Purple Hero Section */}
      <div className="bg-gradient-to-b from-[#432459] to-[#646464] px-4 py-2">
        {/* Course Value Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="elementor-widget-container bg-white rounded-b-3xl px-8 py-6 shadow-2xl">
            <h1 className="elementor-heading-title elementor-size-default text-black text-2xl md:text-3xl font-black text-center leading-tight tracking-tight">
              ADVANCED MARKETING Course worth <br />
              RS. 2.5l SENT TO YOUR EMAIL for free
            </h1>
          </div>
        </div>

        {/* Main Headline */}
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            LEARN HOW I filter highest quality leads with SCALE funnels and turn dead camapigns into 40, 50 or even 80L+ revenue PER month
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p 
            className="text-white text-xl md:text-2xl lg:text-3xl font-bold opacity-95 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            HOW TO GENERATE 20, 30 OR EVEN 40 HIGH TICKET SALES CALLS PER DAY ON AUTOMATION
          </motion.p>
        </motion.div>

        {/* Banner Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <img 
            src="https://quantumage.ai/wp-content/uploads/2025/05/Website-Banners-10.png" 
            alt="Marketing Funnel Process" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Lead Form */}
        <div className="max-w-2xl mx-auto">
          <div className="elementor-element elementor-element-d5a7492 elementor-widget elementor-widget-heading animated fadeInDown" 
               data-id="d5a7492" 
               data-element_type="widget" 
               data-settings='{"_animation":"fadeInDown"}' 
               data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-center">
                LEARN HOW I filter highest quality leads with "SCALE funnels" and turn dead camapigns into 40, 50 or even 80L+ revenue PER month
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="bg-black text-white px-4 py-12"
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Copyright */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              © QUANTUM AGE 2025
            </h3>
          </motion.div>

          {/* Disclaimer */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
              This website is not a part of the Facebook website or Facebook Inc., nor is it part of Google or affiliated with Google Inc. Additionally, this site is not endorsed by Facebook or Google in any way. Facebook is a trademark of Facebook, Inc., and Google is a trademark of Google Inc.
            </p>
            
            <p className="text-xs md:text-sm leading-relaxed text-gray-400">
              Results Disclaimer: Results may vary. All testimonials are real. These results are meant as a showcase of what the best, most motivated clients have done. By virtue of visiting this site or interacting with any portion of this site, you agree that you are fully responsible for the investments you make and any outcomes that may result.
            </p>
          </motion.div>

          {/* Footer Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </motion.svg>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
      </motion.button>
    </div>
  );
}