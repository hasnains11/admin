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
      collection='Professions';
      break;
    case 'patient':
      collection='Patient';

      break;
    case 'appointment':
      collection='Approved Appointments';
      break;
    case 'medicine':
      collection="Medicine"
      break;
    case 'complaint':
      collection="Customer Support"
      break;
    case 'transactions':
      collection="Transaction"
      break;
    case 'medequipment':
      collection="Medical_Equipment"
      break;
  
    default:
      collection='Patient'
      break;
  }

  
  // console.log(props.match.params.id);



  async function fetchData() {
    const response = await getCollection(collection);
    console.log("----------------------------------------------");
    if (current=='doctor') {

      const filteredData = response.filter(item => item['Profession'] === 'Doctor');
      console.log("filtered"+filteredData);

      setdata(filteredData);
     
    }
       else{
      setdata(response);
    }
    // const d = await response;
  }

  
  useEffect(() => {
    // const run=async()=>await getCollection(collection);

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
        "Name",
        "Phone Number",
        "Patient Email",
      ],
      keys:[
        "Patient Name",
        "Patient phone_no",
        "Patient Email Address",
    
      ],
        
      title: "Patient's Table",
    },
    doctor: {
      header: [
        "Name",
        "Gender",
        "Doctor Email",
        "Phone Number",
        "License Number",
      ],
      title: "Doctor's Table",
      keys:[

        "Full Name",
        "Gender",
        "Email Address",
        "Phone #",
          "License #",
        
      ]
    },
    medicine: {
      header: [
        "Medicine Name",
        "Price",
        "Description",
        "Quantity",
        "Milligram",
      ],
      title: "Medicine's Table",
      keys:[
        
          "Title",
          "Price",
          "Description",
          "Quantity",
          "Milligram",
        
      ]
    },
    medequipment: {
      header: [
        "Title",
        "Description",
        "Price",
        "Quantity",
      ],
      title: "Medicine Equipment's Table",
      keys:[
        "Title",
        "Description",
        "Price",
        "Quantity",
        
      ]
    },
    complaint: {
      header: ["Id", "Complaint By", "Phone#", "Description", "Email"],
      title: "Customer Support",
      keys:["Id", "Name", "Phone", "Message", "Email"]
    },
    transactions: {
      header: ["Id", "Item", "Price", "Seller","Time"],
      title: "Transactions",
      keys:["id", "item", "price", "seller", "time"]
    },


    appointment: { 
      header: [ 
        "Doctor's Name",
        "Doctor Cell Number",
        "Patient Name",
        "Patient Phone Number",
    "Appointment Date",
    "Appointment Time",
    ],

     title: "Appointments",

     keys:[
       "ApprovedDoctorName",
       "ApprovedDoctorCell",
       "ApprovedPatientName",
       "ApprovedPatientCell",
      "ApprovedAppointmentDate",
      "ApprovedAppointmentTime",

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
      <TableView keys={keys} th={th} tr={data} collectionName={collection} handleRefresh={fetchData}></TableView>
    </>
  );
};

export default Table;


