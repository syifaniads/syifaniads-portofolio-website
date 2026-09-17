import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

const projects = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Centralized Security Monitoring & Incident Analysis",
    context: "Network Administrator · Universitas Brawijaya",
    outcome: "663,762 alerts investigated",
    summary:
      "Implemented a containerized monitoring environment, traced authentication and integrity events, and turned operational findings into documented infrastructure recommendations.",
    tags: ["Wazuh", "Graylog", "OpenSearch", "MISP", "Docker"],
    href: "https://github.com/syifaniads/wazuh-siem-security-monitoring",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Enterprise Identity Security Lab",
    context: "Cyber Defense Academy · IAM / Active Directory",
    outcome: "AD hardening + IAM lifecycle automation",
    summary:
      "Curated an evidence-backed Windows Server and identity-security lab covering Active Directory provisioning, security auditing, JML lifecycle design, RBAC/SoD, recovery, patching, and automated PowerShell quality checks.",
    tags: ["Active Directory", "PowerShell", "IAM/IGA", "Pester", "GitHub Actions"],
    href: "https://github.com/syifaniads/enterprise-identity-security-lab",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Go4Beyond AI Visa Readiness Platform",
    context: "APIE Advanced Camp · SOI Asia",
    outcome: "11+ local services orchestrated",
    summary:
      "Co-developed a modular proof of concept spanning application, API, storage, database, queue, search, and AI workloads with observable service health and controlled document flows.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Celery", "MinIO"],
    href: "https://github.com/syifaniads/go4beyond-ai-visa-platform",
  },
  {
    number: "04",
    icon: FileSearch,
    title: "OJS Vulnerability Assessment",
    context: "DevSecOps Team Project",
    outcome: "4 personally validated findings",
    summary:
      "Combined static and dynamic testing with manual validation, documented CVSS-scored findings, and contributed to a 15-finding team risk register with prioritized remediation.",
    tags: ["Semgrep", "OWASP ZAP", "CVSS v3.1", "OWASP Top 10", "Docker"],
    href: "https://github.com/syifaniads/ojs-devsecops-security-assessment",
  },
  {
    number: "05",
    icon: Network,
    title: "Enterprise Network Security Lab",
    context: "GNS3 / pfSense Infrastructure Lab",
    outcome: "Routing, segmentation, firewall, VPN & DNS controls",
    summary:
      "Designed and documented a segmented enterprise-style lab with VLANs, OSPF, switching redundancy, firewall/NAT/VPN policy, DNS resilience, configuration evidence, and automated static validation of retained network artifacts.",
    tags: ["GNS3", "pfSense", "OSPF", "VLAN", "VPN"],
    href: "https://github.com/syifaniads/enterprise-network-security-gns3-lab",
  },
  {
    number: "06",
    icon: Boxes,
    title: "Go Reserve DevSecOps Platform",
    context: "Collaborative DevSecOps Project",
    outcome: "CI/CD, containers, deployment & observability evidence",
    summary:
      "Curated a collaborative room-reservation platform around its delivery path: application build, Jenkins pipeline, container publishing, deployment architecture, security boundaries, monitoring, provenance, and production-gap analysis.",
    tags: ["Jenkins", "Docker", "PostgreSQL", "AWS", "DevSecOps"],
    href: "https://github.com/syifaniads/go-reserve-devsecops-platform",
  },
];

const experiences = [
  {
    dates: "Jan – Jul 2026",
    role: "Teaching Assistant · APIE Class #08",
    company: "SOI Asia · Remote, Asia-Pacific",
    detail:
      "Supported Internet engineering lectures and hands-on sessions, clarified technical questions, and guided network operations exercises across a multicultural cohort.",
  },
  {
    dates: "Feb – Jun 2026",
    role: "Laboratory Teaching Assistant · Advanced AI",
    company: "Faculty of Computer Science, Universitas Brawijaya",
    detail:
      "Diagnosed Python, environment, and dependency issues while guiding structured implementation and practical problem solving.",
  },
  {
    dates: "Aug – Dec 2025",
    role: "Network Administrator · Part-time Student Employee",
    company: "Faculty of Computer Science, Universitas Brawijaya",
    detail:
      "Supported Linux-based network operations, endpoint troubleshooting, router and switch configuration, monitoring, incident analysis, and technical documentation.",
  },
];

const skillGroups = [
  {
    title: "Support & Operations",
    items: ["Incident investigation", "Log analysis", "Service monitoring", "Technical documentation", "User guidance"],
  },
  {
    title: "Security",
    items: ["SIEM", "Wazuh", "OWASP Top 10", "CVSS", "Vulnerability assessment", "MITRE ATT&CK"],
  },
  {
    title: "Infrastructure",
    items: ["Linux", "Docker", "Kubernetes", "AWS EC2", "Nginx", "Prometheus", "Grafana"],
  },
  {
    title: "Programming & Data",
    items: ["Python", "Bash", "SQL", "FastAPI", "PostgreSQL", "Redis", "REST APIs", "JSON"],
  },
];

