import React, { useState, useRef } from 'react';
import image1 from './image/1.jpg'; 
import image2 from './image/2.jpg';
import image3 from './image/3.jpg';
import image4 from './image/4.jpg';
import AudioCard from './AudioCard';
import './CardCSS.css';


function Kids() {
  const numShapes = 10;
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
          borderRadius: "50%",
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
        <b style={{fontSize:"20px"}}>Amimal</b>
      </div>
    );
  }

  const handleScroll = (scrollDirection) => {
    const container = containerRef.current;
    if (scrollDirection === 'up') {
      container.scrollTop -= 10; 
    } else if (scrollDirection === 'down') {
      container.scrollTop += 10; 
    }
  };

  return (
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{height:"500px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div style={{backgroundColor:"orange",height:"300px",width:"400px",border:"5px",borderColor:"black"}}>
        {/* player */}
      <div class="player">
    <div class="imgBx">
      <img src="https://i.ibb.co/Ntw2mgR/luka-chhuppi.png" alt="Luka Chuppi"/>
    </div>
    <audio controls>
      <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg"/>
    </audio>
  </div>  

  {/* end player  */}
      </div>
      <div style={{display:"flex",flexDirection:"row",marginTop:"26px"}}>
      <button style={{borderRadius:"50%", height:"70px",width:"70px",backgroundColor:"red",color:"white"}}>Audio</button>
      <button style={{borderRadius:"50%", height:"70px",width:"70px",backgroundColor:"red",color:"white"}}>Video</button>
      </div>
    </div>
    <div style={{ overflow: 'auto', height: '230px', width:"1323px" }}>
      <div ref={containerRef} style={{ display: 'flex', flexDirection: 'row' }}>
        {shapes}
      </div>
      
    </div>
    </div>
    </>
  );
}

export default Kids;
