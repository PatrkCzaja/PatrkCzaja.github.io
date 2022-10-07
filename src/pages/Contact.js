import React, { useRef } from 'react';
import picture from '../images/image2.jpg';
import emailjs from '@emailjs/browser';



export const  Contact  = () => {
   const form = useRef();

  
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_max4rui', 'template_28t844g', e.target, 'xsvc_kGE-xSC8YiIP')
       .then((result) => {
           console.log(result.text);},
       (openPopup()) 
           ,(error) => {
           console.log(error.text);
       });
       e.target.reset()
      
 
   };

   let popup = document.getElementById("popup");

   function openPopup(){
      
      popup.classList.add('open-popup');
      
   }

   function closePopup(){
      popup.classList.remove('open-popup');
   }



return (

   <div className='contact'>

    <div className='sidebar'>
    <img src={picture} alt="obrazek z drogą"/>
    </div>
      <div className='contact-tittle'>
         <h1>Skontaktuj się z nami</h1>
      </div>

    <form ref={form} onSubmit={sendEmail} >
    <div className='personal'>

         <p>1. Dane kontaktowe</p>
         <label>Temat*</label>
         <input type="text" name="title" required />

         <label>Imię i Nazwisko*</label>
         <input type="text" name="user_name" required />

         <label>Numer Telefonu</label>
         <input type="tel"name="phone"/>

         <label>Email*</label>
         <input type="email" name="user_mail" required />

         <label>Wiadomość*</label>
         <textarea name="message"  required/>

         <input className='submit btn' type="submit"  onClick={openPopup} value="Wyślij" /> 
         <div className='popup' id='popup'>
            <p>
               Wiadomość została wysłana. Dziękujemy za kontakt.
            </p>
            <button type="button" onClick={closePopup}>OK</button>
         </div>
     </div>
    </form>

    <div className='phone-contact'>

    <div className='contact-name'> <h3> DMC LOGISTICS ELŻBIETA ULLMAN  </h3>
            <p className='phone-details'> <span className='NIP'> Numer NIP  :   6040027534 </span></p>
            <p className='phone-details'> <span className='NIP'> Numer REGON  :   523301952 </span>  </p>
          
      </div>


      <h2>Skontaktuj się z nami telefonicznie</h2>

    
      <div className='contact-name'> <b> Biuro  </b>
           <p className='phone-details'> +48 730 559 337</p>
           <a className='mailto' href="mailto:office@dmc-logistics.pl"> <p className='phone-details'> office@dmc-logistics.pl</p> </a>
      </div>
   

    </div>

      <div className='footer'>
            <footer>
            Wszelkie prawa zastrzeżone © DMC 2022
            </footer>
      </div>


   </div>
   );
}


export default Contact;