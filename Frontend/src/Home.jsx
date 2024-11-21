import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css'

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    axios.delete("http://localhost:3001/delete/" + id)
     .then(res => {
        console.log(res);
        alert("Student deleted successfully");
        window.location.reload();
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Student List</h2>
        <div className="d-flex justify-content-end">
          <Link to="/create"><button className="btn btn-success">Add Student</button></Link>
        </div>
        <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          
          {data.map((student,index)=> {
            return (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                <Link to = {`/read/${student.id}`} className="btn btn-sm btn-info">View</Link>

                  <Link to={`/edit/${student.id}`}   className="btn btn-sm btn-primary mx-2">Edit</Link>
                  <button onClick={() => handleDelete(student.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            )
          })}
      
          </tbody>
        </table>
          
        </div>
      </div>
    </div>
  );
}
