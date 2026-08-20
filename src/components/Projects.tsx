import Image from 'next/image';
import Link from 'next/link';
import { projectsList } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 md:py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-amber-100/40"
    >
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-9 md:mb-14">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-7 md:gap-x-[4%]">
          {projectsList.map((project) => {
            const isAE = project.role === 'Analytics Engineer';

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* 1. IMAGE CONTAINER: Project ID Badge & Role Badge (DA/AE) */}
                <Link
                  href={`/projects/${project.id}`}
                  className="group/img relative h-[160px] sm:h-[160px] md:h-52 lg:h-56 w-full bg-amber-50/50 overflow-hidden flex-shrink-0 block cursor-pointer"
                  aria-label={`View case study for ${project.title}`}
                >
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    {/* Badge 1: Project Number */}
                    <span className="bg-amber-100/95 backdrop-blur-sm text-amber-900 border border-amber-300 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm shrink-0">
                      Project {project.id}
                    </span>

                    {/* Badge 2: Role Indicator */}
                    <span
                      className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full shadow-sm border backdrop-blur-sm shrink-0 inline-flex items-center gap-1 ${
                        isAE
                          ? 'bg-purple-100/95 text-purple-900 border-purple-300'
                          : 'bg-sky-100/95 text-sky-900 border-sky-300'
                      }`}
                    >
                      {isAE ? 'Analytics Engineer' : 'Data Analyst'}
                    </span>
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </Link>

                {/* 2. CARD CONTENT AREA */}
                <div className="p-4.5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-[17px] font-bold text-gray-800 mb-2.5 leading-snug min-h-[2.8rem] line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Tech Stack Tags & Best Featured Project Badge (filtering out duplicate role tags) */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags
                      .filter((tag) => tag !== 'Data Analyst' && tag !== 'Analytics Engineer')
                      .map((tag, idx) => {
                        const isFeaturedBadge = tag === 'Best Featured Project';

                        return (
                          <span
                            key={idx}
                            className={`text-[11px] px-2.5 py-0.5 rounded-full select-none inline-flex items-center gap-1 shadow-xs ${
                              isFeaturedBadge
                                ? 'bg-amber-100/90 text-amber-900 border border-amber-400 font-extrabold'
                                : 'bg-gray-100 border border-gray-200 text-gray-700 font-semibold'
                            }`}
                          >
                            {isFeaturedBadge && (
                              <i className="fas fa-star text-amber-500 text-[10px]" />
                            )}
                            {tag}
                          </span>
                        );
                      })}
                  </div>

                  {/* Executive Summary & Key Insights Section */}
                  <div className="text-gray-600 text-sm md:text-[13px] leading-relaxed mb-4 flex-grow max-h-40 md:max-h-40 overflow-y-auto pr-1.5 custom-scrollbar">
                    <p className="mb-2 text-gray-700">{project.summary}</p>
                    <p className="font-semibold text-gray-800 mb-1">Key insights:</p>
                    <ul className="space-y-1 pl-0.5">
                      {project.insights.map((insight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold flex-shrink-0">+</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. CASE STUDY ACTION BUTTON */}
                  <div className="mt-auto pt-2.5 border-t border-gray-100">
                    <Link
                      href={`/projects/${project.id}`}
                      className="group/btn w-full min-h-[38px] md:min-h-[36px] px-3 py-1.5 text-xs md:text-[13px] font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                    >
                      <span>Click to see more details</span>
                      <i className="fas fa-arrow-right text-[11px] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}