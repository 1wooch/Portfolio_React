import React  from 'react';


function Contact(){
    return (
        <div onClick={(e) => {window.location.href ='mailto:example@email.com';}}>Send Mail To Me! </div>

    )
}

export default Contact;
