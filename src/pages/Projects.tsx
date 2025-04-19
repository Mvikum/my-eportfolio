import "./Projects.css";
import colorMatchImg from "../assets/color_match.png";
import LeavesClassifierImg from "../assets/leaves_classifier_pic.png";
import PortfolioImg from "../assets/portfolio_site_pic.png";
import SpringbootImg from "../assets/springboot_pic.png";
import LibAppImg from "../assets/lib_app.png";
import AndroidImg from "../assets/android_logo.png";

type Project = {
  title: string;
  tech: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Guava Multiclass Classifier",
    tech: ["Python", "Pandas", "Keras"],
    link: "https://github.com/Mvikum/multiclass_guava_classifier-",
    image: LeavesClassifierImg,
  },
  {
    title: "AI-Powered Interior Wall Color Matching Tool",
    tech: ["Flutter", "Firebase", "OpenCV"],
    link: "https://github.com/CharithaAdikari/colormatch-flutter-app",
    image: colorMatchImg,
  },
  {
    title: "Springboot Backend",
    tech: ["Java", "Springboot"],
    link: "https://github.com/Mvikum/springboot-api/tree/charitha",
    image: SpringbootImg,
  },
  {
    title: "Library Management Mobile App",
    tech: ["Java", "SQLite Database"],
    link: "https://github.com/Mvikum/library_management_system_CRUD",
    image: LibAppImg,
  },
  {
    title: "Personal Wallet",
    tech: ["Java", "SQLite Database"],
    link: "https://github.com/Mvikum/walletapp",
    image: AndroidImg,
  },
  {
    title: "Portfolio web site",
    tech: ["HTML", "PHP", "CSS"],
    link: "https://github.com/Mvikum/mvikumport.github.io",
    image: PortfolioImg,
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
