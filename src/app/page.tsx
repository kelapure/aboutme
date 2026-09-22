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
    receipt: 'Healthcare AI taught me this — a confident wrong answer creates audit liability.',
  },
  {
    number: '02',
    title: 'The PRD is becoming executable source code',
    body: 'A PRD is not done because a room of humans nods at it. It\'s done when it\'s precise enough for agents to decompose, build, and test — and for an independent judge to reject the result when it misses the intent.',
    receipt: 'Watched agents faithfully build the wrong thing from ambiguous specs. More than once.',
  },
  {
    number: '03',
    title: 'The unautomated 10% is architecture',
    body: '"Ninety percent automated" tells me nothing. What happens in the other ten percent? Who sees uncertainty? Who can override the system? What evidence do they get? What gets recorded? That\'s the architecture.',
    receipt: 'Built escalation paths for document-intelligence systems. The 10% is where the product lives.',
  },
  {
    number: '04',
    title: 'Every backlog now has a token budget',
    body: 'Agent labor is not free just because it\'s fast. Model choice, reasoning effort, retries, review depth, context size — these are scheduling decisions now. Cost per accepted outcome matters more than tokens burned or lines generated.',
    receipt: 'Managing agent fleets at 8090 where inference cost is a P&L line.',
  },
  {
    number: '05',
    title: 'A second model is cheaper than a confident mistake',
    body: 'I run adversarial review on plans, PRDs, architecture, and business-case math. Two models disagreeing is information. Two models agreeing is not validation — it might just be two models confidently wrong.',
    receipt: 'Shipped regulated content where a single error triggers full re-review. Prevention beats rework.',
  },
  {
    number: '06',
    title: 'Problems belong before wins',
    body: 'My status updates lead with the risk. Customers can handle bad news. What they can\'t handle is discovering the team edited reality to keep a slide green.',
    receipt: 'Enterprise deployments at scale. Surprises killed more deals than bad news ever did.',
  },
  {
    number: '07',
    title: 'If nobody can trace why the code exists, speed is a bug',
    body: 'Requirements link to designs. Designs link to work orders. Work orders link to code and validation. Break that chain and agents turn every upstream misunderstanding into technical debt at machine speed.',
    receipt: 'Built traceability into 8090\'s software factory. Without it, you\'re just generating debt faster.',
  },
]

const writingLinks = [
  {
    title: 'The AI autonomy spectrum of software development',
    hook: 'Where agents replace you vs. where they wait for you',
    url: 'https://www.linkedin.com/posts/rohitkelapure_swipe-the-software-factory-autonomy-spectrum-activity-7467784447883419651-iNjH',
  },
  {
    title: 'Stop being the thing inside the loop',
    hook: 'The maturity shift from executing to managing',
    url: 'https://www.linkedin.com/posts/rohitkelapure_stop-being-the-thing-inside-the-loop-evolve-activity-7470249083673255936-ZlJg',
  },
  {
    title: 'Writing PRDs that autonomous agents can actually use',
    hook: 'Intent precision as executable specification',
    url: 'https://www.linkedin.com/pulse/writing-prds-autonomous-agents-can-actually-use-rohit-kelapure-e7ftc',
  },
  {
    title: 'Can AI agents build from your PRD?',
    hook: 'The decomposition test for product intent',
    url: 'https://www.linkedin.com/pulse/can-ai-agents-build-from-your-prd-rohit-kelapure-fi6ic',
  },
  {
    title: 'Do you know the token cost of your backlog?',
    hook: 'Scheduling agent work like compute',
    url: 'https://www.linkedin.com/posts/rohitkelapure_do-you-know-the-token-cost-of-your-backlog-activity-7483619418493775872-1sRy',
  },
  {
    title: 'From prompts to harnesses',
    hook: 'The infrastructure that makes agents reliable',
    url: 'https://www.linkedin.com/posts/rohitkelapure_in-just-6-months-the-ai-llm-complex-has-activity-7495922517363019776-prAR',
  },
  {
    title: 'North star metrics for an AI software factory',
    hook: 'What to measure when agents generate the code',
    url: 'https://rohitkelapure.substack.com/p/north-star-metrics-for-an-ai-software',
  },
]

