import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Postlistprovider from "./store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [sideactive, sideset] = useState("Home");
  


  return (
    <>
      <Postlistprovider>
        <div className="maincon">
          <Sidebar sideactive={sideactive} sideset={sideset}></Sidebar>
          <div className="containermain">
            <Header></Header>
           <Outlet></Outlet>
            {sideactive == "Home" ? (
              <Postlist></Postlist>
            ) : (
              <Createpost></Createpost>
            )}
            <Footer></Footer>
          </div>
        </div>
      </Postlistprovider>
    </>
  );
}

export default App;
