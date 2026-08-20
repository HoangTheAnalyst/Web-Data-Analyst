import {
  educationList,
  experienceBulletPoints,
  certifications,
  skillsList,
} from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      {/* Container with max width constraint */}
      <div className="w-full px-4 sm:px-6 md:w-[80%] max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center gradient-title">
          About Me
        </h2>

        {/* Vertical sections flow: Skills -> Experience -> Certifications -> Education */}
        <div className="space-y-9">
          
          {/* 1. Skills & Tech Stack */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <i className="fas fa-layer-group text-xs" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                Analytics & Engineering Skills
              </h3>
            </div>

            {/* 2-column skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsList.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-amber-50/40 border border-amber-200/70 hover:border-amber-400 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-start text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-amber-200 flex items-center justify-center text-amber-500 mb-2.5 shadow-xs">
                    <i className={`${skill.iconClass} text-sm`} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1 leading-snug">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Practical Research & Business Experience */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <i className="fas fa-briefcase text-xs" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                Practical Research & Business Experience
              </h3>
            </div>
            <ul className="space-y-2 pl-1">
              {experienceBulletPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Professional Certifications */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <i className="fas fa-award text-xs" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-amber-50/40 border border-amber-200/80 rounded-xl text-gray-800 text-xs md:text-sm font-semibold flex items-center gap-2.5 shadow-xs hover:border-amber-400 transition-all"
                >
                  <i className="fas fa-certificate text-amber-500 text-sm flex-shrink-0" />
                  <span className="leading-snug">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Education & Academic Background */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <i className="fas fa-graduation-cap text-xs" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900">Education</h3>
            </div>
            {educationList.map((edu, idx) => (
              <div key={idx} className="pl-3 border-l-2 border-amber-300">
                <h4 className="font-bold text-sm md:text-base text-gray-800 leading-snug">
                  {edu.title}
                </h4>
                <span className="inline-block text-xs font-semibold text-amber-600 my-0.5">
                  {edu.period}
                </span>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-0.5">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}