const capabilities = [
  { title: "Backend & platform services", description: "Designing API contracts, integration services, data workflows, and reliable release paths for operational systems.", tags: ["Java", "Python", "REST API", "PostgreSQL", "Docker"] },
  { title: "React micro-frontends", description: "Building modular user interfaces with clear host/remote boundaries, shared components, and independently deployable features.", tags: ["React", "TypeScript", "Module Federation", "MFE"] },
  { title: "Telemetry & AI learning lab", description: "A hands-on path from synthetic telemetry to KPI dashboards, alarms, maps, and carefully scoped AI summaries.", tags: ["FastAPI", "KPI", "Maps", "SSE", "AI"] },
];

const learningPath = [
  ["01", "API foundation", "FastAPI, PostgreSQL, JWT, migration, testing, and Docker."],
  ["02", "MFE foundation", "React + TypeScript host/remote applications with Module Federation."],
  ["03", "Operations UI", "Telemetry tables, KPI aggregation, alarms, and a map viewport."],
  ["04", "Production habits", "Static builds, CI checks, container packaging, and deployment smoke tests."],
];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Alfian Rahman home">AR<span>.</span></a>
      <div className="nav-links"><a href="#focus">Focus</a><a href="#learning">Learning</a><a href="#contact">Contact</a></div>
    </nav>
    <section className="hero" id="top">
      <p className="eyebrow">Software engineer · Indonesia</p>
      <h1>Building dependable systems <em>from backend to operator UI.</em></h1>
      <p className="hero-copy">I am Alfian Rahman. My current direction combines backend services, platform delivery, and React micro-frontends for data-heavy operational products.</p>
      <div className="actions"><a className="button primary" href="#focus">Explore my focus</a><a className="button" href="https://github.com/alfianrahmn" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <div className="signal-grid" aria-label="Core areas"><span>BACKEND SYSTEMS</span><span>MICRO-FRONTENDS</span><span>TELEMETRY PLATFORM</span></div>
    </section>
    <section className="section" id="focus">
      <div className="section-heading"><p className="eyebrow">Current focus</p><h2>Engineering with a clear operational purpose.</h2></div>
      <div className="cards">{capabilities.map((capability, index) => <article className="card" key={capability.title}><span className="card-number">0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p><div className="tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
    </section>
    <section className="section split" id="learning">
      <div className="section-heading"><p className="eyebrow">Amdocs × MarineM learning path</p><h2>Two repositories, one practical platform exercise.</h2><p>The backend learning track uses FastAPI&apos;s Full Stack Template. The frontend track uses Module Federation Examples. Both are inputs for a small telemetry platform—not a claim of production experience.</p><div className="repo-links"><a href="https://github.com/fastapi/full-stack-fastapi-template" target="_blank" rel="noreferrer">FastAPI template ↗</a><a href="https://github.com/module-federation/module-federation-examples" target="_blank" rel="noreferrer">Module Federation examples ↗</a></div></div>
      <ol className="path">{learningPath.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
    </section>
    <section className="contact" id="contact"><p className="eyebrow">Let&apos;s connect</p><h2>Open to a thoughtful engineering conversation.</h2><a className="button primary" href="https://github.com/alfianrahmn" target="_blank" rel="noreferrer">View GitHub profile ↗</a></section>
    <footer><span>© {new Date().getFullYear()} Alfian Rahman</span><span>Next.js static export · GitHub Pages</span></footer>
  </main>;
}
