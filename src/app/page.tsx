import Link from 'next/link'

const fieldNotes = [
  {
    title: 'When the input is a five-figure weekly fax stream',
    body: 'At a national healthcare-equipment provider, we built document-intelligence and audit workflows around a large weekly fax stream. The production system combines document models, workflow rules, patient matching, and escalation — instead of pretending one model should solve every page.',
    lesson: 'The lesson was not "AI reads documents." The lesson was that confidence thresholds, fallback chains, and the queue a human sees at 8 a.m. matter more than the demo.',
    capability: 'Forward-deployed discovery, production system design, healthcare domain',
  },
  {
    title: 'When a quality score refuses to flatter you',
    body: 'For a specialty-pharma medical-affairs workflow, we built a six-stage, human-controlled document pipeline with auditability and formal evaluation. Authoring time moved from hours to under two. A composite quality score moved from a weak baseline toward a harder target — and I prefer publishing the unfinished score. It tells us what remains to be engineered.',
    lesson: 'In regulated work, the review gate is not friction around the product. It is part of the product.',
    capability: 'Regulated AI systems, evaluation design, life sciences domain',
  },
  {
    title: 'When the business rules live in COBOL',
    body: 'We are reverse-engineering Medicare pricing applications before attempting a COBOL-to-Java modernization. The first deliverable is not replacement code. It is a defensible map of business rules, dependencies, inputs, outputs, and exceptions.',
    lesson: 'This work is active, not a completed modernization. I will not describe a plan as a production outcome.',
    capability: 'Legacy modernization, code understanding, government systems',
  },
  {
    title: 'When discovery takes a month, not a prompt',
    body: 'For a custom surgical-pack business, discovery ran for weeks across manufacturing, commercial operations, and IT. The PRD went through multiple versions before steering-team acceptance.',
    lesson: 'A software agent cannot rescue a team from an ambiguous product. It can only implement the ambiguity faster.',
    capability: 'Product discovery, cross-functional alignment, enterprise software',
  },
]

