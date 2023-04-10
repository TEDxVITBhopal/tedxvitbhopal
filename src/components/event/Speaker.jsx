import { useState } from 'react';
import React from 'react';
// import globe from '../../resources/globe.png';
import image from "./resources/PUSHPDANT_JAIN.png"; 
// import mic from '../../resources/mic.png'
import styles from "./Speaker.module.css"
import dummy from "./../../resources/dummyimage.png"


  // let showBottom = true;

  // if (images.length <= 4){
  //    showBottom = false;
  // }
  // return (
  //   <div className="container">
  //     <span className='heading1'>The Speakers</span>
  //     <div className="flexImages">
  //       <div className="imageWrapper">
  //         <img className='globe' src={globe} alt="" />
  //       </div>
  //       <div className="imageWrapper up">
  //         <img className='rect1' src={images[0]} alt="" />
  //         <img className='rect2' id='top-upper' src={images[1]} alt="" />
  //       </div>
  //     </div>
  //     <div className="flexImages down">
  //       <div className="imageWrapper">
  //         <img className='rect1' src={images[2]} alt="" />
  //         <img className='rect2' src={images[3]} alt="" />
  //       </div>
  //     </div>
  //     { showBottom ? <div className="flexImages" >
  //       <div className="second"></div>
  //       <div className="imageWrapper up1">
  //         <img className='rect1' src={images[4]} alt="" />
  //         <img className='rect2' id='top-upper' src={images[5]} alt="" />
  //       </div>
  //     </div> : <div></div>} 
  //     { showBottom ? <div className="flexImages down1" >
  //       <div className="imageWrapper ">
  //         <img className='rect1 rectD1' src={images[6]} alt="" />
  //         <img className='rect2 rectD2' src={images[7]} alt="" />
  //       </div>
  //       <div className="imageWrapper" >
  //         <img className='mic' src={mic} alt="" />
  //       </div>
  //     </div> : <div></div> }  
  //   </div>
  const Speakers = (props) => {
    const[speaker1, setSpeaker1] = useState(true);
    const [speaker2, setSpeaker2] = useState(false);
    const [speaker3, setSpeaker3] = useState(false);
    const[speaker4, setSpeaker4] = useState(false);
    // function changeBackground(e) {
    //   e.target.style.background = 'red';
    // }
    const speaker1Handler = () => {
      setSpeaker1(true);
      setSpeaker2(false);
      setSpeaker3(false);
      setSpeaker4(false);
      console.log("speaker 1")
    }
    const speaker2Handler = () => {
      setSpeaker1(false);
      setSpeaker2(true);
      setSpeaker3(false);
      setSpeaker4(false);
      console.log("speaker 2")
    }
    const speaker3Handler = () => {
      setSpeaker1(false);
      setSpeaker2(false);
      setSpeaker3(true);
      setSpeaker4(false);
      console.log("speaker 3")
    }
    const speaker4Handler = () => {
      setSpeaker1(false);
      setSpeaker2(false);
      setSpeaker3(false);
      setSpeaker4(true);
      console.log("speaker 4")
    }
    return (
      <div>
        <div className={styles.heading}>
          <span>Speakers</span>
        </div>
      <div className={styles.container}>
  
      <div className={styles.Speakers}>
      
     <div className={styles.flex}>
        <div className={styles.flexs} onMouseOver={speaker1Handler}>
          <img className={styles.pic} src={image} alt="img" />
          <div className={styles.flex} >
            <div >
              <b>{props.pos1}</b>
            </div>
            <div>{props.name1}</div>
          </div>
        </div>
  
        <div className={styles.flexs} onMouseOver={speaker2Handler}>
          <img className={styles.pic} src={image} alt="img" />
          <div className={styles.flex} >
            <div >
              <b>{props.pos1}</b>
            </div>
            <div>{props.name1}</div>
          </div>
        </div>
      </div>
    

        <div className={styles.flex}>
        <div className={styles.flexs} onMouseOver={speaker3Handler}>
          <img className={styles.pic} src={image} alt="img" />
          <div className={styles.flex}>
            <div>
              <b>{props.pos1}</b>
            </div>
            <div>{props.name1}</div>
          </div>
        </div>
  
        <div className={styles.flexs} onMouseOver={speaker4Handler}>
          <img className={styles.pic} src={image} alt="img" />
          <div className={styles.flex}>
            <div>
              <b>{props.pos1}</b>
            </div>
            <div>{props.name1}</div>
          </div>
        </div>
      </div>
      </div>
      <div>
       { speaker1 && <div className={styles.speakersection}>
          <div className={styles.imagediv}>
            <img src={dummy} alt="img" />
          </div>
          <div className={styles.speakerflex}>
           <div className={styles.spname}>
            <span>Speaker 1</span>
            </div>
            <div className={styles.post}>
              <span>Job/Post</span>
              </div>
          </div>
        </div>
  }

{ speaker2 && <div className={styles.speakersection}>
          <div className={styles.imagediv}>
            <img src={dummy} alt="img" />
          </div>
          <div className={styles.speakerflex}>
           <div className={styles.spname}>
            <span>Speaker 2</span>
            </div>
            <div className={styles.post}>
              <span>Job/Post</span>
              </div>
          </div>
        </div>
  }
  { speaker3 &&   <div className={styles.speakersection}>
          <div className={styles.imagediv}>
            <img src={dummy} alt="img" />
          </div>
          <div className={styles.speakerflex}>
           <div className={styles.spname}>
            <span>Speaker 3</span>
            </div>
            <div className={styles.post}>
              <span>Job/Post</span>
              </div>
          </div>
        </div>
  }

{ speaker4 &&   <div className={styles.speakersection}>
          <div className={styles.imagediv}>
            <img src={dummy} alt="img" />
          </div>
          <div className={styles.speakerflex}>
           <div className={styles.spname}>
            <span>Speaker 4</span>
            </div>
            <div className={styles.post}>
              <span>Job/Post</span>
              </div>
          </div>
        </div>
  }
        
      </div>
      

      </div>
      </div>
    
    );
  
}

export default Speakers;
