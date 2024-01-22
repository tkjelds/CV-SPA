import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { CardActionArea } from '@mui/material';
import profile_picture from "./img/Profile_picture_pixelart.png"
import Modal from '@mui/material/Modal';
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


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className='project_list'>
      {projects.map((project) => (
        <Card sx={{ aspectRatio: 1 / 1, minHeight: 150 }}>
          <CardActionArea onClick={handleOpen}>
            <CardContent height={500}>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.desc}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height={150}
              image={profile_picture}
              alt="alt-picture"
            />
          </CardActionArea>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <div className='modal_box'>
              <div className='right_modal'>
                <p>fdslkajfælksdajælfksj lskdaj fælkdsaj fælj læksdajf ælksdjælk f</p>
              </div>
              <div className='left_modal'>
                <p>saflkæds</p>
                <p>saflkæds</p>
              </div>
            </div>
          </Modal>
        </Card>
      ))}
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
