import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRobotThunk } from "../redux/thunks/robotsThunks";

const CreateRobot = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blankForm = {
    name: "",
    numbers: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(createRobotThunk(formData));
    navigate("/robots");
  };

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const isFormInvalid = formData.name === "" || formData.group === "";
  //const buttonText = isEditing ? "Update" : "Create";
  return (
    <form noValidate autoComplete="off" onSubmit={submitForm}>
      <div className="form-data">
        <label htmlFor="name">Name:</label>{" "}
        <input type="text" id="name" onChange={changeData} />
      </div>
      <div className="form-data">
        <label htmlFor="resistencia">Resistencia:</label>{" "}
        <select id="resistencia" value={formData.numbers} onChange={changeData}>
          <option value="">Select option</option>
          {numbers.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <div className="form-data">
        <label htmlFor="velocidad">Velocidad:</label>{" "}
        <select id="velocidad" value={formData.numbers} onChange={changeData}>
          <option value="">Select option</option>
          {numbers.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={isFormInvalid}>
        Create
      </button>
    </form>
  );
};

export default CreateRobot;
