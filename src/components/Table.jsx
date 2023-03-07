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
        "Patient_Id"
      ],
      rows:[
        ["Patient1",
          "0312032154",
          "Doctor1",
          "Male",
          "12-9-2022",
          "12:00",
          actions],
          ["Patient2",
          "03125325467",
          "Doctor2",
          "Female",
          "12-9-2022",
          "9:00",
          actions],
          ["Patient3",
          "0321551814",
          "Doctor3",
          "Male",
          "12-9-2022",
          "12:56",
          actions]
          ,["Patient4",
          "032153158",
          "Doctor4",
          "Female",
          "12-9-2022",
          "01:25",
          actions]],
        
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
      rows:[
        [
          "Doctor1",
          "Doctor1@gmail.com ",
          "Male",
          "L1123554",
          "3-20-12",
          "12:53",
          actions,
        ],
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
      rows:[
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
      rows:[["Id", "Complaint By", "Title", "Description", actions]]
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
     rows:[] },
  };

  var th = values[current].header;
  var tr = values[current].rows;
  var title = values[current].title;

    console.log(data);
    // data.map((row)=>Object.keys(row).map((k)=>console.log(row[k])));
    

  return (
    <>
    <br />
      <h3>{title}</h3><br />
      <TableView th={th} tr={data}></TableView>
    </>
  );
};

export default Table;


