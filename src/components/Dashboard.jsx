import { useEffect, useState } from "react";
import { getCollection, getCollectionCounts } from "../services.js/allServices";
import Avatar from "./Avatars";
import Card from "./Card";
import Table from "./Table";
import { NavLink } from "react-router-dom";
import TableView from "./TableView";
const Dashboard = (props) => {
  // const [data, setdata] = useState(data);
  const [counts, setcounts] = useState({patient:0,doctor:0,appointment:0,medicine:0});
  const [doctors, setdoctors] = useState(null);
  var Icons = {
    doctors: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        {/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448c13.3 \n0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" />
      </svg>
    ),
    patient: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        {/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
      </svg>
    ),
    appointment: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        {/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
      </svg>
    ),
    medicine: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        {/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48V256H64V144zM0 144V368c0 61.9 50.1 112 112 112s112-50.1 112-112V189.6c1.8 19.1 8.2 38 19.8 54.8L372.3 431.7c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3C391.8 61.5 321.9 49 271.3 85.2c-28 20-44.3 50.8-47.3 83V144c0-61.9-50.1-112-112-112S0 82.1 0 144zm296.6 64.2c-16-23.3-10-55.3 11.9-71c21.2-15.1 50.5-10.3 66 12.2l67 97.6L361.6 303l-65-94.8zM491 407.7c-.8 .6-1.6 1.1-2.4 1.6l4-2.8c-.5 .4-1 .8-1.6 1.2z" />
      </svg>
    ),
  };



  var actions=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ height:"1rem", fill:"rebeccapurple"}}><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>;



  useEffect(() => {
    async function fetchData() {

      const response = await getCollectionCounts();

      const d = await response;

      const doctors=await getCollection('Professions');

      const doc=await doctors;    


      setdoctors(doc);

      console.log(d);

      setcounts(response);
    }


    
     fetchData();  
  
  }, []);

  const th = [ 
    "Doctor Email",
  "Name",
  "Profession",
  "License Number",
  "Password",
  "Phone Number",
  "Gender",];


  return (
    <>
      <h3>Overview</h3>
      <div className="d-flex flex-row mb-3 mt-2">

        <Card
          icon={Icons.doctors}
          heading="Total Doctors"
          iconColor="#acbefc"
          value={counts.doctor}
          headingColor="#879afb"
          bgColor="#edf1ff"
        ></Card>

        <Card
          icon={Icons.patient}
          heading="Total Patients"
          iconColor="#f7e9aa"
          value={counts.patient}
          headingColor="#f2d76f"
          bgColor="#fefaec"
        ></Card>
        <Card
          icon={Icons.appointment}
          heading="Appointments"
          iconColor="#bcecd5"
          value={counts.appointment}
          headingColor="#8adcb8"
          bgColor="#f0fbf6"
        ></Card>
        <Card
          icon={Icons.medicine}
          heading="Medicines"
          iconColor="#ea90cf"
          value={counts.medicine}
          headingColor="#ea90cf"
          bgColor="#fcf0f9"
        ></Card>
      </div>

    <div className="d-flex flex-column mt-2" >
      
    <NavLink to="/table/doctor" className="nav-link link-dark "><h4>Doctors</h4></NavLink>

      <div style={{ overflowY: 'scroll', height: '500px' }}>
      <table className="table">
        <thead className="table-dark">
          <tr>
            {th.map((val, index) => (
              <th key={index} scope="col">
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {doctors !=null && doctors.filter(item => item['Profession'] === 'Doctor').map((doctor, index) => (
            <tr key={index}>

              <td>{doctor['Email Address']}</td>
              <td>{doctor['Full Name']}</td>
              <td>{doctor['Doctor_profession']}</td>
              <td>{doctor['License #']}</td>
              <td>{doctor['Password']}</td>
              <td>{doctor['Phone #']}</td>
              <td>{doctor['Gender']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
      <div className="d-flex flex-row mb-3 mt-2">

        {/* {doctors && doctors.map((e,index)=><Avatar
          img={docImages[index]??docImages[0]}
          name={e['Full Name']}
          borderColor={"black"} */}
        {/* />)} */}
        
        
      </div>
   
    <br />

    <Table id="dashboard"></Table>
    {/* <TableView th={["Patient Name",
        "Phone Number",
        "Doctor Name",
        "Gender",
        "Time",
        "Actions"]} tr={data}  ></TableView> */}
    </>
  );
};

export default Dashboard;
