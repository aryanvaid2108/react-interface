import React,{ useEffect, useState} from 'react'
import '../css/App.css';
import AddAppointments from './AddAppointments'
import ListAppointments from './ListAppointments'
import SearchAppointments from './SearchAppointments'
import { findIndex } from 'lodash'

function App() {
  const [myAppointments,setMyAppointments] = useState([]);
  const [formDisplay,setFormDisplay] = useState(false);
  const [orderBy,setOrderBy] = useState('petName');
  const [orderDir,setOrderDir] = useState('asc')
  const [queryText,setQueryText] = useState("");
  let [lastIndex,setLastIndex] = useState(0);

  useEffect(()=> {
    fetch('./data.json')
    .then(data => data.json())
    .then(data => {
      var index = lastIndex;
      const apts = data.map(item => {
        item['aptID'] = index++;
        return item;
      })
      setLastIndex(index)
      setMyAppointments(apts);
      console.log(apts)
    })
    // eslint-disable-next-line
  },[]);

  const deleteAppointment = (apt) => {
    setMyAppointments(tempApt => tempApt.filter(item => item !== apt));
  }
  const toggleForm = () => {
    setFormDisplay(prevDisplay => !prevDisplay)
  }

  const searchApts = (query) => {
    setQueryText(query);

  }

  const filterAppointments = () => {
    let order;
    let filteredAppointments = myAppointments;
    order = orderDir  === 'asc'? 1 : -1;
    filteredAppointments = filteredAppointments.sort((a,b)=> {
      if(a[orderBy]<b[orderBy]){
        return -1*order;
      }else{
        return 1*order;
      }
    }).filter(item => {
      return(
        item['petName'].toString().toLowerCase().includes(queryText.toLowerCase()) || 
        item['ownerName'].toLowerCase().includes(queryText.toLowerCase()) ||
        item['aptNotes'].toLowerCase().includes(queryText.toLowerCase())
      )
    });
    return filteredAppointments;
}
const changeOrder = (order,direction) => {
  setOrderBy(order);
  setOrderDir(direction);
}
const updateInfo = (name,value,id) => {
  let tempApts =  myAppointments;
  let index = findIndex(myAppointments,{
    aptID:id
  });
  console.log(id)
  console.log(index)
  tempApts[index][name] = value;
  setMyAppointments(tempApts)
}

const addApt = (newApt) => {
  let tempApts =  myAppointments
  newApt.aptID = lastIndex;
  tempApts.unshift(newApt);
  setMyAppointments(tempApts)
  setLastIndex(index => index+1);
}
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            <AddAppointments formDisplay={formDisplay} toggleForm={toggleForm} addApt={addApt}/> 
            <SearchAppointments orderBy={orderBy} orderDir={orderDir} changeOrder={changeOrder} searchApts={searchApts}/> 
            <ListAppointments appointments={filterAppointments()} deleteAppointment={deleteAppointment} updateInfo={updateInfo}/> 
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
