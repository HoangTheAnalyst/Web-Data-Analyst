import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  const contactDetails = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/HoangTheAnalyst',
      href: personalInfo.github,
      external: true,
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: personalInfo.linkedin,
      href: personalInfo.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Contact Me
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          I am always open to discussing data challenges or new collaboration
          opportunities. Feel free to connect with me through the channels below!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactDetails.map((item, idx) => (
            <div
              key={idx}
              className="bg-amber-50/40 border-l-4 border-amber-500 hover:bg-amber-100/40 p-6 rounded-xl transition-all duration-300 hover:translate-x-1 shadow-sm flex items-center gap-5"
            >
              <i className={`${item.icon} text-3xl text-amber-500 flex-shrink-0`} />
              <div>
                <h4 className="text-gray-800 font-bold text-base mb-1">
                  {item.title}
                </h4>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-amber-600 hover:text-amber-700 font-medium break-all"
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}