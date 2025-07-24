'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScaleTraining() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    // Load Google Fonts
    const bigShouldersLink = document.createElement('link');
    bigShouldersLink.href = 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&display=swap';
    bigShouldersLink.rel = 'stylesheet';
    document.head.appendChild(bigShouldersLink);

    // Load Montserrat font for the banner
    const montserratLink = document.createElement('link');
    montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap';
    montserratLink.rel = 'stylesheet';
    document.head.appendChild(montserratLink);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      // Cleanup fonts on component unmount
      const existingBigShouldersLink = document.querySelector('link[href*="Big+Shoulders+Display"]');
      if (existingBigShouldersLink) {
        document.head.removeChild(existingBigShouldersLink);
      }
      const existingMontserratLink = document.querySelector('link[href*="Montserrat"]');
      if (existingMontserratLink) {
        document.head.removeChild(existingMontserratLink);
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#432459] to-[#646464] text-white">
      {/* Header */}
      <header className='flex justify-center items-center flex-col gap-8'>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          {/* <div className="flex flex-col items-center space-y-8"> */}
            {/* Logo */}
            <div className="bg-white py-2 flex justify-center w-full">
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
      </div>

            {/* Countdown Timer Banner */}
            <div className="max-w-3xl w-full px-4">
              <div className="alert-bar flex items-center bg-[#1a1a1a] text-white px-5 py-3 rounded-[25px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] font-bold text-xs leading-6 max-w-full text-left flex-row gap-6 my-5 mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <div className="red-dot w-[15px] h-[15px] bg-red-500 rounded-full shadow-[0_0_12px_4px_rgba(255,0,0,0.8)] border-2 border-red-500 flex-shrink-0 animate-pulse"></div>
                <span className="text-white">
                  YOUR COURSE WILL ARRIVE IN {formatTime(timeLeft)} MINUTES WHILE YOU WAIT AND WATCH THIS
                </span>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16">
        {/* Main Headline */}
        <motion.div 
          className="max-w-7xl mx-auto text-center my-10
           sm:mt-24 sm:mb-16"
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

        {/* Video Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="elementor-element elementor-element-0e7b2d9 elementor-widget elementor-widget-html" data-id="0e7b2d9" data-element_type="widget" data-widget_type="html.default">
            <div className="elementor-widget-container">
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/7hypd1oiui.js" async type="module"></script>
              <style dangerouslySetInnerHTML={{
                __html: `wistia-player[media-id='7hypd1oiui']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7hypd1oiui/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`
              }} />
              <wistia-player media-id="7hypd1oiui" aspect="1.7777777777777777" unique-id="wistia-7hypd1oiui-16"></wistia-player>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="relative bg-gradient-to-r from-[#572B6F] to-[#321B49] rounded-2xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-center text-white shadow-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(115,63,150,0.4)] group cursor-pointer flex flex-col items-center justify-center">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full"></div>
            <h2 className="relative z-10 w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide mb-2 sm:mb-4 leading-tight" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
              CLAIM YOUR FREE 45 MINUTES<br className="block sm:hidden" />STRATEGY SESSION
            </h2>
            <p className="relative z-10 w-full text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Be quick! Free slots are almost gone for this month!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="elementor-element elementor-element-df14017 elementor-widget elementor-widget-image" data-id="df14017" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container flex justify-center">
              <img 
                decoding="async" 
                src="https://quantumage.ai/wp-content/uploads/elementor/thumbs/Your-paragraph-text-3-r52vz0zyy5xc5ypsl7ev6nrc00fpf61fsszkfbxl2y.png" 
                title="Your paragraph text (3)" 
                alt="Your paragraph text (3)" 
                loading="lazy"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider">© QUANTUM AGE 2025</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
