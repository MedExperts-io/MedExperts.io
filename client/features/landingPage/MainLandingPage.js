import React from "react";
import TestimonialCard from "./TestimonialCard";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector, Navigate } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button } from "react-bootstrap/";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SortIcon from "@mui/icons-material/Sort";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const fakeTestimonials = [
  {
    name: "Bob Pancakes",
    title: "Surgical Intern",
    location: "Weill Cornell Hospital",
    quote: `"I can't thank this website enough for the incredible resources they
  provided me during my medical school journey. As a busy student, their
  easy-to-use platform allowed me to study efficiently and effectively,
  without sacrificing my personal life."`,
  },
  {
    name: "James Montgomery",
    title: "Medical Student",
    location: "John Hopkins School of Medicine",
    quote: `"The high-quality content, including interactive quizzes and videos, helped me 
    grasp complex concepts and prepared me well for my exams. I'm happy to say that I've not only 
    passed all my exams with flying colors but also secured a top residency program."`,
  },
  {
    name: "Meredith Grey",
    title: "Medical Student",
    location: "Duke University School of Medicine",
    quote: `"Their vast library of study materials, including notes, flashcards, and practice questions, 
    helped me streamline my studies and master difficult concepts. I also appreciated their supportive community, 
    which provided me with the encouragement and motivation I needed to keep going."`,
  },
];

const MainLandingPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.me.id);

  return (
    <div className="mt-20">
      {/* SECTION 1 */}
      <div className="flex flex-col items-center bg-gradient-to-b from-black via-gray-700 to-black text-white p-8">
        <div className="flex flex-col items-center py-10">
          <h1 className="font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-red-700 to-red-300">
            EMPOWERING
          </h1>
          <h1 className="flex items-center text-wrap font-extrabold md:text-9xl transform transition duration-500 hover:scale-110 text-white py-4">
            THE NEXT GENERATION
          </h1>
          <h1 className="font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-red-300 to-red-700">
            OF MEDICAL PROFESSIONALS
          </h1>
        </div>
        <span className="text-2xl pb-2">
          THE ULTIMATE STUDY PLATFORM FOR EVERYONE FROM
        </span>
        <span className="text-2xl pb-4">
          MEDICAL STUDENTS TO BOARD-CERTIFIED PHYSICIANS
        </span>
        <button className="bg-red-900 text-white text-xl transform transition duration-500 hover:scale-110 p-3 rounded-full cursor-pointer">
          GET STARTED
        </button>
      </div>
      {/* SECTION 2 */}
      <div className="flex flex-col items-center bg-gradient-to-b from-black to-gray-700 text-white p-10 space-y-4">
        <div className="bg-slate-900 rounded-2xl p-10">
          <span className="text-2xl">
            200+ questions with detailed answers in over 15 subjects, carefully
            curated by a team of medical experts.
          </span>
        </div>
        <div className="bg-slate-900 rounded-2xl p-10">
          <span className="text-2xl">
            Personalized dashboard for each user to monitor progress and compete
            with peers.
          </span>
        </div>
        <div className="bg-slate-900 rounded-2xl p-10">
          <span className="text-2xl">
            Contribute to the community by authoring questions based on your
            interest and train specific skill sets.
          </span>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-700 to-black text-white p-10">
        <div className="flex flex-col md:grid md:grid-cols-3 space-y-4 md:space-x-4">
          {fakeTestimonials?.map((testimonial) => {
            const { name, title, location, quote } = testimonial;

            return (
              <>
                <TestimonialCard
                  name={name}
                  title={title}
                  location={location}
                  quote={quote}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainLandingPage;
