import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, heroStats } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-amber-50/40 to-amber-100/50"
    >
      <div className="w-full px-6 md:w-[85%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Hero Introduction & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs md:text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalInfo.badgeText}</span>
          </div>

          {/* Main Headings */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 tracking-wide mb-2">
              Hoang The Analyst
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              {personalInfo.role}
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
            {personalInfo.description}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm md:text-base flex items-center gap-2"
            >
              <span>Explore 10 Projects</span>
              <i className="fas fa-arrow-right text-xs" />
            </Link>
            <Link
              href="#contact"
              className="px-7 py-3.5 border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all text-sm md:text-base"
            >
              Contact Me
            </Link>
          </div>

          {/* Key Metrics / Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-amber-200/60">
            {heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-amber-200/50 shadow-sm text-center"
              >
                <div className="text-xl md:text-2xl font-extrabold text-amber-600">
                  {stat.value}
                </div>
                <div className="text-[11px] md:text-xs text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Avatar & Glow Ring */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Ambient Backlight Blur */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 blur-xl opacity-60 animate-pulse" />
            
            {/* Avatar Frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-400/80 shadow-2xl p-1 bg-white">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/Images/Main Face.jpg"
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}