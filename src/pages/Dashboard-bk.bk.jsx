import { useState, useContext, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import axios from "axios";
import { TriageContext } from "../context/TriageContext";

function buildTriagePayload({
  previousHistory,
  currentQuestionId,
  currentQuestionText,
  currentAnswerId,
  currentAnswerText,
  currentAnswerType,
  currentSequence,
  triageId,
  patientId,
}) {
  const history = Array.isArray(previousHistory) ? previousHistory : [];

  return {
    previousQuestionId:
      history.length > 0 ? history[history.length - 1].questionId : "",
    questionId: currentQuestionId,
    triageId,
    question: currentQuestionText,
    previousAnswerId:
      history.length > 0 ? history[history.length - 1].answerId : "",
    history: [...history],
    appointmentId: null,
    categoryDiagnosis: [],
    partialDiagnosis: [],
    isFinised: false,
    answers: [
      {
        answerId: currentAnswerId,
        url: "",
        answer: currentAnswerText,
        type: currentAnswerType,
      },
    ],
    patientId,
  };
}

function Dashboard() {
  //console.log("hi");
  const appId = process.env.REACT_APP_PROJECT_ID;
  const apiDashboard = process.env.REACT_APP_API_Dashboard;
  const apiRAGModle = process.env.REACT_APP_API_RAGModule;

  const { triageSections, getByApp } = useContext(TriageContext);
  const stindrItem = getByApp("Stindr")[0];
  const triageId = stindrItem?.id;

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const [showNewTestModal, setShowNewTestModal] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingq, setLoadingQ] = useState(false);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userId");
  const userDetail = JSON.parse(localStorage.getItem("userDetail"));
  const [currentQuestionData, setCurrentQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [chatHistory, setChatHistory] = useState(null);
  const callTestKit = () => {
    setShowModal(true);
  };
  const callStindr = () => {
    handleNewTest();
  };

  const handleGetReport = async () => {
    setShowModal(false);
    setShowReportModal(true);
    setLoading(true);
    setError(null);
    setReportData(null);
    setCurrentQuestionData(null);
    try {
      const reportUrl = `${apiDashboard}/GetFlowTriageSession`;
      console.log(reportUrl);
      const response = await axios.post(reportUrl, {
        triageId: triageId,
        patientId: userId,
        appointmentId: "",
      });

      setReportData(response.data.session.history);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch report data.");
    } finally {
      setLoading(false);
    }
  };

  const handleNewTest = async () => {
    setShowModal(false);
    setShowNewTestModal(true);
    setLoadingQ(true);
    setCurrentQuestionData(null);
    const questionApiUrl = `${apiDashboard}/FlowTriage`;
    const triagePayload = {
      triageId: triageId,
      patientId: userId,
    };

    //console.log(triagePayload);

    try {
      const response = await axios.post(questionApiUrl, triagePayload);
      setLoadingQ(false);
      setCurrentQuestionData(response.data);
      console.log("Next question response:", response.data);
    } catch (error) {
      console.error("Error posting next question:", error);
    }
  };

  const handleNextQuestion = async () => {
    setLoadingQ(true);
    const questionApiUrl = `${apiDashboard}/FlowTriage`;
    const oldhistory = currentQuestionData?.history || [];
    const len = oldhistory.length + 1;
    const currenthistory = {
      question: currentQuestionData.question,
      type: selectedAnswer.type,
      questionId: currentQuestionData.questionId,
      answerId: selectedAnswer.answerId,
      answer: selectedAnswer.answer,
      url: selectedAnswer.url,
      sequence: len,
    };
    const triagePayload = buildTriagePayload({
      previousHistory: [...oldhistory, currenthistory],
      currentQuestionId: currentQuestionData.questionId,
      currentQuestionText: currentQuestionData.question,
      currentAnswerId: selectedAnswer.answerId,
      currentAnswerText: selectedAnswer.answer,
      currentAnswerType: selectedAnswer.type,
      currentSequence: len,
      triageId: triageId,
      patientId: userId,
    });

    console.log("question request:", triagePayload);

    try {
      const response = await axios.post(questionApiUrl, triagePayload);
      setLoadingQ(false);
      setCurrentQuestionData(response.data);
      setSelectedAnswer(null);
      console.log("Next question response:", response.data);
    } catch (error) {
      console.error("Error posting next question:", error);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };
  const [messages, setMessages] = useState([]);
  const [yourChatMessageStateVariable, setYourChatMessageStateVariable] =
    useState("");
  const [showLexaModal, setShowLexaModal] = useState(false);

  const chatLexaBodyRef = useRef(null);
  const messagesLexaEndRef = useRef(null);
  useEffect(() => {
    messagesLexaEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, error]);

  const callLexaModel = () => {
    setShowLexaModal(true);
    setMessages([]);
    setYourChatMessageStateVariable("");
    setChatHistory(null);
    const firstName = userDetail.firstName;

    const newMessage = {
      id: Date.now(),
      text: `Hi ${firstName}, I'm Lexa. Not sure what's going on?I'll help you decide which tests to get and who to talk to for the right treatment - quickty and confidentially.<br>Everything you say is private. I'll just ask a few personal questions to help figure out what test are most appropriate.`,
      sender: "bot",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    chatLexaModal();
  };

  const chatLexaModal = async () => {
    let currentMessageInput = yourChatMessageStateVariable;
    setYourChatMessageStateVariable("");

    if (currentMessageInput.trim()) {
      const newUserMessage = {
        id: Date.now(),
        text: currentMessageInput,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    } else {
      currentMessageInput = "hi";
    }

    setLoading(true);
    setError(null);

    try {
      const reportUrl = `${apiRAGModle}/TriageAgent`;
      const response = await axios.post(reportUrl, {
        triageId: triageId,
        patientId: userId,
        query: currentMessageInput,
        chatHistory: chatHistory,
      });
      if (response.data.isSuccess) {
        setChatHistory(response.data.chatHistory);

        const botResponseText = response.data.data;
        if (botResponseText) {
          const newBotMessage = {
            id: Date.now() + 1,
            text: botResponseText,
            sender: "bot",
          };
          setMessages((prevMessages) => [...prevMessages, newBotMessage]);
        }
      } else {
        setError(response.data.message || "An error occurred during API call.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to get a response from Lexa. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [messagesSpecialist, setMessagesSpecialist] = useState([]);
  const [yourChatMessage, setYourChatMessage] = useState("");
  const [showSpecialistModal, setShowSpecialistModal] = useState(false);
  const chatBodyRef = useRef(null);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesSpecialist, loading, error]);
  const callSpecialistModel = () => {
    setShowSpecialistModal(true);
    setMessagesSpecialist([]);
    setYourChatMessage("");
    setChatHistory(null);
    const firstName = userDetail.firstName;

    const newMessage = {
      id: Date.now(),
      text: `Hi ${firstName}, I'm STD Specialist. Nice to meet you!`,
      sender: "bot",
    };
    setMessagesSpecialist((prevMessages) => [...prevMessages, newMessage]);
    chatSpecialistModal();
  };

  const chatSpecialistModal = async () => {
    let currentMessageInput = yourChatMessage;
    setYourChatMessage("");

    if (currentMessageInput.trim()) {
      const newUserMessage = {
        id: Date.now(),
        text: currentMessageInput,
        sender: "user",
      };
      setMessagesSpecialist((prevMessagesSpecialist) => [
        ...prevMessagesSpecialist,
        newUserMessage,
      ]);
    } else {
      currentMessageInput = "hi";
    }

    setLoading(true);
    setError(null);

    try {
      const reportUrl = `${apiRAGModle}/BookAcneSpecialistAgent`;
      const response = await axios.post(reportUrl, {
        triageId: triageId,
        patientId: userId,
        query: currentMessageInput,
        chatHistory: chatHistory,
      });
      if (response.data.isSuccess) {
        setChatHistory(response.data.chatHistory);

        const botResponseText = response.data.data;
        if (botResponseText) {
          const newBotMessage = {
            id: Date.now() + 1,
            text: botResponseText,
            sender: "bot",
          };
          setMessagesSpecialist((prevMessages) => [
            ...prevMessages,
            newBotMessage,
          ]);
        }
      } else {
        setError(response.data.message || "An error occurred during API call.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to get a response from Lexa. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [showBookingModal, setShowBookingModal] = useState(false);
  const callBookingModel = async () => {
    setShowBookingModal(true);
  };

  return (
    <>
      <div className="text-center py-4  justify-content-center  align-items-center">
        <h2 className="h2">Welcome to Stindr</h2>
        <p className="fw-bolder">How can we help you today?</p>
      </div>

      <div className="container py-4 ">
        <div className="row g-4 ">

          <div className="col-md-6">
            <div
              className="card hover-card d-flex flex-row overflow-hidden"
              style={{ height: "250px", borderRadius: "12px" }}
              onClick={callStindr}
            >
              {/* Image Side */}
              <div
                className="w-50"
                style={{
                  backgroundImage: "url('/images/card-1-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Content Side */}
              <div className="w-50 d-flex flex-column justify-content-center align-items-center text-center p-4 bg-light-blue">
                <h4 className="card-title color-dark-red">Stindr Triage</h4>
                <p className="card-text">Check yourself with confident.</p>
                  <span className="link-design">Check My Health</span>
              </div>
            </div>
          </div>

          {/* Find Me Test Kit */}
          <div className="col-md-6">
            <div
              className="card hover-card d-flex flex-row overflow-hidden"
              style={{ height: "250px", borderRadius: "12px" }}
              onClick={callTestKit}
            >
              {/* Image Side */}
              <div
                className="w-50"
                style={{
                  backgroundImage: "url('/images/card-1-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Content Side */}
              <div className="w-50 d-flex flex-column justify-content-center align-items-center text-center p-4 bg-light-blue">
                <h4 className="card-title color-dark-red">Find Me Test Kit</h4>
                <p className="card-text">Prioritize the treatment for you.</p>
                  <span className="link-design">Get My Test</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card hover-card d-flex flex-row overflow-hidden"
              style={{
                height: "250px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={callLexaModel}
            >
              {/* Left - Image Section */}
              <div
                className="w-50"
                style={{
                  backgroundImage: "url('/images/card-2-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Right - Content Section */}
              <div className="w-50 d-flex flex-column justify-content-center align-items-center text-center p-4 bg-light-blue">
                <h4 className="card-title color-dark-red">Lexa</h4>
                <p className="card-text">Your personalised Stindr assistant</p>
                <span className="link-design">Start Chart</span>
              </div>
            </div>
          </div>

          {/* Find Me STD Specialist Card */}
          <div className="col-md-6">
            <div
              className="card hover-card d-flex flex-row overflow-hidden"
              style={{
                height: "250px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={callSpecialistModel}
            >
              {/* Left - Image */}
              <div
                className="w-50"
                style={{
                  backgroundImage: "url('/images/card-3-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Right - Content */}
              <div className="w-50 d-flex flex-column justify-content-center align-items-center text-center p-4 bg-light-blue">
                <h4 className="card-title color-dark-red">Find Me STD Specialist</h4>
                <span className="link-design">Find Nearby</span>
              </div>
            </div>
          </div>

          {/* Book Appointment Card */}
         {/*  <div className="col-md-6">
            <div
              className="card hover-card d-flex flex-row overflow-hidden"
              style={{
                height: "250px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={callBookingModel}
            >
              {/* Left - Image * /}
              <div
                className="w-50"
                style={{
                  backgroundImage: "url('/images/card-4-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Right - Content * /}
              <div className="w-50 d-flex flex-column justify-content-center align-items-center text-center p-4 bg-light-blue">
                <h4 className="card-title color-dark-red">Book Appointment</h4>
                <p className="card-text">
                  Choose from various appointments, get Consultation &
                  Prescription
                </p>
                <span className="link-design">Reserve Slot</span>
              </div>
            </div>
          </div> */}

        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Stindr</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>STD Screening to continue click take test</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-primary"
                  onClick={handleGetReport}
                >
                  Report
                </button>
                <button className="btn btn-primary" onClick={handleNewTest}>
                  Take Test
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showReportModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div
              className="modal-content"
              style={{
                height: "90vh",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Previews Test Report</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowReportModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {loading && <p>Loading report...</p>}
                {error && <p className="text-danger">{error}</p>}

                {reportData &&
                  reportData.map((item, index) => (
                    <div className="list-group-item" key={index}>
                      <strong>
                        {item.sequence}. {item.question}
                      </strong>
                      <br />
                      <span className="text-primary">{item.answer}</span>
                    </div>
                  ))}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setShowReportModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showNewTestModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div
              className="modal-content"
              style={{
                height: "90vh",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Check you self</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowNewTestModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {loadingq && <p>Loading...</p>}
                

                {currentQuestionData && !currentQuestionData.isFinised ? (
                  <div className="question-box">
                    <h4>{currentQuestionData.question}</h4>
                    <ul className="question-block">
                      {currentQuestionData.answers.map((answer, idx) => (
                        <li
                          key={answer.answerId}
                          className={`list-group-item ${
                            selectedAnswer?.answerId === answer.answerId
                              ? "active"
                              : ""
                          }`}
                          onClick={() => handleAnswerSelect(answer)}
                          style={{ cursor: "pointer" }}
                        >
                          {answer.answer}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  currentQuestionData && (
                    <div className="question-box">
                      {currentQuestionData.partialDiagnosis &&
                      currentQuestionData.partialDiagnosis.length > 0 ? (
                        currentQuestionData.partialDiagnosis.map(
                          (soluction, idx) => (
                            <div key={idx}>
                              <p>{soluction.name}</p>
                              {soluction.url &&
                                soluction.url.includes(
                                  "youtube.com/watch?v="
                                ) && (
                                  <iframe
                                    width="100%"
                                    height="450px"
                                    src={`https://www.youtube.com/embed/${
                                      soluction.url.split("v=")[1]
                                    }`}
                                    title={`Solution ${idx}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                )}
                            </div>
                          )
                        )
                      ) : (
                        <p>We are currently working on your solution.</p>
                      )}

                      <h3 className="text-primary">Your test report</h3>
                      {currentQuestionData.history &&
                        currentQuestionData.history.map((item, index) => (
                          <div className="list-group-item" key={index}>
                            <strong>
                              {item.sequence}. {item.question}
                            </strong>
                            <br />
                            <span className="text-primary">{item.answer}</span>
                          </div>
                        ))}
                    </div>
                  )
                )}
              </div>
              <div className="modal-footer">
                {currentQuestionData && currentQuestionData.isFinised ? (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => setShowNewTestModal(false)}
                  >
                    Close
                  </button>
                ) : currentQuestionData ? (
                  <>
                    {!selectedAnswer && (
                      <p className="text-danger">Please select an option</p>
                    )}
                    <button
                      className="btn btn-blue"
                      disabled={selectedAnswer == null}
                      onClick={handleNextQuestion}
                    >
                      Continue
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}

      {showLexaModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div
              className="modal-content"
              style={{
                height: "90vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Chat with Lexa</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLexaModal(false)}
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ flexGrow: 1, overflowY: "auto" }}
                ref={chatLexaBodyRef}
              >
                <div className="chat-messages">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message-item ${msg.sender}-message`}
                      style={{
                        textAlign: msg.sender === "user" ? "right" : "left",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor:
                            msg.sender === "user" ? "#0062c5ff" : "aliceblue",
                          color: msg.sender === "user" ? "#fff" : "#222",
                          padding: "8px 12px",
                          borderRadius: "15px",
                          display: "inline-block",
                          maxWidth: "75%",
                          wordBreak: "break-word",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\n/g, "<br>"),
                        }}
                      ></span>
                    </div>
                  ))}
                  {loading && <p>Loading chat...</p>}
                  {error && <p className="text-danger">{error}</p>}
                  <div ref={messagesLexaEndRef} />
                </div>
              </div>
              <div
                className="modal-footer"
                style={{ borderTop: "none", paddingTop: "0" }}
              >
                {/* Chat Input Area */}
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message..."
                    rows="2"
                    value={yourChatMessageStateVariable}
                    onChange={(e) =>
                      setYourChatMessageStateVariable(e.target.value)
                    }
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        chatLexaModal();
                      }
                    }}
                    style={{ resize: "none" }}
                  ></textarea>
                  <button className="btn btn-primary" onClick={chatLexaModal}>
                    Send
                  </button>{" "}
                  {/* Send button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSpecialistModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div
              className="modal-content"
              style={{
                height: "90vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">STD Specialist</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowSpecialistModal(false)}
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ flexGrow: 1, overflowY: "auto" }}
                ref={chatBodyRef}
              >
                <div className="chat-messages">
                  {messagesSpecialist.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message-item ${msg.sender}-message`}
                      style={{
                        textAlign: msg.sender === "user" ? "right" : "left",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor:
                            msg.sender === "user" ? "#e2f0fe" : "#f1f0f0",
                          padding: "8px 12px",
                          borderRadius: "15px",
                          display: "inline-block",
                          maxWidth: "75%",
                          wordBreak: "break-word",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\n/g, "<br>"),
                        }}
                      ></span>
                    </div>
                  ))}
                  {loading && <p>Loading chat...</p>}
                  {error && <p className="text-danger">{error}</p>}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <div
                className="modal-footer"
                style={{ borderTop: "none", paddingTop: "0" }}
              >
                {/* Chat Input Area */}
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message..."
                    rows="2"
                    value={yourChatMessage}
                    onChange={(e) => setYourChatMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        chatSpecialistModal();
                      }
                    }}
                    style={{ resize: "none" }}
                  ></textarea>
                  <button
                    className="btn btn-primary"
                    onClick={chatSpecialistModal}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showBookingModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div
              className="modal-content"
              style={{
                height: "90vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">STD Specialist</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowBookingModal(false)}
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ flexGrow: 1, overflowY: "auto" }}
                ref={chatBodyRef}
              >
                <div className="chat-messages">
                  {messagesSpecialist.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message-item ${msg.sender}-message`}
                      style={{
                        textAlign: msg.sender === "user" ? "right" : "left",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor:
                            msg.sender === "user" ? "#e2f0fe" : "#f1f0f0",
                          padding: "8px 12px",
                          borderRadius: "15px",
                          display: "inline-block",
                          maxWidth: "75%",
                          wordBreak: "break-word",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\n/g, "<br>"),
                        }}
                      ></span>
                    </div>
                  ))}
                  {loading && <p>Loading chat...</p>}
                  {error && <p className="text-danger">{error}</p>}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <div
                className="modal-footer"
                style={{ borderTop: "none", paddingTop: "0" }}
              >
                {/* Chat Input Area */}
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message..."
                    rows="2"
                    value={yourChatMessage}
                    onChange={(e) => setYourChatMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        chatSpecialistModal();
                      }
                    }}
                    style={{ resize: "none" }}
                  ></textarea>
                  <button
                    className="btn btn-primary"
                    onClick={chatSpecialistModal}
                  >
                    Check Avilable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
