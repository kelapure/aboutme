import Link from 'next/link'

const chapters = [
  {
    company: 'IBM',
    years: '2003–2014',
    title: 'Advisory Software Engineer',
    summary: 'Built distributed systems at scale. Architected WebSphere caching infrastructure serving Fortune 100 enterprises. 19 patents in distributed systems and performance optimization.',
    highlights: ['30K+ lines of production Java', '2 Outstanding Technical Achievement Awards', 'SPECjEnterprise world records'],
  },
  {
    company: 'Pivotal',
    years: '2014–2020',
    title: 'Principal Engineer & Practice Lead',
    summary: 'Founding member scaling the application modernization practice from $0 to $250M ARR in 3 years. Led 50+ solution architects across training, developer education, and customer delivery.',
    highlights: ['$0→$250M ARR in 3 years', '50K+ developers impacted', 'Wall Street Journal coverage'],
  },
  {
    company: 'Google Cloud',
    years: '2020–2024',
    title: 'GTM Leader: Apps, Databases & Gemini',
    summary: 'Directed Modern Apps & Databases GTM generating >$250M revenue. Built and led team of 10 senior specialists. Early Gemini AI GTM strategy growing AI/ML business 10x.',
    highlights: ['>$250M revenue', '>300 opportunities in 2023', '162% of pipeline target'],
  },
  {
    company: '8090',
    years: '2024–Present',
    title: 'Founding Member & AI Solutions Lead',
    summary: 'Building enterprise Software Factory using AI to automate SDLC. Delivering PRD-to-production in 3-6 months. $500K+ annual subscriptions across 8+ healthcare and life sciences projects.',
    highlights: ['85-90% automation rates', '50+ FTE reductions', '$2M+ cost savings delivered'],
  },
]

const patents = [
  { title: 'Client side request throttling for backend systems', id: 'US-8200812-B2', year: '2012' },
  { title: 'Dynamic structural management of distributed caching', id: 'US-10042772-B2', year: '2018' },
  { title: 'VM monitoring and deadlock resolution', id: 'US-9003239-B2', year: '2015' },
  { title: 'Analysis of source code changes', id: 'US-9262134-B2', year: '2016' },
  { title: 'Dual timeout caching', id: 'US-8296523-B2', year: '2012' },
]

const workStyle = [
  { trait: 'Bias for action', description: 'Ships fast without breaking things. Founding member mentality.' },
  { trait: 'Technical + Business bridge', description: '19 patents AND $250M+ revenue. Can speak to CTOs as peer AND close deals.' },
  { trait: 'Hands-on builder', description: 'Still writes code, builds production systems, not just slides.' },
  { trait: 'Customer-obsessed', description: 'Long-term relationships, measurable ROI, 95%+ retention.' },
]

const speaking = [
  { event: 'SpringOne Platform', type: 'Conference' },
  { event: 'JavaOne', type: 'Conference' },
  { event: 'IBM Impact', type: 'Conference' },
  { event: 'No Fluff Just Stuff', type: 'Tour' },
  { event: 'ÜberConf', type: 'Conference' },
]

