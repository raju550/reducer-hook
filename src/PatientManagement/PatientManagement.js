import React, { useReducer, useRef } from "react";
import { initialState, patientReducer } from "../PatientReducer/PatientReducer";

const PatientManagement = () => {
  const nameRef = useRef();
  const [state, dispatch] = useReducer(patientReducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "Add-PATIENT",
      name: nameRef.current.value,
      id: state.patients.length + 1,
    });
    nameRef.current.value = "";
  };
  return (
    <div>
      <h1>Patient management chamber: {state.patients.length}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} />
        <button type="submit">submit</button>
        {state.patients.map((pt) => (
          <li
            key={pt.id}
            onClick={() => dispatch({ type: "REMOVE-PATIENT", id: pt.id })}
          >
            {pt.name}
          </li>
        ))}
      </form>
    </div>
  );
};

export default PatientManagement;
