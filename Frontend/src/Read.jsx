import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/read/" + id)
      .then(res => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">

        <h2 style={{color:"blue"}}>Student details</h2>
       <h2>name:{student.name}</h2>
        <h2>email:{student.email}</h2>
        </div>

      <Link to="/"><button className="btn btn-primary me-2">Back</button></Link>
      {/* <Link to={"/update/" + student._id}><button className="btn btn-success">Update</button></Link> */}
      <Link to={`/edit/${student.id}`} className="btn btn-info">Edit</Link>
      </div>
    </div>
  );
}

export default Read;
