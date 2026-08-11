import { skills } from "../../data/portfolio";

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools I reach for daily.</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
