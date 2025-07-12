import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData, updateData } from "../features/thunk/thunk";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [studentData, setStudentData] = useState({});
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.students);
  const navigate = useNavigate()

  // ------------ use effect --------------

  useEffect(() => {
    if (selectedData) {
      setStudentData(selectedData);
    } else {
      setStudentData({});
    }
  }, [selectedData]);

  // ----------- handle change --------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // ---------- handle submit ----------------

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedData) {
      dispatch(updateData(studentData));
      navigate('/')
    } else {
      dispatch(createData({ ...studentData, id: Date.now() }));
      navigate('/Table')
    }

    setStudentData({});
    console.log(studentData);
  };

  return (
    <>
      <Header />
      <section className="container mt-5">
        <form method="post" className="w-50 border border-secondary-1 p-5 rounded-4 mx-auto shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              onChange={handleChange}
              value={studentData.studentName || ""}
              id="studentName"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentClass" className="form-label">
              Class
            </label>
            <input
              type="text"
              name="studentClass"
              id="studentClass"
              onChange={handleChange}
              value={studentData.studentClass || ""}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rollNumber" className="form-label">
              Roll.No
            </label>
            <input
              type="number"
              min={1}
              max={70}
              name="rollNumber"
              id="rollNumber"
              onChange={handleChange}
              value={studentData.rollNumber || ""}
              className="form-control"
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
