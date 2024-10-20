import React, { useState } from "react";

import Container from "../Container";
import { Link, Outlet} from "react-router-dom";

const Home = () => {

  return (
    <div className="">
      <Container>
       
        <div className="">
          <button className="page-btn">
            <Link to={"/calculator"}>calculator</Link>
          </button>
          <button className="page-btn">
            <Link to={"/todo"}>to-do</Link>
          </button>
          
            <Outlet></Outlet>
        </div>
      </Container>
    </div>
  );
};

export default Home;
