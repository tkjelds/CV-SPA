import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { CardActionArea } from '@mui/material';
import profile_picture from "./img/Profile_picture_pixelart.png"
import Modal from '@mui/material/Modal';
import { FaGithub } from 'react-icons/fa';
import i18n from '../i18n';

const ProjectsList = () => {
  const projects = [
    {
      id: "mcts",
      modal_link: "https.test.com",
      techStack: ["fi2sk", "test", "test"]

      //modal_title: ,
      //modal_desc: ,
      //modal_tech: ,

    },
    {
      id: "scooterSharing",
      modal_link: "https.test.com",
      techStack: ["fisk", "test", "test", "kristus"]

    },
    {
      id: "kmd",
      modal_link: "https.test.com",
      techStack: ["fisk", "test", "test"]

    },
    {
      id: "dk_map",
      modal_link: "https.test.com",
      techStack: ["fisk", "test", "test"]

    },
    {
      id: "geocache",
      modal_link: "https.test.com",
      techStack: ["fisk", "test", "test"]
    },
    {
      id: "itforundersøgelse",
      modal_link: "https.test.com",
      techStack: ["fisk", "test", "test"]
    },
    {
      id: "spa",
      modal_link: "https.test.com",
      techStack: ["fisk", "test", "test"]
    },

  ]

  const [open, setOpen] = React.useState(false);
  const handleOpen = (clickedProject) => {
    setOpen(true);
    setSelectedProject(clickedProject);
  }
  const handleClose = () => setOpen(false);
  const [selectedProject, setSelectedProject] = React.useState({
    id: "itforundersøgelse",
    modal_link: "https.test.com",
    techStack: ["fisk", "test", "test"]
  });

  return (
    <div className='project_list'>
      {projects.map((project) => (
        <Card sx={{ backgroundColor: "white" }}>
          <CardActionArea onClick={() => handleOpen(project)} sx={{ aspectRatio: 1 / 1 }}>
            <CardContent>
              <h2 className='card_title'>
                {i18n.t("section.projects." + project.id + ".title")}
              </h2>
              <p className='card_desc'>
                {i18n.t("section.projects." + project.id + ".card_description")}
              </p>
            </CardContent>
          </CardActionArea>

        </Card>
      ))
      }<Modal
        open={open}
        onClose={handleClose}
      >
        <div className='modal_box'>
          <div className='right_modal'>
            <h1 className='modal_title'>{i18n.t("section.projects." + selectedProject.id + ".title")}</h1>
            {i18n.t("section.projects." + selectedProject.id + ".modal_description")}
          </div>
          <div className='left_modal'>
            <div className='tech_stack'>
              <h1 className='modal_title'>Tech stack</h1>
              <ul className='tech_stack_modal'>
                {selectedProject.techStack.map((tech) => (
                  <li> {tech}</li>
                ))}
              </ul>
            </div>
            <div className='github_link'>
              <a href='https://github.com/tkjelds' className='modal_icon'>
                {<FaGithub />}
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div >
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
