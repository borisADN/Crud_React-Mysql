import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
    const [values, setValues] = useState({
        name: "",
        email: "",
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/student", values)
            .then(res =>{
                console.log(res);
                alert("Student Added Successfully");
                setValues({ name: "", email: "" });
                // navigate("/")
            })
            .catch(err => console.log(err));
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
            required
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
            required
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e)=>setValues({...values,email: e.target.value})}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
                        <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }}>
                            Submit
                        </button>
                        <Link to="/" className="btn btn-secondary">
                            Back to Home
                        </Link>
                    </div>

          
        </form>
      </div>
    </div>
  );
}
