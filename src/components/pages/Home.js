import React from 'react';
import Button from '@mui/material/Button';
import SlickTable from '../SlickTable';
import '../../App.css';
import '../Home.css';
import profile from '../localData/profile.jpg';

//synopsis on myself and current status
//include contact information

//give a breakdown as to what can be found here

//include a changelog here

function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <div className="main">
        <div className="content">
          <h1>Home Page</h1>
          <br />
          <h3>SYNOPSIS</h3>
          <p>
            My name is Ryan Wang, I am a Computer Science Major and this website serves as a central hub for the latest information
            about my skills and projects developed. Currently I am looking for opportunities to apply what I have learned
            and further develop my expertise in various aspects of programming.
          </p>
          <br />
          <h3>TABLE OF CONTENTS</h3>
          <p>
            This webpage was developed using the REACT framework and has been divided into 3 main sections:
            <br />
            &#x2022; HOME PAGE: synopsis on myself, contact information, website breakdown, changelog.
            <br />
            &#x2022; RESUME: education, work experience, general skills, technical skills
            <br />
            &#x2022; PROJECTS: projects completed / in progress, details on projects, link to deployment or repository
          </p>
          <br />
          <h3>CHANGELOG</h3>
          <p>
            20/07/2023 - personal resume website V1 completed: simple react website with focus only on deploying core details to gitpage (simple layout, no grid, no special data formating)
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="profile" class="img-resize" />
          <h3>CONTACT INFORMATION</h3>
          <p>Phone: (647)-546-8998</p>
          <p>Email: ryanitsuwang@hotmail.com</p>
          <Button
            size="small"
            onClick={() => openInNewTab("https://www.linkedin.com/in/ryan-itsu-wang/")}
            variant="contained"
            style={{
              backgroundColor: "#858196",
            }}
          >
            LinkedIn Profile
          </Button>
        </div>
      </div>
      <div className="changelog">

      </div>
      <div className="bottom">
        <h2>PHOTOSHOP RELATED WORK</h2>
        <SlickTable />
      </div>
    </>
  );
}

export default Home;
