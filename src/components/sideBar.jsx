import { NavLink } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
const SideBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-between p-0 bg-light"
        style={{ maxWidth: 280, height: "100%" }}
      >
        <NavLink
          to="/"
          className="d-flex align-items-center mt-2 mb-3 mb-md-0 
          me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use href="#bootstrap" />
          </svg>
          <span className="fs-4">
            <b>
              Admin <span style={{ color: "red" }}>Portal</span>
            </b>
          </span>
        </NavLink>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link link-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <span className="ms-2">DashBoard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table/appointment" className="nav-link link-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
              <span className="ms-2">Appointments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table/doctor" className="nav-link link-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <span className="ms-2">Doctors Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table/patient" className="nav-link link-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-person"
                viewBox="0 0 16 16"
              >
                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span className="ms-2">Patients Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table/transactions" className="nav-link link-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>

              <span className="ms-2">Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table/medicine" className="nav-link link-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-capsule"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"
                />
              </svg>
              <span className="ms-2">Pharmacy Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table/medequipment" className="nav-link link-dark text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-medical-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 4.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5a.5.5 0 1 1 1 0zM5.5 9h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
</svg>



              <span className="ms-2">Medical Equipment</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              to="/blood"
              className="nav-link link-dark dropdown-toggle"
              id="bloodDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.548c-3.905 0-7 3.144-7 7a5.466 5.466 0 0 0 1.857 4.097l4.143 3.764a.5.5 0 0 0 .636 0l4.143-3.764A5.466 5.466 0 0 0 15 8.548c0-3.856-3.095-7-7-7zm4.243 6.243a2.5 2.5 0 1 1-3.536 3.536L8 11.535l-1.707-1.707a2.5 2.5 0 1 1-3.536-3.536L4.465 7.465 8 10l3.535-3.535 1.708-1.707z"
                />
              </svg>
              <span className="ms-2">Lab Test Management</span>
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="bloodDropdown">
              <li>
                <NavLink to="/labtest" className="dropdown-item">
                  Book Test
                </NavLink>
              </li>
              <li>
                <NavLink to="/viewtest" className="dropdown-item">
                  View Test
                </NavLink>
              </li>
            </ul>
          </li>
         
          <li className="nav-item dropdown">
            <NavLink
              to="/blood"
              className="nav-link link-dark dropdown-toggle"
              id="bloodDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.548c-3.905 0-7 3.144-7 7a5.466 5.466 0 0 0 1.857 4.097l4.143 3.764a.5.5 0 0 0 .636 0l4.143-3.764A5.466 5.466 0 0 0 15 8.548c0-3.856-3.095-7-7-7zm4.243 6.243a2.5 2.5 0 1 1-3.536 3.536L8 11.535l-1.707-1.707a2.5 2.5 0 1 1-3.536-3.536L4.465 7.465 8 10l3.535-3.535 1.708-1.707z"
                />
              </svg>
              <span className="ms-2">Blood Bank Management</span>
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="bloodDropdown">
              <li>
                <NavLink to="/bloodbank" className="dropdown-item">
                  Book Blood Donation
                </NavLink>
              </li>
              <li>
                <NavLink to="/viewdonations" className="dropdown-item">
                  View Donations
                </NavLink>
              </li>
            </ul>
          </li>



        </ul>

        <div
          className="mb-3"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <hr />
          <NavLink
            to="/table/complaint"
            className="btn btn-light mb-2 border"
            href="/table/complaint"
          >
            Customer Support
          </NavLink>
         
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              setTimeout(async () => await signOut(getAuth()), 1000);
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
