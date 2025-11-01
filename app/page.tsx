"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission - replace with your actual API endpoint
    try {
      // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Track analytics event (if you have analytics set up)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'waitlist_signup'
        });
      }
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {/* Two-Column: Video + Signup Form */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
              
              {/* Left: Before/After Video */}
              <div id="video">
                <div className="mb-4 text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    See the difference
              </h2>
                  <p className="text-gray-600">
                    Watch Alex and Emily go from stressed to in control
              </p>
            </div>

                {/* Video Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video mb-6">
                  {/* Replace this with your actual video embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-600 to-purple-600">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold mb-2">Before/After: 2 minutes</p>
                      <p className="text-sm text-white/80">
                        From chaos to clarity with Chippr
                      </p>
                </div>
              </div>

                  {/* Uncomment and use this for actual video embed:
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Chippr Before/After Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  */}
                </div>

                {/* Before → After Summary */}
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">😰</span>
              </div>
                    <p className="font-semibold text-gray-900">Before</p>
                    <p className="text-xs text-gray-600">Stressed & disconnected</p>
            </div>
                  <div>
                    <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">📱</span>
          </div>
                    <p className="font-semibold text-gray-900">With Chippr</p>
                    <p className="text-xs text-gray-600">Unified & automated</p>
            </div>
                  <div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🎉</span>
                </div>
                    <p className="font-semibold text-gray-900">After</p>
                    <p className="text-xs text-gray-600">Confident & on track</p>
              </div>
                </div>
              </div>

              {/* Right: Signup Form */}
              <div id="signup" className="lg:sticky lg:top-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-brand-500">
                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        You&rsquo;re on the list!
                </h3>
                      <p className="text-gray-600 mb-6">
                        We&rsquo;ll notify you when Chippr launches. Check your email for confirmation.
                      </p>
                      <button
                        onClick={() => setSubmitStatus("idle")}
                        className="text-brand-600 font-medium hover:text-brand-700 transition-colors"
                      >
                        Sign up another email →
                      </button>
              </div>
                  ) : (
                    <>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Join the waitlist
                </h3>
                <p className="text-gray-600">
                          Get early access and exclusive launch perks
                </p>
              </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-base"
                            placeholder="Alex Johnson"
                          />
              </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-base"
                            placeholder="alex@university.edu"
                    />
                  </div>

                        {submitStatus === "error" && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                            Something went wrong. Please try again.
              </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-4 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
                        >
                          {isSubmitting ? "Joining..." : "Get Early Access"}
                        </button>

                        <p className="text-xs text-gray-600 text-center">
                          No credit card required · Unsubscribe anytime
                        </p>
                      </form>

                      {/* Trust Indicators */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
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
                    </>
                  )}
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

