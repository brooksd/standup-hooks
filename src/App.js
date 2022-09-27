import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  //state declaration
  const [attendees, setAttendees] = useState([]);
  const [form, setFormData] = useState({
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
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users")
  //   const data = await response.json()
  //   setAttendees(data)
  // }

  useEffect(() => {
    fetchData()
  }, []);

  //create an event-goer

  //remove an event-goer

  const handleSubmit = () => {

  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 col-md-5 col-lg-5'>
          <h1>Register for the Event</h1>
          <form>
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" placeholder="Full Name"/>

            <label for="emailAddress" class="form-label">Email Address</label>
            <input type="text" class="form-control" placeholder="name@example.com"/>

            <label for="age" class="form-label">Age</label>
            <input type="text" class="form-control" placeholder="age"/>

            <label for="number" class="form-label">Mobile Number</label>
            <input type="text" class="form-control" placeholder="mobile number 07..."/>

            <label for="gender" class="form-label">Gender</label>
            <input type="text" class="form-control" placeholder="gender"/>

            <button class="btn btn-primary" onClick={handleSubmit} type="submit">Submit Registration</button>
          </form>
          
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
