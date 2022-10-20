import TableView from "./TableView";

const Table = (props) => {
  console.log(props.match.params.id);

  var actions=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ height:"1rem", fill:"rebeccapurple"}}><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>;
  var values = {
    patient: {
      header: [
        "Patient Name",
        "Phone Number",
        "Doctor Name",
        "Hospital",
        "Date",
        "Time",
        "Actions",
      ],
      rows:[
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
          actions]],
        
      title: "Patient's Table",
    },
    doctor: {
      header: [
        "Doctor Name",
        "Email",
        "Gender",
        "Licence No.",
        "Date",
        "Time",
        "Actions",
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
      rows:[["Id", "Complaint By", "Title", "Description", "Actions"]]
    },
    appointment: { header: ["Name"], title: "Appointments",rows:[["Appoinment"]] },
  };

  var th = values[props.match.params.id].header;
  var tr = values[props.match.params.id].rows;
  var title = values[props.match.params.id].title;

  return (
    <>
    <br />
      <h3>{title}</h3><br />
      <TableView th={th} tr={tr}></TableView>
    </>
  );
};

export default Table;


