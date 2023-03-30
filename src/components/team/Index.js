import { useState } from "react";
import styles from "./Index.module.css";
import Header from "../Header";
// import Footer from "../Footer.jsx";
import Heading from "./Heading.js";
import Heads from "./Heads";
import SingleMember from "./SingleMember.js";
import Members from "./Members";
import Lead from "./UI/Section";
import president from "./resources/team_pic/Bhaibhav_Raj.jpg";
import vp1 from "./resources/team_pic/SHANTANU_SINGH.jpg";
import vp2 from "./resources/team_pic/RAJEEV_RANJAN.png";
import fc1 from "./resources/team_pic/PUSHPDANT_JAIN.png";
import fc2 from "./resources/team_pic/YOGESH_SHUKLA.png";

// Web and App Team

import WL from "./resources/team_pic/Kshitij_Singh.png";
import WcL from "./resources/team_pic/SMARANI_BASU.jpg";
import wm1 from "./resources/team_pic/Aryan_Rana.jpg";
import wm2 from "./resources/team_pic/MANOMAY_KAGALKAR.jpeg";
import wm3 from "./resources/team_pic/Devyanshu_Gagneja.jpg";
import wm4 from "./resources/team_pic/SHOURYA_SHEKHAR.jpg";
import wm5 from "./resources/team_pic/Simran_Gupta.jpg";
import wm6 from "./resources/team_pic/Vikash_Sinha.jpg";
import wm7 from "./resources/team_pic/NEELESH_RANJAN.jpg";
import wm8 from "./resources/team_pic/OM_MISHRA.jpeg";

// Planning and Curation Team

import PCL from "./resources/team_pic/ANANYA_JHA.jpg";
import PCcL from "./resources/team_pic/Arindam_Goswami.jpg";
import pcm1 from "./resources/team_pic/ATHARV_SATHE.jpg";
import pcm2 from "./resources/team_pic/DIVYANSH_CHATURVEDI.jpg";
import pcm3 from "./resources/team_pic/HARSHITA_NIMJE.jpg";
import pcm4 from "./resources/team_pic/Reet_Tejankar.jpg";
import pcm5 from "./resources/team_pic/SURAJ_RAGHUVANSHI.jpg";

// Content and Editorial Team

import CEL from "./resources/team_pic/AASHAY_KULKARNI.jpg";
import CEcL from "./resources/team_pic/Harsh_Saand.jpeg";
import cem1 from "./resources/team_pic/AALAAP_GHANEKAR.jpeg";
import cem2 from "./resources/team_pic/ASTHA_TRIPATHI.jfif";
import cem3 from "./resources/team_pic/Harsh_Shukla.jpg";
import cem4 from "./resources/team_pic/ANKIT_CHETAN.jpg";
import cem5 from "./resources/team_pic/Atharv_Pal.jpeg";
import cem6 from "./resources/team_pic/Divij_Ganjoo.jpg";

// Media and PR Team

import ML from "./resources/team_pic/Hemal_Shingloo.png";
import McL from "./resources/team_pic/AYUSHI_AGARWAL.jpg";
import mm1 from "./resources/team_pic/ANISHA_KHANDELWAL.jpg";
import mm2 from "./resources/team_pic/ARCHIT_KUMAR.png";
import mm3 from "./resources/team_pic/Prakriti_Suman.png";
import mm4 from "./resources/team_pic/Sourav_Makur.png";

// Hospitality Team

import HL from "./resources/team_pic/Rishita_Yadav.jpg";
import HcL from "./resources/team_pic/Sanya_Bhambhani.jpg";
import hm1 from "./resources/team_pic/AVIRAL_DWIVEDI.jpg";
import hm2 from "./resources/team_pic/MUSKAN_PANDE.jpg";
import hm3 from "./resources/team_pic/MUDITA_PATHAK.jpg";
import hm4 from "./resources/team_pic/Aryaman_Gupta.jpg";

// Registration Team

import RL from "./resources/team_pic/Harsh_Parmar.png";
import RcL from "./resources/team_pic/KHATRI_LIKITHA.jpg";
import rm1 from "./resources/team_pic/Anay_Verma.jpg";
import rm2 from "./resources/team_pic/AMRITRAJ_GURUDATTA.jpg";
import rm3 from "./resources/team_pic/ABHIJEET_SHARMA.jpg";
import rm4 from "./resources/team_pic/R.SIMRAN_NAIR.jpg";
import rm5 from "./resources/team_pic/ROHIT_KUMAWAT.jpeg";

// Photography and Video Team

