import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Modal,
  ProgressBar,
  Row,
  Table,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4, v4 } from "uuid";
import {
  fetchAllQuestionsAnswers,
  NewQuestionsAnswers,
} from "../allQA/allQASlice";
import { storage } from "./firebase";

const AddQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAllQuestionsAnswers());
      setLoading(false);
    }, 500);
  }, []);

  const [newQuestion, setNewQuestion] = useState("");
  const [newSingleOption, setNewSingleOption] = useState("");
  const [newAnswerOptions, setNewAnswerOptions] = useState([
    "Type multiple choice option 1",
    "Type multiple choice option 2",
    "Type multiple choice option 3",
    "Type multiple choice option 4",
  ]);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("Select answer");
  const [newExplanation, setNewExplanation] = useState("");

  const [newSingleLink, setNewSingleLink] = useState("");
  const [newSource, setNewSource] = useState("");
  const [newExplanationLinks, setNewExplanationLinks] = useState([]);

  const [newCategory, setNewCategory] = useState("");
  const [newLevel, setNewLevel] = useState("");

  //------------ toast details
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const toggleShowToast = () => setShowToast(!showToast);
  //----------- end toast details

  //------------ alert details
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const toggleShowAlert = () => setShowAlert(!showAlert);
  //----------- end alert details

  const [validated, setValidated] = useState(false);

  //------------ modal details
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const handleClose = () => {
    setValidated(false);
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);
  //------------ end modal details

  const AllQ = useSelector((state) => state.questionsAnswers.questionsAnswers);
  const newQuestionid = useSelector(
    (state) => state.questionsAnswers.newQuestion.id
  );
  const Questionid = AllQ.length + 1;
  console.log("Questionid", Questionid);
  console.log("newQuestionid after submit", newQuestionid);

  //Question Images
  const [imageUrls, setImageUrls] = useState([]);
  const [newSingleQImageAltText, setNewSingleQImageAltText] = useState("");
  const [newQuestionImageAltText, setNewQuestionImageAltText] = useState([]);

  const [imageUpload, setImageUpload] = useState(null);
  const imagesListRef = ref(storage, `images/${Questionid}/`);
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${Questionid}/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });

    listAll(`images/${Questionid}/${imageUpload.name + v4()}`).then(
      (response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      }
    );

    newQuestionImageAltText[imageUrls.length] = newSingleQImageAltText.trim();
  };

  //Explanation Images
  const [eimageUrls, seteImageUrls] = useState([]);
  const [newSingleExpImageAltText, setNewSingleExpImageAltText] = useState("");
  const [newExplanationImageAltText, setNewExplanationImageAltText] = useState(
    []
  );

  const [eimageUpload, seteImageUpload] = useState(null);
  const eimagesListRef = ref(storage, `images/${Questionid}/explanation`);
  const euploadFile = () => {
    if (eimageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${Questionid}/explanation/${eimageUpload.name + v4()}`
    );
    uploadBytes(imageRef, eimageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        seteImageUrls((prev) => [...prev, url]);
      });
    });

    listAll(
      `images/${Questionid}/explanation/${eimageUpload.name + v4()}`
    ).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          seteImageUrls((prev) => [...prev, url]);
        });
      });
    });
    newExplanationImageAltText[eimageUrls.length] =
      newSingleExpImageAltText.trim();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (
      newQuestion.trim() === "" ||
      newCategory === "" ||
      newCategory === "none" ||
      newLevel === "" ||
      newLevel === "none"
    ) {
      setAlertMsg("A required field is missing!");
      toggleShowAlert();
    } else {
      dispatch(
        NewQuestionsAnswers({
          question: newQuestion.trim(),
          questionImage: imageUrls,
          questionImageAltText: newQuestionImageAltText,
          answerOptions: newAnswerOptions,
          correctAnswer: newCorrectAnswer,
          explanation: newExplanation.trim(),
          explanationImage: eimageUrls,
          explanationImageAltText: newExplanationImageAltText,
          explanationLinks: newExplanationLinks,
          category: newCategory,
          level: newLevel,
        })
      );
      setModalMsg("New question successfully added!");
      setValidated(true);
    }
  };

  const clearText = (evt, text) => {
    evt.target.value = text;
  };

  return (
    <>
      {loading ? (
        <ProgressBar animated now={100} />
      ) : (
        <Row>
          <ToastContainer className="p-3" position="middle-end">
            <Toast
              bg="success"
              show={showToast}
              onClose={toggleShowToast}
              delay={5000}
              autohide
              animation={true}
            >
              <Toast.Header>
                <strong
                  className="me-auto"
                  style={{
                    fontSize: "150%",
                  }}
                >
                  Saved!
                </strong>
              </Toast.Header>
              <Toast.Body
                style={{
                  fontSize: "150%",
                }}
              >
                {toastMsg}
              </Toast.Body>
            </Toast>
          </ToastContainer>
          <Alert
            variant="danger"
            dismissible
            show={showAlert}
            onClose={toggleShowAlert}
          >
            <Alert.Heading>
              <strong>Alert!</strong>
            </Alert.Heading>
            <p>{alertMsg}</p>
          </Alert>
          <Card
            id="no-border"
            className="mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="question">
                    <Form.Label className="text-muted">
                      <strong className="me-auto">Question</strong>
                    </Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                      placeholder="Type question here"
                      defaultValue={newQuestion}
                      onChange={(e) => {
                        setNewQuestion(e.target.value);
                      }}
                      onFocus={() => setShowAlert(false)}
                    />
                  </Form.Group>
                </Row>

                {/* //Question Image List */}

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="questionImage">
                    <Form.Label className="text-muted">
                      <strong className="me-auto">Question Figures</strong>
                    </Form.Label>

                    <InputGroup className="mb-3">
                      <Form.Control
                        type="file"
                        onChange={(e) => {
                          setImageUpload(e.target.files[0]);
                        }}
                        onFocus={() => setShowAlert(false)}
                      />

                      <InputGroup.Text>Alt Text</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Type alt text here"
                        defaultValue={newSingleQImageAltText}
                        onChange={(e) => {
                          setNewSingleQImageAltText(e.target.value);
                        }}
                        onFocus={() => setShowAlert(false)}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          if (
                            imageUpload &&
                            newSingleQImageAltText.trim() !== ""
                          ) {
                            uploadFile();
                            setToastMsg(
                              `Image with alt text: "${newSingleQImageAltText.trim()}".`
                            );
                            setNewSingleQImageAltText("");
                            toggleShowToast();
                          } else {
                            setAlertMsg(
                              "You must enter both Image and Alt Text."
                            );
                            toggleShowAlert();
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
                          <th
                            style={{
                              fontWeight: "normal",
                            }}
                          >
                            Alt Text
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody style={{ borderTop: "none" }}>
                        {imageUrls?.map((link, linkIdx) => (
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
                                style={{ width: "150px", height: "100px" }}
                              />{" "}
                            </td>
                            <td>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  onClick={(evt) => {
                                    clearText(
                                      evt,
                                      newQuestionImageAltText[linkIdx]
                                    );
                                  }}
                                  defaultValue={
                                    newQuestionImageAltText[linkIdx]
                                  }
                                  onChange={(e) => {
                                    newQuestionImageAltText[linkIdx] =
                                      e.target.value;
                                  }}
                                  placeholder="Type alt text here"
                                  onFocus={() => setShowAlert(false)}
                                />
                                <Button
                                  variant="outline-secondary"
                                  onClick={() => {
                                    if (
                                      newQuestionImageAltText[
                                        linkIdx
                                      ].trim() !== ""
                                    ) {
                                      setNewQuestionImageAltText(
                                        newQuestionImageAltText?.map(
                                          (currentText, idx) => {
                                            if (idx === linkIdx) {
                                              currentText =
                                                newQuestionImageAltText[
                                                  linkIdx
                                                ].trim();
                                            }
                                            return currentText;
                                          }
                                        )
                                      );
                                      setToastMsg(
                                        `Image with alt text: "${newQuestionImageAltText[
                                          linkIdx
                                        ].trim()}".`
                                      );
                                      toggleShowToast();
                                    } else {
                                      setAlertMsg(
                                        `You must enter an alt text for the image here or 'Remove' this entire row.`
                                      );
                                      toggleShowAlert();
                                    }
                                  }}
                                >
                                  Save
                                </Button>
                              </InputGroup>
                            </td>
                            <td>
                              {" "}
                              <Button
                                variant="outline-secondary"
                                onClick={() => {
                                  setImageUrls(
                                    imageUrls.filter((currentLink, idx) => {
                                      return idx !== linkIdx;
                                    })
                                  );
                                  setNewQuestionImageAltText(
                                    newQuestionImageAltText.filter(
                                      (currentText, idx) => {
                                        return idx != linkIdx;
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
                        onFocus={() => setShowAlert(false)}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          if (newSingleOption.trim() !== "") {
                            setNewAnswerOptions([
                              ...newAnswerOptions,
                              newSingleOption.trim(),
                            ]);
                            setToastMsg(newSingleOption.trim());
                            setNewSingleOption(""); // Doesn't clear field for some reason
                            toggleShowToast();
                          } else {
                            setAlertMsg(
                              "You haven't added a new multiple choice option yet."
                            );
                            toggleShowAlert();
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
                          defaultValue={option}
                          onChange={(e) => {
                            option = e.target.value;
                          }}
                          placeholder={`Type multiple choice option ${
                            optionIdx + 1
                          }`}
                          onFocus={() => setShowAlert(false)}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => {
                            if (option.trim() !== "") {
                              setNewAnswerOptions(
                                newAnswerOptions?.map((currentOption, idx) => {
                                  if (idx === optionIdx) {
                                    currentOption = option.trim();
                                  }
                                  return currentOption;
                                })
                              );

                              setToastMsg(option.trim());
                              toggleShowToast();
                            } else {
                              setAlertMsg(
                                `You must enter a multiple choice option here or 'Remove' this field`
                              );
                              toggleShowAlert();
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
                      rows={3}
                      placeholder="Type explanation here"
                      defaultValue={newExplanation}
                      onChange={(e) => {
                        setNewExplanation(e.target.value);
                      }}
                      onFocus={() => setShowAlert(false)}
                    ></Form.Control>
                  </Form.Group>
                </Row>

                {/* explanation image links */}

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="explanationImage">
                    <Form.Label className="text-muted">
                      <strong className="me-auto">Explanation Figures</strong>
                    </Form.Label>

                    <InputGroup className="mb-3">
                      <Form.Control
                        type="file"
                        onChange={(e) => {
                          seteImageUpload(e.target.files[0]);
                        }}
                        onFocus={() => setShowAlert(false)}
                      />
                      <InputGroup.Text>Alt Text</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Type alt text here"
                        defaultValue={newSingleExpImageAltText}
                        onChange={(e) => {
                          setNewSingleExpImageAltText(e.target.value);
                        }}
                        onFocus={() => setShowAlert(false)}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          if (
                            eimageUpload &&
                            newSingleExpImageAltText.trim() !== ""
                          ) {
                            euploadFile();
                            setToastMsg(
                              `Image with alt text: "${newSingleExpImageAltText.trim()}".`
                            );
                            setNewSingleExpImageAltText("");
                            toggleShowToast();
                          } else {
                            setAlertMsg(
                              "You must enter both Image and Alt Text."
                            );
                            toggleShowAlert();
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
                          <th
                            style={{
                              fontWeight: "normal",
                            }}
                          >
                            Alt Text
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody style={{ borderTop: "none" }}>
                        {eimageUrls?.map((link, linkIdx) => (
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
                                style={{ width: "150px", height: "100px" }}
                              />{" "}
                            </td>
                            <td>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  onClick={(evt) => {
                                    clearText(
                                      evt,
                                      newExplanationImageAltText[linkIdx]
                                    );
                                  }}
                                  defaultValue={
                                    newExplanationImageAltText[linkIdx]
                                  }
                                  onChange={(e) => {
                                    newExplanationImageAltText[linkIdx] =
                                      e.target.value;
                                  }}
                                  placeholder="Type alt text here"
                                  onFocus={() => setShowAlert(false)}
                                />
                                <Button
                                  variant="outline-secondary"
                                  onClick={() => {
                                    if (
                                      newExplanationImageAltText[
                                        linkIdx
                                      ].trim() !== ""
                                    ) {
                                      setNewExplanationImageAltText(
                                        newExplanationImageAltText?.map(
                                          (currentText, idx) => {
                                            if (idx === linkIdx) {
                                              currentText =
                                                newExplanationImageAltText[
                                                  linkIdx
                                                ].trim();
                                            }
                                            return currentText;
                                          }
                                        )
                                      );
                                      setToastMsg(
                                        `Image with alt text: "${newExplanationImageAltText[
                                          linkIdx
                                        ].trim()}".`
                                      );
                                      toggleShowToast();
                                    } else {
                                      setAlertMsg(
                                        `You must enter an alt text for the image here or 'Remove' this entire row.`
                                      );
                                      toggleShowAlert();
                                    }
                                  }}
                                >
                                  Save
                                </Button>
                              </InputGroup>
                            </td>
                            <td>
                              {" "}
                              <Button
                                variant="outline-secondary"
                                onClick={() => {
                                  seteImageUrls(
                                    eimageUrls.filter((currentLink, idx) => {
                                      return idx !== linkIdx;
                                    })
                                  );
                                  setNewExplanationImageAltText(
                                    newExplanationImageAltText.filter(
                                      (currentText, idx) => {
                                        return idx != linkIdx;
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
                      <strong className="me-auto">Explanation Sources</strong>
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Link</InputGroup.Text>
                      <Form.Control
                        aria-label="Link"
                        type="text"
                        defaultValue={newSingleLink}
                        placeholder="Type link here"
                        onChange={(e) => {
                          setNewSingleLink(e.target.value);
                        }}
                        onFocus={() => setShowAlert(false)}
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
                        onFocus={() => setShowAlert(false)}
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
                            setToastMsg(
                              `Citation: ${newSource.trim()} \n Link: ${newSingleLink.trim()}`
                            );
                            setNewSingleLink(""); //Doesn't clear field for some reason
                            setNewSource(""); //Doesn't clear field for some reason
                            toggleShowToast();
                          } else {
                            setAlertMsg(
                              "You must enter both Link and Citation."
                            );
                            toggleShowAlert();
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
                    <Form.Label className="text-muted">
                      <strong className="me-auto">Category</strong>
                    </Form.Label>
                    <Form.Select
                      aria-label="default select example"
                      onChange={(e) => {
                        setNewCategory(e.target.value);
                      }}
                      onFocus={() => setShowAlert(false)}
                    >
                      <option value="none">Select category</option>
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
                    <Form.Label className="text-muted">
                      <strong className="me-auto">Level</strong>
                    </Form.Label>
                    <Form.Select
                      aria-label="default select example"
                      onChange={(e) => {
                        setNewLevel(e.target.value);
                      }}
                      onFocus={() => setShowAlert(false)}
                    >
                      <option value="none">Select difficulty level</option>
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
                    onClick={() => {
                      if (
                        newQuestion.trim() !== "" &&
                        newCategory !== "" &&
                        newCategory !== "none" &&
                        newLevel !== "" &&
                        newLevel !== "none"
                      ) {
                        handleShow();
                      }
                    }}
                  >
                    Add Question
                  </Button>
                </center>

                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Body>{modalMsg}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        navigate(`/questions/${newQuestionid}`);
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
      )}
    </>
  );
};

export default AddQuestion;
