import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  //state declaration
  const [attendees, setAttendees] = useState([]);
  const [formData, setFormData] = useState({

    fullName: '',
    emailAddress: '',
    age: '',
    mobileNumber: '',
    gender:''

  });

  //get all event-goers
  const fetchData = () => {
    fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(data => {setAttendees(data)})
  }
  // const fetchData = async () => {
  //   const response = await fetch("https://localhost:4000/users")
  //   const data = await response.json()
  //   setAttendees(data)
  // }

  useEffect(() => {
    fetchData()
  }, []);

  //create an event-goer
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  //remove an event-goer

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({

      })
    })

  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 col-md-5 col-lg-5'>
          <h1>Register for the Event</h1>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Full Name</label>
            <input type="text" class="form-control" placeholder="Full Name" onChange={handleChange}/>

            <label className="form-label">Email Address</label>
            <input type="text" class="form-control" placeholder="name@example.com" onChange={handleChange}/>

            <label className="form-label">Age</label>
            <input type="text" class="form-control" placeholder="age" onChange={handleChange}/>

            <label className="form-label">Mobile Number</label>
            <input type="text" class="form-control" placeholder="mobile number 07..." onChange={handleChange}/>

            <label className="form-label">Gender</label>
            <input type="text" class="form-control" placeholder="gender" onChange={handleChange} />

            <button className="btn btn-primary" type="submit">Submit Registration</button>
          </form>
          
        </div>
        <div className='col-12 col-md-5 col-lg-7'>
          <h1>List of confirmed attendees</h1>
          <ul>
            {attendees.map( attendee => (
              <li key={attendee.id}>{attendee.fullName} {attendee.mobileNumber} <button className='btn btn-danger'>Delete</button></li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;
