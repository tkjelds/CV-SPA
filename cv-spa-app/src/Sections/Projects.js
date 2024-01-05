import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { CardActionArea } from '@mui/material';
import profile_picture from "./img/Profile_picture_pixelart.png"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const ProjectsList = () => {
  const projects = [
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
    width: 400,
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
            <CardContent sx={{}}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
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
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
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
