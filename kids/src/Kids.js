import React, { useState, useRef } from 'react';
import image1 from './image/1.jpg'; 
import image2 from './image/2.jpg';
import image3 from './image/3.jpg';
import image4 from './image/4.jpg';


function Kids() {
  const numShapes = 10
  ;
  const shapes = [];
  const containerRef = useRef(null);

  const imageUrls = <>
    {/* <img src={image1} />
    <img src={image2} />
    <img src={image3} />
    <img src={image4} /> */}

  </>
  for (let i = 0; i < numShapes; i++) {
    const randomImageUrlIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomImageUrlIndex];
    shapes.push(
      <div
        key={i}
        style={{
          backgroundColor: "pink",
          borderRadius: "60%",
          color:"black",
          height: "100px",
          width: "100px",
          marginLeft:"50px",
          marginTop:"20px",
          padding: "10px" 
        }}
      >
        <img
          src={image1} 
          alt={`Shape ${i}`}
          style={{ width: "100%", height: "100%", borderRadius:"50%" }} 
        />
        <b style={{marginRight:"2px",fontSize:"20px"}}>Amimal</b>
      </div>
    );
  }
  return (
    <div style={{ overflow: 'auto', height: '730px', width:"150px",padding:"0%",direction:'rtl'}}>
      <div ref={containerRef} id="scrollable-div" style={{ display: 'flex', flexDirection: 'column', margin:"10px" }}>
        {shapes}
      </div>
    </div>
  );
    
  // const handleScroll = (scrollDirection) => {
  //   const container = containerRef.current;
  //   if (scrollDirection === 'up') {
  //     container.scrollTop -= 10; 
  //   } else if (scrollDirection === 'down') {
  //     container.scrollTop += 10; 
  //   }
  // };

  return (
    <div style={{ overflowY: 'auto', height: '730px', width:"300px",padding:"10px",marginLeft:"15px"}}>
      <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column' }}>
        {shapes}
      </div>
      
    
    </div>
  );
}

export default Kids;
