import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Login_ = () => {
    const [studentData,setStudentData]= useState({
        firstName: '',
        lastName: '',
        password: '',
        dob: '',
        email:''


    })
 

    const [fromData ,setFromData]=useState(false)
    const handleChange = (e)=>{
        const name = e.target.name;
        const value =e.target.value;

        const newValue = {...studentData}
        newValue[name]= value;
        setStudentData(newValue);


    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(studentData);
        setFromData(true)

    }
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-center mb-6">
      <h1 className="text-5xl font-bold">Student Information</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    {!fromData ? (
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name :</span>
          </label>
          <input type="text" placeholder="First Name" onChange={handleChange} name='firstName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name :</span>
          </label>
          <input type="text" placeholder="Last Name"  onChange={handleChange} name='lastName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email :</span>
          </label>
          <input type="email"  name='email'  onChange={handleChange} placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date Of Birth:</span>
          </label>
          <input type="date" placeholder="Email"  onChange={handleChange} name='dob' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password :</span>
          </label>
          <input type="password" placeholder="Password" onChange={handleChange}  name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    ):(
      <div className='w-full p-8'>
        <h2 className='text-4xl font-bold text-center mb-3'>Submitted Data</h2>
        <p className='text-2xl font-semibold mb-2' >First Name : {studentData.firstName}</p>
        <p  className='text-2xl font-semibold mb-2'>last  Name : {studentData.lastName}</p>
        <p className='text-2xl font-semibold mb-2' >Password : {studentData.password}</p>
        <p className='text-2xl font-semibold mb-2' >Date of Birth : {studentData.dob}</p>
        <Link to={"/"}> <div className="form-control mt-6">
          <button className="btn btn-primary">Back</button>
        </div></Link>
        

      </div>
    )

          
    }
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login_;