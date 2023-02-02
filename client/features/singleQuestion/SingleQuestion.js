import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleQuestion } from "./singleQuestionSlice";
import { useParams, Link } from "react-router-dom";
import {Card, Stack }from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import ReactHtmlParser from 'react-html-parser';

const singleQuestion = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelection = option => {
    if (showAnswer) {
      return;
    }
    setSelectedOption(option);
  };
  const handleSubmit = () => {
    setShowAnswer(true);
  };

  const { singleQuestionId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleQuestion(singleQuestionId));
  }, []);

  const singleQ = useSelector((state) => state.SingleQuestion.Question);
  const {
    id,
    question,
    answerOptions,
    correctAnswer,
    explanation,
    explanationImage,
    questionImage,
    explanationLinks,
  } = singleQ;


  return (
    <div>
      <Stack gap={3} className="p-3">

      <Stack gap={3}>
      <Stack gap={3}>
      <div style={{ fontSize: "20px", textAlign: "center" }}>singleQuestion</div>
      <Card>
      <Card.Body style={{ fontSize: "20px", textAlign: "center" }}>Question Number: {id}</Card.Body>
      </Card>
      
      
      <Card>
      <Card.Body className="mb-2 text-center" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Question: {question}</Card.Body>
      </Card>
      </Stack>

      <Stack gap={3} className="mx-auto" direction="horizontal">
   
        {questionImage
          ? questionImage.map((image, index) => (
            <Card gap={3}>
                <img
                  key={index}
                  src={image}
                  style={{
                    height: `12rem`,
                  }}
                />
                <Card.Subtitle className="m-2 text-center" style={{fontSize: '10px'}}>figure:{index + 1}</Card.Subtitle>
                </Card>
            ))
            
          : null}
      </Stack>

      </Stack>
     

      <Stack gap={5}>
        <Stack direction="horizontal" gap={3}  className=" mx-auto">
          {answerOptions
          ? answerOptions.map((ans, index) => (
              
                <Button key={index} 
                // variant={selectedOption === ans ? "success" : "outline-success"} 
                variant={
                  showAnswer
                    ? ans === correctAnswer
                      ? "success"
                      : "danger"
                    : selectedOption === ans
                    ? "success"
                    : "outline-success"
                }
                onClick={() => handleOptionSelection(ans)} >
                 {ans}
                </Button>
              
            ))
          : null}
          </Stack>
          <Stack direction="horizontal" gap={3}  className=" mx-auto">
         
         
          <Button variant="danger" onClick={handleSubmit} disabled={selectedOption === null}>
                 Submit
          </Button>
          </Stack>
      </Stack>


    {showAnswer &&

      <Stack>
      <div>Correct Answer: {correctAnswer} and you selected: {selectedOption}</div>

      <div>{explanation}</div>

      {explanationImage
        ? explanationImage.map((image, index) => (
          <Card gap={3}>
          <img
            key={index}
            src={image}
            style={{
              height: `12rem`,
            }}
          />
          <Card.Subtitle className="mb-2 text-center">figure:{index + 1}</Card.Subtitle>
          </Card>
          ))
        : null}

{/*    alternate to reacthtmlparser:
      // <div dangerouslySetInnerHTML={{ __html: sourcelink }}/>{" "} */}
                  
       <Stack gap={3}>
        <Card gap={3} className='m-2 text-decoration-none '>
          <Card.Header>References</Card.Header>
        {explanationLinks
          ? explanationLinks.map((sourcelink, index) => (
              <Card key={index} className='m-2 text-decoration-none '>
                <Card.Body>
                  {" "}
                  <div>
                  {index + 1}{" "}
                  <div>{ReactHtmlParser(sourcelink)} 
                  <style>{` a {
                              color: inherit;
                               text-decoration: none;}`}
                        </style>
                         </div>
                  </div>
                </Card.Body>
              </Card>
            ))
          : null}
          </Card>
      </Stack>

      </Stack> }


      </Stack>
    </div>
  );
};

export default singleQuestion;
