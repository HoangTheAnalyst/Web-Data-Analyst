import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projectsList } from '@/data/portfolioData';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsList.find((p) => String(p.id) === id);

  if (!project) {
    notFound();
  }

  // Determine role classification
  const isAE =
    project.role === 'Analytics Engineer' ||
    project.id >= 8 ||
    project.tags.includes('Analytics Engineer');
  const displayRole = isAE ? 'Analytics Engineer' : 'Data Analyst';

  const filePath = path.join(
    process.cwd(),
    'public',
    'README in Project',
    `README Project ${project.id}.md`
  );

  let markdownContent = '';
  try {
    if (fs.existsSync(filePath)) {
      markdownContent = fs.readFileSync(filePath, 'utf-8');
    } else {
      markdownContent = `### Case study document for Project ${project.id} is currently being updated.`;
    }
  } catch (error) {
    markdownContent = `### Error loading case study document.`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-amber-100/40 text-gray-800 flex flex-col">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 sm:px-6 md:w-[70%] max-w-5xl mx-auto h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600 hover:text-amber-600 transition-colors"
          >
            <i className="fas fa-arrow-left text-[10px] md:text-xs" /> Back to Projects
          </Link>

          <div className="flex items-center gap-2.5">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] md:text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-700 hover:bg-amber-500 hover:text-white transition-all flex items-center gap-1.5"
              >
                <i
                  className={
                    link.type === 'powerbi'
                      ? 'fas fa-chart-bar'
                      : link.type === 'live'
                      ? 'fas fa-external-link-alt'
                      : 'fab fa-github'
                  }
                />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full px-4 sm:px-6 md:w-[70%] max-w-5xl mx-auto py-7 md:py-9 flex-grow">
        {/* Project Header Banner */}
        <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-7 border border-gray-200 shadow-sm mb-7">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {/* Project Number Badge */}
            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs md:text-sm font-bold px-3 py-1 rounded-full shrink-0 shadow-sm">
              Project {project.id}
            </span>

            {/* Role Indicator Badge */}
            <span
              className={`text-xs md:text-sm font-bold px-3 py-1 rounded-full border shrink-0 shadow-sm inline-flex items-center gap-1.5 ${
                isAE
                  ? 'bg-purple-100 text-purple-900 border-purple-300'
                  : 'bg-sky-100 text-sky-900 border-sky-300'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isAE ? 'bg-purple-600' : 'bg-sky-600'
                }`}
              />
              {displayRole}
            </span>

            {/* Tech Stack & Featured Badges */}
            {project.tags
              .filter((tag) => tag !== 'Data Analyst' && tag !== 'Analytics Engineer')
              .map((tag, idx) => {
                const isFeaturedBadge = tag === 'Best Featured Project';

                return (
                  <span
                    key={idx}
                    className={`text-xs md:text-sm px-3 py-1 rounded-full border select-none inline-flex items-center gap-1.5 ${
                      isFeaturedBadge
                        ? 'bg-amber-100/90 text-amber-900 border-amber-400 font-extrabold shadow-xs'
                        : 'bg-gray-100 text-gray-700 font-medium border-gray-200'
                    }`}
                  >
                    {isFeaturedBadge && (
                      <i className="fas fa-star text-amber-500 text-xs" />
                    )}
                    {tag}
                  </span>
                );
              })}
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
            {project.title}
          </h1>

          {/* Project Preview Image */}
          <div className="w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-amber-50/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Case Study Markdown Content */}
        <article className="bg-white rounded-xl md:rounded-2xl p-5 md:p-9 border border-gray-200 shadow-sm">
          <div className="prose prose-sm md:prose-base prose-amber max-w-none 
            prose-p:my-2.5 prose-p:leading-relaxed prose-p:text-gray-700
            prose-headings:mt-5 prose-headings:mb-2 prose-headings:font-bold prose-headings:text-gray-900 
            prose-h1:text-xl md:prose-h1:text-2xl
            prose-h2:text-lg md:prose-h2:text-xl
            prose-h3:text-base md:prose-h3:text-lg
            prose-ul:my-2 prose-ul:pl-5
            prose-ol:my-2 prose-ol:pl-5
            prose-li:my-1 prose-li:leading-relaxed
            prose-blockquote:my-3 prose-blockquote:py-1.5 prose-blockquote:px-3.5
            prose-hr:my-5
            prose-a:text-amber-600 prose-img:rounded-lg prose-img:my-4
            prose-table:my-4 prose-table:text-xs md:prose-table:text-sm prose-table:border 
            prose-th:bg-amber-50/80 prose-th:py-2 prose-th:px-3 prose-td:py-2 prose-td:px-3">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}