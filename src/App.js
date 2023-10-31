import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6">
          <p className='text1 rounded float-start blue-text'>
            It is in a reassuring setting and a stimulating educational environment that young students are invited to develop their curiosity, open up to the world and acquire the first educational foundations. A dynamic team of teachers wishes to transmit the taste of knowledge to children, in an atmosphere of respect, trust, and simplicity.<br /><br />
            We encourage students to give the best of themselves while taking into account their starting point and ensuring that they can thrive intellectually, physically, and morally.<br />
            Throughout the year, the diversity of educational projects and activities allows our students to develop their autonomy, self-control, and sense of endeavor!
          </p>
        </div>
        <div className="col-md-6">
          <div className="image1" >
            <img className='img1 rounded float-end' src='pictures/Img1.png' alt="img" />
          </div>
        </div>
      </div>

      <div className='text2'>
        <h2>The pluses of our EYFS</h2>
        <hr className='line1' />
      </div>
      <div className="image-gallery">
        <div className="row">
          <div className="col-md-2">
            <div className="image-container green">
              <img className='center-icon' src='icons/Classroom.png' alt="icon" />
            </div>
            <div className='para-container'>
              <p>Great emphasis on teaching English</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="image-container yellow">
              <img className='center-icon' src='icons/icon2.png' alt="icon" />
            </div>
            <div className='para-container'>
              <p>British international Education</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="image-container red">
              <img className='center-icon' src='icons/School.png' alt="icon" />
            </div>
            <div className='para-container'>
              <p>5-days school week</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="image-container blue">
              <img className='center-icon' src='icons/Pilates.png' alt="icon" />
            </div>
            <div className='para-container'>
              <p>Syllabic method</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="image-container orange">
              <img className='center-icon' src='icons/City Bus.png' alt="icon" />
            </div>
            <div className='para-container'>
              <p>Outdoor educational trips</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="image-container purple">
              <img className='center-icon' src='icons/Airport.png' alt="icon" />
            </div>
            <div className='para-container'>
              <p>Overseas Cultural trips</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text2'>
        <h2>ALWAYS GUIDED BY OUR VALUES</h2>
        <hr className='line2' />
      </div>

    </Container>
  );
}

export default App;
