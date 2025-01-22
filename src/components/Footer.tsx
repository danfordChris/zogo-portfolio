import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../assets/styles/Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <a
          href="https://github.com/danfordChris/"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/danford-chriss-438364240"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="https://x.com/Co24669" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        <a
          href="https://www.instagram.com/royz_chriss/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <p>
        Designed & built by{" "}
        <a
          href="https://github.com/danfordChris/"
          target="_blank"
          rel="noreferrer"
        >
          Danford Chriss
        </a>{" "}
        © {currentYear} with 💜🚘️
      </p>
    </footer>
  );
}

export default Footer;
