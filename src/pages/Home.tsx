import profilePic from "../assets/profile_pic_2.png";
import gmailLogo from "../assets/gmail-logo.png";
import githubLogo from "../assets/github-logo.svg";
import facebookLogo from "../assets/facebook-logo-big.webp";
import LinkedInLogo from "../assets/linkedin-logo.png";
import WhatsappLogo from "../assets/whatsapp_logo.webp";

import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          width="300px"
          height="250px"
        />
        <h1 className="home-title">Vikum Dharmasinghe</h1>
        <p className="home-contact">
          📧 vikumdharmasinghe@gmail.com | 📞 +94 765609838
        </p>
        {/* Contact Buttons */}
        <div className="contact-buttons">
          <a
            href="mailto:vikumdharmasinghe@gmail.com"
            className="contact-button"
            title="Email"
          >
            <img src={gmailLogo} alt="Gmail" />
            Email
          </a>
          <a
            href="https://wa.me/+94716757180"
            target="_blank"
            className="contact-button"
            title="Call"
          >
            <img src={WhatsappLogo} alt="WhatsApp" />
            WhatsApp
          </a>
          <a
            href="https://github.com/Mvikum"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            title="GitHub"
          >
            <img src={githubLogo} alt="Github" />
            GitHub
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009989340193"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            title="Facebook"
          >
            <img src={facebookLogo} alt="Facebook" />
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/manuwendra-vikum"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            title="Facebook"
          >
            <img src={LinkedInLogo} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        <p className="home-description">
          I'm an undergraduate passionate about the Software Development. I love
          learning new things, building creative projects, and exploring
          technology that makes a difference.
        </p>
        <div>
          <p className="home-description">
            I am also interested about AI and machine learning, which is very
            fun to learn.
          </p>
        </div>
      </div>
      <div className="div-body">
        <div id="education-div">
          <h2>My Education</h2>
          <table>
            <tr>
              <td>2021 - Present</td>
              <td>Bachelor of Science in Information Technology</td>
              <td>Rajarata University of Sri Lanka</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>
                G. C. E. Advanced Level - Commerce Stream Obtained AAB Passes
                with Z Score of 1.71
              </td>
              <td>Maliyadeva College</td>
            </tr>
          </table>
        </div>
        <div id="softskills-div">
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication</li>
            <li>Active Listner</li>
            <li>Teamwork</li>
            <li>Cooperative</li>
          </ul>
        </div>
      </div>
    </>
  );
}
