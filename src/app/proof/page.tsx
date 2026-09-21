import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operating Receipts — Rohit Kelapure',
  description: 'Build narratives on Claude Code, API, and MCP. How I operate production AI systems day-to-day.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProofPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-dark)]/95 backdrop-blur-sm border-b border-[var(--border-on-dark)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <Link href="/" className="font-medium text-[var(--fg-on-dark-1)] hover:text-[var(--color-moss-300)] transition-colors">
            ← Rohit Kelapure
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[var(--bg-dark)] text-[var(--fg-on-dark-1)] pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-on-dark-2)] mb-6">
            Operating receipts
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 tracking-tight">
            Build narratives on Claude Code, API, and MCP
          </h1>
          <p className="text-lg text-[var(--fg-on-dark-2)] leading-relaxed">
            For practitioners and recruiters who want to see past the thesis. This page covers how I build production systems, not what I believe about them.
          </p>
          <p className="mt-4 text-[var(--fg-on-dark-2)] leading-relaxed">
            Multi-model honesty: Claude is my primary daily driver. I also run Codex for certain agent patterns and have production experience with Gemini through Google Cloud work. The builds below are Claude-primary unless noted.
          </p>
        </div>
      </section>

      {/* Build 1: Code-index MCP */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Build narrative</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            Code-index MCP for a regulated monorepo
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              A medical-device manufacturer needed their 100+ engineers to query a large monorepo through Claude Code without dumping context windows or missing critical files. I built a custom MCP server that maintains a semantic index of the codebase.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">MCP surface:</strong> Three tools exposed — search by intent, retrieve file with dependencies, trace call paths. Engineers query through natural language; the MCP returns ranked file sets sized for Claude's context limits. Permissions enforce the regulated access controls already in place.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Who consumes it:</strong> Development teams working on regulatory submissions, where missing a dependency means audit findings. The retrieval emphasis is precision — returning the wrong file costs more than returning nothing.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Hard part:</strong> Retrieval quality degrades as both codebase and agent tooling evolve. Ranking that worked three months ago produces worse results today if you don't maintain it. The maintenance burden is the real cost, not the initial build.
            </p>
          </div>
        </div>
      </section>

      {/* Build 2: Document intelligence */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Build narrative</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            Document-intelligence pipeline under bad inputs
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              Healthcare document intake is not "AI reads PDFs." It's sideways faxes, coffee-ring stains over patient IDs, handwritten amendments, and pages that arrive out of order. I built a multi-stage pipeline on AWS that handles this reality.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Architecture:</strong> Document models for classification and extraction, workflow rules that route by document type and urgency, patient-matching logic that handles partial identifiers, and escalation paths for low-confidence cases. Multi-model fallback chain — Claude handles the language understanding; vision models handle the preprocessing disasters.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">The human queue:</strong> What lands on someone's desk at 8 a.m. matters more than aggregate accuracy. The system prioritizes keeping that queue actionable — clear cases with clear reasons for escalation, not a pile of "AI wasn't sure."
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Hard part:</strong> Confidence thresholds. Set them too low and you flood the human queue. Set them too high and you miss exceptions that matter. We tune per document type and retrain when error patterns shift. There's no one-time calibration.
            </p>
          </div>
        </div>
      </section>

      {/* Build 3: EvalGPT */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Build narrative — public</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            EvalGPT: PRD judge with evidence-verified scoring
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              Most PRD review is vibes. "Looks good" or "needs more detail" without structure. I built an end-to-end PRD evaluation service that produces binary verdicts, deterministic scores, and agent-ready task graphs.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Architecture:</strong> React frontend → Fastify gateway on Cloud Run → private Python judge runtime. Split architecture keeps the scoring logic isolated and auditable. Privacy-preserving Google auth with HMAC-pseudonymous quotas; no PRD content persists after evaluation.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Scoring:</strong> GO/REVISE/HOLD verdicts against C1–C12 rubric criteria. Evidence quotes are verified against source — the judge can't hallucinate support for a claim. Pinned judge bundles and model allowlists prevent drift between evaluations.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Hard part:</strong> Making PASS/FAIL and fix plans trustworthy enough to feed downstream agents. If the judge is wrong, the agents implement the wrong thing at machine speed. The verification layer is the product.
            </p>
          </div>
          <a 
            href="https://github.com/kelapure/prd-as-a-service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
          >
            View on GitHub →
          </a>
        </div>
      </section>

      {/* Build 4: CMS COBOL claim-rule mining */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Build narrative</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            CMS claim-rule mining from COBOL with Claude
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              Reverse-engineered Medicare pricing COBOL — approximately 10 million lines across multiple CMS pricer applications — into a defensible English claim-rule map. The deliverable is business rules with source traceability, not replacement code.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">What Claude does:</strong> Mining claim-processing rules into plain English. Grounding extracted rules to original COBOL source so reviewers can verify. Building the test corpus that proves extracted rules match black-box pricer behavior. This is repo-scale legacy comprehension with Claude as the core engine.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Related work:</strong> Semantic AST analysis for allocation-system migrations (Informix 4GL → Java). The pattern is the same — you don't rewrite until you can defend the rules in a format humans and agents can verify.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Hard part:</strong> Models fail on legacy semantics. A partial AST is not a migration plan. Making those systems legible is the prerequisite — and it's exactly the kind of hard domain that stresses model capabilities and requires serious evaluation.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href="https://github.com/kelapure/ai-powered-modernization-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
            >
              AI-powered modernization analysis →
            </a>
            <a 
              href="https://github.com/8090-inc/esrd-cy212-pricer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
            >
              ESRD pricer artifacts →
            </a>
          </div>
        </div>
      </section>

      {/* Decade of ownership */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Heritage</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            A decade breaking black boxes — before LLMs
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              The modernization work didn't start with Claude. At Pivotal, I built the <a href="https://github.com/kelapure/apptx-radar" target="_blank" rel="noopener noreferrer" className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)]">AppTx Radar</a> — an interactive assessment tool for replatform-vs-modernize decisions. Authored the surgery-pattern taxonomy (Strangler, ACL, seams, Mikado Method) that became standard practice.
            </p>
            <p>
              Presented at <a href="https://www.infoq.com/profile/Rohit-Kelapure/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)]">InfoQ</a> and SpringOne on monolith decomposition with DDD, Event Storming, and observable health assessment. The <a href="https://youtu.be/Xm9zU-eGhyo" target="_blank" rel="noopener noreferrer" className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)]">360° Health Assessment</a> methodology is still in use.
            </p>
            <p className="text-[var(--fg-1)]">
              The difference now: Claude can do in hours what took weeks of manual code archaeology. But the hard problems — rule extraction, behavior verification, domain expert validation — are the same. The craft transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Operating note */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Operating note</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            Day-to-day with Claude Code and MCP
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              I run Claude Code as my primary development environment across multiple repositories. For production customer work, this means parallel agent sessions — some executing work orders, some running adversarial review on completed artifacts, some maintaining shared context across the project.
            </p>
            <p>
              The MCP ecosystem is where I spend significant architecture time. Custom servers for code indexing, document pipelines, and customer-specific integrations. Skills for structured reasoning patterns that customers need repeatedly. The craft is knowing when a problem needs a custom tool versus better prompting.
            </p>
            <p>
              Operating intensity is high — daily, multi-hour work across multiple production contexts. But the intensity is evidence of operating mode, not skill proof. Knowing when to switch from agent execution to manual inspection matters more than hours logged.
            </p>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Demos and secondary builds</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            Other public artifacts
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-[var(--fg-1)] mb-2">Clinical diagnosis engine (demo)</h3>
              <p className="text-[var(--fg-2)] text-sm mb-2">
                Configurable YAML clinical-rules DSL with Claude vision extraction from handwritten rules. Real-time criteria evaluation. Labeled as demo — not a clinical product.
              </p>
              <a 
                href="https://github.com/kelapure/clinical-diagnosis-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors"
              >
                View on GitHub →
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-[var(--fg-1)] mb-2">Consult automation agent</h3>
              <p className="text-[var(--fg-2)] text-sm mb-2">
                Claude Agent SDK pipeline: Gmail invite triage, profile-aware accept/decline, dual Computer Use stack for form fill. Personal ops automation demonstrating agentic loop ownership.
              </p>
              <a 
                href="https://github.com/kelapure/consult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology footer */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[var(--fg-3)]">
            <strong className="text-[var(--fg-2)]">Methodology note:</strong> I maintain a local analytics dashboard over my Claude usage (Code, .ai, Desktop, API) — pure-stdlib Python, no network dependencies, engagement metrics with gap caps. The tool exists to understand my own patterns, not to produce vanity stats.
          </p>
        </div>
      </section>

      {/* Back link */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/"
            className="text-[var(--color-moss-500)] hover:text-[var(--color-moss-600)] transition-colors font-medium"
          >
            ← Back to main site
          </Link>
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
