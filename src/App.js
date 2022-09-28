import React, {useState, useEffect, useReducer} from 'react';
import './App.css';


// function reducer(state, action){
//   switch (action.type){
//     case "remove":
//       return {remove: state.remove -1}
//       default:
//         return state
//   }

// }
function App() {
  //state declaration
  const [attendees, setAttendees] = useState([]);
  const [form, setFormData] = useState({});

  // const [list, setList] = useState([]);

  function deleteList(id) {
    fetch(`http://localhost:3200/users/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const del = attendees.filter((users) => users.id !== id);
        setAttendees(del);
      });
  }

  const fetchData = () => {
    fetch("http://localhost:3200/users")
    .then(res => res.json())
    .then(data => setAttendees(data))
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleSubmit = () => {

    // fetch("http://localhost:4000/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...obj })
    // }).then(() => fetchData())
  }

  // function handleSubmit(obj) {
  //   console.log(obj);
  //   fetch("http://localhost:8001/transactions", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...obj, "amount": parseInt(obj.amount) })
  //   }).then(() => fetcher())
  // }

    // const [state, dispatch] = useReducer(reducer, {remove: []})

    // function remove(){
    //   dispatch({})

    // }
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
              <li>
                {attendee.fullName}
                <button class="btn btn-primary" onClick={() => deleteList(attendee.id)}>Remove User</button>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;
