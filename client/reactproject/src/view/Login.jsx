import React from 'react'
import NavBar from '../components/NavBar'
function login() {
  return (
    <div>
    <NavBar></NavBar>
    
    <div  style={{marginTop : '100px'}} className='container col-4'>
        <form >
        <div className="form-group">
    <label className='m-3 fw-bold' >Email address</label>
    <input type="email" className="form-control "   placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label className='m-3 fw-bold' htmlFor="exampleInputPassword1">Password</label>
    <input type="password " className="form-control "  placeholder="Password"></input>
  </div>
 <div>
  <button type="submit" className="btn btn-dark  d-block mx-auto  m-4">Submit</button>
  </div>
</form>
    </div>
    </div>
  )
}

export default login