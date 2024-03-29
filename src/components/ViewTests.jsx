import { useEffect, useState,useMemo } from "react";
import { deleteRecord, getCollection } from "../services.js/allServices";
const ViewTests = () => {
  const [documents, setDocuments] = useState([]);

  useEffect( () => {
   const fetchData=async()=>{
    try{
      const data= await getCollection('LabTests');
      setDocuments(data);
     }catch(err){
      console.log(err);
     }
    }
    fetchData();
    },[]);

    
    const handleRefresh = async () => {
      try{
        const data= await getCollection('LabTests');
        setDocuments(data);
       }catch(err){
        console.log(err);
       }
    };





    const memoizedTable = useMemo(() => {
      return ( 
        <>
        <h2 className="text-center mb-4">View Tests</h2>
        <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Lab Name</th>
            <th>Category</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Test Name</th>
            <th>Timing</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {documents.length!= 0 ? documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.labName}</td>
              <td>{doc.category}</td>
             
              <td>{doc.latitude}</td>
              <td>{doc.longitude}</td>
              <td>{doc.testName}</td>
              <td>{doc.timing}</td>
              <td><button className="btn btn-danger" 
              onClick={async () => {
                console.log("delete");
                await deleteRecord("LabTests",doc.id);
                handleRefresh();
              }}>Delete</button></td>
            </tr>
          )) : <tr><td colSpan="7">No data found</td></tr>}
        </tbody>
      </table>
        </>
      );
    }, [documents]);





  return (
    <>
      {/* <button onClick={handleRefresh}>Refresh</button> */}
      {memoizedTable}
    </>);
}
 
export default ViewTests;