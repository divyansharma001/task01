'use client';

import { useState, useEffect } from 'react';

export default function ScaleTraining() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#3b0764] text-white">
      {/* Header */}
      <header className='flex justify-center items-center flex-col gap-8'>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          {/* <div className="flex flex-col items-center space-y-8"> */}
            {/* Logo */}
            <div className="bg-white py-2 flex justify-center w-full">
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

            {/* Countdown Timer Banner */}
            <div className="max-w-3xl w-full">
              <div className="bg-black rounded-full px-6 py-3 shadow-2xl flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <div className="absolute w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-3 h-3 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm md:text-base font-bold tracking-wider uppercase">
                    YOUR COURSE WILL ARRIVE IN {formatTime(timeLeft)} MINUTES. WHILE YOU WAIT, WATCH THIS
                  </span>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16">
        {/* Main Headline */}
        <div className="max-w-5xl mx-auto text-center my-8">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-wide uppercase">
            LEARN HOW I FILTER HIGHEST QUALITY LEADS WITH "SCALE FUNNELS" AND TURN DEAD CAMPAIGNS INTO 40, 50 OR EVEN 80L+ REVENUE PER MONTH
          </h1>
        </div>

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
      </main>
    </div>
  );
}
