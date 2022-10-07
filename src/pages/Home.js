import picture from '../images/image2.jpg';
import image from '../images/photo.png';
import React from 'react';
import Card1 from '../Cards/card1'; 
import Card2 from '../Cards/card2';
import Card3 from '../Cards/card3';




export default function Home() {
    return (
        <div className="about">

        <div className='sidebar'>
            <img src={picture}  alt="obrazek z drogą"/>
        </div>

        <section className="lorem">
            <h1>
            Kim jesteśmy?
            </h1> <br/>
            <p className='lorem-text'>
            DMC Logistics to zespół młodych, ambitnych ludzi z wieloletnim doświadczeniem
            w zakresie logistyki i transportu. Jako operator logistyczny oferujemy kompeksowe
            rozwiązania w zakresie transportu drogowego, intermodalnego, usług celnych oraz logistyki
            kontraktowej. Dzięki współpracy z naszymi partnerami mamy możliwość realizacji każdego zlecenia. 
              </p>
              
        </section>

       
        <section className='us'>
            <h1>
              Dlaczego My?
            </h1>

          <div className='right-images'>
            <img src={image} width={650} height={300} alt="pan z tabletem" />
          </div>

            <div className='allcards'>
              <Card1 />
              <Card2 />
              <Card3 />
            </div>

        </section>


        <div className='footer'>
          <footer>
            Wszelkie prawa zastrzeżone © DMC 2022 
          </footer>
        </div>

      </div>


    );
}