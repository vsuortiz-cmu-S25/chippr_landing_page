import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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
          <a
            href="https://example.com/waitlist"
            className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                  Budget smarter, split easier, and save together.
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 text-balance">
                  Unified personal + shared finances with AI insights and gentle
                  nudges to keep you on track.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://example.com/waitlist"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors"
                  >
                    Join the waitlist
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-6 py-3 text-brand-600 font-semibold hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-xl transition-colors"
                  >
                    See how it works →
                  </a>
                </div>

                {/* Trust Chips */}
                <div className="mt-10 flex flex-wrap gap-3">
                  {["AI insights", "Bill splitting", "Streaks & badges", "Smart reminders"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {chip}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/hero-illustration.svg"
                  alt="Chippr app interface"
                  width={600}
                  height={500}
                  priority
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Solution Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                From chaos to clarity
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Stop juggling multiple apps and messy spreadsheets
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Before */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">😵‍💫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Before</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Multiple apps for tracking different expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Awkward conversations about splitting bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>No visibility into shared balances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Forgetting to settle up with friends</span>
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="p-8 bg-brand-50 rounded-2xl border border-brand-200">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  After (with Chippr)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">✓</span>
                    <span>Auto-categorization of all your expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">✓</span>
                    <span>Shared balances updated in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">✓</span>
                    <span>Weekly AI recaps with personalized tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">✓</span>
                    <span>Friendly nudges to settle up stress-free</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Everything you need in one place
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Personal and shared finances, beautifully unified
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Split shared expenses
                </h3>
                <p className="text-gray-600">
                  Track who owes what without the awkwardness. Split bills,
                  rent, groceries, and trips effortlessly.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Unified dashboard
                </h3>
                <p className="text-gray-600">
                  All your accounts and group tabs in one place. See the full
                  picture of your finances instantly.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI insights
                </h3>
                <p className="text-gray-600">
                  Get weekly recaps and personalized spending tips tailored to
                  your habits and goals.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Streaks & badges
                </h3>
                <p className="text-gray-600">
                  Stay motivated with goals, progress tracking, and rewards for
                  building healthy money habits.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔔</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Smart reminders
                </h3>
                <p className="text-gray-600">
                  Polite nudges to settle up with friends and stay on top of
                  bills—no more awkward conversations.
                </p>
              </div>

              {/* Feature 6 - Value Prop */}
              <div className="p-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl shadow-sm text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Built for you
                </h3>
                <p className="text-brand-50">
                  Designed specifically for students and young professionals
                  starting their financial journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Built for students & young professionals
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join early adopters shaping the future of money management
              </p>
            </div>

            {/* Avatars Row */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <Image
                      src={`/avatars/${i}.svg`}
                      alt={`User ${i}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                +500 on the waitlist
              </span>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="text-brand-500 mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;Finally, an app that gets how messy shared expenses can be.
                  No more spreadsheets or awkward Venmo requests!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-200" />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah K.</p>
                    <p className="text-sm text-gray-600">College Senior</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="text-brand-500 mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;The AI insights actually help me understand my spending
                  patterns. It&rsquo;s like having a financial advisor in my pocket.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-200" />
                  <div>
                    <p className="font-semibold text-gray-900">Marcus T.</p>
                    <p className="text-sm text-gray-600">Recent Grad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <details className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">
                    How does Chippr keep my data secure?
                  </span>
                  <span className="text-brand-500 transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We use bank-level 256-bit encryption and never store your
                  banking credentials. All connections use secure, read-only
                  access through industry-leading providers. Your data is
                  encrypted at rest and in transit.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">
                    How do bank connections work?
                  </span>
                  <span className="text-brand-500 transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Chippr connects to your bank accounts through secure,
                  read-only access. We support thousands of banks and credit
                  unions across the US. You can also manually add accounts if
                  you prefer.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">
                    How does splitting and settling expenses work?
                  </span>
                  <span className="text-brand-500 transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Create groups with friends or roommates, add shared expenses,
                  and Chippr automatically tracks balances. Send friendly
                  reminders when it&rsquo;s time to settle up, and mark payments
                  complete once received.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">
                    What kind of AI insights does Chippr provide?
                  </span>
                  <span className="text-brand-500 transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Get weekly spending summaries, personalized savings tips, and
                  trend analysis tailored to your habits. Our AI highlights
                  unusual spending, suggests budget adjustments, and helps you
                  reach your financial goals faster.
                </p>
              </details>

              {/* FAQ 5 */}
              <details className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">
                    When will Chippr be available?
                  </span>
                  <span className="text-brand-500 transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We&rsquo;re currently in private beta with select users. Join our
                  waitlist to get early access and help shape the product.
                  We&rsquo;ll be rolling out invites in waves over the coming months.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-600 to-brand-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to take control of your money?
            </h2>
            <p className="text-lg text-brand-100 mb-8">
              Join the waitlist and be among the first to experience Chippr
            </p>
            <a
              href="https://example.com/waitlist"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 rounded-xl font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 transition-colors text-lg"
            >
              Join the waitlist
            </a>
            <p className="mt-6 text-sm text-brand-200">
              No credit card required · Early access perks
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Chippr" width={32} height={32} />
              <span className="text-xl font-bold text-white">Chippr</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@chippr.app"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
              >
                hello@chippr.app
              </a>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {currentYear} Chippr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

