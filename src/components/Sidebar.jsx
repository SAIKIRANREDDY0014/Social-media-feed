import { useEffect } from "react";
import axios from  'axios';
function Sidebar({ sideactive, sideset }) {
  const getdat = async () =>{
    const datain  =  await axios.get('http://localhost:5000/data');
    console.log(datain.data);
  }
  const senddat = async () =>{
    const senddain  =  await axios.post('http://localhost:5000/data',{name : "ashok reddy",age : 55});
    console.log(senddain.data);
  }
  useEffect(() => {
    getdat();
    },[])
    useEffect(() => {
      senddat();
      },[])

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3  sidebarstyle"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => sideset("Home")}>
          <a
            href="#"
            className={`nav-link ${sideactive === "Home" && "active"}`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={() => sideset("Create")}>
          <a
            href="#"
            className={`nav-link ${sideactive === "Create" && "active"} `}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
export default Sidebar;
