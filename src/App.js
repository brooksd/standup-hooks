import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  //state declaration
  const [attendees, setAttendees] = useState([]);
  const [form, setFormData] = useState({});

  const fetchData = () => {
    fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(data => {setAttendees(data)})
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleSubmit = () => {

  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 col-md-5 col-lg-5'>
          <h1>Register for the Event</h1>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Age</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Age"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Gender</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Gender"/>
          </div>
          <div className="col-12">
            <button class="btn btn-primary" onClick={handleSubmit} type="submit">Submit Request</button>
          </div>
        </div>
        <div className='col-12 col-md-5 col-lg-7'>
          <h1>List of confirmed attendees</h1>
          <ul>
            {attendees.map( attendee => (
              <li key={attendee.id}>{attendee.fullName}</li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;
