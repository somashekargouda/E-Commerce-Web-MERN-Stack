import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import createCategory from "./helper/adminapicall";


const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange =(event) =>{
    setError("")
    setName(event.target.value)
  }

  const handleSubmit = (event) =>{
      event.preventDefault()
      setError(false)
      setSuccess(false)

      //API call
      createCategory(user._id, token, {name})
      .then(data =>{
          if(data.error)
          {
              setError(true)
          }else{
              setError("")
              setSuccess(true)
              setName("")
              
             
          }
      })
  }

  const successMessage =() =>{
    if(success)
    {
        return <h3 className="text-success">{name} Category created successfully</h3>
    }
}

  const errorMessage = () =>{
    if(error)
    {
        return <h3 className = "text-danger">Category creation failed</h3>
    }
}

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button onClick={handleSubmit} className="btn btn-outline-info">Create Category</button>
      </div>
    </form>
  );

  return (
    <Base
      title="Create a category here"
      description="Add a new category for new tshirts"
      className="container bg-info p-8"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {errorMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
