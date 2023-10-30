import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
          <div className='text1 rounded float-start blue-text'>
            It is in a reassuring setting and a stimulating educational environment that young students are invited to develop their curiosity, open up to the world and acquire the first educational foundations. A dynamic team of teachers wishes to transmit the taste of knowledge to children, in an atmosphere of respect, trust, and simplicity.<br /><br />
            We encourage students to give the best of themselves while taking into account their starting point and ensuring that they can thrive intellectually, physically, and morally.<br />
            Throughout the year, the diversity of educational projects and activities allows our students to develop their autonomy, self-control, and sense of endeavor!
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
        <img className='img1 img-fluid rounded float-end' src='pictures/Img1.png' alt="img" />
        </div>
      </div>

      <div className='text2'>
        <h2>The pluses of our EYFS</h2>
      </div>
      <hr className='line'/>
      <div className="image-gallery">
        <div className="row">
          <div className="col-2 images">
            <div className="image-container">
              <img className='img-fluid' src='pictures/green.png' alt="img" />
              <img className='center-icon' src='icons/Classroom.png' alt="icon" />
              <p>Great emphasis on teaching English</p>
            </div>
          </div>
          <div className="col-2 images">
            <div className="image-container">
              <img className='img-fluid' src='pictures/yellow.png' alt="img" />
              <img className='center-icon' src='icons/icon2.png' alt="icon" />
              <p>British international Education</p>
            </div>
          </div>
          <div className="col-2 images">
            <div className="image-container">
              <img className='img-fluid' src='pictures/red.png' alt="img" />
              <img className='center-icon' src='icons/School.png' alt="icon" />
              <p>5-days school week</p>
            </div>
          </div>
          <div className="col-2 images">
            <div className="image-container">
              <img className='img-fluid' src='pictures/blue.png' alt="img" />
              <img className='center-icon' src='icons/Pilates.png' alt="icon" />
              <p>Syllabic method</p>
            </div>
          </div>
          <div className="col-2 images">
            <div className="image-container">
              <img className='img-fluid' src='pictures/orange.png' alt="img" />
              <img className='center-icon' src='icons/City Bus.png' alt="icon" />
              <p>Outdoor educational trips</p>
            </div>
          </div>
          <div className="col-2 images">
            <div className="image-container">
              <img className='img-fluid' src='pictures/purple.png' alt="img" />
              <img className='center-icon' src='icons/Airport.png' alt="icon" />
              <p>Overseas Cultural trips</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text2'>
        <h2>ALWAYS GUIDED BY OUR VALUES</h2>
      </div>
      <hr className='line'/>

    </div>
  );
}

export default App;
