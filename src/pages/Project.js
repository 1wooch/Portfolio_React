import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

import jsonData from "../Json_data/Project.json";
import "../css/Project.css";




function Project(){


    return(
        <div className="expWrapper">
        <div className="row">
          <div className="col-md-1"></div>
          {/* <div className="col-md-6">
            <div className="d-flex justify-content-sm-end" ref={container} style={{ width: "80%", height: "100%" }}></div>
          </div> */}
          <div className="col-md-4 d-flex align-items-center">
          {/* <h1 className="text-center text-lg">Education & Experience</h1> */}
          <h1 className="large-heading">Porjects</h1>
          </div>
          <div className="col-md-1"></div>
        </div>
  
  
        
        <h1 className="text-center">Projects</h1>
  
        <div className="row">
         
        </div>
      </div>
    );

}

export default Project;
