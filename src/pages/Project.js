import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
//import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

import jsonData from "../Json_data/Project.json";
import "../css/Project.css";
import lottie from "lottie-web";

import YouTube from 'react-youtube';
// import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { Carousel } from 'react-carousel-minimal';

//import NApic from '../Resource/ProjectPic/CREATE Self-Report Tool/1.png';


function Project(){
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
    const container = useRef(null);
    function generateRandomNumber() {
        return Math.floor(Math.random() * 6);
      }
     
      useEffect(() => {
        const AnimationRandomNum = generateRandomNumber();
        const AnimeName=jsonData.MainAnime[AnimationRandomNum];
        document.title="Won | Experience";
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require(`../Resource/Lottie/${AnimeName}`),
        });
      }, []);
      
      ///Modal thing
      const [images, setImages] = useState([]);
      
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [selectedProject, setSelectedProject] = useState({
        "name": "mock",
        "technologies": [],
        "description": "",
        "additional_info": "",
        "Award": null,
        "GitRepo":"",
        "Video":"",
        "Picture":[],
        "live":""
      });

      const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
   
      
      if (project.Picture) {
        const projectImages = project.Picture.map((picture) => ({
          image: require(`../Resource/ProjectPic/${project.name}/${picture}`),
        }));
        setImages(projectImages);
      }
      console.log(images);
        
      };

      const closeModal = () => {
          setSelectedProject({
            "name": "mock",
            "technologies": [],
            "description": "",
            "additional_info": "",
            "Award": null,
            "GitRepo":"",
            "Video":"",
            "Picture":[],
            "live":""
          });
          setImages([]);
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
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        centered
        dialogClassName='modal'
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
                <div className='col-6'>
                
                    <div className='demonstrate'>
                    {selectedProject.Video !==null?(
                      <YouTube videoId={selectedProject.Video}/>
                    )           :selectedProject.Picture!==null?(
                      <div className='imageGallery' >
                        {/* <ImageGallery items={images} 
                        showFullscreenButton={false}
                        autoplay={true}
                        className='imageGallery' 
                        /> */}
                        <Carousel
                            data={images}
                            time={2000}
                            width="500vw"
                            height="45vh"
                            captionStyle={captionStyle}
                            radius="10px"
                            slideNumber={true}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                          />
                      </div>
                    ):
                    (
                      <img src={require('../Resource/NA.jpg')} alt='NA'/>
                      
                      )
                    }

                    </div>
                  
                </div>
              </div>
             
            </div>
            
        </Modal.Body>
      </Modal>

      </div>
    );

}

export default Project;
