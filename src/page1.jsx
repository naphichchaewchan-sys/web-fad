import React, { StrictMode } from 'react';
import './page1.css';
import TopBar from './GUI/topBar.jsx';
import Video from './GUI/video.jsx';

function Page1() {
       return (
       <StrictMode>
              <TopBar />
              <Video />
       </StrictMode>
       );
}

export default Page1;
