import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MedicalHistory() {

  const apiWebApi = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const token = localStorage.getItem('token');
  const [showModal, setShowModal] = useState(false);
  const [selectProblemTypeId, setSelectProblemTypeId] = useState(null);
  const userId = localStorage.getItem("userId");


  useEffect(() => {
    fetchPatientData();
  }, []);

  const fetchPatientData = () => {
    if (!token) {
      console.error("Token missing. User must be logged in.");
      return;
    }
    const API_URL = `${apiWebApi}/GetPatientProblem`;

    axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.error('API Error:', err);
    });
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectProblemTypeId(type.problemTypeId);
    setStep(2);
  };

  const handleProblemClick = (prob) => {
    setSelectedProblem(prob);
    setStep(3);
  };

  const goBack = () => {
    if (step === 3) {
      setSelectedProblem(null);
      setStep(2);
    } else if (step === 2) {
      setSelectedType(null);
      setStep(1);
    }else{
      setSelectProblemTypeId(null);
    }
  };

  const createNewHistory = () => {
    setShowModal(true);
    console.log("hi");
  }

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const addNewHistory = async () => {
    if (!token) {
      console.error("Token missing. User must be logged in.");
      return;
    }
    const apiUrl = `${apiWebApi}/PatientAddProblem`;
    const patientId = userId;
    const problemTypeId = selectProblemTypeId;

    try {
      const data = new FormData();
      data.append("image", formData.image);
      data.append("PatientId", patientId);

      const addProblemRequest = {
        problemTypeId: problemTypeId,
        title: formData.title,
        description: formData.description,
        patientId: patientId
      };

      data.append("addproblemrequest", JSON.stringify(addProblemRequest));

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: data
      });

      if (!response.ok) throw new Error("Failed to add problem");

      const result = await response.json();
      await fetchPatientData();
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
    <div className=" text-center py-4  justify-content-center  align-items-center">
      <h2 className="mb-4 h2">Medical History</h2>

      {step === 1 && (
        <div style={{minHeight: 'calc(100vh - 200px)',}}>
          <h4>Patient: {data.patientName}</h4>
          <ul className="list-group mx-5">
            {data.patientProblems.map((type) => (
              <li
                key={type.problemTypeId}
                className="list-group-item d-flex justify-content-between"
                onClick={() => handleTypeClick(type)}
                style={{ cursor: 'pointer' }}
              >
                <span>{type.problemType}</span>
                <span className="badge bg-primary rounded-pill">{type.count}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === 2 && selectedType && (
        <div>
          <button className="btn btn-secondary mb-3" onClick={goBack}>Back</button>
          <button className="btn btn-primary mb-3 mx-3" onClick={createNewHistory}>Add New</button>
          <h4>{selectedType.problemType}</h4>
          <ul className="list-group mx-5">
            {selectedType.probs.map((prob, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => handleProblemClick(prob)}
                style={{ cursor: 'pointer' }}
              >
                {prob.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === 3 && selectedProblem && (
        <div>
          <button className="btn btn-secondary mb-3" onClick={goBack}>← Back</button>
          <h4>{selectedProblem.title}</h4>
          <p>{selectedProblem.description}</p>
          <img
            src={selectedProblem.imageUrl}
            alt={selectedProblem.title}
            className="img-fluid rounded shadow"
            style={{ maxWidth: '400px' }}
          />
        </div>
      )}
    </div>
    {showModal && (
      <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Health Issue</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="title"
                placeholder="Problem Title"
                className="form-control mb-2"
                value={formData.title}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Problem Description"
                className="form-control mb-2"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={addNewHistory}>Save</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
