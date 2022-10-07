import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import picture from '../images/image2.jpg';
import '../SDate';

import $ from 'jquery'; 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

$(document).ready(function() {
    $(function() {
    
    var SToday = new Date();

    var month = SToday.getMonth() +1;
    var day = SToday.getDate();
    var year = SToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;

    $('#dateControl').attr('min', maxDate);
});
})



export const  Pricing  = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_max4rui', 'template_xzpro1c', e.target, 'xsvc_kGE-xSC8YiIP')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
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

    <div className='form'>

        <div className='sidebar'>
            <img src={picture} alt="obrazek z drogą"/>
        </div>
       
        <div className='pricing'>
            <h2>
                Wycena Transportu
            </h2>
            <section>
                <p class="pricing-text">
                    Zachęcamy do wypełnienia wyceny transportu, od tego zaczyna się nasza wspólpraca. Przy dokonywaniu wyceny, 
                    nasi specjaliści skupiają się na zoptymalizowaniu kosztów oraz dobraniu odpowiednich środków transportu, by zapewnić 
                    odpowiednie warunki przewozu oraz najwyższy poziom obsługi klienta.
                </p>
                <p>
                    Aby skorzystać z wyceny, należy wypełnić formularz wszystkimi niezbędnymi informacjami i gdy wycena będzie gotowa, zostanie odesłana na podany w formularzu adres email. 
                </p>
            </section>
        </div>

         <h1>Formularz wyceny</h1>
       

    <form ref={form} onSubmit={sendEmail}>
    
        <div className='subject'>
        <label>Rodzaj wyceny*</label>
            <select className='option' name="subject" id='subject' required>
                <option value='Transport krajowy drobnicowy'> Transport krajowy drobnicowy </option>
                <option value='Transport krajowy całopojazdowy'> Transport krajowy całopojazdowy </option>
                <option value='Transport międzynarodowy drobnicowy'> Transport międzynarodowy drobnicowy </option>
                <option value='Transport międzynarodowy całopojazdowy'> Transport międzynarodowy całopojazdowy </option>
            </select>
        </div>
        <div className='personal'>

         <p>1. Dane kontaktowe</p>
      <label>Imię</label>
      <input type="text" name="user_Fname" required />

      <label>Nazwisko</label>
      <input type="text" name="user_Lname" required />

      <label>Numer Telefonu</label>
      <input type="text"
     
        name="user_phone"
        required/>

      <label>Email</label>
      <input type="email" name="user_email" required />

      <label>Dodatkowe informacja</label>
      <textarea name="add-text" placeholder='Podaj wymiary oraz wagę każdej pojedyńczej przesyłki' required />

      <input className='submit btn' type="submit" onClick={openPopup} value="Wyślij" />

            </div>
            <div className='package'>  
        <p>2. Dane towaru</p>

      <label>Miejsce Załadunku</label>
      <input type="text" name="start-place" placeholder='np. Poznań' required/>

      <label>Miejsce Rozładunku</label>
      <input type="text" name="end-place" placeholder='np. Kraków' required/>

      
      <label>Planowana Data Załadunku</label>

      <input type="date" id="dateControl" name="start-date"required />

      <label>Planowana Data Dostawy</label>
      <input type="date" id="dateControl" name="end-date" required/>

     
      <div className='popup' id='popup'>
            <p>
               Wiadomość została wysłana. Dziękujemy za kontakt.
            </p>
            <button type="button" onClick={closePopup}>OK</button>
         </div>
      
            </div>
     
    </form>
  
      <div className='footer'>
          <footer>
          Wszelkie prawa zastrzeżone © DMC 2022
          </footer>
      </div>
    
            
    </div>
    );
  }


export default Pricing;

