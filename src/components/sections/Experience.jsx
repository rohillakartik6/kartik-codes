import { experience } from "../../data/portfolio";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Where I’ve built and led.</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-period">{job.period}</span>
                <span className="timeline-location">{job.location}</span>
              </div>
              <div className="timeline-body">
                <h3>
                  {job.role}
                  <span> @ {job.company}</span>
                </h3>
                <ul>
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
