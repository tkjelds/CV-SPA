import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { CardActionArea } from '@mui/material';
import profile_picture from "./img/Profile_picture_pixelart.png"
import Modal from '@mui/material/Modal';
import { Height } from '@mui/icons-material';
const ProjectsList = () => {
  const projects = [
    {
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",
      img: { profile_picture }
      //modal_title: ,
      //modal_desc: ,
      //modal_tech: ,
      //modal_link: 
    },
    {
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",
      img: { profile_picture }
    },
    {
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",
      img: { profile_picture }
    },
    {
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",
      img: { profile_picture }
    },
    {
      title: "Scrum analysis tool at KMD",
      desc: "Collaborative work",
      img: { profile_picture }
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
                {project.title}
              </h2>
              <p className='card_desc'>
                {project.desc}
              </p>
            </CardContent>
          </CardActionArea>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <div className='modal_box'>
              <div className='right_modal'>
                <h1>{project.title}</h1>
                <p>fdslkajfælksdajælfksj lskdaj fælkdsaj fælj læksdajf ælksdjælk f</p>
              </div>
              <div className='left_modal'>
                <div className='tech_stack'>
                  <h1>Tech stack</h1>
                </div>
                <div className='github_link'>
                  <h1>Github</h1>
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
