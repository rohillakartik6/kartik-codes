import { projects } from "../../data/portfolio";

function Projects() {
  return (
    <section className="section work" id="work">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects from the bench and beyond.</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title} className="project-row">
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
