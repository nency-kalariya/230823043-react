import React from 'react';
import Kids from './Kids'; // Import your Kids component
import Kids2 from './Kids2';
import image1 from './image/1.jpg'; // Import your images
import image2 from './image/2.jpg';
import image3 from './image/3.jpg';
import image4 from './image/4.jpg';

function App() {
  return (
    <div style={{display:"flex",flexDirection:"row",backgroundColor:"orange",width:"100%" , height:"100%"}}>
      <Kids />
      <Kids2/>
    </div>
  );
}

export default App;

