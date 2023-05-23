import { Link } from "react-router-dom";
const Card = ({icon,iconColor,heading,value,headingColor,bgColor,route}) => {
    //heading

    console.log(heading);
    //value
    //icon
    //heading color
    //icon color
    //background color
  return (
    
    <div
      className="card mb-3 m-2"
      style={{ maxWidth: "13rem" }}
    >
      <div className="d-flex flex-row card-body align-items-center" style={{backgroundColor:bgColor}}>
    <Link to={route} class="card-link" style={ { textDecoration: 'none'}}>
        <div>
          <h6 style={{color:headingColor}}>{heading}</h6>
          <h3 className="mt-1 text-center text-dark">
            {value}
          </h3>
        </div>
        <div className="card-icon" style={{fill:iconColor}}>
                 {icon}

        </div>
    
    </Link>
      </div>
    </div>
  );
};

export default Card;
