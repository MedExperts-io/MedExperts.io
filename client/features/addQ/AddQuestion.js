import React from 'react'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { v4 as uuidv4 } from "uuid";
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
import { ProgressBar } from "react-bootstrap";
import { fetchAllQuestionsAnswers, NewQuestionsAnswers } from "../allQA/allQASlice";


const AddQuestion = () => {
    const [loading, setLoading] = useState(true);
    const [newQuestion, setNewQuestion] = useState('Type New Question Here...');
    const [newSingleOption, setNewSingleOption] = useState("");
    const [newAnswerOptions, setNewAnswerOptions] = useState(['Answer Option 1','Answer Option 2','Answer Option 3','Answer Option 4']);
    const [newCorrectAnswer, setNewCorrectAnswer] = useState('Select Correct Answer Here');
    const [newExplanation, setNewExplanation] = useState('Type Explanation Here....');
    const [newSingleLink, setNewSingleLink] = useState("www.example.com");
    const [newSource, setNewSource] = useState("Type Citation Here");
    const [newCategory, setNewCategory] = useState("");
    const [newLevel, setNewLevel] = useState("");


    const [newExplanationLinks, setNewExplanationLinks] = useState([]);
    // const [newSingleExpImage, setNewSingleExpImage] = useState("");

    // const [newSingleQuestionImage, setNewSingleQuestionImage] = useState("");
    // const [newQuestionImage, setNewQuestionImage] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  useEffect(() => {
   
    setTimeout(() => {
        dispatch(fetchAllQuestionsAnswers())
      setLoading(false);
    }, 500);
  }, []);

  const clearText = (evt, text) => {
    evt.target.value = text;
  };
  

  const [showToast, setShowToast] = useState(false);
  const [showUpdate, setShowUpdate] = useState("");
  const [validated, setValidated] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);

  //------------ modal details
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);



const AllQ = useSelector((state) => state.questionsAnswers.questionsAnswers);
const Questionid = AllQ.length+1

//Question Images
const [imageUpload, setImageUpload] = useState(null);
const [imageUrls, setImageUrls] = useState([]);
const imagesListRef = ref(storage, `images/${Questionid}/`);
const uploadFile = () => {
  if (imageUpload == null) return;
  const imageRef = ref(storage, `images/${Questionid}/${imageUpload.name + v4()}`);
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrls((prev) => [...prev, url]);
    });
  });
};
useEffect(() => {
  listAll(imagesListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  });
}, []);

