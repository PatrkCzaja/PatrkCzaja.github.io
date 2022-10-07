import React from 'react';
import picture from '../images/image2.jpg';
import image from '../images/logistics-3125131_1920.png';
import background from '../images/smartboard-1523538_1920.jpg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { MdOutlinePriceCheck } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsBriefcaseFill } from 'react-icons/bs';
import { MdOutlineSecurity } from 'react-icons/md';
import { GiShipBow } from 'react-icons/gi';
import Collapse1 from '../Collapse/Collapse1';
import Collapse2 from '../Collapse/Collapse2';
import Collapse3 from '../Collapse/Collapse3';
import Collapse4 from '../Collapse/Collapse4';
import Collapse5 from '../Collapse/Collapse5';

  


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

 function Offer() {
    
    
    return (
        <div className="offer">
            <div className='sidebar'>
                <img src={picture} alt={'obrazek'} />
            </div>

           

            <div className="head-offer">
                <h1> Oferta </h1> <br/>
                <div className='about-offer'>
                        <div className='right-image'>
                            <img src={image} height={250} width={400} alt={'obrazek'} />
                        </div>
                <p className='head-offer-text'>
                    Dbając o potrzeby naszych klientów oferujemy obsługę 
                    całego procesu logistycznego od A do Z. Nasi pracownicy są
                    do Państwa dyspozycji 24h. W trosce o najlepszą wspólpracę do każdego klienta przypisujemy
                    dedykowanego przedstawiciela.
                    <div className='path-to-pricing'>
                        <button>
                        <div className='icon-price'> 
                        <CustomLink to="/pricing"> 
                            < MdOutlinePriceCheck />  
                            Przejdź do wyceny! 
                        </CustomLink> 
                        </div>
                        </button>
                    </div>
                </p>
                    
                </div>

            </div>
           

            
                
                    
                
            <div className='main-offer'>
            <h2 className='head'> W naszej ofercie :  </h2>
                    
                        <br/>
                            <div className='item'>
                            <h2 className='item-header' > Transport krajowy drobnicowy ( LTL, PTL )  </h2> 
                               <div className='collapse'>
                               <Collapse1 />
                               </div>
                            </div>
                            <div className='item'>
                            <h2 className='item-header'>  Transport krajowy całopojazdowy ( FTL ) </h2>
                                <div className='collapse'>
                               <Collapse2 />
                               </div>
                             </div>

                            <div className='item'>
                            <h2 className='item-header'>  Transport międzynarodowy drobnicowy </h2>
                                <div className='collapse'>
                               <Collapse3 />
                               </div>    
                            </div>
                            <div className='item'>
                            <h2 className='item-header'>  Transport międzynarodowy całopojazdowy ( FTL )</h2>
                                <div className='collapse'>
                               <Collapse4 />
                               </div>    
                            </div>
                            <div className='item'> 
                            <h2 className='item-header'>   Ekspresowy transport ładunków przy użyciu aut o DMC 3,5T </h2>
                                <div className='collapse'>
                               <Collapse5 />
                               </div>    
                            </div>
            </div>

            <div className='services-head'>
                    <h2 className='services-tittle'>Kompleksowość usług</h2>
                </div>

            <div className='services'>

                    <div className='services-background'>
                        <img src={background} alt={'obrazek'} /> 
                    </div>


                <div className='services-item1'>
                        <div className='service-icon'> <TbTruckDelivery />  </div> <p className='service-desc'>  Przewozy ładunków SENT oraz ADR </p>
                </div>
                <div className='services-item2'>
                        <div className='service-icon'> <BsBriefcaseFill />  </div> <p className='service-desc'> Aranżacja odpraw celnych </p>
                </div>

                <br/>
                <div className='services-item3'>
                        <div className='service-icon'> <MdOutlineSecurity />  </div> <p className='service-desc'>  Dodatkowe ubezpieczenie CARGO </p>
                </div>
                
                <div className='services-item4'>
                        <div className='service-icon'> <GiShipBow />  </div>     <p className='service-desc'>  Organizacja przepraw promowych </p>
                </div>
                   

            </div>
          

            <div className='footer'>
                <footer>
                Wszelkie prawa zastrzeżone © DMC 2022
                </footer>
            </div>


        </div>
    )

    
}






export default Offer;