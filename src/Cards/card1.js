import React from 'react';
import { FaCentercode } from 'react-icons/fa';
import { TbUserCheck } from 'react-icons/tb';

function Card1() {

class Card1 extends React.Component {
    render() {
      var cardStyle = {
        height: 300,
        width: 200,
        padding: 0,
        backgroundColor: '#FFF',
        boxShadow: "0px 0px 5px #666"
      };
  
      return (
        <div className='cards' style={cardStyle}>
            <Square />
            <Label />
        </div>
      );
    }
  }

  
  class Square extends React.Component {
    render() {
      var squareStyle = {
        height: 150,
        backgroundColor: "#b5b0b0",
      };
  
      return (
        <div style={squareStyle} > 
         <p className='icon'>  <TbUserCheck /> </p>
         <b>Doświadczenie</b>
        </div>
      );
    }
  }

  class Label extends React.Component {
    render() {
      var labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        textAlign: "center",
        padding: 13,
        margin: 0,
      
      };
  
      return (
        <p style={labelStyle}> Wieloletnie doświadczenie w brańzy TSL. </p>
      );
    }
  }

  return(
    <Card1 />
   
  )

}


export default Card1;