const icBuilds = [
  {
    title: 'Code-index MCP for a regulated monorepo',
    body: 'Custom MCP server indexing a medical-device manufacturer\'s monorepo for 100+ engineers. Three tools exposed: search by intent, retrieve file with dependencies, trace call paths. Engineers query through natural language; the MCP returns ranked file sets sized for Claude\'s context limits.',
    hard: 'Retrieval quality degrades as both codebase and agent tooling evolve. Ranking that worked three months ago misses files today. Maintenance is the real cost.',
    link: null,
  },
  {
    title: 'Document-intelligence under bad inputs',
    body: 'Healthcare document pipeline on AWS: classification models, workflow rules, patient matching with partial identifiers, escalation for low-confidence cases. Multi-model fallback chain (Claude + vision preprocessing). What lands on the human queue at 8 a.m. matters more than aggregate accuracy.',
    hard: 'Confidence thresholds. Too low floods the queue; too high misses exceptions. We tune per document type and retrain when error patterns shift.',
    link: null,
  },
  {
    title: 'EvalGPT: PRD judge with evidence-verified scoring',
    body: 'Public end-to-end PRD evaluation service. React frontend → Fastify gateway on Cloud Run → private Python judge runtime. Binary GO/REVISE/HOLD verdicts, deterministic readiness score, C1–C12 rubric criteria. Evidence quotes are verified against source; agent-ready task graphs when a PRD passes.',
    hard: 'Making PASS/FAIL and fix plans trustworthy enough to feed downstream agents. Pinned judge bundles and model allowlists prevent drift.',
    link: 'https://github.com/kelapure/prd-as-a-service',
  },
  {
    title: 'CMS claim-rule mining from COBOL with Claude',
    body: 'Reverse-engineered Medicare pricing COBOL (~10 million lines) into a defensible English claim-rule map. The deliverable is business rules with source traceability — not replacement code. Claude mines the rules; the test corpus proves extracted rules match black-box pricer behavior.',
    hard: 'Models fail on legacy semantics. You don\'t rewrite until you can defend the rules in a format humans and agents can verify. A partial AST is not a migration plan.',
    link: 'https://github.com/kelapure/ai-powered-modernization-analysis',
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
            <Link href="#builds" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Builds</Link>
            <Link href="#field-work" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Field work</Link>
            <Link href="#beliefs" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Beliefs</Link>
            <Link href="#factory" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Factory</Link>
            <Link href="#writing" className="text-[var(--fg-on-dark-2)] hover:text-[var(--fg-on-dark-1)] transition-colors">Writing</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--bg-dark)] text-[var(--fg-on-dark-1)] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-on-dark-2)] mb-8">
            Rohit Kelapure · Cofounder. Product Manager and first FDE @ 8090 · Palo Alto
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 tracking-tight">
            I work where the official process stops explaining itself.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-[var(--fg-on-dark-2)] leading-relaxed">
            <p>
              I sit with the people who know the exception paths, turn that into product intent agents can execute, and keep humans on the decisions that create liability.
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

      {/* What I personally build - IC Proof Strip */}
      <section id="builds" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">IC proof</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-4">
            What I personally build
          </h2>
          <p className="text-[var(--fg-2)] mb-12">
            Architecture-level work on production systems. <Link href="/proof" className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors">Operating receipts on Claude (Code, API, MCP) — separate page.</Link>
          </p>
          
          <div className="space-y-12">
            {icBuilds.map((build, index) => (
              <article key={index} className="border-l-2 border-[var(--color-moss-400)] pl-6 md:pl-8">
                <h3 className="text-xl font-semibold text-[var(--fg-1)] mb-4">{build.title}</h3>
                <p className="text-[var(--fg-2)] leading-relaxed mb-4">{build.body}</p>
                <p className="text-[var(--fg-1)] leading-relaxed">
                  <span className="font-medium">Hard part:</span> {build.hard}
                </p>
                {build.link && (
                  <a 
                    href={build.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors"
                  >
                    View on GitHub →
                  </a>
                )}
              </article>
            ))}
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

      {/* Career Arc - Compressed */}
      <section id="arc" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">The arc</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-8">
            Why this became my work
          </h2>
          
          <div className="space-y-6 text-[var(--fg-2)] text-lg leading-relaxed">
            <p>
              At IBM, I learned to care about what happens inside a runtime: caching, contention, performance, failure, and production Java. 19 patent filings, including 10 grants.
            </p>
            <p>
              At Pivotal, I learned that modernization is not primarily a code problem. Architecture, team structure, language, incentives, and delivery practice move together. Helped build the application-modernization practice from zero. Authored the <a href="https://github.com/kelapure/apptx-radar" target="_blank" rel="noopener noreferrer" className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)]">AppTx Radar</a> and modernization surgery patterns; presented at SpringOne and <a href="https://www.infoq.com/profile/Rohit-Kelapure/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)]">InfoQ</a>.
            </p>
            <p>
              At Google Cloud, I learned why good technology doesn't distribute itself. Specialist and GTM work across modern applications, databases, and early Gemini adoption.
            </p>
            <p>
              At 8090, those threads collapsed into one job. Sit with the customer, shape the product, build the system, measure the failure, explain the economics, carry what we learn into the next version of the factory. Healthcare and life sciences — where the stakes are real.
            </p>
          </div>
        </div>
      </section>

      {/* DeepMind / Google secondary layer */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Context for model teams</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-8">
            What production evals look like from the customer side
          </h2>
          
          <div className="space-y-6 text-[var(--fg-2)] text-lg leading-relaxed">
            <p>
              Google Cloud alumni. Early Gemini GTM before the public launch. I've seen what happens when models hit regulated text, legacy formats, and domain experts who know the edge cases.
            </p>
            <p>
              The production evals I run — on fax pages, COBOL business rules, medical-affairs content — generate failure modes that matter for model improvement. Confidence calibration on messy inputs. Retrieval degradation over time. The gap between benchmark performance and real-world rejection rates.
            </p>
            <p className="text-[var(--fg-1)]">
              These signals should reach model teams. I run multi-model adversarial review because no single model handles every domain well. The deployment context is where capability gaps surface.
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
                <span className="text-[var(--fg-1)] group-hover:text-[var(--color-moss-500)] transition-colors font-medium">
                  {link.title} →
                </span>
                <span className="block text-sm text-[var(--fg-3)] mt-1">
                  {link.hook}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--fg-3)]">
              Archive: <a href="https://www.infoq.com/profile/Rohit-Kelapure/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:underline">InfoQ</a> · <a href="https://nofluffjuststuff.com/conference/speaker/rohit_kelapure" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:underline">SpringOne / NFJS</a> · <a href="https://cloud.rohitkelapure.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:underline">cloud.rohitkelapure.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Soft Hiring CTA */}
      <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--fg-1)] mb-6">
            Work that has real liability
          </h2>
          <div className="space-y-6 text-[var(--fg-2)] text-lg leading-relaxed">
            <p>
              I take on workflows whose exception paths live in people's heads — regulated content, legacy rules, intake that fails in public.
            </p>
            <p>
              I also talk with Applied AI and Forward Deployed teams at frontier labs when the work is production systems with real liability.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <a 
              href="https://www.linkedin.com/in/rohitkelapure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:kelapure@gmail.com"
              className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
            >
              kelapure@gmail.com
            </a>
            <a 
              href="https://github.com/kelapure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://cloud.rohitkelapure.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
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