const beliefs = [
  {
    number: '01',
    title: 'An agent will implement ambiguity at machine speed',
    body: 'Better models increase the cost of an unclear requirement. They produce more convincing wrong work, faster. Product intent, examples, exclusions, and acceptance tests are now part of the runtime.',
    receipt: 'Learned shipping healthcare AI where a confident wrong answer creates audit liability.',
  },
  {
    number: '02',
    title: 'The PRD is becoming executable source code',
    body: 'I do not consider a PRD finished because a room of humans agrees with it. It should be precise enough for agents to decompose, build, and test — and for an independent judge to reject the result when it misses the intent.',
    receipt: 'Learned after watching agents faithfully build the wrong thing from ambiguous specs.',
  },
  {
    number: '03',
    title: 'The unautomated 10% is architecture',
    body: '"Ninety percent automated" tells me little. I want to know what happens in the other ten percent: who sees uncertainty, who may override the system, what evidence they receive, and what is recorded afterward.',
    receipt: 'Learned building escalation paths for document-intelligence systems.',
  },
  {
    number: '04',
    title: 'Every backlog now has a token budget',
    body: 'Agent labor is not free merely because it is fast. Model choice, reasoning effort, retries, review depth, and context size are workload-scheduling decisions. Cost per accepted outcome will matter more than tokens consumed or lines generated.',
    receipt: 'Learned managing agent fleets at 8090 where inference cost is a P&L line.',
  },
  {
    number: '05',
    title: 'A second model is cheaper than a confident mistake',
    body: 'I use independent adversarial review for plans, PRDs, architecture, and business-case math. Flattering consensus is not validation.',
    receipt: 'Learned from shipping regulated content where a single error triggers full re-review.',
  },
  {
    number: '06',
    title: 'Problems belong before wins',
    body: 'My status updates put the risk first. Customers can tolerate bad news. They cannot tolerate discovering that the team edited reality to preserve a green slide.',
    receipt: 'Learned at Google Cloud managing >300 opportunities where surprises killed deals.',
  },
  {
    number: '07',
    title: 'If nobody can trace why the code exists, speed is a bug',
    body: 'Requirements should link to designs. Designs should link to work orders. Work orders should link to code and validation. Otherwise agents turn every upstream misunderstanding into technical debt at machine speed.',
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
            Rohit Kelapure · Forward-deployed product engineer · Palo Alto
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 tracking-tight">
            Code is no longer scarce.<br />Clear intent is.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-[var(--fg-on-dark-2)] leading-relaxed">
            <p>
              I build software factories for work that cannot afford to be wrong: healthcare intake, regulated content, legacy rules, and enterprise workflows whose exception paths live in people's heads.
            </p>
            <p>
              I am a co-founder at <a href="https://www.8090.ai/" target="_blank" rel="noopener noreferrer" className="text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors">8090</a>. I work on the customer side of the problem — from watching operators and writing product intent to architecture, agent execution, evaluation, and production.
            </p>
          </div>
          <p className="mt-10 text-[var(--fg-on-dark-2)] border-l-2 border-[var(--color-moss-500)] pl-4">
            Since 2003: distributed systems at IBM, application modernization at Pivotal, cloud GTM at Google, and now applied AI in production.
          </p>
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
              Enterprise AI rarely fails because the model cannot write another paragraph or function. It fails because the official process is not the real process.
            </p>
            <p>
              The real process includes the fax that arrives sideways. The claim rule changed by a transmittal. The medical reviewer who knows which sentence will trigger another review cycle. The salesperson who can configure a custom pack only because she remembers what the old system leaves out.
            </p>
            <p>
              That is why I work forward-deployed. Interviews produce requirements. Watching people work produces the exception paths. The software has to survive both.
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
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">The arc</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-12">
            Why this became my work
          </h2>
          
          <div className="space-y-12">
            {/* IBM */}
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-[var(--fg-3)]">
                <span className="block text-[var(--accent)] font-semibold">IBM</span>
                2003–2014
              </div>
              <div>
                <p className="text-[var(--fg-2)] text-lg leading-relaxed">
                  I learned to care about what happens inside a runtime: caching, contention, performance, failure, and production Java. I built WebSphere caching infrastructure serving Fortune 100 enterprises, set SPECjEnterprise world records, and wrote 30K+ lines of production code.
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
                  I learned that modernization is not primarily a code problem. Architecture, team structure, language, incentives, and delivery practice move together. I helped build the application-modernization practice as it grew from zero to a reported $250M ARR. Led 50+ solution architects across training, developer education, and customer delivery.
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
                  I learned why good technology does not distribute itself. I led specialist and GTM work across modern applications, databases, and early Gemini adoption. Built a team of 10 senior specialists, managed 300+ opportunities in 2023, and hit 162% of pipeline target.
                </p>
                <p className="mt-4 text-[var(--fg-1)] font-medium">
                  Generated $250M+ revenue. Grew AI/ML business 10x.
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
                  Those threads collapsed into one job. I sit with the customer, shape the product, build the system, measure the failure, explain the economics, and carry what we learn into the next version of the factory. Healthcare and life sciences — where the stakes are real and the exception paths are everywhere.
                </p>
                <p className="mt-4 text-[var(--fg-1)] font-medium">
                  8+ production enterprise projects. PRD-to-production in 3–6 months.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-[var(--fg-3)] text-center">
            The career arc is evidence. The work now is the point.
          </p>
        </div>
      </section>

      {/* Field Notes */}
      <section id="field-work" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Selected field notes</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-12">
            What the work actually looks like
          </h2>
          
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
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">What production changed my mind about</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-12">
            Opinions earned the hard way
          </h2>
          
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
              I often work with several Claude Code and Codex agents on one repository. That is useful. It is not the factory.
            </p>
            <p>The factory is the system around them:</p>
          </div>

          <ul className="mt-8 space-y-4 text-[var(--fg-2)]">
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Intent</span>
              <span>— the problem, constraints, exclusions, and measurable outcome</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Design</span>
              <span>— architecture and decisions that agents may not silently rewrite</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Work</span>
              <span>— bounded orders with dependencies, permissions, and checkpoints</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Assembly</span>
              <span>— code generated inside a controlled repository and deployment loop</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Validation</span>
              <span>— tests, evals, adversarial review, and human decision rights</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--accent)] font-semibold">Traceability</span>
              <span>— an unbroken answer to "why does this code exist?"</span>
            </li>
          </ul>

          <div className="mt-12 p-6 bg-[var(--bg-page)] border border-[var(--border)] rounded-md">
            <p className="text-[var(--fg-1)] leading-relaxed">
              The maturity ladder is not <em>autocomplete → more autocomplete</em>. It is <em>human inside every loop → human managing loops → agents operating within policy → humans accountable for the system</em>.
            </p>
            <p className="mt-4 text-[var(--fg-1)] font-medium">
              Stop being the thing inside the loop. But do not remove responsibility from the loop.
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
              Software organizations are about to manage machine labor.
            </p>
            <p>
              That changes the job. Teams will schedule model strength, reasoning effort, context, retries, and review just as earlier generations scheduled compute. Product leaders will write intent for both humans and agents. Engineering managers will own agent queues and acceptance economics. Audit trails will become executable organizational memory.
            </p>
            <p className="text-[var(--fg-1)] font-medium">
              The durable companies will not be those that generate the most code. They will be those that turn institutional judgment into software without deleting the people responsible for the decision.
            </p>
            <p>
              That is the work I want to spend the next decade doing.
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
              I am not interested in another assistant demo. I am interested in the workflow that keeps an operator or executive awake because nobody can explain all its exception paths.
            </p>
            <p>
              If it depends on a fax, a 20-year-old rule, a seven-stage approval body, or the spreadsheet nobody admits is production, I will understand why it survived.
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
