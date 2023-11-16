import React from 'react';
import SlickTable from '../SlickTable';
import '../../App.css';
import '../Home.css';
import HomeBody from '../HomeBody';
import HomeProfile from '../HomeProfile';

//synopsis on myself and current status
//include contact information

//give a breakdown as to what can be found here

//include a changelog here

function Home() {
  return (
    <>
      <div className="main">
        <div id="wrapper">
            <div className="content">
              <HomeBody />
            </div>
            <div className="profile">
              <HomeProfile />
            </div>
          </div>
      </div>
      <div className="main">
      <div className="changelog">
          <h3>CHANGELOG</h3>
          <p>
            20/07/2023 - personal resume website V1 completed: simple react website with focus only on deploying core details to gitpage (simple layout, no grid, no special data formating)
          </p>
          <p>
            16/11/2023 - personal resume website V1.1 completed: updated for additional mobile formatting, added in gallery, minor code edits, added additional images.
          </p>
        </div>
      </div>
      <div className="bottom">
        <h2>PREVIEW OF GALLERY</h2>
        <SlickTable />
      </div>
    </>
  );
}

export default Home;
