import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Chippr"
              width={32}
              height={32}
              priority
            />
            <span className="text-xl font-bold text-brand-600">Chippr</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Integrated Signup */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-purple-50 py-12 sm:py-16 min-h-[calc(100vh-73px)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Target Audience Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
                <span>🎓</span>
                <span>For Students & Young Professionals</span>
                <span>💼</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Budget smarter, split easier,<br />and save together.
                </h1>
              
              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The AI-powered budgeting app that combines expense tracking, bill splitting, and financial learning into one social experience.
              </p>

              {/* Quick Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["Split expenses automatically", "AI-powered insights", "Gamified savings", "No awkward money talks"].map(
                  (benefit) => (
                      <span
                      key={benefit}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                      {benefit}
                      </span>
                    )
                  )}
              </div>
            </div>

            {/* What We Offer - Feature Highlights */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Everything you need in one app
                </h2>
                <p className="text-gray-600">
                  Manage personal and shared finances effortlessly
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Feature 1: Split Expenses */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">💸</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Split Expenses</h3>
                  <p className="text-sm text-gray-600">
                    Automatically split bills with friends and track who owes what
                  </p>
                </div>

                {/* Feature 2: All Accounts in One Place */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">All Accounts</h3>
                  <p className="text-sm text-gray-600">
                    View all your bank accounts and balances in one dashboard
                  </p>
                </div>

                {/* Feature 3: AI Insights */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">AI Insights</h3>
                  <p className="text-sm text-gray-600">
                    Get smart spending advice and learn healthy financial habits
                  </p>
                </div>

                {/* Feature 4: Gamification */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Earn Rewards</h3>
                  <p className="text-sm text-gray-600">
                    Build streaks, unlock badges, and stay motivated to save
                  </p>
                </div>

                {/* Feature 5: Smart Reminders */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Smart Reminders</h3>
                  <p className="text-sm text-gray-600">
                    No awkward texts—automatic reminders and easy settlements
                  </p>
                </div>

                {/* Feature 6: Social Features */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Save Together</h3>
                  <p className="text-sm text-gray-600">
                    Track shared goals and stay motivated with friends
                  </p>
                </div>
              </div>
            </div>

            {/* Why Chippr is Different */}
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <h2 className="text-2xl font-bold mb-3">
                  Why Chippr is different
                </h2>
                <p className="text-lg opacity-95 mb-4">
                  Unlike traditional budgeting or splitting apps, we combine <span className="font-semibold">expense tracking</span>, <span className="font-semibold">bill splitting</span>, and <span className="font-semibold">financial learning</span> into one social, gamified experience designed for your lifestyle.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">No more juggling apps</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">Built for Gen Z</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">Actually fun to use</span>
                </div>
              </div>
            </div>

            {/* Two-Column: Video + Signup Form */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
              
              {/* Left: Before/After Video */}
              <div id="video">
                <div className="mb-4 text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    See the difference
              </h2>
                  <p className="text-gray-600">
                    Watch how Chippr transforms financial stress into confidence
              </p>
            </div>

                {/* Video Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video mb-6">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/M-sQczN0NWA"
                    title="Chippr Before/After Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Before → After Summary */}
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">😰</span>
              </div>
                    <p className="font-semibold text-gray-900">Before</p>
                    <p className="text-xs text-gray-600">Multiple apps, missing payments</p>
            </div>
                  <div>
                    <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">📱</span>
          </div>
                    <p className="font-semibold text-gray-900">With Chippr</p>
                    <p className="text-xs text-gray-600">Everything in one place</p>
            </div>
                  <div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🎉</span>
                </div>
                    <p className="font-semibold text-gray-900">After</p>
                    <p className="text-xs text-gray-600">In control & saving</p>
              </div>
                </div>
              </div>

              {/* Right: Signup Form */}
              <div id="signup" className="lg:sticky lg:top-8">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-brand-500">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Join the waitlist
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Be the first to know when we launch
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg">
                      <span>🎁</span>
                      <span className="font-medium">Early access + exclusive perks</span>
                    </div>
                  </div>

                  {/* Airtable Embed */}
                  <iframe 
                    className="airtable-embed w-full rounded-xl" 
                    src="https://airtable.com/embed/app34lFLAzuWWX1C8/pagruSnCnHa2vnKyb/form" 
                    width="100%" 
                    height="533"
                    style={{ background: 'transparent', border: 'none' }}
                  />

                  {/* Trust Indicators */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                        <span>Bank-level security</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>500+ students joined</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Minimal Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image src="/logo.svg" alt="Chippr" width={24} height={24} />
            <span className="text-lg font-bold text-gray-900">Chippr</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            AI-powered budgeting for students & young professionals
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} Chippr. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

