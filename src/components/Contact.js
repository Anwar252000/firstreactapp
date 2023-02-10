import React from 'react'

export default function Contact(props) {
    return (
        <>
    <div className={`container mb-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Contact Us</h1>
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'dark':'light'}`} id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className={`container mb-3 text-${props.mode==='light'?'dark':'light'}`}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'dark':'light'}`} id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'dark':'light'}`} id="inputPassword"/>
    </div>
  </div>
  <button className='btn btn-primary my-3'>Submit</button>
</div>
</>
    )
}
