import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Data from './localData/ResumeDetail.json';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Card.css';

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

export default function ResumeCard() {
  return (
    <div className="display-linebreak">{
      Data.map((resume) => (
        <ThemeProvider theme={theme}>
        <Box sx={{ 
            minWidth: 275, maxWidth: '80%',
            border:1, borderRadius:'5px', 
            mx:'auto', my:'5px'
          }}>
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <Typography variant="h5" component="div">
                  <p key={resume.name} value={resume.name}>
                    {resume.name}
                  </p>
                </Typography>
                <Typography variant="body2">
                  <p key={resume.detail} value={resume.detail}>
                    {resume.detail}
                  </p>
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
        </Box>
        </ThemeProvider>
      ))
    }</div>
  );
}