import VL from "./resources/team_pic/GOURAV_MAKUR.png";
import VcL from "./resources/team_pic/SWANAND_DESHPANDE.jpg";
import vm1 from "./resources/team_pic/SATYAM_KUMAR.jpg";
import vm2 from "./resources/team_pic/Saurav_Kumar.png";
import vm3 from "./resources/team_pic/SHARRAN_SANAR.jpeg";
import vm4 from "./resources/team_pic/Ajinkya_Fulpatil.jpeg";
import vm5 from "./resources/team_pic/JATIN_SINGH.jpeg";

// Production and Design Team

import DL from "./resources/team_pic/ARUN_THOMAS.jpeg";
import DcL from "./resources/team_pic/Samyak_Maitre.jpg";
import dm1 from "./resources/team_pic/Chhavi_Mohitkar.png";
import dm2 from "./resources/team_pic/RUCHIKA_ROY.jpg";
import dm3 from "./resources/team_pic/VAGDEVI.png";

//Sponsorship and Finance Team

import SL from "./resources/team_pic/HARSHIT_SINGH.jpeg";
import ScL from "./resources/team_pic/RITINDRANATH_TAGORE.jpg";
import sm1 from "./resources/team_pic/Yesh.jpg";
import sm2 from "./resources/team_pic/Sawari_Jamgaonkar.jpg";
import sm3 from "./resources/team_pic/ARYAN_SAKLANI.png";

