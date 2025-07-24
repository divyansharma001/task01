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

    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const existingLink = document.querySelector('link[href*="Big+Shoulders+Display"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
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
      <div className="elementor-element elementor-element-79d88927 e-con-full e-flex e-con e-parent e-lazyloaded bg-white py-2 sm:py-4 flex justify-center" 
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
              className="attachment-large size-large wp-image-16077 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" 
              alt="Quantum Age Logo" 
              srcSet="https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE.png 500w, https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE-300x300.png 300w, https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE-150x150.png 150w, https://quantumage.ai/wp-content/uploads/2025/02/Quantum-Age-Logo-FEFEFE-100x100.png 100w" 
              sizes="(max-width: 500px) 100vw, 500px"
            />
          </div>
        </div>
      </div>

      {/* Purple Hero Section */}
      <div className="bg-gradient-to-b from-[#432459] to-[#646464] px-2 sm:px-4 py-2">
        {/* Course Value Banner */}
        <div className="max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <div className="bg-white rounded-b-2xl sm:rounded-b-3xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-2xl">
            <h2  style={{ fontFamily: 'Big Shoulders Display, sans-serif' }} className="text-black text-xl sm:text-xl md:text-2xl lg:text-3xl font-black text-center leading-tight tracking-tight">
              ADVANCED MARKETING COURSE WORTH RS. 2.5L SENT TO YOUR EMAIL FOR FREE
            </h2>
          </div>
        </div>

        {/* Main Headline */}
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-white text-3xl sm:text-2xl capitalize md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tighter mb-4 sm:mb-6 md:mb-8 tracking-tight px-2"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            LEARN HOW I filter highest quality leads with SCALE funnels and turn dead camapigns into 40, 50 or even 80L+ revenue PER month
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p 
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold opacity-95 tracking-wide px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            HOW TO GENERATE 20, 30 OR EVEN 40 HIGH TICKET SALES CALLS PER DAY ON AUTOMATION
          </motion.p>
        </motion.div>

        {/* Banner Image */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2">
          <img 
            src="https://quantumage.ai/wp-content/uploads/2025/05/Website-Banners-10.png" 
            alt="Marketing Funnel Process" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Lead Form Section */}
        <div className="e-con-inner max-w-6xl mx-auto px-2 mb-8 sm:mb-12 md:mb-16">
          <div className="elementor-element elementor-element-2e9a7d49 e-con-full e-flex e-con e-child" 
               data-id="2e9a7d49" 
               data-element_type="container">
          </div>
          
          <div className="elementor-element elementor-element-7351b7ce e-con-full e-flex e-con e-child" 
               data-id="7351b7ce" 
               data-element_type="container" 
               data-settings='{"background_background":"gradient"}'>
            <div className="elementor-element elementor-element-510e265 elementor-widget elementor-widget-html" 
                 data-id="510e265" 
                 data-element_type="widget" 
                 data-widget_type="html.default">
              <div className="elementor-widget-container">
                <div 
                  id="inline-mXfM0uso9t1teaAv94jV-div" 
                  className="ep-iFrameContainer" 
                  style={{ borderRadius: '3px', display: 'block' }}
                >
                  <div 
                    id="inline-mXfM0uso9t1teaAv94jV-wrapper" 
                    className="ep-wrapper" 
                    style={{ borderRadius: '3px' }}
                  >
                    <iframe 
                      src="https://api.leadconnectorhq.com/widget/form/mXfM0uso9t1teaAv94jV" 
                      style={{ 
                        width: '100%', 
                        height: '636px', 
                        border: 'none', 
                        borderRadius: '3px', 
                        overflow: 'auto', 
                        display: 'block' 
                      }}
                      id="inline-mXfM0uso9t1teaAv94jV"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Main Optin Form (India)"
                      data-height="undefined"
                      data-layout-iframe-id="inline-mXfM0uso9t1teaAv94jV"
                      data-form-id="mXfM0uso9t1teaAv94jV"
                      title="Main Optin Form (India)"
                      scrolling="yes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-38bf8eb0 e-con-full e-flex e-con e-child" 
               data-id="38bf8eb0" 
               data-element_type="container">
          </div>
        </div>

        
      </div>

      {/* Footer */}
      <motion.div 
        className="elementor-element bg-black elementor-element-5cf9b718 e-flex e-con-boxed e-con e-parent e-lazyloaded bg-black text-white py-6 sm:py-8 md:py-10" 
        data-id="5cf9b718" 
        data-element_type="container" 
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner max-w-6xl mx-auto px-2 sm:px-4">
          <div className="elementor-element elementor-element-3a3d2be2 e-con-full e-flex e-con e-child" 
               data-id="3a3d2be2" 
               data-element_type="container">
            <div className="elementor-element elementor-element-5fc8d36e elementor-widget elementor-widget-heading animated fadeInUp" 
                 data-id="5fc8d36e" 
                 data-element_type="widget" 
                 data-settings='{"_animation":"fadeInUp"}' 
                 data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <motion.h3 
                  className="elementor-heading-title elementor-size-default text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  © QUANTUM AGE 2025
                </motion.h3>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-5c5dc10a e-con-full e-flex e-con e-child" 
               data-id="5c5dc10a" 
               data-element_type="container">
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="elementor-element elementor-element-232af406 e-flex e-con-boxed e-con e-parent e-lazyloaded bg-black text-white py-6 sm:py-8 md:py-10" 
        data-id="232af406" 
        data-element_type="container" 
        data-settings='{"background_background":"classic"}'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="e-con-inner max-w-6xl mx-auto px-2 sm:px-4">
          <motion.div 
            className="elementor-element elementor-element-8649a7b elementor-widget elementor-widget-text-editor animated fadeInUp mb-4 sm:mb-6" 
            data-id="8649a7b" 
            data-element_type="widget" 
            data-settings='{"_animation":"fadeInUp"}' 
            data-widget_type="text-editor.default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="elementor-widget-container">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                This website is not a part of the Facebook website or Facebook Inc., nor is it part of Google or affiliated with Google Inc. Additionally, this site is not endorsed by Facebook or Google in any way. Facebook is a trademark of Facebook, Inc., and Google is a trademark of Google Inc.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="elementor-element elementor-element-6cb94d3 elementor-widget elementor-widget-text-editor mb-6 sm:mb-8" 
            data-id="6cb94d3" 
            data-element_type="widget" 
            data-widget_type="text-editor.default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="elementor-widget-container">
              <p className="text-xs leading-relaxed text-gray-400">
                Results Disclaimer: Results may vary. All testimonials are real. These results are meant as a showcase of what the best, most motivated clients have done. By virtue of visiting this site or interacting with any portion of this site, you agree that you're fully responsible for the investments you make and any outcomes that may result.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="elementor-element elementor-element-2802c20 elementor-widget-mobile__width-inherit elementor-icon-list--layout-inline elementor-align-center elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInUp" 
            data-id="2802c20" 
            data-element_type="widget" 
            data-settings='{"_animation":"fadeInUp"}' 
            data-widget_type="icon-list.default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="elementor-widget-container">
              <ul className="elementor-icon-list-items elementor-inline-items flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base">
                <li className="elementor-icon-list-item elementor-inline-item">
                  <a href="https://quantumage.ai/privacy-poicy-3/?utm_source=Phase%25201%2520%257C%2520CT%2520%257C%2520ABO%2520%257C%2520VSL%2520Funnel&utm_campaign=Advantage%252B%2520%257C%2520Scale%2520High%2520Ticket%2520Business&utm_content=Grey%2520Suit&fbclid=IwZXh0bgNhZW0BMABhZGlkAasmIVmiObwBHorgl5IqBZA5TuWu8ZFPA574X4UR9PCMsQDWaAjSXuqoDDVX0FD64IjfnxlJ_aem_NIqVtcCgtPg9uqAtvf64iA&utm_medium=paid&utm_id=120231548174120204&utm_term=120231548174110204%2520Divyansh%2520you%2527ll%2520get%2520three%2520pages%2520in%2520this%2C%2520You%2520need%2520to%2520clone%2520it%2520by%2520using%2520next%2520Js%2520Language." 
                     className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="elementor-icon-list-text">Privacy Policy</span>
                  </a>
                </li>
                <span className="text-gray-500">|</span>
                <li className="elementor-icon-list-item elementor-inline-item">
                  <a href="https://quantumage.ai/terms-conditions/?utm_source=Phase%25201%2520%257C%2520CT%2520%257C%2520ABO%2520%257C%2520VSL%2520Funnel&utm_campaign=Advantage%252B%2520%257C%2520Scale%2520High%2520Ticket%2520Business&utm_content=Grey%2520Suit&fbclid=IwZXh0bgNhZW0BMABhZGlkAasmIVmiObwBHorgl5IqBZA5TuWu8ZFPA574X4UR9PCMsQDWaAjSXuqoDDVX0FD64IjfnxlJ_aem_NIqVtcCgtPg9uqAtvf64iA&utm_medium=paid&utm_id=120231548174120204&utm_term=120231548174110204%2520Divyansh%2520you%2527ll%2520get%2520three%2520pages%2520in%2520this%2C%2520You%2520need%2520to%2520clone%2520it%2520by%2520using%2520next%2520Js%2520Language." 
                     className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="elementor-icon-list-text">Terms & Conditions</span>
                  </a>
                </li>
                <span className="text-gray-500">|</span>
                <li className="elementor-icon-list-item elementor-inline-item">
                  <a href="https://quantumage.ai/contact-us/?utm_source=Phase%25201%2520%257C%2520CT%2520%257C%2520ABO%2520%257C%2520VSL%2520Funnel&utm_campaign=Advantage%252B%2520%257C%2520Scale%2520High%2520Ticket%2520Business&utm_content=Grey%2520Suit&fbclid=IwZXh0bgNhZW0BMABhZGlkAasmIVmiObwBHorgl5IqBZA5TuWu8ZFPA574X4UR9PCMsQDWaAjSXuqoDDVX0FD64IjfnxlJ_aem_NIqVtcCgtPg9uqAtvf64iA&utm_medium=paid&utm_id=120231548174120204&utm_term=120231548174110204%2520Divyansh%2520you%2527ll%2520get%2520three%2520pages%2520in%2520this%2C%2520You%2520need%2520to%2520clone%2520it%2520by%2520using%2520next%2520Js%2520Language." 
                     className="text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="elementor-icon-list-text">Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        className="elementor-section elementor-top-section elementor-element elementor-element-3b1ac6fb elementor-section-boxed elementor-section-height-default bg-black py-4" 
        data-id="3b1ac6fb" 
        data-element_type="section" 
        data-settings='{"background_background":"classic"}'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="elementor-container elementor-column-gap-default max-w-6xl mx-auto">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4b7fd3a6" 
               data-id="4b7fd3a6" 
               data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
            </div>
          </div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <motion.svg 
          className="w-5 h-5 sm:w-6 sm:h-6" 
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