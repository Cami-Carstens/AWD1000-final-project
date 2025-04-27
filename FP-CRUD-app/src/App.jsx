
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import React, {useState, useEffect} from 'react';
import AddStudent from './components/AddStudent';
import _ from 'lodash';
import Student from './components/student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function App() {

const [allStudents, setAllStudents] = useState(null);
const[searchResults, setSearchResults] = useState(null);
const[keyWords, setKeyWords] = useState("");
const[gradYear, setGradYear] = useState("");


useEffect(() => {
  saveStudents(students);
}, []);

const saveStudents = (students) => {
  setAllStudents(students);
  setSearchResults(students);
}

const addStudent = (newStudent) => {
  const updatedStudents = [...allStudents, newStudent];
  saveStudents(updatedStudents);
 }


const searchStudents = () => {
  let keyWordsArray = [];

   if(keyWords) {
    keyWordsArray = keyWords.toLowerCase(). split(' ');
  }
  
  if(gradYear) {
    keyWordsArray.push(gradYear.toString());
  }



  if(keyWordsArray.length > 0) {
    const searchResults = allStudents.filter(student => {
        for(const word of keyWordsArray) {
          if(student.firstName.toLowerCase().includes(word) || 
          student.lastName.toLowerCase().includes(word) || 
          student.gradYear === parseInt(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
  }
  else {
    setSearchResults(allStudents);
  }



}

  const removeStudent = (studentToDelete) => {
    console.table(studentToDelete);
    const updatedStudentsArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentsArray);
  }

  const updateStudent = (updatedStudent) => {
    //console.table(updatedStudent);
    const updatedStudentsArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updateStudent} : student);
    saveStudents(updatedStudentsArray);
  }


  const students = [{
    id: nanoid(),
    firstName: "Dessie",
    lastName:  "Klein",
    email: "dklein@gmail.com",
    image: 'images/student3.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    firstName:"Amargo",
      lastName: "Yeo",
     email: "YheAmargo@gmail.com",
     image: 'images/student10.jpg',
     gradYear: 2005
  }, {
    id: nanoid(),
    firstName: "Karina",
    lastName:  "Senussi",
    email:  "ksenussi@gmail.com.",
    image: 'images/student4.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    firstName: "Shaun",
    lastName:  "Reed",
   email: "ShaunR4@gmail.com",
   image: 'images/student5.jpg',
   gradYear: 2006
  }, {
  
    id: nanoid(),
    firstName:"Rebecca",
    lastName:  "Yancey",
    email: "yancey_Rebecca3@gmail.com",
    image: 'images/student7.jpg',
    gradYear: 2004
  }, {

    id: nanoid(),
    firstName:"Eric",
    lastName:  "Calibathe",
    email: "ecal407@yahoo.com",
    image: 'images/student9.jpg',
    gradYear: 2005
  }, {
    id: nanoid(),
    firstName: "Daisy",
    lastName: "Collison",
    email: "dcollison@gmail.com",
    image: 'images/student16.jpg',
    gradYear: 2007
  }, {
    id: nanoid(),
    firstName: "Josiah",
    lastName:  "Kelby",
    email: "Jkelby1@yahoo.com",
    image: 'images/student15.jpg',
    gradYear: 2005
  }, {
    id: nanoid(),
    firstName: "Ami",
     lastName: "Raheed",
    email: "aRaheed@yahoo.com",
    image: 'images/student14.jpg',
    gradYear: 2004

  }, {
    id: nanoid(),
    firstName:"Tobiah",
     lastName: "George",
   email: "tge0rge7@gmail.com",
   image: 'images/student13.jpg',
   gradYear: 2007

  }, {
   id: nanoid(),
   firstName: "Josiah",
   lastName:  "Kelby",
   email: "Jkelby1@yahoo.com",
   image: 'images/student12.jpg',
   gradYear: 2005

 }, {
   id: nanoid(),
   firstName: "Amia",
    lastName: "Daiee",
   email: "AMIAdaiee@yahoo.com",
   image: 'images/student11.jpg',
   gradYear: 2002


 
  }];





return (
<div className= "container">

  <div className="row g-4" id="allStudents">
    <h1 className="collegeName shadow shadow-lg p-3 fw-bold">Elk Valley Community College</h1>
    <h3 className="currentStudentHeading">Current Students</h3>
    {searchResults && searchResults.map((student) =>
( 
<div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={student.id}>
  <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
  </div>)
)}


</div>
 
  {/*!allStudents && <button type="button" className="btn btn-lg btn-success" onClick={() => saveStudents(students)}>Save Students</button> */}
  <AddStudent  addStudent={addStudent}/>
  <div className="row mt-5" id="searchStudents">
    <h3>Student Search </h3>
    <div className="col-md-4">
      <label htmlFor="textKeywords">Search by First Name or Last Name</label>
      <input type="text" className="form-control" placeholder='John Smith' onChange={evt => setKeyWords(evt.currentTarget.value)} value={keyWords} />
    </div>
    <div className="col-md-4 pt-4">
      <select value={gradYear} onChange={evt => setGradYear(evt.currentTarget.value)} className='form-select'>
        <option value="">Select Year</option>
        {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}

      </select>
    </div>

    <div className="col-md-4 pt-4">
      <button type="button" className="btn btn-primary" onClick={searchStudents}>Search <FontAwesomeIcon icon={faSearch} /></button>
    </div>
  </div>
  </div>
  );

}

export default App;
