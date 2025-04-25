
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import React, {useState} from 'react';
import AddStudent from './addStudent';


function App() {

const [allStudents, setAllStudents] = useState(null);


  const students = [{
  

    id: nanoid(),
    firstName: "Dessie",
    lastName:  "Klein",
    email: "dklein@gmail.com",
    image: 'images/student3.jpg'
  }, {
    id: nanoid(),
    firstName:"Amargo",
      lastName: "Yeo",
     email: "YheAmargo@gmail.com",
     image: 'images/student10.jpg'
  }, {
    id: nanoid(),
    firstName: "Karina",
    lastName:  "Senussi",
    email:  "ksenussi@gmail.com.",
    image: 'images/student4.jpg'
  }, {
    id: nanoid(),
    firstName: "Shaun",
    lastName:  "Reed",
   email: "ShawnR4@gmail.com",
   image: 'images/student5.jpg'
  }, {
  
    id: nanoid(),
    firstName:"Rebecca",
    lastName:  "Yancey",
    email: "yancey_Rebecca3@gmail.com",
    image: 'images/student7.jpg'
  }, {

    id: nanoid(),
    firstName:"Eric",
    lastName:  "Calibathe",
    email: "ecal407@yahoo.com",
    image: 'images/student9.jpg'
  }, {
    id: nanoid(),
    firstName: "Daisy",
    lastName: "Collison",
    email: "dcollison@gmail.com",
    image: 'images/student1.jpg'
  }, {
    id: nanoid(),
    firstName: "Josiah",
    lastName:  "Kelby",
    email: "Jkelby1@yahoo.com",
    image: 'images/student2.jpg'
  }, {
    id: nanoid(),
    firstName: "Ami",
     lastName: "Raheed",
    email: "aRaheed@yahoo.com",
    image: 'images/student6.jpg'

  }, {
    id: nanoid(),
    firstName:"Tobiah",
     lastName: "George",
   email: "tge0rge7@gmail.com",
   image: 'images/student8.jpg'
  }, {
  
  }];


  const addStudent = (newStudent) => {
const updatedStudents = [...allStudents, newStudent];
setAllStudents(updatedStudents);
  }


return (
<div className= "container">

  <div className="row">
    {allStudents && allStudents.map((student) =>
( 
<div className="col-md-2" key={student.id}>
  <div className="card h-100">
    <img class="img-fluid mx-auto" src={student.image} alt="student picture"/>
    <ul className="list-group list-group-flush">
      <li className="list-group-item text-center">{student.firstName}</li>
      <li className="list-group-item text-center">{student.lastName}</li>
      <li className="list-group-item text-center">{student.email}</li>
    </ul>
    </div>
  </div>)
)}
</div>
  
 
  {!allStudents && <button type="button" className="btn btn-lg btn-success" onClick={() => setAllStudents(students)}>Save Students</button>}
  <AddStudent  addStudent={addStudent}/>
  </div>
  );

}

export default App