const blogs = [
  { name: 'Application Modernization', url: 'https://appm11n.blogspot.com/' },
  { name: 'Cloud Architecture', url: 'https://alllthingscloud.blogspot.com/' },
  { name: 'Performance & Caching', url: 'https://wasdynacache.blogspot.com/' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--bg-dark)] text-[var(--fg-on-dark-1)] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-on-dark-2)] mb-6">
            Palo Alto, California
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Builder who bridges deep tech and business to ship real systems
          </h1>
          <p className="text-xl md:text-2xl text-[var(--fg-on-dark-2)] mb-10 max-w-3xl">
            Forward-deployed engineer and co-founder applying AI to hard enterprise problems in healthcare and life sciences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#chapters" 
              className="px-6 py-3 bg-[var(--color-moss-500)] text-white rounded-md font-medium hover:bg-[var(--color-moss-600)] transition-colors"
            >
              See my journey
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 border border-[var(--border-on-dark)] text-[var(--fg-on-dark-1)] rounded-md font-medium hover:bg-[var(--color-linen-800)] transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-4xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-eyebrow)] mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg-1)] mb-8">
            22 years building enterprise software
          </h2>
          <div className="prose prose-lg text-[var(--fg-2)] space-y-6">
            <p>
              I have spent my career at the intersection of engineering, consulting, product, and go-to-market. 
              Currently a founding member at 8090.ai, where we are building an AI-powered Software Factory 
              that delivers custom enterprise software from PRD to production in 3-6 months.
            </p>
            <p>
              Before 8090, I led GTM for Modern Apps, Databases, and Gemini AI at Google Cloud. 
              Before that, I was a founding member of the application modernization practice at Pivotal, 
              scaling it from $0 to $250M ARR. I started my career at IBM, where I spent 11 years 
              in distributed systems engineering and earned 19 patents.
            </p>
            <p>
              My focus today: applying AI to hard problems in healthcare and life sciences, 
              where automation can save lives and reduce costs at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section id="chapters" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-eyebrow)] mb-4">Chapters</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg-1)] mb-12">
            The arc of a career
          </h2>
          <div className="space-y-8">
            {chapters.map((chapter, index) => (
              <div 
                key={chapter.company}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <span className="font-mono text-sm text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl font-semibold text-[var(--fg-1)]">{chapter.company}</h3>
                    <p className="text-[var(--fg-2)]">{chapter.title}</p>
                  </div>
                  <span className="font-mono text-sm text-[var(--fg-3)] mt-2 md:mt-0">{chapter.years}</span>
                </div>
                <p className="text-[var(--fg-2)] mb-4">{chapter.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {chapter.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="px-3 py-1 bg-[var(--color-linen-200)] text-[var(--fg-2)] text-sm rounded-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="how-i-work" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-5xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-eyebrow)] mb-4">How I work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg-1)] mb-12">
            High agency, high standards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workStyle.map((item) => (
              <div key={item.trait} className="border border-[var(--border)] rounded-md p-6 bg-[var(--bg-page)]">
                <h3 className="text-lg font-semibold text-[var(--fg-1)] mb-2">{item.trait}</h3>
                <p className="text-[var(--fg-2)]">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-[var(--color-linen-200)] rounded-md border border-[var(--border)]">
            <p className="text-xl text-[var(--fg-1)] italic">
              "Automation without responsibility isn't progress."
            </p>
            <p className="text-[var(--fg-3)] mt-2">— My operating principle for AI work</p>
          </div>
        </div>
      </section>

      {/* Patents & Selected Work */}
      <section id="work" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-eyebrow)] mb-4">Selected work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg-1)] mb-12">
            19 patents in enterprise systems
          </h2>
          <div className="space-y-4">
            {patents.map((patent) => (
              <div 
                key={patent.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-[var(--border)]"
              >
                <div>
                  <p className="font-medium text-[var(--fg-1)]">{patent.title}</p>
                  <p className="font-mono text-sm text-[var(--fg-3)]">{patent.id}</p>
                </div>
                <span className="font-mono text-sm text-[var(--fg-3)] mt-2 md:mt-0">{patent.year}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[var(--fg-3)]">
            Plus 14 additional patents in distributed caching, VM monitoring, code analysis, and performance optimization.
          </p>
        </div>
      </section>

      {/* Writing & Speaking */}
      <section id="writing" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-5xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-eyebrow)] mb-4">Writing & speaking</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--fg-1)] mb-12">
            Sharing what I learn
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[var(--fg-1)] mb-6">Conference speaking</h3>
              <ul className="space-y-3">
                {speaking.map((talk) => (
                  <li key={talk.event} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                    <span className="text-[var(--fg-2)]">{talk.event}</span>
                    <span className="text-[var(--fg-3)] text-sm">({talk.type})</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--fg-1)] mb-6">Blogs</h3>
              <ul className="space-y-3">
                {blogs.map((blog) => (
                  <li key={blog.name}>
                    <a 
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-link)] hover:underline"
                    >
                      {blog.name} →
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[var(--fg-3)]">50+ posts on cloud, AI, and enterprise modernization.</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-[var(--fg-1)] mb-4">Book</h3>
            <p className="text-[var(--fg-2)]">
              <span className="italic">Pragmatic Microservices</span> — A practical guide to building microservices at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-dark)] text-[var(--fg-on-dark-1)]">
        <div className="max-w-4xl">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--fg-on-dark-2)] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Let's build something
          </h2>
          <p className="text-xl text-[var(--fg-on-dark-2)] mb-10">
            I'm always interested in hard problems at the intersection of AI and enterprise software.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="mailto:kelapure@gmail.com"
              className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors"
            >
              kelapure@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/rohitkelapure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors"
            >
              LinkedIn →
            </a>
            <a 
              href="https://github.com/kelapure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors"
            >
              GitHub →
            </a>
            <a 
              href="https://twitter.com/rkela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors"
            >
              Twitter →
            </a>
            <a 
              href="https://www.8090.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors"
            >
              8090.ai →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 bg-[var(--bg-dark)] border-t border-[var(--border-on-dark)]">
        <div className="max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--fg-on-dark-2)] text-sm">
            Rohit Kelapure · Palo Alto, California
          </p>
          <p className="text-[var(--fg-on-dark-2)] text-sm">
            Built with Next.js
          </p>
        </div>
      </footer>
    </main>
  )
}
