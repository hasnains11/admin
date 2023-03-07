import { useState } from "react";
import { toast } from "react-toastify";
import bg from "../images/bg1.png";

const Login = ({ status,authenticate}) => {
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });

  

  const handleLogin = async (e) => {
     e.preventDefault();
     try{
        const isSuccess= await authenticate(loginCredentials.email,loginCredentials.password);
                if(isSuccess){
          toast.success("Login Successful!",{position:toast.POSITION.TOP_CENTER});
        }else{
          toast.error('Not an admin');
        }
     }catch(ex){
      console.log(ex);
      toast.error("Invalid Email or password!",{position:toast.POSITION.TOP_CENTER});
      console.log("something went wrong");
     }
 


  };

  return (
    <div
      className="d-flex justify-content-center align-items-center p-0 m-auto"
      style={{
        backgroundImage: "url(" + bg + ")",
        height: "100vh",
        backgroundRepeat: "round",
      }}
    >
      <div style={{ lineHeight: 2.1 }}>
        <h2 className="text-white text-center">Admin Portal</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3" style={{ minWidth: "18rem" }}>
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-white fw-bold"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setloginCredentials({
                  ...loginCredentials,
                  email: e.target.value,
                });
                console.log(loginCredentials);
                console.log(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-white fw-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"

              onChange={(e) => {
                setloginCredentials({
                  ...loginCredentials,
                  password: e.target.value,
                });
                console.log(loginCredentials);
                console.log(e.target.value);
              }}

            />
          </div>
          <div className="mb-3 form-check text-center">
            <input
              type="checkbox"
              className="text-center me-2"
              id="exampleCheck1"
              style={{ float: "none" }}
            />
            <label
              className="form-check-label text-white "
              htmlFor="exampleCheck1"
            >
              Remember Me!
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary text-white fw-bold text-center px-4"
              onClick={(e)=>setTimeout(handleLogin(e),500)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
