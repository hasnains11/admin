import { NavLink } from "react-router-dom";
import bg from "../images/bg1.png";
const Login = () => {
    return (
<div className="container d-flex justify-content-center align-items-center p-0 m-auto"  style={{backgroundImage:"url("+bg+")",height:'100vh',backgroundRepeat:'round'}} >

<div style={{lineHeight:2.1}}>
<h2 className="text-white text-center">Admin Portal</h2>
<form>
  <div className="mb-3"style={{minWidth:'18rem'}}>
    <label htmlFor="exampleInputEmail1" className="form-label text-white fw-bold" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white fw-bold">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check text-center" >
    <input type="checkbox" className="text-center me-2" id="exampleCheck1" style={{float:'none'}}/>
    <label className="form-check-label text-white " htmlFor="exampleCheck1">Remember Me</label>
  </div>
  <div className="text-center">
  <NavLink to="main" className="btn btn-primary text-white fw-bold text-center px-4" >
    Submit
    </NavLink>
  </div>
</form>
</div>

</div>

      );
}
 
export default Login;