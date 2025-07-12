import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../features/thunk/thunk";
import { FaPen, FaTrash } from "react-icons/fa";
import { setSelectedData } from "../features/students/studentSlice";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [filterText, setFilterText] = useState("");
  const searchRef = useRef();
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // ----------- handle delete ---------------

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  // ------------ handle Edit -------------

  const handleEdit = (students) => {
    dispatch(setSelectedData(students));
    navigate('/')
  };

  const filterData = students.filter((student) => {
    const filterUserData =
      student.studentName?.toLowerCase().includes(filterText.toLowerCase()) ||
      student.studentClass?.toLowerCase().includes(filterText.toLowerCase());
    return filterUserData;
  });

  return (
    <>
      <Header />
      <section className="container mt-5">
        <input
          type="text"
          onChange={(e) => setFilterText(e.target.value)}
          ref={searchRef}
          className="form-control mb-3 w-25"
          placeholder="search"
        />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Class</th>
              <th>Roll no</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((val, idx) => {
              const { studentName, studentClass, rollNumber, id } = val;

              return (
                <tr key={id}>
                  <td>{idx + 1}</td>
                  <td>{studentName}</td>
                  <td>{studentClass}</td>
                  <td>{rollNumber}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="btn btn-warning ms-2"
                      onClick={() => handleEdit(val)}
                    >
                      <FaPen />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
