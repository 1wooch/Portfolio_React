import React from 'react'
import ImageGallery from 'react-image-gallery';
//import ' Portfolio_React/node_modules/react-image-gallery/styles/css/image-gallery.css';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'


import styles from '../css/Contact.css'

//pictures//
import Acpla from '../Resource/ContactPic/Acpla.jpg';
//import BigDayIn from '../Resource/ContactPic/BigDayIn.JPG';
import ICPC from '../Resource/ContactPic/ICPC.JPG';
import Pioneer from '../Resource/ContactPic/Pioneer.jpeg';
import T1Networking from '../Resource/ContactPic/T1Networking.jpg';
import T2Networking from '../Resource/ContactPic/T2Networking.JPG';
//pictures//

const images=[
  {
    original: Acpla,
  },
  // {
  //   original: BigDayIn,
  // },
  {
    original: ICPC,
  },
  {
    original: Pioneer,
  },
  {
    original: T1Networking,
  },
  {
    original: T2Networking,
  },
];

function Contact(){
    return (
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-7'>
            <ImageGallery items={images} originalClass={styles.image} />
          </div>
          <div className='col-md-3'>
          <div onClick={(e) => {window.location.href ='mailto:example@email.com';}}>Send Mail To Me! </div>
          </div>
          <div className='col-md-1'></div>
        </div>

    )
}

export default Contact;
