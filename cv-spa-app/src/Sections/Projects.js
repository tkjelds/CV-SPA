import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { CardActionArea } from '@mui/material';
import profile_picture from "./img/Profile_picture_pixelart.png"

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
  return (
    <div className='project_list'>
      {projects.map((project) => (
        <Card sx={{ aspectRatio: 1 / 1 }}>
          <CardActionArea>
            <CardContent sx={{ maxHeight: 100 }}>
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
              src={profile_picture}
              alt="alt-picture"
            />
          </CardActionArea>
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
