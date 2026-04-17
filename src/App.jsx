const featuredProjects = [
  {
    title: "Revenue Dashboard",
    type: "SaaS analytics platform",
    summary:
      "Designed and built a data-heavy dashboard that helped account managers track churn risk, expansion opportunities, and client health in one place.",
    impact: "Improved internal reporting speed by 42%",
    stack: ["React", "TypeScript", "Chart.js", "REST API"],
  },
  {
    title: "Commerce Redesign",
    type: "E-commerce storefront",
    summary:
      "Led the front-end refresh of a growing online store with a focus on mobile conversion, clearer product storytelling, and performance cleanup.",
    impact: "Lifted mobile conversion by 18%",
    stack: ["React", "SCSS", "Node.js", "Stripe"],
  },
  {
    title: "Hiring Portal",
    type: "Internal product",
    summary:
      "Created a streamlined interface for recruiters to manage applicants, interview stages, and feedback loops without bouncing between spreadsheets.",
    impact: "Cut manual admin time by 10 hours per week",
    stack: ["React", "Vite", "Firebase", "Framer Motion"],
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Studio North",
    period: "2024 - Present",
    description:
      "Owning responsive interfaces for product launches, internal dashboards, and marketing sites while collaborating closely with design and backend teams.",
  },
  {
    role: "Web Developer",
    company: "Pixel Forge",
    period: "2022 - 2024",
    description:
      "Built reusable UI components, improved Lighthouse scores, and turned design files into production-ready experiences across client projects.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Bright Lab",
    period: "2021 - 2022",
    description:
      "Started by shipping bug fixes and landing pages, then grew into owning small features end to end and supporting team refactors.",
  },
];

const process = [
  "Translate messy business goals into a clean user flow.",
  "Build UI systems that are easier to scale than redesign later.",
  "Keep accessibility, speed, and responsiveness in the definition of done.",
  "Communicate clearly with designers, product managers, and clients.",
];

const notes = [
  {
    title: "What I bring as a mid-level developer",
    copy:
      "I am past the tutorial phase and past the point of needing every task broken down. I can ship independently, ask better questions, and make sensible product decisions without overengineering.",
  },
  {
    title: "How I like to work",
    copy:
      "I enjoy projects where design matters, but I care just as much about maintainability. The best work for me lives in the overlap between beautiful interfaces and reliable implementation.",
  },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Vite",
  "Next.js",
  "REST APIs",
  "Responsive Design",
  "UI Systems",
  "Performance",
  "Git",
];

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <a className="brand" href="#hero">
          Romina Barzamini
        </a>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#story">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow">Frontend Developer • Mid-Level • React</p>
            <h1>
              Romina Barzamini builds digital products that feel calm, modern,
              and easy to trust.
            </h1>
            <p className="lead">
              This portfolio is designed as one long landing page so hiring
              managers can understand my work, strengths, and visual taste
              without needing to jump between pages.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work
              </a>
              <a className="button button-secondary" href="#contact">
                Let&apos;s work together
              </a>
            </div>
          </div>

          <aside className="hero-card reveal reveal-delay">
            <p className="card-label">At a glance</p>
            <ul>
              <li>3+ years building production interfaces</li>
              <li>Comfortable owning features end to end</li>
              <li>Strong in responsive UI and front-end systems</li>
              <li>Focused on clarity, detail, and clean execution</li>
            </ul>
          </aside>
        </section>

        <section className="stats reveal">
          <article>
            <span>12+</span>
            <p>launched features and redesigns across product and marketing</p>
          </article>
          <article>
            <span>90+</span>
            <p>Lighthouse scores targeted as part of delivery standards</p>
          </article>
          <article>
            <span>100%</span>
            <p>single-page flow so the whole story is visible on landing</p>
          </article>
        </section>

        <section className="section story-grid" id="story">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>A portfolio that reads like a strong introduction, all at once.</h2>
          </div>

          <div className="story-panels">
            <article className="panel panel-large reveal">
              <p>
                I am a mid-level frontend developer who enjoys shaping product
                ideas into interfaces that feel smooth, clear, and responsive.
                My best work happens when visual direction and practical
                engineering need to live in the same place.
              </p>
              <p>
                Inspired by the long-form feeling of the reference site, this
                page mixes selected work, experience, and personal perspective
                into one continuous flow. It is less like a collection of links
                and more like a guided introduction to how Romina works.
              </p>
            </article>

            <div className="notes-stack">
              {notes.map((note) => (
                <article className="panel reveal" key={note.title}>
                  <h3>{note.title}</h3>
                  <p>{note.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">Featured Work</p>
            <h2>Selected projects presented with outcomes, not just visuals.</h2>
          </div>

          <div className="projects">
            {featuredProjects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong>{project.impact}</strong>
                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-layout">
          <article className="panel reveal">
            <p className="eyebrow">Skills</p>
            <h2>Tools I reach for regularly</h2>
            <div className="tags tags-large">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <article className="panel reveal">
            <p className="eyebrow">Approach</p>
            <h2>How I move projects forward</h2>
            <ul className="process-list">
              {process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section timeline-section" id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
            <h2>Experience that shows increasing ownership and confidence.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={item.role}>
                <div className="timeline-meta">
                  <p>{item.period}</p>
                  <span>{item.company}</span>
                </div>
                <div className="timeline-copy">
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section quote-section reveal">
          <blockquote>
            “Good interfaces should feel effortless on every screen.”
          </blockquote>
          <p>
            This layout is designed to show both capability and personality in a
            single responsive experience.
          </p>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading reveal">
            <p className="eyebrow">Contact</p>
            <h2>If you need a developer who can design in code, let&apos;s talk.</h2>
          </div>

          <div className="contact-card reveal">
            <div>
              <p>Email</p>
              <a href="mailto:romina@example.com">romina@example.com</a>
            </div>
            <div>
              <p>LinkedIn</p>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                linkedin.com/in/romina-barzamini
              </a>
            </div>
            <div>
              <p>GitHub</p>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                github.com/rominabarzamini
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
