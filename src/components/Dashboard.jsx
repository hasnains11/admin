import Avatar from "./Avatars";
import Card from "./Card";
import Table from "./Table";
import TableView from "./TableView";
const Dashboard = () => {
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

  var docImages = [
    "https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347287?k=20&m=92347287&s=612x612&w=0&h=_vPaOKo3wrZd8FG_Y9WR6yAa4OYXf8OXGRZ6X2qk6aM=",
    "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    "https://previews.123rf.com/images/olegdudko/olegdudko1906/olegdudko190605430/124874948-handsome-doctor-portrait-on-background.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyZ0jEAqCUBMJHbx7Y3bnjlAAG1_07mbqtWvJhRN3Ug&s",
  ];


  var actions=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ height:"1rem", fill:"rebeccapurple"}}><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>;


  var patients=[
["Patient1",
  "0312032154",
  "Doctor1",
  "Male",
  "12:00",
  actions],
  ["Patient2",
  "03125325467",
  "Doctor2",
  "Male",
  "9:00",
  actions],
  ["Patient3",
  "0321551814",
  "Doctor3",
  "Female",
  "12:56",
  actions]
  ,["Patient4",
  "032153158",
  "Doctor4",
  "Female",
  "01:25",
  actions]];


  return (
    <>
      <h3>Overview</h3>
      <div className="d-flex flex-row mb-3 mt-2">
        <Card
          icon={Icons.doctors}
          heading="Total Doctors"
          iconColor="#acbefc"
          value={152}
          headingColor="#879afb"
          bgColor="#edf1ff"
        ></Card>
        <Card
          icon={Icons.patient}
          heading="Total Patients"
          iconColor="#f7e9aa"
          value={1145}
          headingColor="#f2d76f"
          bgColor="#fefaec"
        ></Card>
        <Card
          icon={Icons.appointment}
          heading="Total Patients"
          iconColor="#bcecd5"
          value={102}
          headingColor="#8adcb8"
          bgColor="#f0fbf6"
        ></Card>
        <Card
          icon={Icons.medicine}
          heading="Medicines"
          iconColor="#ea90cf"
          value={15000}
          headingColor="#ea90cf"
          bgColor="#fcf0f9"
        ></Card>
      </div>

    <div className="d-flex flex-row-mb-2 justify-content-between">
      <h4>Doctors</h4>
        <button className="btn btn-primary ps-2 pe-2">Add Doctor</button>
    </div>
      <div className="d-flex flex-row mb-3 mt-2">
        <Avatar
          img={docImages[0]}
          name="Dr Strange"
          borderColor={"black"}
        />
        <Avatar 
        img={docImages[1]}
        name="Dr Octopus" borderColor={"#cecece"} />
        <Avatar
        img={docImages[2]}
        name="Dr Philips" borderColor={"#black"} />
        <Avatar 
        img={docImages[3]}
        name="Dr John" borderColor={"#cecece"} />
      </div>
   
   
   
    <div className="d-flex flex-row-mb-2 justify-content-between mt-2">
      <h4>Recent Patients</h4>
        <button className="btn btn-primary ps-2 pe-2">Add Patients</button>
    </div>
    <br />

    <TableView th={["Patient Name",
        "Phone Number",
        "Doctor Name",
        "Gender",
        "Time",
        "Actions"]} tr={patients}  ></TableView>
    .btn
    </>
  );
};

export default Dashboard;
