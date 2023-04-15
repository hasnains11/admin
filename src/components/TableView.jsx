const TableView = ({ th, tr ,keys}) => {
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
              </tr>
                          
            ))}
            
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
