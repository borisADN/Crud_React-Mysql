import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/read/" + id)
      .then(res => {
        console.log(res);
       setValues({...values, name: res.data[0].name, email:res.data[0].email});
      })
      .catch(err => console.log(err));
  }, []);
  const [values, setValues] = useState({
    name:"",
    email: "",
});
const handleUpdate = (e)=>{
  e.preventDefault();
  axios
   .put("http://localhost:3001/update/" + id , values)
   .then((res) => {
      console.log(res);
      // alert("Student Updated Successfully");
      navigate("/")
    })
    .catch((err) => console.log(err));
}
// const handleUpdate = (req, res) => {
//   axios
//    .put(`http://localhost:3001/update/${id}`, values)
//     .then((res) => {
//       console.log(res);
//       alert("Student Updated Successfully");
//       // navigate("/")
//     })
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Student</h2>
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
                          Update
                        </button>
                        <Link to="/" className="btn btn-secondary">
                            Back to Home
                        </Link>
                    </div>

          
        </form>
      </div>
    </div>
  )
}
