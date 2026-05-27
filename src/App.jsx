import { useEffect } from "react";



const experience = [
  {
    role: "Front-End / Full Stack Developer",
    company: "GradPathAI",
    period: "Nov 2024 - Sep 2025",
    description:
      "Built an AI-powered SaaS platform for education agencies, using React.js and TypeScript to support university admissions workflows, intelligent program matching, and document automation.",
  },
  {
    role: "Software Developer",
    company: "University of Northampton",
    period: "Sep 2023 - Oct 2024",
    description:
      "Developed a logistics system simulation as part of an industry-aligned university project, applying enterprise software engineering principles to build a robust desktop application for parcel and customer workflow simulation.",
  },
  {
    role: "Front-End / Software Developer",
    company: "IRSA",
    period: "Mar 2022 - Sep 2024",
    description:
      "Delivered front-end solutions across multiple digital agency projects in healthcare, travel, insurance, and local trade, building responsive interfaces with React and styled-components.",
  },
  {
    role: "Frontend Developer",
    company: "Tishter.com",
    period: "Jul 2019 - Feb 2022",
    description:
      "Worked remotely on a U.S.-based social networking platform connecting businesses and professionals, contributing to frontend features for a globally used product.",
  },
  {
    role: "Junior Software Developer",
    company: "Tarheno",
    period: "Sep 2018 - Jul 2019",
    description:
      "Contributed to enterprise web application development for education and fintech sectors, building early experience with ASP.NET, .NET Core, and full-stack delivery.",
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
  "SQL Server",
  "Responsive Design",
  "UI Systems",
  "Performance",
  "Git",
];

const contactItems = [
  {
    title: "Email",
    value: "romina.barzamini@gmail.com",
    href: "mailto:romina.barzamini@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.9.03 6.62 5.04a.8.8 0 0 0 .96 0l6.62-5.04H4.9Zm14.6 1.9-6.05 4.6a2.3 2.3 0 0 1-2.9 0L4.5 8.68v8.57c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.68Z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "in/romina-barzamini",
    href: "https://www.linkedin.com/in/romina-barzamini/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 8.48a1.64 1.64 0 1 1 0-3.28 1.64 1.64 0 0 1 0 3.28ZM5.4 9.9h2.8V19H5.4V9.9Zm4.56 0h2.68v1.24h.04c.37-.7 1.29-1.44 2.65-1.44 2.84 0 3.37 1.87 3.37 4.31V19h-2.8v-4.43c0-1.06-.02-2.42-1.48-2.42-1.49 0-1.72 1.16-1.72 2.35V19h-2.74V9.9Z" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    value: "github.com/rominabarzamini",
    href: "https://github.com/rominabarzamini",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.08.64-.2.64-.46l-.01-1.62c-2.6.56-3.15-1.1-3.15-1.1-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.44.96 1.44.96.84 1.43 2.2 1.02 2.73.78.08-.6.33-1.02.6-1.26-2.08-.24-4.28-1.04-4.28-4.64 0-1.02.36-1.85.96-2.5-.1-.24-.42-1.2.09-2.5 0 0 .78-.25 2.56.95a8.86 8.86 0 0 1 4.66 0c1.77-1.2 2.55-.95 2.55-.95.52 1.3.2 2.26.1 2.5.6.65.95 1.48.95 2.5 0 3.6-2.2 4.39-4.3 4.62.34.29.64.86.64 1.74l-.01 2.58c0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    ),
  },
];

const sectionIds = ["hero", "story", "work", "experience", "contact"];

function App() {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const updateHash = (id) => {
      if (window.location.hash === `#${id}`) {
        return;
      }

      window.history.replaceState(null, "", `#${id}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          updateHash(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const syncHashToScroll = () => {
      const viewportMidpoint = window.innerHeight * 0.4;
      let activeSection = sections[0];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMidpoint) {
          activeSection = section;
        }
      });

      if (activeSection?.id) {
        updateHash(activeSection.id);
      }
    };

    syncHashToScroll();
    window.addEventListener("scroll", syncHashToScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncHashToScroll);
    };
  }, []);

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <defs>
                <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#117ec5" />
                  <stop offset="100%" stopColor="#34a874" />
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="18" fill="#0d2f53" />
              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                rx="16"
                fill="url(#brandGradient)"
                opacity="0.18"
              />
              <text
                x="50%"
                y="53%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#f4fbff"
                fontFamily="Manrope, sans-serif"
                fontSize="24"
                fontWeight="800"
                letterSpacing="1.5"
              >
                RB
              </text>
            </svg>
          </span>
          <span className="brand-name">Romina Barzamini</span>
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
          <div className="hero-orb hero-orb-left" aria-hidden="true" />
          <div className="hero-orb hero-orb-mid" aria-hidden="true" />
          <div className="hero-orb hero-orb-right" aria-hidden="true" />

          <div className="hero-copy reveal">
            <p className="eyebrow">Frontend • Full-Stack • React</p>
            <h1>
              <span className="hero-greeting">Hi, I&apos;m</span>
              <span className="hero-name">Romina Barzamini</span>
            </h1>
            <h2 className="hero-role">Front-End and Full-Stack Developer</h2>
            <p className="lead">
              Building modern, responsive digital experiences with clean UI,
              thoughtful interactions, and scalable full-stack systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View My Work
              </a>
              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        <section className="section story-grid" id="story">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <p className="about-kicker-line">
              I turn complex ideas into clear, calm digital experiences.
            </p>
          </div>

          <div className="about-layout about-profile-layout">
            <div className="about-visual reveal">
              <div className="about-blob">
                <img
                  className="about-image"
                  src="/romina-portrait-selected.png"
                  alt="Romina Barzamini"
                />
              </div>
            </div>

            <article className="about-story about-article reveal">
              <p className="about-intro">
                Hi, my name is Romina, here&apos;s my story!
              </p>
              <p className="about-paragraph">
                I am a Front-End  Developer with a Master&apos;s
                degree in Software Engineering and over five years of experience
                across freelance, startup, agency, and SaaS environments.
              </p>
              <p className="about-paragraph">
                I specialize in building responsive, user-centered digital
                experiences with React, TypeScript, and modern front-end
                workflows.
              </p>
              <p className="about-paragraph">
                I enjoy creating clean, practical products that balance user
                needs with business goals, and I am especially interested in
                artificial intelligence, accessibility, and thoughtful product
                design.
              </p>

            </article>
          </div>
        </section>

        
        <section>
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
        </section>

        <section className="section timeline-section" id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={`${item.company}-${item.period}`}>
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

        <section className="section contact-section" id="contact">
          <div className="section-heading contact-heading reveal">
            <p className="eyebrow">Contact</p>
            <p className="contact-intro">
              If you&apos;re looking for a front-end  developer for a
              product, platform, or collaboration, feel free to reach out.
            </p>
          </div>

          <div className="contact-card reveal">
            {contactItems.map((item) => (
              <a
                className="contact-link"
                href={item.href}
                key={item.title}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${item.title}: ${item.value}`}
              >
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-copy">
                  <span className="contact-label">{item.title}</span>
                  <span className="contact-value">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="site-footer reveal">
          <p>Romina Barzamini</p>
          <span>Front-End Developer</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
