import { profile } from "../../data/portfolio";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          © {year} {profile.name}. Built with React.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
