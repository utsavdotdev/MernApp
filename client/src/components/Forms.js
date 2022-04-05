import React, { useState } from "react";
import axios from "axios";
import "../css/Form.css";

function Forms() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    salary: "",
    address: "",
  });
  const { name, email, number, salary, address } = data;
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  async function sendData(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/emp",
        {
          empName: name,
          empEmail: email,
          empNumber: number,
          empSalary: salary,
          empAddress: address,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res) {
        setData({
          name: "",
          email: "",
          number: "",
          salary: "",
          address: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="main_div">
        <h1 className="font-weight-normal">
          <u>Registration Form</u>
        </h1>
        <form className="register-form" onSubmit={sendData} autoComplete="off">
          <div className="form-group">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter username"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="form-group">
            <label>Number:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter number"
              name="number"
              onChange={handleChange}
              value={data.number}
            />
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter salary"
              name="salary"
              onChange={handleChange}
              value={data.salary}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Address"
              name="address"
              onChange={handleChange}
              value={data.address}
            />
          </div>

          <div className="btn_box">
            <button className="btn btn-danger my-2">Clear</button>
            <button className="btn btn-success my-2" type="submit">
              Register
            </button>
          </div>
        </form>
    </div>
  );
}

export default Forms;
