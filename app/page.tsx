import Image from "next/image";
import ProjectForm from "@/components/ProjectForm";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-container nav">
          <a className="brand" href="/">
            <Image
              className="brand-logo"
              src="/vertra-logo.png"
              alt="Vertra Technologies"
              width={48}
              height={48}
              priority
            />

            <span className="brand-name">VERTRA TECHNOLOGIES</span>
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#insights">Insights</a>

            <a href="#contact" className="nav-contact">
              Start a Project
              <span>-&gt;</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="site-container hero-container">
            <div className="hero-left">
              <div className="hero-eyebrow">
                TECHNOLOGY, <span>REIMAGINED.</span>
              </div>

              <h1 className="hero-heading">
                REINVENT YOUR <span>WORLD.</span>
              </h1>

              <p className="hero-description">
                We design and build modern websites, software, mobile and web
                apps, AI systems, automation and digital products that help
                businesses operate smarter, grow faster and prepare for what
                comes next.
              </p>

              <div className="hero-path">
                WEB
                <span>-&gt;</span>
                SOFTWARE
                <span>-&gt;</span>
                APPS
                <span>-&gt;</span>
                AI
                <span>-&gt;</span>
                AUTOMATION
              </div>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  START A PROJECT
                  <span>-&gt;</span>
                </a>

                <a href="#work" className="button button-secondary">
                  VIEW OUR WORK
                  <span>-&gt;</span>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="tech-image-panel">
                <Image
                  className="tech-hero-image"
                  src="/tech-hero.jpg"
                  alt="Futuristic global technology network"
                  fill
                  priority
                  sizes="(max-width: 1050px) 100vw, 58vw"
                />

                <div className="tech-image-overlay" />
                <div className="tech-image-grid" />
                <div className="tech-image-glow" />

                <div className="tech-panel-label top-left">
                  VERTRA / FUTURE SYSTEMS
                </div>

                <div className="tech-panel-label top-right">
                  SYSTEM 01
                </div>

                <div className="tech-info tech-info-one">
                  <span>01</span>
                  AI SYSTEMS
                </div>

                <div className="tech-info tech-info-two">
                  <span>02</span>
                  AUTOMATION
                </div>

                <div className="tech-info tech-info-three">
                  <span>03</span>
                  SOFTWARE + APPS
                </div>

                <div className="tech-info tech-info-four">
                  <span>04</span>
                  DIGITAL PRODUCTS
                </div>

                <div className="tech-panel-bottom">
                  <span>VERTRA TECHNOLOGIES</span>
                  <strong>BUILDING WHAT COMES NEXT.</strong>
                </div>

                <div className="corner corner-one" />
                <div className="corner corner-two" />
                <div className="corner corner-three" />
                <div className="corner corner-four" />
              </div>
            </div>
          </div>
        </section>

        <section className="hero-index">
          <div className="site-container index-grid">
            <div className="index-item">
              <span>01</span>
              <strong>Web + Digital</strong>
            </div>

            <div className="index-item">
              <span>02</span>
              <strong>Software + Apps</strong>
            </div>

            <div className="index-item">
              <span>03</span>
              <strong>Artificial Intelligence</strong>
            </div>

            <div className="index-item">
              <span>04</span>
              <strong>Automation</strong>
            </div>
          </div>
        </section>

        <section className="selected-work" id="work">
          <div className="site-container">
            <div className="work-heading-row">
              <div className="work-heading">
                <div className="work-eyebrow">SELECTED WORK</div>

                <h2>
                  REAL SYSTEMS. REAL <span>IMPACT.</span>
                </h2>

                <p>
                  Software, apps, AI, automation and digital platforms
                  engineered around real business needs.
                </p>
              </div>

              <a href="#work" className="view-all-work">
                VIEW ALL WORK <span>-&gt;</span>
              </a>
            </div>

            <div className="work-grid">
              <article className="work-card">
                <div className="work-image">
                  <Image
                    src="/leados-ai.jpg"
                    alt="LeadOS AI"
                    fill
                    className="work-image-file"
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>

                <div className="work-content">
                  <div className="work-tags">
                    AI + CRM + AUTOMATION + SOFTWARE
                  </div>

                  <h3>LeadOS AI</h3>

                  <p className="work-summary">
                    AI-powered lead intelligence built to qualify opportunities,
                    organize leads and improve sales workflow visibility.
                  </p>

                  <p className="work-detail">
                    Analyze leads, generate discovery questions, assist with
                    follow-up and create proposals from one system.
                  </p>

                  <a href="#contact" className="work-link">
                    EXPLORE WORK <span>-&gt;</span>
                  </a>
                </div>
              </article>

              <article className="work-card">
                <div className="work-image">
                  <Image
                    src="/ai-receptionist.jpg"
                    alt="Vertra AI Receptionist"
                    fill
                    className="work-image-file"
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>

                <div className="work-content">
                  <div className="work-tags">
                    AI + VOICE + CUSTOMER EXPERIENCE
                  </div>

                  <h3>Vertra AI Receptionist</h3>

                  <p className="work-summary">
                    Intelligent customer intake and communication designed to
                    help businesses respond faster.
                  </p>

                  <p className="work-detail">
                    Qualify requests, route conversations and automate
                    repetitive customer interactions.
                  </p>

                  <a href="#contact" className="work-link">
                    EXPLORE WORK <span>-&gt;</span>
                  </a>
                </div>
              </article>

              <article className="work-card">
                <div className="work-image">
                  <Image
                    src="/streaming-platform.jpg"
                    alt="Streaming creator platform"
                    fill
                    className="work-image-file"
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>

                <div className="work-content">
                  <div className="work-tags">
                    STREAMING + CREATOR PLATFORM + MOBILE
                  </div>

                  <h3>VYRALIVE</h3>

                  <p className="work-summary">
                    A creator-first streaming platform concept designed around
                    live content, community and audience engagement.
                  </p>

                  <p className="work-detail">
                    Built around streaming, clipping, discovery and tools that
                    help creators grow their audience.
                  </p>

                  <a href="#contact" className="work-link">
                    EXPLORE WORK <span>-&gt;</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="capabilities-section" id="services">
          <div className="site-container">
            <div className="capabilities-heading">
              <div className="capabilities-eyebrow">CAPABILITIES</div>

              <div className="capabilities-heading-main">
                <h2>
                  BUILT FOR THE NEXT STAGE OF <span>GROWTH.</span>
                </h2>

                <p>
                  We combine design, software, apps, AI and automation to build
                  systems that improve how modern businesses operate.
                </p>
              </div>
            </div>

            <div className="capabilities-grid">
              <article className="capability-card">
                <div className="capability-top">
                  <span>01</span>
                </div>

                <h3>Web + Digital</h3>

                <p>
                  High-quality digital experiences built to establish trust,
                  create opportunity and support business growth.
                </p>

                <ul>
                  <li>Website Design + Development</li>
                  <li>Digital Experiences</li>
                  <li>Landing Pages</li>
                  <li>Performance + Optimization</li>
                </ul>

                <a href="#contact">
                  EXPLORE CAPABILITY <span>-&gt;</span>
                </a>
              </article>

              <article className="capability-card">
                <div className="capability-top">
                  <span>02</span>
                </div>

                <h3>Software + Platforms</h3>

                <p>
                  Custom software and internal systems engineered around how
                  the business actually works.
                </p>

                <ul>
                  <li>Custom Software</li>
                  <li>Internal Tools</li>
                  <li>Dashboards + Portals</li>
                  <li>APIs + Integrations</li>
                </ul>

                <a href="#contact">
                  EXPLORE CAPABILITY <span>-&gt;</span>
                </a>
              </article>

              <article className="capability-card">
                <div className="capability-top">
                  <span>03</span>
                </div>

                <h3>AI + Automation</h3>

                <p>
                  Intelligent systems that reduce repetitive work, improve
                  response and create smarter business workflows.
                </p>

                <ul>
                  <li>AI Assistants</li>
                  <li>Lead Automation</li>
                  <li>Workflow Automation</li>
                  <li>Business Intelligence</li>
                </ul>

                <a href="#contact">
                  EXPLORE CAPABILITY <span>-&gt;</span>
                </a>
              </article>

              <article className="capability-card">
                <div className="capability-top">
                  <span>04</span>
                </div>

                <h3>Apps + Emerging Technology</h3>

                <p>
                  Mobile and web applications plus future-facing products built
                  for new customer experiences and evolving business needs.
                </p>

                <ul>
                  <li>Mobile Apps</li>
                  <li>Web Apps</li>
                  <li>Streaming + Interactive Platforms</li>
                  <li>Prototype Development</li>
                </ul>

                <a href="#contact">
                  EXPLORE CAPABILITY <span>-&gt;</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="site-container">
            <div className="about-grid">
              <div className="about-label">ABOUT VERTRA</div>

              <div className="about-main">
                <h2>
                  WE&apos;RE BUILDING MORE THAN WEBSITES.
                  <br />
                  WE&apos;RE BUILDING SYSTEMS FOR{" "}
                  <span>WHAT&apos;S NEXT.</span>
                </h2>

                <div className="about-content-grid">
                  <p className="about-lead">
                    Vertra Technologies is a technology company focused on
                    designing and engineering modern digital systems that help
                    businesses operate, grow and evolve.
                  </p>

                  <div className="about-copy">
                    <p>
                      Our work spans websites, software, applications, AI,
                      automation and emerging digital platforms.
                    </p>

                    <p>
                      We build solutions around real business needs while
                      developing our own internal products to prove the systems
                      and technologies we believe in.
                    </p>
                  </div>
                </div>

                <div className="about-principles">
                  <div className="about-principle">
                    <span>01</span>
                    <strong>Think Beyond The Website</strong>
                    <p>Digital presence is the beginning, not the end.</p>
                  </div>

                  <div className="about-principle">
                    <span>02</span>
                    <strong>Build Real Systems</strong>
                    <p>Technology should solve real operational problems.</p>
                  </div>

                  <div className="about-principle">
                    <span>03</span>
                    <strong>Design For What&apos;s Next</strong>
                    <p>
                      Build today with tomorrow&apos;s opportunities in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="site-container">
            <div className="process-header">
              <div className="process-label">HOW WE BUILD</div>

              <div className="process-heading">
                <h2>
                  FROM IDEA TO <span>IMPACT.</span>
                </h2>

                <p>
                  A focused process designed to move from business need to
                  working technology without unnecessary complexity.
                </p>
              </div>
            </div>

            <div className="process-grid">
              <article className="process-card">
                <span className="process-number">01</span>

                <div className="process-card-content">
                  <h3>Discover</h3>

                  <p>
                    We learn the business, the problem, the users and the
                    opportunity before deciding what should be built.
                  </p>

                  <div className="process-meta">
                    GOALS / USERS / REQUIREMENTS
                  </div>
                </div>
              </article>

              <article className="process-card">
                <span className="process-number">02</span>

                <div className="process-card-content">
                  <h3>Design</h3>

                  <p>
                    We shape the experience, system architecture and product
                    direction around the goal.
                  </p>

                  <div className="process-meta">
                    UX / UI / SYSTEM DESIGN
                  </div>
                </div>
              </article>

              <article className="process-card">
                <span className="process-number">03</span>

                <div className="process-card-content">
                  <h3>Build</h3>

                  <p>
                    We engineer the product, connect the technology and turn the
                    concept into a working system.
                  </p>

                  <div className="process-meta">
                    DEVELOPMENT / AI / INTEGRATION
                  </div>
                </div>
              </article>

              <article className="process-card">
                <span className="process-number">04</span>

                <div className="process-card-content">
                  <h3>Evolve</h3>

                  <p>
                    We improve the system over time as the business, users and
                    opportunities change.
                  </p>

                  <div className="process-meta">
                    OPTIMIZE / SCALE / EXPAND
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="site-container">
            <div className="contact-top">
              <div className="contact-label">START A PROJECT</div>

              <div className="contact-heading">
                <h2>
                  HAVE AN IDEA?
                  <br />
                  LET&apos;S BUILD WHAT&apos;S <span>NEXT.</span>
                </h2>

                <p>
                  Tell us what you&apos;re building, what problem you&apos;re
                  trying to solve and where you want to go. We&apos;ll start
                  with the opportunity and determine the right technology from
                  there.
                </p>
              </div>
            </div>

            <div className="contact-layout">
              <div className="contact-info">
                <div className="contact-info-block">
                  <span>PROJECTS</span>
                  <p>
                    Websites, software, mobile and web apps, AI systems,
                    automation and emerging digital platforms.
                  </p>
                </div>

                <div className="contact-info-block">
                  <span>APPROACH</span>
                  <p>
                    Every engagement starts with the business problem, not a
                    pre-built package.
                  </p>
                </div>

                <div className="contact-info-block">
                  <span>EMAIL</span>
                  <a href="mailto:vertratechlabs@gmail.com">
                    vertratechlabs@gmail.com
                  </a>
                </div>

                <div className="contact-status">
                  <span className="contact-status-dot" />
                  ACCEPTING NEW PROJECTS
                </div>
              </div>
              <ProjectForm />

             
            </div>
          </div>
        </section>
      </main>
    </>
  );
}