import Link from 'next/link'

const fieldNotes = [
  {
    title: 'When the input is a five-figure weekly fax stream',
    body: 'At a national healthcare-equipment provider, we built document-intelligence and audit workflows around a large weekly fax stream. The production system combines document models, workflow rules, patient matching, and escalation — not one model pretending it can solve every page.',
    lesson: 'The demo reads documents. Production reads documents that arrive sideways, half-cut, or with someone\'s coffee ring obscuring the patient ID. Confidence thresholds and fallback chains matter more than the model.',
    capability: 'Discovery, production system design, healthcare domain',
  },
  {
    title: 'When a quality score refuses to flatter you',
    body: 'For a specialty-pharma medical-affairs workflow, we built a six-stage, human-controlled document pipeline with auditability and formal evaluation. Authoring time dropped from hours to under two. The composite quality score moved from a weak baseline toward a harder target — I prefer publishing the unfinished number.',
    lesson: 'In regulated work, the review gate is the product. Skip it and you don\'t have a product — you have a liability.',
    capability: 'Regulated AI systems, evaluation design, life sciences domain',
  },
  {
    title: 'When the business rules live in COBOL',
    body: 'We\'re reverse-engineering Medicare pricing applications before attempting a COBOL-to-Java modernization. The first deliverable is not replacement code. It\'s a defensible map of business rules, dependencies, inputs, outputs, and exceptions.',
    lesson: 'You don\'t rewrite the code until you understand the code. There is no silver bullet here — you reverse-engineer the rules first or you ship bugs at scale.',
    capability: 'Legacy modernization, code understanding, government systems',
  },
  {
    title: 'When discovery takes a month, not a prompt',
    body: 'For a custom surgical-pack business, discovery ran for weeks across manufacturing, commercial operations, and IT. The PRD went through multiple versions before steering-team acceptance.',
    lesson: 'An agent cannot rescue you from an ambiguous product. It will implement the ambiguity faster and with more confidence. That\'s worse.',
    capability: 'Product discovery, cross-functional alignment, enterprise software',
  },
]

const beliefs = [
  {
    number: '01',
    title: 'An agent will implement ambiguity at machine speed',
    body: 'Better models make unclear requirements more expensive, not less. They produce more convincing wrong work, faster. Intent, examples, exclusions, and acceptance tests are now runtime inputs — not things you figure out later.',
    receipt: 'Learned shipping healthcare AI where a confident wrong answer creates audit liability.',
  },
  {
    number: '02',
    title: 'The PRD is becoming executable source code',
    body: 'A PRD is not done because a room of humans nods at it. It\'s done when it\'s precise enough for agents to decompose, build, and test — and for an independent judge to reject the result when it misses the intent.',
    receipt: 'Learned watching agents faithfully build the wrong thing from ambiguous specs.',
  },
  {
    number: '03',
    title: 'The unautomated 10% is architecture',
    body: '"Ninety percent automated" tells me nothing. What happens in the other ten percent? Who sees uncertainty? Who can override the system? What evidence do they get? What gets recorded? That\'s the architecture.',
    receipt: 'Learned building escalation paths for document-intelligence systems.',
  },
  {
    number: '04',
    title: 'Every backlog now has a token budget',
    body: 'Agent labor is not free just because it\'s fast. Model choice, reasoning effort, retries, review depth, context size — these are scheduling decisions now. Cost per accepted outcome matters more than tokens burned or lines generated.',
    receipt: 'Learned managing agent fleets at 8090 where inference cost is a P&L line.',
  },
  {
    number: '05',
    title: 'A second model is cheaper than a confident mistake',
    body: 'I run adversarial review on plans, PRDs, architecture, and business-case math. Two models disagreeing is information. Two models agreeing is not validation — it might just be two models confidently wrong.',
    receipt: 'Learned shipping regulated content where a single error triggers full re-review.',
  },
  {
    number: '06',
    title: 'Problems belong before wins',
    body: 'My status updates lead with the risk. Customers can handle bad news. What they can\'t handle is discovering the team edited reality to keep a slide green.',
    receipt: 'Learned at Google Cloud managing 300+ opportunities where surprises killed deals.',
  },
  {
    number: '07',
    title: 'If nobody can trace why the code exists, speed is a bug',
    body: 'Requirements link to designs. Designs link to work orders. Work orders link to code and validation. Break that chain and agents turn every upstream misunderstanding into technical debt at machine speed.',
    receipt: 'Learned building traceability into 8090\'s software factory.',
  },
]

