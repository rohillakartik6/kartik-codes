import { useState } from "react";
import { profile } from "../../data/portfolio";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (!response.ok) throw new Error("Submit failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something solid.</h2>
          <p className="section-lede">
            Open to roles and collaborations across C# .NET, React.js, Azure, and full-stack
            product work.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-channels">
            <a href={profile.links.email}>{profile.email}</a>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.youtube} target="_blank" rel="noreferrer">
              YouTube · Kartik Codes
            </a>
          </div>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="visually-hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <label>
              Name
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>

            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="form-status is-success" role="status">
                Thanks — I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status is-error" role="alert">
                Something went wrong. Email me directly at {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
