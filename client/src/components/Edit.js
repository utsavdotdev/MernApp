import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Form() {
  const History = useNavigate();
  let { _id } = useParams();
  const [get, setGet] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mernbackendutsav.herokuapp.com/emp/${_id}`)
      .then((res) => {
        setGet(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const { empName, empAddress, empNumber, empEmail, empSalary } = get;

  function handleChange(e) {
    setGet({
      ...get,
      [e.target.name]: e.target.value,
    });
  }
  async function sendData(e) {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://mernbackendutsav.herokuapp.com/emp/${_id}`,
        {
          empName,
          empEmail,
          empNumber,
          empSalary,
          empAddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res) {
        setGet({
          empName: "",
          empEmail: "",
          empNumber: "",
          empSalary: "",
          empAddress: "",
        });
        History("/");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="py-1 mx-3">
      <h1>Updating Form</h1>
      <form className="register-form w-50 py-1" onSubmit={sendData}>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter name"
            name="empName"
            onChange={handleChange}
            value={empName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter email"
            name="empEmail"
            onChange={handleChange}
            value={empEmail}
          />
        </div>
        <div className="form-group">
          <label>Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter number"
            name="empNumber"
            onChange={handleChange}
            value={empNumber}
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter salary"
            name="empSalary"
            onChange={handleChange}
            value={empSalary}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Address"
            name="empAddress"
            onChange={handleChange}
            value={empAddress}
          />
        </div>

        <button className="btn btn-primary my-2" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default Form;