//explanation Images
const [eimageUpload, seteImageUpload] = useState(null);
const [eimageUrls, seteImageUrls] = useState([]);
const eimagesListRef = ref(storage, `images/${Questionid}/explanation`);
const euploadFile = () => {
  if (eimageUpload == null) return;
  const imageRef = ref(storage, `images/${Questionid}/explanation/${eimageUpload.name + v4()}`);
  uploadBytes(imageRef, eimageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      seteImageUrls((prev) => [...prev, url]);
    });
  });
};
useEffect(() => {
  listAll(eimagesListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        seteImageUrls((prev) => [...prev, url]);
      });
    });
  });
}, []);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(newQuestion)
        dispatch(
            NewQuestionsAnswers({
                // question: 'what is my name?'
            question: newQuestion.trim(),
            questionImage: imageUrls,
            answerOptions: newAnswerOptions,
            correctAnswer: newCorrectAnswer,
            explanation: newExplanation.trim(),
            explanationImage: eimageUrls,
            explanationLinks: newExplanationLinks,
            category: newCategory,
            level: newLevel,
          })
        );
        setValidated(true); 
        console.log("handle submit")

      };
  
    return (
        <div>
          {loading ? (
            <ProgressBar animated now={100} />
          ) : (
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
                  style={{ maxWidth: "900px" }}
                >
                  <Col>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <h1>Add Question :</h1>
  
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="question">
                          <Form.Label>
                            <strong className="me-auto">Question</strong>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder={newQuestion}
                            onChange={(e) => {
                              setNewQuestion(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </Row>



                      {/* //Question Image List */}
  
                      <Row className="mb-3">
                  <Form.Group as={Col} controlId="questionImage">
                    <Form.Label>
                      <strong className="me-auto">Question Images</strong>
                    </Form.Label>
  
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="file"
                        onChange={(e) => {
                            setImageUpload(event.target.files[0]);
                        }}
                      />
  
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          if (imageUpload) {
                            uploadFile()                            
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
                        {imageUrls?.map((link, linkIdx) => (
                          <tr key={uuidv4()}>
                            <td> <a href={link} target="_blank"> Question Figure.{linkIdx+1}</a></td>
                            <td><img src={link} style={{width:'100px', height:'100px'}}/> </td>
                            <td>
                              {" "}
                              <Button
                                variant="outline-secondary"
                                onClick={() => {
                                  setImageUrls(
                                    imageUrls.filter(
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
                                placeholder={option}
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
                                      newAnswerOptions?.map(
                                        (currentOption, idx) => {
                                          if (idx === optionIdx) {
                                            currentOption = option.trim();
                                          }
                                          return currentOption;
                                        }
                                      )
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
                                    newAnswerOptions.filter(
                                      (currentOption, idx) => {
                                        return idx !== optionIdx;
                                      }
                                    )
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
                            {newAnswerOptions?.map((option) => (
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
                            placeholder={newExplanation}
                            onChange={(e) => {
                              setNewExplanation(e.target.value);
                            }}
                          ></Form.Control>
                        </Form.Group>
                      </Row>
  


                        {/* explanation image links */}

                        <Row className="mb-3">
                  <Form.Group as={Col} controlId="questionImage">
                    <Form.Label>
                      <strong className="me-auto">Explanation Images</strong>
                    </Form.Label>
  
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="file"
                        onChange={(e) => {
                            seteImageUpload(event.target.files[0]);
                        }}
                      />
  
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          if (eimageUpload) {
                            euploadFile()                            
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
                        {eimageUrls?.map((link, linkIdx) => (
                          <tr key={uuidv4()}>
                            <td> <a href={link} target="_blank"> Question Figure.{linkIdx+1}</a></td>
                            <td><img src={link} style={{width:'100px', height:'100px'}}/> </td>
                            <td>
                              {" "}
                              <Button
                                variant="outline-secondary"
                                onClick={() => {
                                  seteImageUrls(
                                    eimageUrls.filter(
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
                        <Form.Group as={Col} controlId="explanationLinks">
                          <Form.Label>
                            <strong className="me-auto">
                              Explanation Sources
                            </strong>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Link and Citation</InputGroup.Text>
                            <Form.Control
                              aria-label="Link"
                              type="text"
                              placeholder={newSingleLink}
                              onChange={(e) => {
                                setNewSingleLink(e.target.value);
                              }}
                            />
  
                            <Form.Control
                              aria-label="Citation"
                              type="text"
                              placeholder={newSource}
                              onChange={(e) => {
                                setNewSource(e.target.value);
                              }}
                            />
                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                if (
                                  newSingleLink.trim() !== "" &&
                                  newSource.trim() !== ""
                                ) {
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
                                  <td>
                                    {" "}
                                    {link.slice(9, link.indexOf(">") - 17)}
                                  </td>
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
                            <option defaultValue>
                              {"Category"}

                            </option>
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
                            <option value="Lung Transplant">
                              Lung Transplant
                            </option>
                            <option value="Lung Cancer">Lung Cancer</option>
                            <option value="Mediastinal Disorders">
                              Mediastinal Disorders
                            </option>
                            <option value="Other Pulmonary Diseases">
                              Other Pulmonary Diseases
                            </option>
                            <option value="Pharmacology">Pharmacology</option>
                            <option value="Pleural Diseases">
                              Pleural Diseases
                            </option>
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
                            <option defaultValue> {'Difficulty Level'}</option>
                            <option value="Easy">Easy</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Hard">Hard</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
  
                      <center>
                        <Button
                          type="submit"
                          variant="secondary"
                          onClick={handleShow}
                        >
                          Add Question
                        </Button>
                      </center>
  
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Body>New Question Have been Added!</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Keep Editing
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              //console.log("CURRENT ID", qaVersions[0].id);
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
          )}
        </div>
      );
}

export default AddQuestion