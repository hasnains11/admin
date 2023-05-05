import { deleteRecord } from "../services.js/allServices";

const TableView = ({ th, tr ,keys,collectionName,handleRefresh}) => {
  console.log(tr)
  return (

    <div style={{ overflowY: "scroll", height: "300px" }}>
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

          {tr &&
            tr.map((val) => (
              <tr>
                {
                   keys.map((k) =>(
                    <td> {val[k]}</td>
                ))
                // <td></td>
              }
              {/* <td><button className="btn btn-danger" 
              onClick={async () => {
                console.log("delete");
                await deleteRecord(collectionName,val.id);
                handleRefresh();
              }}>Delete</button></td> */}
              </tr>
                          
            ))}
            
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
