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

              {/* Financial Pain Points Stats */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-200">
                    <div className="text-3xl font-bold text-brand-600 mb-1">73%</div>
                    <div className="text-sm text-gray-600">of young adults feel stressed about money</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-200">
                    <div className="text-3xl font-bold text-brand-600 mb-1">$150+</div>
                    <div className="text-sm text-gray-600">lost per month due to poor expense tracking</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-200">
                    <div className="text-3xl font-bold text-brand-600 mb-1">4+ apps</div>
                    <div className="text-sm text-gray-600">juggled to manage finances & split bills</div>
                  </div>
                </div>
              </div>

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

            {/* Who is Chippr For? */}
            <div className="mb-16 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Made for your financial reality
                </h2>
                <p className="text-gray-600">
                  Designed specifically for the unique challenges of young adults
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Persona 1: College Student */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    🎓
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">College Students</h3>
                  <p className="text-sm text-gray-700 text-center mb-4">
                    &ldquo;I share an apartment with 3 roommates and we&rsquo;re constantly splitting rent, utilities, and groceries.&rdquo;
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Track shared expenses with roommates</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Learn budgeting on a tight student budget</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>No awkward &ldquo;you owe me&rdquo; texts</span>
                    </div>
                  </div>
                </div>

                {/* Persona 2: Young Professional */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    💼
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Young Professionals</h3>
                  <p className="text-sm text-gray-700 text-center mb-4">
                    &ldquo;I just started my first job and need to manage my paycheck, savings goals, and weekend expenses with friends.&rdquo;
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Connect all bank accounts in one place</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Build savings habits with AI guidance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Split dinner bills & group trips easily</span>
                    </div>
                  </div>
                </div>

                {/* Persona 3: Friend Groups */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-200">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    👥
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Friend Groups</h3>
                  <p className="text-sm text-gray-700 text-center mb-4">
                    &ldquo;Our friend group loves going out, but tracking who paid for what and settling up is always messy.&rdquo;
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Automatic expense splitting for groups</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Save together for group trips & events</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Instant settlements through the app</span>
                    </div>
                  </div>
                </div>
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
                  <p className="text-sm text-gray-600 mb-2">
                    Automatically split bills with friends and track who owes what
                  </p>
                  <div className="text-xs bg-blue-50 rounded-lg p-2 text-gray-700">
                    <span className="font-semibold">Example:</span> Rent ($1,200) split 3 ways = $400 each
                  </div>
                </div>

                {/* Feature 2: All Accounts in One Place */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">All Accounts in One Place</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Connect your checking, savings, and credit cards
                  </p>
                  <div className="text-xs bg-purple-50 rounded-lg p-2 text-gray-700">
                    <span className="font-semibold">Total balance:</span> $3,247 across 4 accounts
                  </div>
                </div>

                {/* Feature 3: AI Insights */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">AI Financial Insights</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Get smart spending advice and personalized tips
                  </p>
                  <div className="text-xs bg-green-50 rounded-lg p-2 text-gray-700">
                    <span className="font-semibold">Insight:</span> &ldquo;You could save $120/mo on dining out&rdquo;
                  </div>
                </div>

                {/* Feature 4: Gamification */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Earn Rewards</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Build streaks, unlock badges, and reach goals
                  </p>
                  <div className="text-xs bg-yellow-50 rounded-lg p-2 text-gray-700">
                    <span className="font-semibold">Achievement:</span> 🔥 7-day tracking streak!
                  </div>
                </div>

                {/* Feature 5: Smart Reminders */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Smart Reminders</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Automatic payment reminders and settlements
                  </p>
                  <div className="text-xs bg-pink-50 rounded-lg p-2 text-gray-700">
                    <span className="font-semibold">Reminder:</span> &ldquo;Emma owes you $45 for pizza&rdquo;
                  </div>
                </div>

                {/* Feature 6: Social Features */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">Save Together</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Set shared goals and track progress with friends
                  </p>
                  <div className="text-xs bg-orange-50 rounded-lg p-2 text-gray-700">
                    <span className="font-semibold">Goal:</span> Spring Break Trip - $800/$2,000
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Life Scenarios */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Real financial challenges, real solutions
                </h2>
                <p className="text-gray-600">
                  See how Chippr handles your everyday money situations
                </p>
              </div>

              <div className="space-y-4">
                {/* Scenario 1 */}
                <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-5 border border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      😰
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">The Problem: &ldquo;I have no idea where my money goes&rdquo;</h4>
                      <p className="text-sm text-gray-600 mb-2">You check your account and wonder where $200 went this week. Coffee? Ubers? That group dinner?</p>
                      <div className="bg-white rounded-lg p-3 border border-red-300">
                        <p className="text-xs font-semibold text-green-700 mb-1">✓ Chippr Solution:</p>
                        <p className="text-xs text-gray-700">Automatic categorization shows you spent $87 on dining, $45 on transport, $68 on entertainment. AI suggests: &ldquo;Try meal prepping to save $40/week.&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-5 border border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      😬
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">The Problem: &ldquo;Awkward &lsquo;You owe me&rsquo; texts with roommates&rdquo;</h4>
                      <p className="text-sm text-gray-600 mb-2">Three roommates, shared rent ($1,500), utilities ($180), internet ($60), groceries... who paid what?</p>
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <p className="text-xs font-semibold text-green-700 mb-1">✓ Chippr Solution:</p>
                        <p className="text-xs text-gray-700">Add expenses once, split automatically. Each roommate owes $580. App sends polite reminders and tracks settlements. No awkward conversations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scenario 3 */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-5 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      🤔
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">The Problem: &ldquo;I want to save but don&rsquo;t know how to start&rdquo;</h4>
                      <p className="text-sm text-gray-600 mb-2">After rent, food, and fun, you&rsquo;re left with $200. Should you save? How much? For what?</p>
                      <div className="bg-white rounded-lg p-3 border border-blue-300">
                        <p className="text-xs font-semibold text-green-700 mb-1">✓ Chippr Solution:</p>
                        <p className="text-xs text-gray-700">Set a goal: &ldquo;Emergency Fund - $1,000.&rdquo; Chippr suggests saving $50/week. Track progress, earn badges, celebrate wins with friends. You hit your goal in 5 months!</p>
                      </div>
                    </div>
                  </div>
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

