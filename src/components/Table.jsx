import { useEffect,useState } from "react";
import { getCollection } from "../services.js/allServices";
import TableView from "./TableView";


const Table = (props) => {

  const [data, setdata] = useState(null);


  var current='';

  
  if(props.id!=null){
    current='patient';
  }else{
    current=props.match.params.id;
  }
 
  var collection;
  switch (current) {
    case 'doctor':
      collection='Doctor';
      break;
    case 'patient':
      collection='Patient';

      break;
    case 'appointment':
      collection='Approved Appointments';
      break;
    case 'medicine':
      collection=""
      break;
  
    default:
      collection='Patient'
      break;
  }

  
  // console.log(props.match.params.id);




  
  useEffect(() => {
    // const run=async()=>await getCollection(collection);

    async function fetchData() {
      const response = await getCollection(collection);
      // const d = await response;
      setdata(response);
    }
    fetchData();
    
    // const d=run();
    // setdata(d);
    // console.log(getDoctors());
    // console.log(getDoctors());
    
  }, [collection]);
  var actions=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ height:"1rem", fill:"rebeccapurple"}}><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>;
  var values = {
    patient: {
      header: [
        "Patient Email",
        "Name",
        "Password",
        "Phone Number",
      ],
      keys:[
        "Patient Email Address",
       "Patient Name",
        "Patient Password",
        "Patient phone_no",
      ],
        
      title: "Patient's Table",
    },
    doctor: {
      header: [
        "Doctor Email",
        "Address",
        "License Number",
        "Password",
        "Phone Number",
        "Specialization",
      ],
      title: "Doctor's Table",
      keys:[
        
          "Email Address",
          "Full Name",
           "License #",
           "Password",
           "Phone #",
           "Specialization"
        
      ]
    },
    medicine: {
      header: [
        "ID",
        "Medicine Name",
        "Price",
        "Description",
        "Quantity",
        "Actions",
      ],
      title: "Medicine's Table",
      keys:[
        [
          "ID",
          "Medicine Name",
          "Price",
          "Description",
          "Quantity",
          actions,
        ]
      ]
    },
    complaint: {
      header: ["Id", "Complaint By", "Title", "Description", "Actions"],
      title: "Complaints",
      keys:[["Id", "Complaint By", "Title", "Description", actions]]
    },
    appointment: { 
      header: [ 
        "Doctor ID",
    "Patient ID",
    "Appointment Date",
    "Appointment Time",
    "Doctor Cell Number",
    "Doctor's Name",
    "Patient Phone Number",
    "Patient Name"],
     title: "Appointments",
     keys:[
      "Appointed Doctor Id",
      "Appointed Patient Id",
      "Approved Appointment Date",
      "Approved Appointment Time",
      "Approved Doctor Cell",
      "Approved Doctor Name",
      "Approved Patient Cell",
      "Approved Patient Name",

     ] },
  };

  var th = values[current].header;
  var keys = values[current].keys;
  var title = values[current].title;

    console.log(data);
    // data.map((row)=>Object.keys(row).map((k)=>console.log(row[k])));
    

  return (
    <>
    <br />
      <h3>{title}</h3><br />
      <TableView keys={keys} th={th} tr={data}></TableView>
    </>
  );
};

export default Table;


