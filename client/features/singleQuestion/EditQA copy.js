// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Form,
//   Row,
//   Col,
//   Container,
//   Card,
//   Button,
//   Modal,
//   InputGroup,
//   ListGroup,
// } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   fetchSingleQuestion,
//   fetchQAVersions,
//   editQuestion,
// } from "./singleQuestionSlice";
// import { v4 as uuidv4 } from "uuid";

// const EditQA = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // const { singleQuestionId } = useParams();
//   // useEffect(() => {
//   //   dispatch(fetchSingleQuestion(singleQuestionId));
//   // }, []);

//   const [validated, setValidated] = useState(false);
//   const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);

//   // console.log("qaVersions", qaVersions);
//   // const qa = qaVersions[0];
//   // console.log("qa Object", qa);

//   const {
//     id,
//     question,
//     questionImage,
//     answerOptions,
//     correctAnswer,
//     explanation,
//     explanationImage,
//     explanationLinks,
//     category,
//     level,
//     ancestorId,
//   } = qaVersions[0];

//   const [newQuestion, setNewQuestion] = useState(question);
//   // console.log("NEW QUESTION STATE", newQuestion, qa.question);
//   const [newQuestionImage, setNewQuestionImage] = useState(questionImage);

//   const [newSingleOption, setNewSingleOption] = useState("");
//   const [newAnswerOptions, setNewAnswerOptions] = useState(answerOptions);

//   const [newCorrectAnswer, setNewCorrectAnswer] = useState(correctAnswer);
//   const [newExplanation, setNewExplanation] = useState(explanation);
//   const [newExplanationImage, setNewExplanationImage] =
//     useState(explanationImage);
//   const [newExplanationLinks, setNewExplanationLinks] =
//     useState(explanationLinks);
//   const [newCategory, setNewCategory] = useState(category);
//   const [newLevel, setNewLevel] = useState(level);
//   const [arrayIdx, setArrayIdx] = useState(null);

