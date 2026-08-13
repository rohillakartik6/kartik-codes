import { certifications, education, profile } from "../../data/portfolio";
import profileImg from "../../images/profile.png";

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Code that reads clean and ships with intent.</h2>
        </div>

        <div className="about-grid">
          <img
            className="about-portrait"
            src={profileImg}
            alt={`${profile.name}`}
            width={220}
            height={220}
          />
          <div className="about-copy">
            <p className="about-lead">{profile.summary}</p>
            <p className="about-side">
              Outside work I travel, swim, train, and keep learning — including through{" "}
              <a href={profile.links.youtube} target="_blank" rel="noreferrer">
                Kartik Codes
              </a>{" "}
              on YouTube. Comfortable working in English and Hindi.
            </p>
          </div>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article key={item.degree} className="education-item">
              <h3>{item.degree}</h3>
              <p>
                {item.school}
                {item.focus ? ` · ${item.focus}` : ""}
              </p>
              <span>{item.period}</span>
            </article>
          ))}
        </div>

        <div className="cert-block">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
