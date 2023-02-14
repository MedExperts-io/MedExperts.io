import React from 'react'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector, Navigate } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import QuizIcon from '@mui/icons-material/Quiz';
import {Button} from "react-bootstrap/";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SortIcon from '@mui/icons-material/Sort';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachFileIcon from '@mui/icons-material/AttachFile';




// const isLoggedIn = LoggedIn

const MainLandingPage = () => {
    
    const isLoggedIn = useSelector((state) => state.auth.me.id);





  return (
    <Stack spacing={5}
    divider={<Divider orientation="horizontal" flexItem />}
    >

        {/* top part */}
    <Box  sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
    <div className="top-part">
      <div className="top-part-content">
        <div className="text-container">
          <h1>Welcome to MedExperts</h1>
          <p>The ultimate question and answer portal for medical professionals in the field of pulmonary medicine. Our platform is designed specifically for all expertise level, ranging from medical students to board-certified physicians, to enhance their knowledge and skills.</p>
          <p>With MexExperts, you have access to a vast collection of questions on a variety of difficulty levels - easy, medium, and hard. Our questions cover 15+ sub categories, allowing you to target your studying and focus on the areas you need to improve in.</p>
          <p>Join the growing community of medical professionals and start improving your knowledge in pulmonary medicine today. Get Started with MexExperts!</p>
          {/* <Button >Get Started</Button> */}

          <Button
                  as={Link}
                  to= {isLoggedIn ? "/questions": "/login"}
                  className="m-2"
                  style={{
                    backgroundcolor: '#0077cc',
                    color: '#fff',
                    padding: '15px 30px',
                    fontsize: '18px',
                    border: 'none',
                    borderradius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease-in-out',
                    margintop: '50px',
                    alignself: 'center,',
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  Get Started!
                </Button>
        </div>
        <div className="image-container">
          <img src='https://firebasestorage.googleapis.com/v0/b/medexpertsio-a0906.appspot.com/o/lung%20with%20bulb%20.png?alt=media&token=34610860-8e8d-4f71-87bb-5b79eb36a20b' alt="example" />
        </div>
      </div>
    </div>
    </Box>

    {/* middle part */}
    <Box  sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
    <div>
    <h2 className="testimonials-heading">MedExperts Features:</h2>
    <div className="qualities-container">


  <div className="quality">
    <div className="quality-icon">
      <QuestionAnswerIcon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>Hand Curated Questions</h3>
      <p>240 Questions with detailed answers designed to help students gain adepper understanding of the subject.</p>
    </div>
  </div>


  <div className="quality">
    <div className="quality-icon">
      <SortIcon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>Sort And Filters</h3>
      <p>Users can easily sort the questions by difficulty or thier expertise.</p>
    </div>
  </div>

  <div className="quality">
    <div className="quality-icon">
      <FavoriteIcon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>Favorites</h3>
      <p>Users can favorite aquestion to easily access that question at a later time.</p>
    </div>
  </div>

 

  <div className="quality">
    <div className="quality-icon">
      < Diversity1Icon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>For Everyone</h3>
      <p>Questions are desinged for students at all level, ranging to medical students to board certified medical professionals.</p>
    </div>
  </div>

  <div className="quality">
    <div className="quality-icon">
      < CategoryIcon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>Multiple Categories</h3>
      <p>Questions are divided into more than 15 different categories for target studying.</p>
    </div>
  </div>

  <div className="quality">
    <div className="quality-icon">
      <DashboardIcon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>Stat Dashboard</h3>
      <p>Users get a personalized dashboard with all the important statistics, so the user can monitor their porgress!</p>
    </div>
  </div>

  <div className="quality">
    <div className="quality-icon">
      <AttachFileIcon className="fas fa-check"/>
    </div>
    <div className="quality-text">
      <h3>Reference</h3>
      <p>Explanations for each question include citations to external articles, for Students who want to get a deeper understanding.</p>
    </div>
  </div>

  

  
    </div>
    </div>
    </Box>

    {/* Testimonial Part */}
    <Box  sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
    <div>
    <h2 className="testimonials-heading">What our Users are saying:</h2>
    <div className="testimonials-container">
      <Card className="testimonial">
        <p className="review">"I love MedExpertsio! It's so easy to use, has really improved my productivity, and helped me pass my Boards!"</p>
        <p className="name">Cody LOL</p>
        <p className="occupation">Medical Student, Hardvard Med</p>
      </Card>
      <Card className="testimonial">
        <p className="review">"I love MedExpertsio! It's so easy to use, has really improved my productivity, and helped me pass my Boards!"</p>
        <p className="name">Cody LOL</p>
        <p className="occupation">Medical Student, Hardvard Med</p>
      </Card>
      <Card className="testimonial">
        <p className="review">"I love MedExpertsio! It's so easy to use, has really improved my productivity, and helped me pass my Boards!"</p>
        <p className="name">Cody LOL</p>
        <p className="occupation">Medical Student, Hardvard Med</p>
      </Card>
      <Card className="testimonial">
        <p className="review">"I love MedExpertsio! It's so easy to use, has really improved my productivity, and helped me pass my Boards!"</p>
        <p className="name">Cody LOL</p>
        <p className="occupation">Medical Student, Hardvard Med</p>
      </Card>
    </div>
    </div>
    </Box>

    </Stack>
  )
}

export default MainLandingPage