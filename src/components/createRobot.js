import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createRobotThunk,
  loadCurrentRobotThunk,
} from "../redux/thunks/robotsThunks";

const CreateRobot = ({ isEditing, _id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const blankForm = {
    name: "",
    numbers: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const currentRobot = useSelector((state) => state.currentRobot);
  const buttonText = isEditing ? "Update" : "Create";

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

  const isFormInvalid = formData.name === "" || formData.group === "";

  useEffect(() => {
    if (isEditing) {
      dispatch(loadCurrentRobotThunk(_id));
    }
  }, [dispatch, isEditing, _id]);

  useEffect(() => {
    if (currentRobot) {
      setFormData(currentRobot);
    }
  }, [currentRobot]);

  return (
    <>
      <h3>Create a robot</h3>
      <form noValidate autoComplete="off" onSubmit={submitForm}>
        <div className="form-data">
          <label htmlFor="name">Name:</label>{" "}
          <input type="text" id="name" onChange={changeData} />
        </div>
        <div className="form-data">
          <label htmlFor="number">Resistencia:</label>{" "}
          <select id="number" value={formData.numbers} onChange={changeData}>
            <option value="">Select option</option>
            {numbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="form-data">
          <label htmlFor="number">Velocidad:</label>{" "}
          <select id="number" value={formData.numbers} onChange={changeData}>
            <option value="">Select option</option>
            {numbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={isFormInvalid}>
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default CreateRobot;
