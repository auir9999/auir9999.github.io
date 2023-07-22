import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Data from './localData/ProjectDetail.json';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import {  styled ,createTheme, ThemeProvider } from '@mui/material/styles';
import './Card.css';

//recommendation is to square card everything, be brief, then have detailed component mount for each.
//detailed: PURPOSE,PROBLEM STATEMENT,PROPOSED SOLUTION, THINGS LEARNED, TECHNOLOGIES USED
//brief: NAME, SYNOPSIS, DATE, TECHNOLOGIES USED -> create link and details button (double up tech used)
//synopsis example: This is my capstone project in creating a wiki style page for a phone game that had no localized translation. We built a backend to frontend framework and deployed it on Heroku and is accessible online currently.

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  verticalAlign: 'middle',
  display: 'flex',
  justify: 'flex-end',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8686B7',
      dark: '#8686B7',
    },
    background: {
      default: '#7B889C',
      paper: '#5c5a66',
    },
  },
});

export default function ProjectCard() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [expandedId, setExpandedId] = React.useState(-1);
  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  return (
      <ThemeProvider theme={theme}>
      <div className="display-linebreak">{
        Data.map((project, i) => (
          <Box container sx={{
            minWidth: 275, maxWidth: '80%',
            border: 1, borderRadius: '5px',
            mx: 'auto', my: '5px', 
            flexWrap:'wrap', alignItems: 'stretch'
          }}>
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Typography variant="h4" component="div">
                    <p key={project.name} value={project.name}>
                      {project.name}
                    </p>
                  </Typography>
                  <Typography variant="h6">SYNOPSIS</Typography>
                  <Typography variant="body2">
                    <p key={project.synopsis} value={project.synopsis}>
                      {project.synopsis}
                    </p>
                  </Typography>
                  <Typography variant="h6">TECH USED</Typography>
                  <Typography variant="body2">
                    <p key={project.tech} value={project.tech}>
                      {project.tech}
                    </p>
                  </Typography>
                  <Typography variant="h6">DATE COMPLETED</Typography>
                  <Typography variant="body2">
                    <p key={project.date} value={project.date}>
                      {project.date}
                    </p>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    size="small"
                    key={project.link}
                    onClick={() => openInNewTab(project.link)}
                    variant="contained" 
                    style={{
                      backgroundColor: "#858196",
                  }}
                  >
                    LINK
                  </Button>
                  <ExpandMore
                    expand={expandedId === i}
                    onClick={() => handleExpandClick(i)}
                    aria-expanded={expandedId === i}
                    aria-label="show more"
                    justify="flex-end"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h6">PURPOSE</Typography>
                    <Typography variant="body2">
                      <p key={project.purpose} value={project.purpose}>
                        {project.purpose}
                      </p>
                    </Typography>
                    <Typography variant="h6">PROBLEM STATEMENT</Typography>
                    <Typography variant="body2">
                      <p key={project.problem} value={project.problem}>
                        {project.problem}
                      </p>
                    </Typography>
                    <Typography variant="h6">PROPOSED SOLUTION</Typography>
                    <Typography variant="body2">
                      <p key={project.solution} value={project.solution}>
                        {project.solution}
                      </p>
                    </Typography>
                    <Typography variant="h6">THINGS LEARNED</Typography>
                    <Typography variant="body2">
                      <p key={project.learned} value={project.learned}>
                        {project.learned}
                      </p>
                    </Typography>
                  </CardContent>
                </Collapse>
              </React.Fragment>
            </Card>
          </Box>
        ))
      }</div>
    </ThemeProvider>
  );
}