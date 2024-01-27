import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import i18n from "../i18n";
import profile_picture from "./img/Profile_picture_pixelart.png";

const ProjectsList = () => {
  const projects = [
    {
      id: "mcts",
      modalLink: "https://github.com/tkjelds/Barbajuan",
      techStack: [".Net", "C#", "Xunit", "Git", "Github Actions"],
    },
    {
      id: "scooterSharing",
      modalLink: "https://github.com/tkjelds/ScooterSharing",
      techStack: [
        "Kotlin",
        "Android studio",
        "JUnit",
        "Google firebase",
        "Css",
      ],
    },
    {
      id: "kmd",
      modalLink: "https://www.kmd.dk/",
      techStack: [".Net", "F#", "Kubernetes", "Docker", "GraphQL", "Scrum"],
    },
    {
      id: "dk_map",
      modalLink: "https://github.com/tkjelds/RouteFinding",
      techStack: ["Java", "JavaFX", "Git", "XML"],
    },
    {
      id: "geocache",
      modalLink: "https://github.com/tkjelds/GoChaching",
      techStack: ["Kotlin", "Android studio", "JUnit", "Room"],
    },
    {
      id: "spa",
      modalLink: "https://github.com/tkjelds/CV-SPA.git",
      techStack: ["React", "Javascript", "Css", "I18n", "Mui"],
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = (clickedProject) => {
    setOpen(true);
    setSelectedProject(clickedProject);
  };
  const handleClose = () => setOpen(false);
  const [selectedProject, setSelectedProject] = React.useState({
    id: "null",
    modalLink: "null",
    techStack: ["null"],
  });

  return (
    <div className="project_list">
      {projects.map((project) => (
        <div className="card">
          <Card>
            <CardActionArea
              onClick={() => handleOpen(project)}
              sx={{ aspectRatio: 1 / 1 }}
            >
              <CardContent>
                <h2 className="card_title">
                  {i18n.t("section.projects." + project.id + ".title")}
                </h2>
                <p className="card_desc">
                  {i18n.t(
                    "section.projects." + project.id + ".card_description"
                  )}
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
      <Modal open={open} onClose={handleClose}>
        <div className="modal_box">
          <div className="right_modal">
            <h1 className="modal_title">
              {i18n.t("section.projects." + selectedProject.id + ".title")}
            </h1>
            {i18n.t(
              "section.projects." + selectedProject.id + ".modal_description"
            )}
          </div>
          <div className="left_modal">
            <div className="tech_stack">
              <h1 className="modal_title">Tech stack</h1>
              <ul className="tech_stack_modal">
                {selectedProject.techStack.map((tech) => (
                  <li> {tech}</li>
                ))}
              </ul>
            </div>
            <div className="github_link">
              <a href={selectedProject.modalLink} className="modal_icon">
                {<FaGithub />}
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

function Projects() {
  return (
    <div className="projects_section right_section">
      <ProjectsList />
    </div>
  );
}

export default Projects;
