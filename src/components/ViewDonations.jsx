import { useEffect, useState } from "react";
import { getCollection } from "../services.js/allServices";

const ViewDonations = () => {
    const [bloodBankData, setBloodBanks] = useState([]);

    useEffect( () => {
        const fetchData=async()=>{

          try{

            const data= await getCollection('bloodbank');
            
            
            setBloodBanks(data);
          
        }
        catch(err){
           console.log(err);
          }

         }
         fetchData();
         },[]);

    return (
        <>
        {bloodBankData.length==0? (
          <tr>
            <td colSpan="10">Loading...</td>
          </tr>
        ) : (
        <><h2 className="text-center my-4">View Donations</h2>
      <table className="table  table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Logo</th>
          <th>Blood Bank Name</th>
          <th>Timing</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Category</th>
          <th>Test Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {bloodBankData.map((bloodBank) => (
          <tr key={bloodBank.id}>
              <td>
                <img src={bloodBank.logoUrl} alt={bloodBank.bloodBankName} width="50" height="50" />
              </td>
              <td>{bloodBank.bloodBankName}</td>
              <td>{bloodBank.timing}</td>
              <td>{bloodBank.latitude}</td>
              <td>{bloodBank.longitude}</td>
              <td>{bloodBank.category}</td>
              <td>{bloodBank.testName}</td>
              <td>{bloodBank.price}</td>
            </tr>
            ))}
            
            </tbody>
    </table></>)
}
    </>
    );
}
 
export default ViewDonations;