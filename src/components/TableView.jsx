const TableView = ({th,tr}) => {
    return ( 

    <div style={{overflowY:'scroll',height:'300px'}}>

    <table className="table" >
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
        {tr.map(val=>(<tr>{
           val.map(row=>(<td>{row}</td>))}
           </tr>) )}
    </tbody>
  </table> 
  </div>
  
  );
}
 
export default TableView;