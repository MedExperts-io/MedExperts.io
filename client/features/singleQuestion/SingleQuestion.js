import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleQuestion } from './singleQuestionSlice'
import { useParams, Link } from "react-router-dom";


const singleQuestion = () => {
  const { singleQuestionId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleQuestion(singleQuestionId))
  }, [])
  const singleQ = useSelector((state) => state.SingleQuestion.Question)
  const {id,question,answerOptions,correctAnswer,explanation,explanationImage,questionImage,explanationLinks} = singleQ
  return (
    <div>
    <div>singleQuestion</div>
    <div>Question Number: {id}</div>
    <div>Question: {question}</div>
    <div>
      {questionImage?questionImage.map((image,index)=>(
        <div>
        <img
        key={index}
        src={image}
        style={{
          height: `12rem`,
        }}
      />
      <div>figure:{index+1}</div>
      </div>
      )):null}
    </div>

    {/* <div>{answerOptions}</div> */}
    <div>
      {answerOptions?answerOptions.map((ans,index)=>(
        <div>
      <div>answer choice{index+1}: {ans}</div>
      </div>
      )):null}
    </div>


    <div>Correct Answer: {correctAnswer}</div>

    <div>{explanation}</div>

    {explanationImage?explanationImage.map((image,index)=>(
        <img
        key={index}
        src={image}
        style={{
          height: `12rem`,
        }}
      />
      )
      ):null}

    <div>
      {explanationLinks?explanationLinks.map((sourcelink, index)=>(
        <div>
        <div> {index+1} <div dangerouslySetInnerHTML={{__html: sourcelink}} /> </div>
        
        </div>
      )
      ):null}

    </div>
    </div>
    
  )
}

export default singleQuestion