const Index = () => {
  // const [show, setShow] = useState(false);
  // const showHandler = () => {
  //   setShow(!show);
  // };
  //states for each team and handler
  //webTeamHandler
  const [web, setWebTeam] = useState(false);
  const webTeamHandler = () => {
    setWebTeam(!web);
  };
  //Planninghandler
  const [plan, setPlan] = useState(false);
  const planHandler = () => {
    setPlan(!plan);
  };
  //content
  const [content, setContent] = useState(false);
  const contentHandler = () => {
    setContent(!content);
  };
  //media
  const [media, setMedia] = useState(false);
  const mediaHanlder = () => {
    setMedia(!media);
  };
  //hospitality
  const [hospitality, setHospitality] = useState(false);
  const hostHandler = () => {
    setHospitality(!hospitality);
  };
  //registration
  const [register, setRegister] = useState(false);
  const registerHandler = () => {
    setRegister(!register);
  };
  //photo
  const [photo, setPhoto] = useState(false);
  const photoHandler = () => {
    setPhoto(!photo);
  };

  //production
  const [prod, setProd] = useState(false);
  const prodHandler = () => {
    setProd(!prod);
  };
  //finance
  const [finance, setFinance] = useState(false);
  const financeHanlder = () => {
    setFinance(!finance);
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <Heading />
        </div>
        <div className={styles.margin}>
          <Heads
            pos1="Faculty Coordinator"
            pos2="Faculty Coordinator"
            pos3="President"
            pos4="Vice President"
            name1="Dr. Pushpdant Jain"
            name2="Dr. Yogesh Shukla"
            name3="Bhaibhav Raj"
            name4="Shantanu Singh"
            name5="Rajeev Ranjan"
            pic1={fc1}
            pic2={fc2}
            pic3={president}
            pic4={vp1}
            pic5={vp2}
          />

          {/* <SingleMember pos="Vice President" name="Rajeev Ranjan" pic={vp2} /> */}
        </div>
      </div>

      {/* Web and app collapse button  */}

      <div className={`${styles.marginTop}`}>
        <Lead show={web} showHandler={webTeamHandler}>
          {" "}
          Web and App Team{" "}
        </Lead>
        {!web && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Kshitij Singh"
                name2="Smarani Basu"
                pic1={WL}
                pic2={WcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Aryan Rana"
                name2="Manomay Kagalkar"
                pic1={wm1}
                pic2={wm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Devyanshu Gagneja"
                name2="Shourya Srivastav"
                pic1={wm3}
                pic2={wm4}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Simran Gupta"
                name2="Vikash Sinha"
                pic1={wm5}
                pic2={wm6}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Neelesh Ranjan"
                name2="Om Kumar Mishra"
                pic1={wm7}
                pic2={wm8}
              />
            </div>
          </span>
        )}
      </div>

      {/* Planning and Curation collapse button  */}

      <div className={`${styles.marginTop}`}>
        <Lead show={plan} showHandler={planHandler}>
          {" "}
          Planning and Curation Team{" "}
        </Lead>
        {!plan && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Ananya Maitrayi Jha"
                name2="Arindam Goswami"
                pic1={PCL}
                pic2={PCcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Atharv Sathe"
                name2="Divyansh Chaturvedi"
                pic1={pcm1}
                pic2={pcm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Harshita Nimje"
                name2="Reet Tejankar"
                pic1={pcm3}
                pic2={pcm4}
              />

              <SingleMember pos="Member" name="Suraj Raghuvanshi" pic={pcm5} />
            </div>
          </span>
        )}
      </div>

      {/* content and editorial collapse button  */}

      <div className={`${styles.marginTop}`}>
        <Lead show={content} showHandler={contentHandler}>
          {" "}
          Content and Editorial Team{" "}
        </Lead>
        {!content && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Aashay Kulkarni"
                name2="Harsh Saand"
                pic1={CEL}
                pic2={CEcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Aalap Ghanekar"
                name2="Astha Tripathi"
                pic1={cem1}
                pic2={cem2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Harsh Shukla"
                name2="Ankit Rane"
                pic1={cem3}
                pic2={cem4}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Atharv Pal"
                name2="Divij Ganjoo"
                pic1={cem5}
                pic2={cem6}
              />
            </div>
          </span>
        )}
      </div>

      {/* Media and PR collapse button  */}

      <div className={`${styles.marginTop}`}>
        <Lead show={media} showHandler={mediaHanlder}>
          {" "}
          Media and PR Team{" "}
        </Lead>
        {!media && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Hemal Shingloo"
                name2="Ayushi Agarwal"
                pic1={ML}
                pic2={McL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Anisha Khandelwal"
                name2="Archit Kumar"
                pic1={mm1}
                pic2={mm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Prakriti Suman"
                name2="Sourav Makur"
                pic1={mm3}
                pic2={mm4}
              />

              <SingleMember pos="Member" name="Janhvi Bhoyar" />
            </div>
          </span>
        )}
      </div>

      {/* Hospitality Team */}

      <div className={`${styles.marginTop}`}>
        <Lead show={hospitality} showHandler={hostHandler}>
          {" "}
          Hospitality Team{" "}
        </Lead>
        {!hospitality && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Rishita Yadav"
                name2="Sanya Bhambhani"
                pic1={HL}
                pic2={HcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Aviral Dwivedi"
                name2="Muskan Pande"
                pic1={hm1}
                pic2={hm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Mudita Pathak"
                name2="Aryaman Gupta"
                pic1={hm3}
                pic2={hm4}
              />
            </div>
          </span>
        )}
      </div>

      {/* Resgistration Team */}

      <div className={`${styles.marginTop}`}>
        <Lead show={register} showHandler={registerHandler}>
          {" "}
          Registration Team{" "}
        </Lead>
        {!register && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Harsh Parmar"
                name2="Khatri Likhita "
                pic1={RL}
                pic2={RcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Anay Verma"
                name2="Amritraj Singh Gurudatta"
                pic1={rm1}
                pic2={rm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Abhijeet Humar Sharma"
                name2="R.Simran Nair"
                pic1={rm3}
                pic2={rm4}
              />

              <SingleMember pos="Member" name="Rohit Kumawat" pic={rm5} />
            </div>
          </span>
        )}
      </div>

      {/* Photography and Video Team */}

      <div className={`${styles.marginTop}`}>
        <Lead show={photo} showHandler={photoHandler}>
          {" "}
          Photography and Video Team{" "}
        </Lead>
        {!photo && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Gourav Makur"
                name2="Swanand Deshpande"
                pic1={VL}
                pic2={VcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Satyam Kumar Singh"
                name2="Saurav Kumar"
                pic1={vm1}
                pic2={vm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Sharran Sanar"
                name2="Ajinkya Fulpatil"
                pic1={vm3}
                pic2={vm4}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Jatin Singh"
                name2="Akshay Syam"
                pic1={vm5}
              />
            </div>
          </span>
        )}
      </div>

      {/* Production ad Design Team  */}

      <div className={`${styles.marginTop}`}>
        <Lead show={prod} showHandler={prodHandler}>
          {" "}
          Production And Design Team{" "}
        </Lead>
        {!prod && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Arun Thomas"
                name2="Samyak Maitre"
                pic1={DL}
                pic2={DcL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Ruchika Roy"
                name2="Vagdevi Mangi"
                pic1={dm2}
                pic2={dm3}
              />

              <SingleMember pos="Member" name="Chhavi Mohitkar" pic={dm1} />
            </div>
          </span>
        )}
      </div>

      {/* Sponsorship and Finance Team  */}

      <div className={`${styles.marginTop}`}>
        <Lead show={finance} showHandler={financeHanlder}>
          {" "}
          Sponsorship and Finance Team{" "}
        </Lead>
        {!finance && (
          <span>
            <div className={styles.margin}>
              <Members
                pos1="Lead"
                pos2="Co-Lead"
                name1="Harshit Singh"
                name2="Ritindrananth Tagore"
                pic1={SL}
                pic2={ScL}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Yesh Singh"
                name2="Sawari Jamgaonkar"
                pic1={sm1}
                pic2={sm2}
              />

              <Members
                pos1="Member"
                pos2="Member"
                name1="Aryan Saklani"
                name2="Vaibhav Goswami"
                pic1={sm3}
              />
            </div>
          </span>
        )}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