const recognitions = [
  { title: "ICANN87 Fellow", proof: "1 of 40 selected from 763 applicants across 34 countries", year: "2026" },
  { title: "APNGCamp18 Fellow", proof: "1 of 46 fellows selected across the Asia-Pacific region", year: "2026" },
  { title: "APAN 61 Fellow", proof: "Delivered an invited presentation during the SOI Asia APIE session", year: "2026" },
  { title: "APNIC 60 Youth Fellow", proof: "1 of 9 Youth Fellows, representing Indonesia", year: "2025" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{children}</span>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to top">
          SA
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:syfaads16@student.ub.ac.id">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Cybersecurity · Infrastructure · Technical Support</p>
          <h1>
            Syifani Adillah
            <br />
            <span>Salsabila.</span>
          </h1>
          <p className="hero-summary">
            I build observable, secure infrastructure and turn technical incidents into clear, actionable evidence.
          </p>
          <div className="hero-meta">
            <span><MapPin size={17} aria-hidden="true" /> Malang, Indonesia</span>
            <span><GraduationCap size={18} aria-hidden="true" /> B.Informatics Engineering · Dec 2026</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="/Syifani_Adillah_Salsabila_Resume.pdf" download>
              Download résumé <ArrowDownToLine size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Professional snapshot">
          <div className="status"><span /> Open to part-time and graduate opportunities</div>
          <div className="panel-code">
            <p><span>focus</span> = network_security + cloud_infrastructure</p>
            <p><span>approach</span> = observe → investigate → document</p>
            <p><span>working_in</span> = Python · Linux · Containers</p>
          </div>
          <div className="panel-footer">
            <a href="mailto:syfaads16@student.ub.ac.id"><Mail size={18} /> Email</a>
            <a href="https://www.linkedin.com/in/syifaniadillahsalsabila/" target="_blank" rel="noreferrer"><Link2 size={18} /> LinkedIn</a>
            <a href="https://github.com/syifaniads" target="_blank" rel="noreferrer"><Link2 size={18} /> GitHub</a>
          </div>
        </aside>
      </section>

      <section className="metrics" aria-label="Selected metrics">
        <div><strong>663,762</strong><span>security alerts analyzed</span></div>
        <div><strong>11+</strong><span>containerized services</span></div>
        <div><strong>4</strong><span>personally validated findings</span></div>
        <div><strong>3.75</strong><span>GPA on a 4.00 scale</span></div>
      </section>

      <section className="section-shell" id="work">
        <SectionLabel>01 · Selected work</SectionLabel>
        <div className="section-intro">
          <h2>Evidence over adjectives.</h2>
          <p>Projects selected for relevance to security operations, cloud infrastructure, DevOps, IAM, networking, and technical support. Every card links directly to reviewable technical evidence.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-icon"><Icon size={24} aria-hidden="true" /></div>
                <div className="project-copy">
                  <p className="project-context">{project.context}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a className="button button-secondary" href={project.href} target="_blank" rel="noreferrer">
                    Review technical evidence <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
                <div className="project-outcome"><CheckCircle2 size={18} aria-hidden="true" />{project.outcome}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <SectionLabel>02 · Experience</SectionLabel>
        <div className="experience-layout">
          <div className="experience-heading">
            <BriefcaseBusiness size={28} aria-hidden="true" />
            <h2>Technical depth,<br />human communication.</h2>
            <p>Experience across infrastructure operations, technical education, and Asia-Pacific Internet communities.</p>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.role}>
                <p className="timeline-date">{experience.dates}</p>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p className="timeline-detail">{experience.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="about">
        <SectionLabel>03 · Skills & recognition</SectionLabel>
        <div className="capability-grid">
          <div className="skill-column">
            <div className="subsection-heading"><TerminalSquare size={24} /><h2>Technical capabilities</h2></div>
            <div className="skill-list">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="recognition-column">
            <div className="subsection-heading"><Award size={24} /><h2>Selected recognition</h2></div>
            <div className="recognition-list">
              {recognitions.map((item) => (
                <article key={item.title}>
                  <span>{item.year}</span>
                  <div><h3>{item.title}</h3><p>{item.proof}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="education-band">
        <div>
          <p className="eyebrow"><span /> Education & leadership</p>
          <h2>Grounded in engineering.<br />Practiced through ownership.</h2>
        </div>
        <div className="education-details">
          <article><GraduationCap size={22} /><div><h3>Universitas Brawijaya</h3><p>Bachelor of Informatics Engineering · GPA 3.75/4.00 · U-GO Scholarship Awardee</p></div></article>
          <article><BriefcaseBusiness size={22} /><div><h3>Head of Business Department</h3><p>Managed partnerships with 12 companies and led initiatives generating IDR 20 million in net profit.</p></div></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow"><span /> Let&apos;s work together</p>
        <h2>Need someone who can investigate the system—and explain what happened?</h2>
        <p>Open to technical support, network, cloud infrastructure, DevOps, and cybersecurity opportunities.</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:syfaads16@student.ub.ac.id">Email Syifani <Mail size={18} /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/syifaniadillahsalsabila/" target="_blank" rel="noreferrer">View LinkedIn <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Syifani Adillah Salsabila</span>
        <span>Built around verified work and measurable outcomes.</span>
      </footer>
    </main>
  );
}
