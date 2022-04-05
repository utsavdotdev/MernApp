import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Card.css";

function Card() {
  const [user, setUser] = useState([]);
  useEffect(async () => {
    const updateRes = await axios.get("http://localhost:3001/emp");
    setUser(updateRes.data);
  }, [user]);

  const deleteUser = async (id) => {
    try {
      const deleteRes = await axios.delete(`http://localhost:3001/emp/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="card_div">
        {user.map((data) => {
          const { empName, empNumber, empSalary, empEmail, empAddress, _id } =
            data;
          return (
            <>
              <div key={_id} className="card_box mx-3">
                <span>
                  <strong>Name:</strong>
                  {empName}
                </span>
                <br />
                <span>
                  <strong>Email:</strong>
                  {empEmail}
                </span>
                <br />
                <span>
                  <strong>Salary:</strong>
                  {empSalary}
                </span>
                <br />
                <span>
                  <strong>Address:</strong>
                  {empAddress}
                </span>
                <br />
                <span>
                  <strong>Number:</strong>
                  {empNumber}
                </span>
                <br />
                <button className="btn btn-success mt-1">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/edit/${_id}`}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  className="btn btn-danger mt-1 mx-2"
                  onClick={(e) => {
                    deleteUser(_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