//   // modal details
//   const [show, setShow] = useState(false);
//   const handleClose = () => {
//     setValidated(false);
//     setShow(false);
//   };
//   const handleShow = () => setShow(true);
//   // end modal details

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     dispatch(
//       editQuestion({
//         id,
//         question: newQuestion,
//         questionImage: newQuestionImage,
//         answerOptions: newAnswerOptions,
//         correctAnswer: newCorrectAnswer,
//         explanation: newExplanation,
//         explanationImage: newExplanationImage,
//         explanationLinks: newExplanationLinks,
//         category: newCategory,
//         level: newLevel,
//         ancestorId: id,
//       })
//     );
//     setValidated(true); //??????
//   };

//   const handleArrayUpdate = (idx, text) => {
//     setNewAnswerOptions(
//       newAnswerOptions.map((currentOption, index) => {
//         if (index === idx) {
//           currentOption = text;
//         }
//         return currentOption;
//       })
//     );
//     setNewSingleOption("");
//   };

//   const handleArrayRemove = (idx, text) => {
//     setNewAnswerOptions(
//       newAnswerOptions.filter((currentOption, index) => {
//         return index !== idx;
//       })
//     );
//   };

//   // if (qa) {
//   return (
//     <Container>
//       <Row className="p-5">
//         <Card
//           border="light"
//           className="p-5 mx-auto"
//           style={{ maxWidth: "800px" }}
//         >
//           <Col>
//             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//               <h1>Edit Question</h1>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="question">
//                   <Form.Label>Question</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     // type="text"
//                     defaultValue={newQuestion}
//                     onChange={(e) => {
//                       setNewQuestion(e.target.value);
//                     }}
//                     // onFocus={(e) =>
//                     //   (e.target.placeholder = "Enter Your First Name")
//                     // }
//                     // onBlur={(e) => (e.target.placeholder = userFirstName)}
//                   />
//                 </Form.Group>

//                 {/* <Form.Group as={Col} controlId="questionImage">
//                   <Form.Label>Question Figures</Form.Label>
//                   <Form.Control
//                     onClick={clearText}
//                     type="text"
//                     defaultValue={newQuestionImage}
//                     onChange={(e) => {
//                       setNewQuestionImage(e.target.value);
//                     }}
//                     onFocus={(e) =>
//                       (e.target.placeholder = "Enter Your Last Name")
//                     }
//                     onBlur={(e) => (e.target.placeholder = userLastName)}
//                   />
//                 </Form.Group> */}
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="answerOptions">
//                   <Form.Label>Options</Form.Label>

//                   <InputGroup className="mb-3" key={uuidv4()}>
//                     <Form.Control
//                       type="text"
//                       defaultValue={newSingleOption}
//                       onChange={(e) => {
//                         setNewSingleOption(e.target.value);
//                       }}
//                     ></Form.Control>
//                     <Button
//                       variant="outline-secondary"
//                       id="button-addon2"
//                       onClick={() => {
//                         handleArrayUpdate(arrayIdx, newSingleOption);
//                       }}
//                     >
//                       Update
//                     </Button>
//                   </InputGroup>

//                   {newAnswerOptions?.map((option, optionIdx) => (
//                     <ListGroup key={uuidv4()}>
//                       <ListGroup.Item>{option}</ListGroup.Item>
//                       <Row className="mb-3">
//                         <Button
//                           variant="outline-secondary"
//                           id="button-addon2"
//                           onClick={() => {
//                             setNewSingleOption(option);
//                             setArrayIdx(optionIdx);
//                           }}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outline-secondary"
//                           id="button-addon2"
//                           onClick={() => {
//                             //setArrayIdx(optionIdx);
//                             handleArrayRemove(optionIdx, option);
//                           }}
//                         >
//                           Remove
//                         </Button>
//                       </Row>
//                     </ListGroup>
//                   ))}
//                 </Form.Group>
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="correctAnswer">
//                   <Form.Label>Answer</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newCorrectAnswer}
//                     onChange={(e) => {
//                       setNewCorrectAnswer(e.target.value);
//                     }}
//                     // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
//                     // onBlur={(e) => (e.target.placeholder = userEmail)}
//                   ></Form.Control>
//                 </Form.Group>
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="explanation">
//                   <Form.Label>Explanation</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     // type="text"
//                     defaultValue={newExplanation}
//                     onChange={(e) => {
//                       setNewExplanation(e.target.value);
//                     }}
//                     // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
//                     // onBlur={(e) => (e.target.placeholder = userEmail)}
//                   ></Form.Control>
//                 </Form.Group>
//               </Row>

//               {/* <Row className="mb-3">
//                 <Form.Group as={Col} controlId="explanationImage">
//                   <Form.Label>Explanation Figures</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newExplanationImage}
//                     onChange={(e) => {
//                       setNewExplanationImage(e.target.value);
//                     }}
//                     // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
//                     // onBlur={(e) => (e.target.placeholder = userEmail)}
//                   ></Form.Control>
//                 </Form.Group>
//               </Row> */}

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="explanationLinks">
//                   <Form.Label>Explanation Links</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newExplanationLinks}
//                     onChange={(e) => {
//                       setNewExplanationLinks(e.target.value);
//                     }}
//                     // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
//                     // onBlur={(e) => (e.target.placeholder = userEmail)}
//                   ></Form.Control>
//                 </Form.Group>
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="category">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Select
//                     aria-label="default select example"
//                     onChange={(e) => {
//                       setNewCategory(e.target.value);
//                     }}
//                   >
//                     <option defaultValue> {category}</option>
//                     <option value="Asthma">Asthma</option>
//                     <option value="Bronchiectasis">Bronchiectasis</option>
//                     <option value="Chronic Obstructive Pulmonary Disease">
//                       Chronic Obstructive Pulmonary Disease
//                     </option>
//                     <option value="Critical Care">Critical Care</option>
//                     <option value="Infection">Infection</option>
//                     <option value="Interstitial Lung Diseases">
//                       Interstitial Lung Diseases
//                     </option>
//                     <option value="Lung Transplant">Lung Transplant</option>
//                     <option value="Lung Cancer">Lung Cancer</option>
//                     <option value="Mediastinal Disorders">
//                       Mediastinal Disorders
//                     </option>
//                     <option value="Other Pulmonary Diseases">
//                       Other Pulmonary Diseases
//                     </option>
//                     <option value="Pharmacology">Pharmacology</option>
//                     <option value="Pleural Diseases">Pleural Diseases</option>
//                     <option value="Pulmonary Function Testing">
//                       Pulmonary Function Testing
//                     </option>
//                     <option value="Pulmonary Vascular Disease">
//                       Pulmonary Vascular Disease
//                     </option>
//                     <option value="Sleep">Sleep</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="level">
//                   <Form.Label>Level</Form.Label>
//                   <Form.Select
//                     aria-label="default select example"
//                     onChange={(e) => {
//                       setNewLevel(e.target.value);
//                     }}
//                   >
//                     <option defaultValue> {level}</option>
//                     <option value="Easy">Easy</option>
//                     <option value="Moderate">Moderate</option>
//                     <option value="Hard">Hard</option>
//                   </Form.Select>
//                 </Form.Group>
//               </Row>

//               <center>
//                 <Button type="submit" variant="secondary" onClick={handleShow}>
//                   Update
//                 </Button>
//               </center>

//               <Modal show={show} onHide={handleClose}>
//                 <Modal.Body>Your changes have been recorded!</Modal.Body>
//                 <Modal.Footer>
//                   <Button variant="secondary" onClick={handleClose}>
//                     Keep Editing
//                   </Button>
//                   <Button
//                     variant="secondary"
//                     onClick={() => {
//                       console.log("CURRENT ID", qaVersions[0].id);
//                       navigate(`/questions/${qaVersions[0].id}`);
//                     }}
//                   >
//                     View Question
//                   </Button>
//                 </Modal.Footer>
//               </Modal>
//             </Form>
//           </Col>
//         </Card>
//       </Row>
//     </Container>
//   );
//   // } else {
//   //   return <div></div>;
//   // }
// };

// export default EditQA;
