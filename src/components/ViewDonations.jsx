import { useEffect, useState } from "react";
import { deleteRecord, getCollection } from "../services.js/allServices";

const ViewDonations = () => {
    const [bloodBankData, setBloodBanks] = useState([]);
   
    const fetchData=async()=>{

      try{

        const data= await getCollection('bloodata');
        
        
        setBloodBanks(data);
      
    }
    catch(err){
       console.log(err);
      }

     }


    useEffect( () => {
        
         fetchData();
         },[]);

    return (
        <>
        {
        
        // bloodBankData.length==0? (
        //   <tr>
        //     <td colSpan="10">Loading...</td>
        //   </tr>
        // ) : 
        
        (
        <><h2 className="text-center my-4">View Blood Bank Data</h2>
      <table className="table  table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Blood Bank Name</th>
          <th>Acceptor</th>
          <th>Donor</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {bloodBankData.map((bloodBank) => (
          <tr key={bloodBank.id}>
              <td>{bloodBank.name}</td>
              <td>{bloodBank.acceptor}</td>
              <td>{bloodBank.donor}</td>
              <td>{bloodBank.quantity}</td>
              <td>{bloodBank.price}</td>
              <td><button className="btn btn-danger" 
              onClick={async () => {
                console.log("delete");
                await deleteRecord("bloodata",bloodBank.id);
                fetchData();
              }}>Delete</button></td>
            </tr>
            ))}
            
            </tbody>
    </table></>)
}
    </>
    );
}
 
export default ViewDonations;