import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Button,
  Modal,
  InputGroup,
  Toast,
  ToastContainer,
  Table,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchSingleQuestion,
  fetchQAVersions,
  editQuestion,
} from "./singleQuestionSlice";
import { v4 as uuidv4 } from "uuid";

const EditQA = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  // const { singleQuestionId } = useParams();
  // useEffect(() => {
  // dispatch(fetchSingleQuestion(singleQuestionId));
  // }, []);

  const [validated, setValidated] = useState(false);
  const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);

  // console.log("qaVersions", qaVersions);
  // const qa = qaVersions[0];
  // console.log("qa Object", qa);

  const {
    id,
    question,
    questionImage,
    answerOptions,
    correctAnswer,
    explanation,
    explanationImage,
    explanationLinks,
    category,
    level,
    ancestorId,
  } = qaVersions[0];

  const [newQuestion, setNewQuestion] = useState(question);

  const [newSingleQuestionImage, setNewSingleQuestionImage] = useState("");
  const [newQuestionImage, setNewQuestionImage] = useState(questionImage);

  const [newSingleOption, setNewSingleOption] = useState("");
  const [newAnswerOptions, setNewAnswerOptions] = useState(answerOptions);

  const [newCorrectAnswer, setNewCorrectAnswer] = useState(correctAnswer);
  const [newExplanation, setNewExplanation] = useState(explanation);

  const [newSingleExpImage, setNewSingleExpImage] = useState("");
  const [newExplanationImage, setNewExplanationImage] =
    useState(explanationImage);

  const [newSingleLink, setNewSingleLink] = useState("");
  const [newSource, setNewSource] = useState("");
  const [newExplanationLinks, setNewExplanationLinks] =
    useState(explanationLinks);

  const [newCategory, setNewCategory] = useState(category);
  const [newLevel, setNewLevel] = useState(level);
  const [showToast, setShowToast] = useState(false);
  const [showUpdate, setShowUpdate] = useState("");

  // modal details
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  // end modal details

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      editQuestion({
        id,
        question: newQuestion.trim(),
        questionImage: newQuestionImage,
        answerOptions: newAnswerOptions,
        correctAnswer: newCorrectAnswer,
        explanation: newExplanation.trim(),
        explanationImage: newExplanationImage,
        explanationLinks: newExplanationLinks,
        category: newCategory,
        level: newLevel,
        ancestorId: ancestorId || id,
      })
    );
    setValidated(true); //??????
  };

  const clearText = (evt, text) => {
    console.log("EVT TEXT", `${text}`);
    evt.target.value = text;
  };

  const toggleShowToast = () => setShowToast(!showToast);

  // if (qa) {
  return (
    <Container>
      <Row className="p-5">
        <ToastContainer className="p-3" position="middle-end">
          <Toast
            bg="success"
            show={showToast}
            onClose={toggleShowToast}
            delay={3000}
            autohide
            animation={true}
          >
            <Toast.Header>
              <strong className="me-auto">Saved!</strong>
            </Toast.Header>
            <Toast.Body>{showUpdate}</Toast.Body>
          </Toast>
        </ToastContainer>
        <Card
          border="light"
          className="p-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h1>Edit Question</h1>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="question">
                  <Form.Label>
                    <strong className="me-auto">Question</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    defaultValue={newQuestion}
                    onChange={(e) => {
                      setNewQuestion(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>

              {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="questionImage">
                  <Form.Label>
                    <strong className="me-auto">Question Images</strong>
                  </Form.Label>

                  <InputGroup className="mb-3">
                    <Form.Control
                      type="file"
                      // onClick={clearText}
                      // defaultValue={newSingleQuestionImage}
                      // onChange={(e) => {
                      //   setNewSingleQuestionImage(e.target.value);
                      // }}
                    />

                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        if (newSingleQuestionImage.trim() !== "") {
                          setNewQuestionImage([
                            ...newQuestionImage,
                            newSingleQuestionImage.trim(),
                          ]);
                          setNewSingleQuestionImage(""); // Doesn't clear field for some reason
                          setShowUpdate("Image");
                          toggleShowToast();
                        } else {
                          console.log(
                            "ADD ALERT FOR MISSING FIELD- ONE OR BOTH FIELDS ARE MISSING"
                          );
                        }
                      }}
                    >
                      Upload
                    </Button>
                  </InputGroup>

                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Figure</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {newQuestionImage?.map((link, linkIdx) => (
                        <tr key={uuidv4()}>
                          <td> {link}</td>
                          <td>
                            {" "}
                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                setNewExplanationLinks(
                                  newExplanationLinks.filter(
                                    (currentLink, idx) => {
                                      return idx !== linkIdx;
                                    }
                                  )
                                );
                              }}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Form.Group>
              </Row> */}

              <Row className="mb-3">
                <Form.Group as={Col} controlId="answerOptions">
                  <Form.Label>
                    <strong className="me-auto">Options</strong>
                  </Form.Label>

                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      defaultValue={newSingleOption}
                      onChange={(e) => {
                        setNewSingleOption(e.target.value);
                        console.log("NEW ENTRY", newSingleOption);
                      }}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        if (newSingleOption.trim() !== "") {
                          setNewAnswerOptions([
                            ...newAnswerOptions,
                            newSingleOption.trim(),
                          ]);
                          setNewSingleOption(""); // Doesn't clear field for some reason
                          setShowUpdate(newSingleOption.trim());
                          toggleShowToast();
                        } else {
                          console.log(
                            "ADD ALERT FOR MISSING FIELD- ONE OR BOTH FIELDS ARE MISSING"
                          );
                        }
                      }}
                    >
                      Add
                    </Button>
                  </InputGroup>

                  {newAnswerOptions?.map((option, optionIdx) => (
                    <InputGroup className="mb-3" key={uuidv4()}>
                      <Form.Control
                        type="text"
                        onClick={(evt) => clearText(evt, option)}
                        defaultValue={option} //option
                        onChange={(e) => {
                          option = e.target.value;
                        }}
                        onFocus={(e) =>
                          (e.target.placeholder = "Answer Option")
                        }
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          if (option.trim() !== "") {
                            setNewAnswerOptions(
                              newAnswerOptions.map((currentOption, idx) => {
                                if (idx === optionIdx) {
                                  currentOption = option.trim();
                                }
                                return currentOption;
                              })
                            );

                            setShowUpdate(option.trim());
                            toggleShowToast();
                          } else {
                            console.log(
                              "ADD ALERT FOR MISSING FIELD- ONE OR BOTH FIELDS ARE MISSING"
                            );
                          }
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          setNewAnswerOptions(
                            newAnswerOptions.filter((currentOption, idx) => {
                              return idx !== optionIdx;
                            })
                          );
                        }}
                      >
                        Remove
                      </Button>
                    </InputGroup>
                  ))}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="correctAnswer">
                  <Form.Label>
                    <strong className="me-auto">Answer</strong>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setNewCorrectAnswer(e.target.value);
                    }}
                  >
                    <option defaultValue> {newCorrectAnswer}</option>
                    {newAnswerOptions.map((option) => (
                      <option value={option} key={uuidv4()}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="explanation">
                  <Form.Label>
                    <strong className="me-auto">Explanation</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    defaultValue={newExplanation}
                    onChange={(e) => {
                      setNewExplanation(e.target.value);
                    }}
                  ></Form.Control>
                </Form.Group>
              </Row>

              {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="explanationImage">
                  <Form.Label>
                    <strong className="me-auto">Explanation Images</strong>
                  </Form.Label>

                  <InputGroup className="mb-3">
                    <Form.Control
                      type="file"
                      //                      onClick={clearText}
                      //                      defaultValue={newSingleExpImage}
                      // onChange={(e) => {
                      //   setNewSingleExpImage(e.target.value);
                      // }}
                    />

                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        if (newSingleExpImage.trim() !== "") {
                          setNewExplanationImage([
                            ...newQuestionImage,
                            newExplanationImage.trim(),
                          ]);
                          setNewExplanationImage(""); // Doesn't clear field for some reason
                          setShowUpdate("Image");
                          toggleShowToast();
                        } else {
                          console.log(
                            "ADD ALERT FOR MISSING FIELD- ONE OR BOTH FIELDS ARE MISSING"
                          );
                        }
                      }}
                    >
                      Upload
                    </Button>
                  </InputGroup>

                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Figure</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {newQuestionImage?.map((link, linkIdx) => (
                        <tr key={uuidv4()}>
                          <td> {link}</td>
                          <td>
                            {" "}
                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                setNewExplanationLinks(
                                  newExplanationLinks.filter(
                                    (currentLink, idx) => {
                                      return idx !== linkIdx;
                                    }
                                  )
                                );
                              }}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Form.Group>
              </Row> */}

              <Row className="mb-3">
                <Form.Group as={Col} controlId="explanationLinks">
                  <Form.Label>
                    <strong className="me-auto">Explanation Sources</strong>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Link and Citation</InputGroup.Text>
                    <Form.Control
                      aria-label="Link"
                      type="text"
                      defaultValue={newSingleLink}
                      onChange={(e) => {
                        setNewSingleLink(e.target.value);
                        console.log("ON CHANGE LINK", newSingleLink);
                      }}
                    />

                    <Form.Control
                      aria-label="Citation"
                      type="text"
                      defaultValue={newSource}
                      onChange={(e) => {
                        setNewSource(e.target.value);
                        console.log("ON CHANGE SOURCE", newSource);
                      }}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        if (
                          newSingleLink.trim() !== "" &&
                          newSource.trim() !== ""
                        ) {
                          // setNewSingleLink(newSingleLink);
                          // setNewSource(newSource);
                          setNewExplanationLinks([
                            ...newExplanationLinks,
                            `<a href="` +
                              newSingleLink.trim() +
                              `" target="_blank">` +
                              newSource.trim() +
                              `</a`,
                          ]);
                          setShowUpdate(
                            `Citation: ${newSource.trim()} \n Link:${newSingleLink.trim()}`
                          );
                          setNewSingleLink(""); //Doesn't clear field for some reason
                          setNewSource(""); //Doesn't clear field for some reason
                          toggleShowToast();
                          // console.log(
                          //   "newExplanationLinks",
                          //   newExplanationLinks
                          // );
                        } else {
                          console.log(
                            "ADD ALERT FOR MISSING FIELD- ONE OR BOTH FIELDS ARE MISSING"
                          );
                        }
                      }}
                    >
                      Add
                    </Button>
                  </InputGroup>

                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Link</th>
                        <th>Citation</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {newExplanationLinks?.map((link, linkIdx) => (
                        <tr key={uuidv4()}>
                          <td> {link.slice(9, link.indexOf(">") - 17)}</td>
                          <td>
                            {link.slice(
                              link.indexOf(">") + 1,
                              link.lastIndexOf("<")
                            )}
                          </td>
                          <td>
                            {" "}
                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                setNewExplanationLinks(
                                  newExplanationLinks.filter(
                                    (currentLink, idx) => {
                                      return idx !== linkIdx;
                                    }
                                  )
                                );
                              }}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="category">
                  <Form.Label>
                    <strong className="me-auto">Category</strong>
                  </Form.Label>
                  <Form.Select
                    aria-label="default select example"
                    onChange={(e) => {
                      setNewCategory(e.target.value);
                    }}
                  >
                    <option defaultValue> {category}</option>
                    <option value="Asthma">Asthma</option>
                    <option value="Bronchiectasis">Bronchiectasis</option>
                    <option value="Chronic Obstructive Pulmonary Disease">
                      Chronic Obstructive Pulmonary Disease
                    </option>
                    <option value="Critical Care">Critical Care</option>
                    <option value="Infection">Infection</option>
                    <option value="Interstitial Lung Diseases">
                      Interstitial Lung Diseases
                    </option>
                    <option value="Lung Transplant">Lung Transplant</option>
                    <option value="Lung Cancer">Lung Cancer</option>
                    <option value="Mediastinal Disorders">
                      Mediastinal Disorders
                    </option>
                    <option value="Other Pulmonary Diseases">
                      Other Pulmonary Diseases
                    </option>
                    <option value="Pharmacology">Pharmacology</option>
                    <option value="Pleural Diseases">Pleural Diseases</option>
                    <option value="Pulmonary Function Testing">
                      Pulmonary Function Testing
                    </option>
                    <option value="Pulmonary Vascular Disease">
                      Pulmonary Vascular Disease
                    </option>
                    <option value="Sleep">Sleep</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="level">
                  <Form.Label>
                    <strong className="me-auto">Level</strong>
                  </Form.Label>
                  <Form.Select
                    aria-label="default select example"
                    onChange={(e) => {
                      setNewLevel(e.target.value);
                    }}
                  >
                    <option defaultValue> {level}</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <center>
                <Button type="submit" variant="secondary" onClick={handleShow}>
                  Update
                </Button>
              </center>

              <Modal show={show} onHide={handleClose}>
                <Modal.Body>Your changes have been recorded!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Keep Editing
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      console.log("CURRENT ID", qaVersions[0].id);
                      navigate(`/questions/${qaVersions[0].id}`);
                    }}
                  >
                    View Question
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Card>
      </Row>
    </Container>
  );
  // } else {
  // return <div></div>;
  // }
};

export default EditQA;