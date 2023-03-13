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
  ProgressBar,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQAVersions, editQuestion } from "./singleQuestionSlice";
import { v4 } from "uuid";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../addQ/firebase";
import NoExist from "../doesNotExist/NoExist";

const EditQA = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleQuestionId } = useParams();
  useEffect(() => {
    dispatch(fetchQAVersions(singleQuestionId));
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);

  const [newQuestion, setNewQuestion] = useState(qaVersions[0]?.question);
  const [newQuestionImage, setNewQuestionImage] = useState(
    qaVersions[0]?.questionImage
  );

  const [newSingleQImageAltText, setNewSingleQImageAltText] = useState("");
  const [newQuestionImageAltText, setNewQuestionImageAltText] = useState(
    qaVersions[0]?.questionImageAltText
  );
  const [newSingleOption, setNewSingleOption] = useState("");
  const [newAnswerOptions, setNewAnswerOptions] = useState(
    qaVersions[0]?.answerOptions
  );
  const [newCorrectAnswer, setNewCorrectAnswer] = useState(
    qaVersions[0]?.correctAnswer
  );
  const [newExplanation, setNewExplanation] = useState(
    qaVersions[0]?.explanation
  );
  const [newExplanationImage, setNewExplanationImage] = useState(
    qaVersions[0]?.explanationImage
  );
  const [newExplanationImageAltText, setNewExplanationImageAltText] = useState(
    qaVersions[0]?.explanationImageAltText
  );

  const [newSingleLink, setNewSingleLink] = useState("");
  const [newSource, setNewSource] = useState("");
  const [newExplanationLinks, setNewExplanationLinks] = useState(
    qaVersions[0]?.explanationLinks
  );
  const [newCategory, setNewCategory] = useState(qaVersions[0]?.category);
  const [newLevel, setNewLevel] = useState(qaVersions[0]?.level);

  useEffect(() => {
    setNewQuestion(qaVersions[0]?.question);
    setNewQuestionImage(qaVersions[0]?.questionImage);
    setNewQuestionImageAltText(qaVersions[0]?.questionImageAltText);
    setNewAnswerOptions(qaVersions[0]?.answerOptions);
    setNewCorrectAnswer(qaVersions[0]?.correctAnswer);
    setNewExplanation(qaVersions[0]?.explanation);
    setNewExplanationImage(qaVersions[0]?.explanationImage);
    setNewExplanationImageAltText(qaVersions[0]?.explanationImageAltText);
    setNewExplanationLinks(qaVersions[0]?.explanationLinks);
    setNewCategory(qaVersions[0]?.category);
    setNewLevel(qaVersions[0]?.level);
  }, [qaVersions]); // set the relation between redux store's qaVersions and local state

  //------------ toast details
  const [showToast, setShowToast] = useState(false);
  const [showUpdate, setShowUpdate] = useState("");
  const toggleShowToast = () => setShowToast(!showToast);
  //----------- end toast details

  //------------ modal details
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  //----------- end modal details

  //Question Images
  const [imageUpload, setImageUpload] = useState(null);
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${qaVersions[0]?.id}/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setNewQuestionImage((prev) => [...prev, url]);
      });
    });

    listAll(`images/${qaVersions[0]?.id}/${imageUpload.name + v4()}`).then(
      (response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setNewQuestionImage((prev) => [...prev, url]);
          });
        });
      }
    );
  };

  //Explanation Images
  const [eimageUpload, seteImageUpload] = useState(null);
  const euploadFile = () => {
    if (eimageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${qaVersions[0]?.id}/explanation/${eimageUpload.name + v4()}`
    );
    uploadBytes(imageRef, eimageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setNewExplanationImage((prev) => [...prev, url]);
      });
    });

    listAll(
      `images/${qaVersions[0]?.id}/explanation/${eimageUpload.name + v4()}`
    ).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setNewExplanationImage((prev) => [...prev, url]);
        });
      });
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      editQuestion({
        id: qaVersions[0]?.id,
        question: newQuestion.trim(),
        questionImage: newQuestionImage,
        questionImageAltText: newQuestionImageAltText,
        answerOptions: newAnswerOptions,
        correctAnswer: newCorrectAnswer,
        explanation: newExplanation.trim(),
        explanationImage: newExplanationImage,
        explanationImageAltText: newExplanationImageAltText,
        explanationLinks: newExplanationLinks,
        category: newCategory,
        level: newLevel,
        ancestorId: qaVersions[0]?.ancestorId || qaVersions[0]?.id,
        displayId: qaVersions[0]?.ancestorId || qaVersions[0]?.id,
      })
    );
  };

  const fillField = (evt, text) => {
    evt.target.value = text;
  };
  console.log("INITIAL QUESTION IMG ALT TEXT ARRAY", newQuestionImageAltText);
  if (qaVersions && qaVersions.length) {
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
                className="mx-auto"
                style={{ maxWidth: "900px", padding: "0px" }}
              >
                <Card.Header
                  className="text-center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "150%",
                    padding: "0px",
                  }}
                >
                  Edit Question
                </Card.Header>
                <Card.Body>
                  <Col>
                    <Form onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="question">
                          <Form.Label className="text-muted">
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
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="questionImage">
                          <Form.Label className="text-muted">
                            <strong className="me-auto">
                              Question Figures
                            </strong>
                          </Form.Label>

                          <InputGroup className="mb-3">
                            <Form.Control
                              type="file"
                              onChange={(e) => {
                                setImageUpload(e.target.files[0]);
                              }}
                            />
                            <InputGroup.Text>Alt Text</InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="Type alt text here"
                              defaultValue={newSingleQImageAltText}
                              onChange={(e) => {
                                setNewSingleQImageAltText(e.target.value);
                              }}
                            />
                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                if (imageUpload) {
                                  if (newSingleQImageAltText.trim() !== "") {
                                    setNewQuestionImageAltText([
                                      ...newQuestionImageAltText,
                                      newSingleQImageAltText.trim(),
                                    ]);
                                    uploadFile();
                                    setNewSingleQImageAltText("");
                                    setShowUpdate(
                                      `Image with alt text: ${newSingleQImageAltText.trim()}`
                                    );
                                    toggleShowToast();
                                  }
                                }
                              }}
                            >
                              Upload
                            </Button>
                          </InputGroup>

                          <Table
                            size="sm"
                            bordered
                            responsive
                            style={{
                              tableLayout: "fixed",
                              textAlign: "center",
                            }}
                          >
                            <thead
                              style={{
                                background: "#eaecef",
                                color: "#6c767d",
                              }}
                            >
                              <tr>
                                <th
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  Figure #
                                </th>
                                <th
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  Preview
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody style={{ borderTop: "none" }}>
                              {newQuestionImage?.map((link, linkIdx) => (
                                <tr key={uuidv4()}>
                                  <td>
                                    {" "}
                                    <a href={link} target="_blank">
                                      {" "}
                                      {linkIdx + 1}
                                    </a>
                                  </td>
                                  <td>
                                    <img
                                      src={link}
                                      style={{
                                        width: "200px",
                                        height: "100px",
                                      }}
                                    />{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <Button
                                      variant="outline-secondary"
                                      onClick={() => {
                                        setNewQuestionImage(
                                          newQuestionImage.filter(
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
                          <Form.Label className="text-muted">
                            <strong className="me-auto">Options</strong>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Type new multiple choice option here"
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
                                  setNewSingleOption("");
                                  setShowUpdate(newSingleOption.trim());
                                  toggleShowToast();
                                }
                              }}
                            >
                              Add
                            </Button>
                          </InputGroup>

                          {/* ------------------------------------------------------------------------------------------------ */}
                          {newAnswerOptions?.map((option, optionIdx) => (
                            <InputGroup className="mb-3" key={uuidv4()}>
                              <Form.Control
                                type="text"
                                onClick={(evt) => fillField(evt, option)}
                                defaultValue={option}
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
                      {/* ------------------------------------------------------------------------------------------------ */}

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="correctAnswer">
                          <Form.Label className="text-muted">
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
                          <Form.Label className="text-muted">
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
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="explanationImage">
                          <Form.Label className="text-muted">
                            <strong className="me-auto">
                              Explanation Figures
                            </strong>
                          </Form.Label>

                          <InputGroup className="mb-3">
                            <Form.Control
                              type="file"
                              onChange={(e) => {
                                seteImageUpload(e.target.files[0]);
                              }}
                            />

                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                if (eimageUpload) {
                                  euploadFile();
                                  setShowUpdate("Image");
                                  toggleShowToast();
                                }
                              }}
                            >
                              Upload
                            </Button>
                          </InputGroup>

                          <Table
                            size="sm"
                            bordered
                            responsive
                            style={{
                              tableLayout: "fixed",
                              textAlign: "center",
                            }}
                          >
                            <thead
                              style={{
                                background: "#eaecef",
                                color: "#6c767d",
                              }}
                            >
                              <tr>
                                <th
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  Figure #
                                </th>
                                <th
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  Preview
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody style={{ borderTop: "none" }}>
                              {newExplanationImage?.map((link, linkIdx) => (
                                <tr key={uuidv4()}>
                                  <td>
                                    {" "}
                                    <a href={link} target="_blank">
                                      {" "}
                                      {linkIdx + 1}
                                    </a>
                                  </td>
                                  <td>
                                    <img
                                      src={link}
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
                                    />{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <Button
                                      variant="outline-secondary"
                                      onClick={() => {
                                        setNewExplanationImage(
                                          newExplanationImage.filter(
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
                          <Form.Label className="text-muted">
                            <strong className="me-auto">
                              Explanation Sources
                            </strong>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Link</InputGroup.Text>
                            <Form.Control
                              aria-label="Link"
                              type="text"
                              placeholder="Type link here"
                              defaultValue={newSingleLink}
                              onChange={(e) => {
                                setNewSingleLink(e.target.value);
                              }}
                            />
                            <InputGroup.Text>Citation</InputGroup.Text>
                            <Form.Control
                              aria-label="Citation"
                              type="text"
                              placeholder="Type citation here"
                              defaultValue={newSource}
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
                                  setNewSingleLink("");
                                  setNewSource("");
                                  toggleShowToast();
                                }
                              }}
                            >
                              Add
                            </Button>
                          </InputGroup>

                          <Table
                            size="sm"
                            bordered
                            responsive
                            style={{
                              tableLayout: "fixed",
                              textAlign: "center",
                            }}
                          >
                            <thead
                              style={{
                                background: "#eaecef",
                                color: "#6c767d",
                              }}
                            >
                              <tr>
                                <th
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  Link
                                </th>
                                <th
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  Citation
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody style={{ borderTop: "none" }}>
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
                          <Form.Label className="text-muted">
                            <strong className="me-auto">Category</strong>
                          </Form.Label>
                          <Form.Select
                            aria-label="default select example"
                            onChange={(e) => {
                              setNewCategory(e.target.value);
                            }}
                          >
                            <option defaultValue>
                              {" "}
                              {qaVersions[0]?.category}
                            </option>
                            <option value="Asthma">Asthma</option>
                            <option value="Bronchiectasis">
                              Bronchiectasis
                            </option>
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
                          <Form.Label className="text-muted">
                            <strong className="me-auto">Level</strong>
                          </Form.Label>
                          <Form.Select
                            aria-label="default select example"
                            onChange={(e) => {
                              setNewLevel(e.target.value);
                            }}
                          >
                            <option defaultValue>
                              {" "}
                              {qaVersions[0]?.level}
                            </option>
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
                          Update
                        </Button>
                      </center>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                          Your changes have been recorded!
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Keep Editing
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              navigate(`/questions/${qaVersions[0].id}`);
                            }}
                          >
                            View Question
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Form>
                  </Col>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        )}
      </div>
    );
  } else {
    return <NoExist />;
  }
};

export default EditQA;
