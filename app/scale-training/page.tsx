export default function ScaleTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Message */}
        <div className="bg-white rounded-2xl px-8 py-12 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="successPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6D28D9" />
                  </linearGradient>
                </defs>
                {/* Lion head geometric shape */}
                <polygon points="50,10 70,25 85,45 80,65 65,75 50,80 35,75 20,65 15,45 30,25" fill="url(#successPurpleGradient)" />
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
          </div>

          {/* Success Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-purple-800 mb-6 tracking-tight">
            CONGRATULATIONS!
          </h1>
          
          {/* Success Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              You're Successfully Registered!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Your access to the <strong>Advanced Marketing Course worth Rs. 2.5L</strong> has been sent to your email.
            </p>
            <p className="text-base text-gray-500">
              Check your inbox (and spam folder) for the course materials and next steps.
            </p>
          </div>

          {/* What's Next */}
          <div className="bg-purple-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-800 mb-4">What's Next?</h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <p className="text-gray-700">Check your email for the course access link</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <p className="text-gray-700">Join our exclusive Scale Funnels masterclass</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <p className="text-gray-700">Start implementing the strategies to scale your business</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              ACCESS YOUR COURSE NOW
            </button>
            <button className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
              Join Our Community
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-white text-center">
          <p className="text-lg opacity-90">
            Questions? Contact us at{' '}
            <a href="mailto:support@quantumage.ai" className="text-yellow-300 hover:underline">
              support@quantumage.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