const writingLinks = [
  {
    title: 'The AI autonomy spectrum of software development',
    url: 'https://www.linkedin.com/posts/rohitkelapure_swipe-the-software-factory-autonomy-spectrum-activity-7467784447883419651-iNjH',
  },
  {
    title: 'Stop being the thing inside the loop',
    url: 'https://www.linkedin.com/posts/rohitkelapure_stop-being-the-thing-inside-the-loop-evolve-activity-7470249083673255936-ZlJg',
  },
  {
    title: 'Writing PRDs that autonomous agents can actually use',
    url: 'https://www.linkedin.com/pulse/writing-prds-autonomous-agents-can-actually-use-rohit-kelapure-e7ftc',
  },
  {
    title: 'Can AI agents build from your PRD?',
    url: 'https://www.linkedin.com/pulse/can-ai-agents-build-from-your-prd-rohit-kelapure-fi6ic',
  },
  {
    title: 'Do you know the token cost of your backlog?',
    url: 'https://www.linkedin.com/posts/rohitkelapure_do-you-know-the-token-cost-of-your-backlog-activity-7483619418493775872-1sRy',
  },
  {
    title: 'From prompts to harnesses',
    url: 'https://www.linkedin.com/posts/rohitkelapure_in-just-6-months-the-ai-llm-complex-has-activity-7495922517363019776-prAR',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-dark)]/95 backdrop-blur-sm border-b border-[var(--border-on-dark)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <span className="font-medium text-[var(--fg-on-dark-1)]">Rohit Kelapure</span>
          <div className="hidden md:flex gap-8 text-sm">
            <Link href="#field-work" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Field work</Link>
            <Link href="#arc" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Career</Link>
            <Link href="#beliefs" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Beliefs</Link>
            <Link href="#factory" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Software factory</Link>
            <Link href="#writing" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Writing</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--bg-dark)] text-[var(--fg-on-dark-1)] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-on-dark-2)] mb-8">
            Rohit Kelapure · Cofounder & Product Manager, 8090 · Palo Alto
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 tracking-tight">
            Fax is still an API. COBOL still prices claims. The spreadsheet nobody admits is production still runs the company.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-[var(--fg-on-dark-2)] leading-relaxed">
            <p>
              I sit with the people who know the exception paths, turn that into product intent agents can execute, and keep humans on the decisions that create liability.
            </p>
            <p>
              Co-founder at <a href="https://www.8090.ai/" target="_blank" rel="noopener noreferrer" className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors">8090</a>. Since 2003: IBM runtimes → Pivotal modernization → Google Cloud GTM → applied AI in production.
            </p>
          </div>
        </div>
      </section>

      {/* The last mile is the whole problem */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-8">
            The last mile is the whole problem
          </h2>
          <div className="space-y-6 text-[var(--fg-2)] text-lg leading-relaxed">
            <p>
              Enterprise AI doesn't fail because the model can't write another paragraph. It fails because the official process is not the real process.
            </p>
            <p>
              The real process includes the fax that arrives sideways. The claim rule buried in a transmittal nobody indexed. The medical reviewer who knows exactly which sentence will trigger another review cycle. The salesperson who can configure a custom pack only because she remembers what the old system leaves out.
            </p>
            <p>
              Interviews produce requirements. Watching people work produces the exception paths. The software has to survive both. That's why I work on-site before I write a line of intent.
            </p>
          </div>
          <blockquote className="mt-10 text-xl md:text-2xl text-[var(--fg-1)] italic border-l-4 border-[var(--color-rust-400)] pl-6">
            "Fax is still an API in healthcare."
          </blockquote>
        </div>
      </section>

      {/* Career Arc */}
      <section id="arc" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-12">The arc</p>
          
          <div className="space-y-12">
            {/* IBM */}
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-[var(--fg-3)]">
                <span className="block text-[var(--accent)] font-semibold">IBM</span>
                2003–2014
              </div>
              <div>
                <p className="text-[var(--fg-2)] text-lg leading-relaxed">
                  Learned what happens inside a runtime when things go wrong: caching, contention, deadlocks, memory pressure, production Java at scale. Built WebSphere caching infrastructure for Fortune 100s. Set SPECjEnterprise world records. Wrote 30K+ lines that shipped.
                </p>
                <p className="mt-4 text-[var(--fg-1)] font-medium">
                  19 patent filings, including 10 grants. Two Outstanding Technical Achievement Awards.
                </p>
              </div>
            </div>

            {/* Pivotal */}
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-[var(--fg-3)]">
                <span className="block text-[var(--accent)] font-semibold">Pivotal</span>
                2014–2020
              </div>
              <div>
                <p className="text-[var(--fg-2)] text-lg leading-relaxed">
                  Learned that modernization is not a code problem. Architecture, team structure, language, incentives, delivery practice — they move together or they don't move. Helped build the app-modernization practice from zero to $250M ARR. Led 50+ solution architects.
                </p>
                <p className="mt-4 text-[var(--fg-1)] font-medium">
                  Wall Street Journal coverage. 50K+ developers trained.
                </p>
              </div>
            </div>

            {/* Google */}
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-[var(--fg-3)]">
                <span className="block text-[var(--accent)] font-semibold">Google Cloud</span>
                2020–2024
              </div>
              <div>
                <p className="text-[var(--fg-2)] text-lg leading-relaxed">
                  Learned why good technology doesn't distribute itself. Led specialist and GTM work across modern apps, databases, early Gemini. Built a team of 10 senior specialists. Managed 300+ opportunities in 2023. Hit 162% of pipeline target.
                </p>
                <p className="mt-4 text-[var(--fg-1)] font-medium">
                  $250M+ revenue. Grew AI/ML business 10x.
                </p>
              </div>
            </div>

            {/* 8090 */}
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-[var(--fg-3)]">
                <span className="block text-[var(--accent)] font-semibold">8090</span>
                2024–present
              </div>
              <div>
                <p className="text-[var(--fg-2)] text-lg leading-relaxed">
                  All the threads collapsed into one job. Sit with the customer. Shape the product. Build the system. Measure the failure. Explain the economics. Carry what we learn into the next version of the factory. Healthcare and life sciences — where the stakes are real.
                </p>
                <p className="mt-4 text-[var(--fg-1)] font-medium">
                  8+ production enterprise projects. PRD-to-production in 3–6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Notes */}
      <section id="field-work" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-12">Field notes</p>
          
          <div className="space-y-16">
            {fieldNotes.map((note, index) => (
              <article key={index} className="border-l-2 border-[var(--color-moss-400)] pl-6 md:pl-8">
                <h3 className="text-xl font-semibold text-[var(--fg-1)] mb-4">{note.title}</h3>
                <p className="text-[var(--fg-2)] leading-relaxed mb-4">{note.body}</p>
                <p className="text-[var(--fg-1)] leading-relaxed italic">{note.lesson}</p>
                <p className="mt-4 font-mono text-xs text-[var(--fg-3)] uppercase tracking-wide">
                  {note.capability}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section id="beliefs" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-12">What production changed my mind about</p>
          
          <div className="space-y-10">
            {beliefs.map((belief) => (
              <div key={belief.number} className="grid md:grid-cols-[48px_1fr] gap-4">
                <span className="font-mono text-2xl text-[var(--accent)] font-semibold">{belief.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--fg-1)] mb-2">{belief.title}</h3>
                  <p className="text-[var(--fg-2)] leading-relaxed mb-3">{belief.body}</p>
                  <p className="text-sm text-[var(--fg-3)] italic">{belief.receipt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Factory */}
      <section id="factory" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">The system</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-8">
            A software factory is not six coding agents
          </h2>
          
          <div className="space-y-6 text-[var(--fg-2)] text-lg leading-relaxed">
            <p>
              I run multiple Claude Code and Codex agents on one repo. Useful. But that's not the factory.
            </p>
            <p>The factory is the system around them:</p>
          </div>

          <ul className="mt-8 space-y-4 text-[var(--fg-2)]">
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Intent</span>
              <span>— problem, constraints, exclusions, measurable outcome</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Design</span>
              <span>— architecture and decisions agents may not silently rewrite</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Work</span>
              <span>— bounded orders with dependencies, permissions, checkpoints</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Assembly</span>
              <span>— code generated inside a controlled repo and deployment loop</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Validation</span>
              <span>— tests, evals, adversarial review, human decision rights</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Traceability</span>
              <span>— an unbroken answer to "why does this code exist?"</span>
            </li>
          </ul>

          <div className="mt-12 p-6 bg-[var(--bg-page)] border border-[var(--border)] rounded-md">
            <p className="text-[var(--fg-1)] leading-relaxed">
              The maturity ladder is not <em>autocomplete → more autocomplete</em>. It's <em>human inside every loop → human managing loops → agents operating within policy → humans accountable for the system</em>.
            </p>
            <p className="mt-4 text-[var(--fg-1)] font-medium">
              Stop being the thing inside the loop. But don't remove responsibility from the loop.
            </p>
          </div>
        </div>
      </section>

      {/* The Next Decade */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Looking ahead</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-8">
            The next decade
          </h2>
          
          <div className="space-y-6 text-[var(--fg-2)] text-lg leading-relaxed">
            <p>
              Software organizations are about to manage machine labor. That changes everything.
            </p>
            <p>
              Teams will schedule model strength, reasoning effort, context, retries, and review — same way earlier generations scheduled compute. Product leaders will write intent for humans and agents. Engineering managers will own agent queues and acceptance economics. Audit trails will become organizational memory you can actually query.
            </p>
            <p className="text-[var(--fg-1)] font-medium">
              The durable companies won't be the ones generating the most code. They'll be the ones that turn institutional judgment into software — and keep a named human on the hook when the call matters.
            </p>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Field notes from the software factory</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-12">
            Writing
          </h2>
          
          <div className="space-y-6">
            {writingLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-[var(--border)] rounded-md hover:border-[var(--color-moss-400)] hover:bg-[var(--bg-page)] transition-colors group"
              >
                <span className="text-[var(--fg-1)] group-hover:text-[var(--color-moss-500)] transition-colors">
                  {link.title} →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--fg-2)]">
              <span className="font-medium text-[var(--fg-1)]">Book:</span> <em>Pragmatic Microservices</em> — a practical guide to building microservices at scale.
            </p>
            <p className="mt-4 text-[var(--fg-2)]">
              <span className="font-medium text-[var(--fg-1)]">Speaking:</span> SpringOne Platform, JavaOne, IBM Impact, No Fluff Just Stuff, ÜberConf
            </p>
            <p className="mt-4 text-[var(--fg-3)]">
              Archive: <a href="https://appm11n.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:underline">Application Modernization</a>, <a href="https://alllthingscloud.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:underline">Cloud Architecture</a>, <a href="https://wasdynacache.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:underline">Performance & Caching</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-dark)] text-[var(--fg-on-dark-1)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Bring me the workflow everyone calls too messy
          </h2>
          <div className="space-y-6 text-lg text-[var(--fg-on-dark-2)] leading-relaxed">
            <p>
              Skip the assistant demo. I want the workflow that keeps an operator awake because nobody can explain all its exception paths.
            </p>
            <p>
              Fax machine? Twenty-year-old rule nobody documented? Seven-stage approval body? The spreadsheet everyone pretends isn't production? Good. I'll figure out why it survived.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-[var(--fg-on-dark-1)]">
            <a 
              href="https://www.linkedin.com/in/rohitkelapure"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-moss-300)] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:kelapure@gmail.com"
              className="hover:text-[var(--color-moss-300)] transition-colors"
            >
              kelapure@gmail.com
            </a>
            <a 
              href="https://github.com/kelapure"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-moss-300)] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.8090.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-moss-300)] transition-colors"
            >
              8090.ai
            </a>
            <a 
              href="https://cloud.rohitkelapure.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-moss-300)] transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 lg:px-24 bg-[var(--bg-dark)] border-t border-[var(--border-on-dark)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--fg-on-dark-2)] text-sm">
            Rohit Kelapure · Palo Alto
          </p>
        </div>
      </footer>
    </main>
  )
}
