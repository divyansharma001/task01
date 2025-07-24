export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo Section */}
      <div className="bg-white pt-8 pb-4 flex justify-center">
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
      <div className="bg-gradient-to-b from-purple-800 to-purple-900 px-4 py-12">
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
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 tracking-tight">
            LEARN HOW I FILTER HIGHEST QUALITY LEADS WITH{' '}
            <span className="text-yellow-300">"SCALE FUNNELS"</span>{' '}
            AND TURN DEAD CAMPAIGNS INTO{' '}
            <span className="text-yellow-300">40, 50 OR EVEN 80L+</span>{' '}
            REVENUE PER MONTH
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold opacity-95 tracking-wide">
            HOW TO GENERATE 20, 30 OR EVEN 40 HIGH TICKET SALES CALLS PER DAY ON AUTOMATION
          </p>
        </div>
      </div>
    </div>
  );
}