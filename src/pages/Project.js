import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
//import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

import jsonData from "../Json_data/Project.json";
import "../css/Project.css";
import lottie from "lottie-web";



function Project(){

    const container = useRef(null);
    function generateRandomNumber() {
        return Math.floor(Math.random() * 6);
      }
     
      useEffect(() => {
        const AnimationRandomNum = generateRandomNumber();
        document.title="Won | Experience";
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require(`../Resource/Lottie/${jsonData.MainAnime[AnimationRandomNum]}`),
        });
      }, []);
      
      ///Modal thing
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [selectedProject, setSelectedProject] = useState({
          "name": "mock",
          "technologies": [],
          "description": "",
          "additional_info": "",
          "Award": null,
          "GitRepo":""
        });

        const openModal = (project) => {
          console.log(project);
            setSelectedProject(project);
            setModalIsOpen(true);
        };

        const closeModal = () => {
            setSelectedProject({
              "name": "mock",
              "technologies": [],
              "description": "",
              "additional_info": "",
              "Award": null,
              "GitRepo":""
            });
            setModalIsOpen(false);
        };
        
    return(
        <div className="expWrapper">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="d-flex justify-content-sm-end" ref={container} style={{ width: "80%", height: "100%" }}></div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
          {/* <h1 className="text-center text-lg">Education & Experience</h1> */}
          <h1 className="large-heading">Porjects</h1>
          </div>
          <div className="col-md-1"></div>
        </div>
        
        <h1 className="text-center">Projects</h1>
        <br/>
      
        {/* project card*/}
        <div className="modalThing">
        {jsonData.projects.map((project, index) => (
          index % 2 === 0 ? (
            <div className="row" key={index}>
              <div className="col-md-6">
                <div className="project-card" onClick={() => openModal(project)}>
                  <h3 className='projectName'>{project.name}</h3>
                  <ul>
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <li key={techIndex}>
                      <img
                      src={`/logos/${tech}.png`}
                      width="75"
                      height="75"
                      alt={tech}
                      onError={(e)=>{
                        e.target.onerror = null;
                      }}
                    />
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index + 1 < jsonData.projects.length && (
                <div className="col-md-6">
                  <div className="project-card" onClick={() => openModal(jsonData.projects[index + 1])}>
                    <h3 className='projectName'>{jsonData.projects[index + 1].name}</h3>
                    <ul>
                      {jsonData.projects[index + 1].technologies.slice(0, 3).map((tech, techIndex) => (
                        <li key={techIndex}>
                        <img
                        src={`/logos/${tech}.png`}
                        width="75"
                        height="75"
                        alt={tech}
                        onError={(e)=>{
                          e.target.onerror = null;
                        }}
                      />
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : null
        ))}
      </div>
      {/* Modal */}
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        // className="modal fade bd-example-modal-xl"
        size='xl'
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title><h1>{selectedProject.name}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className='row'>
                <div className="col-4">
                  <div>
                          {selectedProject && (
                      <>
                        <h3>Technologies</h3>
                        <ul className='modal-body-ul'>
                          {selectedProject.technologies.map((tech, index) => (
                            <li key={index} className="btn btn-sm btn-secondary rounded-pill bg-gray-700" >
                              {tech}
                            </li>
                          ))}
                        </ul>          
                        <p>{selectedProject.description}</p>
                        <p>{selectedProject.additional_info}</p>
                        <p>{selectedProject.Award}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className='col-8'>
                    <video width='700' height='600' controls="controls" muted loop autoPlay>
                        <source src={require("../Resource/ProjectPic/Acpla.mp4")} type="video/mp4"/> 
                        {/* require is needed and without it it doesn't play */}
                    </video>
                </div>
              </div>
             
            </div>
            
        </Modal.Body>
      </Modal>

      </div>
    );

}

export default Project;
