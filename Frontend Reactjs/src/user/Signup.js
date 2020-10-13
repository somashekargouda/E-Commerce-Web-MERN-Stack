import React, {useState} from 'react'
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from '../auth/helper'

 const Signup = () => {

    const [values, setValues] = useState({
        name : "",
        email :"",
        password: "",
        error : "",
        success : false
    })

    const {name, email, password, error, success} = values

    const handleChange = name => event => {
        setValues({...values , error: false , [name]:event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault()
        setValues({...values, error:false})
        signup({name, email, password})
        .then(data =>{
            if(data.error)
            {
                setValues({...values, error: data.error, success: false})
            }
            else
            {
                setValues({...values, 
                name:"",
                email : "",
                password : "",
                error : "",
                success:"true"

                })
            }
        })
        .catch(console.log("error in sign up"))
    }


    const signUpForm =() =>{
        return(
            <div className="row"> 
            <div className="col-md-6 offset-sm-3 text-left">
            <form>
                <div className="form-group" >
                <label className="text-light">Name</label>
                <input onChange={handleChange("name")} className="form-control" value={name} type="text" name="" id="" />
                </div>

                <div className="form-group">
                <label className="text-light">Email</label>
                <input  onChange={handleChange("email")} className="form-control" type="text" value={email} name="" id="" required />
                </div>

                <div className="form-group">
                <label className="text-light">Password</label>
                <input  onChange={handleChange("password")} className="form-control" value={password} type="password" name="" id="" required />
                </div>

                <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>

            </form> 
            </div>
            </div>
        )
    }


    const sucessMessage = () =>{
        return(
        <div className="alert alert-success" 
        style={{display : success ? "" : "none"}}>
            Signup successfull and Please <Link to = "/signin">Login Here</Link>
        </div>
        )}
 
    const errorMessage = () =>{
        return(
        <div className="alert alert-danger" 
        style={{display : error ? "" : "none"}}>
            {error}
        </div>
        )}

    return (
        <Base title="Signup" description="User signup page">
        {sucessMessage()}
        {errorMessage()}
        {signUpForm()}
        </Base>
    )
}
export default Signup;
