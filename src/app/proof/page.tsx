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
            Multi-model honesty: Claude is my primary daily driver. I also run Codex for certain agent patterns and have production experience with Gemini through Google Cloud GTM work. The builds below are Claude-primary.
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
              A medical-device manufacturer needed their 100+ engineers to query a multi-million-line monorepo through Claude Code without dumping context windows or missing critical files. I built a custom MCP server that maintains a semantic index of the codebase.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Architecture:</strong> The server exposes three tools — search by intent, retrieve file with dependencies, and trace call paths. Indexing runs nightly on their CI, with incremental updates for recent commits. Engineers query through natural language; the MCP returns ranked file sets with context windows that fit Claude's limits.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Who consumes it:</strong> Development teams working on regulatory submissions, where missing a dependency means audit findings. The retrieval emphasis is precision — returning the wrong file costs more than returning nothing.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Hard part:</strong> Retrieval quality degrades as the codebase and agent tooling both change. We tune ranking weights monthly. The index that worked in January produces worse results by April if you don't maintain it. Most teams underestimate this maintenance burden.
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
              Healthcare document intake is not "AI reads PDFs." It's sideways faxes, coffee-ring stains over patient IDs, handwritten amendments, and pages that arrive out of order. I built a multi-stage pipeline that handles this reality.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Architecture:</strong> Document models for classification and extraction, workflow rules that route by document type and urgency, patient-matching logic that handles partial identifiers, and escalation paths for low-confidence cases. Claude handles the language understanding; custom vision models handle the preprocessing disasters.
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

      {/* Build 3: Executable PRD */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--fg-eyebrow)] mb-4">Build narrative</p>
          <h2 className="text-2xl font-semibold text-[var(--fg-1)] mb-6">
            Executable PRD → agent work orders → validation
          </h2>
          
          <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
            <p>
              Most teams lose traceability the moment an agent starts coding. The PRD says one thing, the implementation does another, and nobody notices until production. I built a system that maintains an audit chain from intent to deployment.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Architecture:</strong> PRDs decompose into bounded work orders with explicit scope and constraints. Agents execute work orders, not vague requirements. Each work order produces code and test artifacts. A separate judge model validates that outputs satisfy the original intent. Rejections route back with specific failure reasons.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">The chain:</strong> Intent → design document → work orders → code commits → validation results → acceptance or rejection. At any point, I can answer "why does this code exist?" by tracing upstream.
            </p>
            <p>
              <strong className="text-[var(--fg-1)]">Hard part:</strong> Making ambiguity visible before agents implement it at machine speed. A vague requirement that takes a human two weeks to misunderstand takes an agent two minutes. The work order decomposition is where most ambiguity surfaces — if I can't write a bounded work order, the intent isn't clear enough to execute.
            </p>
          </div>
        </div>
      </section>

      {/* Craft note */}
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
              Operating intensity is high — this is daily, multi-hour work across multiple production contexts, not occasional experimentation. But the intensity is evidence of operating mode, not skill proof. Logging hours doesn't make the output better; knowing when to switch from agent execution to manual inspection does.
            </p>
          </div>
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
