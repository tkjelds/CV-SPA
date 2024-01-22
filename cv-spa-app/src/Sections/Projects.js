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
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",

      //modal_title: ,
      //modal_desc: ,
      //modal_tech: ,
      //modal_link: 
    },
    {
      id: "scooterSharing",
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",

    },
    {
      id: "kmd",
      title: "kmd",
      desc: "Collaborative work",

    },
    {
      id: "dk_map",
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",

    },
    {
      id: "geocache",
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",

    },
    {
      id: "itforundersøgelse",
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",

    },

  ]

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='project_list'>
      {projects.map((project) => (
        <Card sx={{ backgroundColor: "white" }}>
          <CardActionArea onClick={handleOpen} sx={{ aspectRatio: 1 / 1 }}>
            <CardContent>
              <h2 className='card_title'>
                {i18n.t("section.projects." + project.id + ".title")}
              </h2>
              <p className='card_desc'>
                {i18n.t("section.projects." + project.id + ".card_description")}
              </p>
            </CardContent>
          </CardActionArea>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <div className='modal_box'>
              <div className='right_modal'>
                <h1 className='modal_title'>{project.title}</h1>
                {i18n.t("section.projects." + project.id + ".modal_description")}
              </div>
              <div className='left_modal'>
                <div className='tech_stack'>
                  <h1 className='modal_title'>Tech stack</h1>
                  <ul className='tech_stack_modal'>
                    <li>c#</li>
                    <li>github</li>
                    <li>fisk</li>
                    <li>fisk</li>
                    <li>fisk</li>
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
        </Card>
      ))
      }
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
