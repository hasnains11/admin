const TableView = ({ th, tr }) => {
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
                  
                   Object.keys(val).map((k,index) =>(
                    index<Object.keys(val).length-1 &&<td> {val[k]}</td>
                ))
                // <td></td>
                }
              </tr>
                          
            ))}
            
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
