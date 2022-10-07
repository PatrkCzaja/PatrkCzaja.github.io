import React from 'react';
import { FaClock } from 'react-icons/fa';

function Card2() {

class Card2 extends React.Component {
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
            <p className='icon'><FaClock/></p>
            <b>Dyspozycyjność 24h</b>
        </div>    
      );
    }
  }

  class Label extends React.Component {
    render() {
      var labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0,

      };
  
      return (
        <p style={labelStyle}> Jesteśmy dla Was przez całą dobę. </p>
      );
    }
  }

  return(
    <Card2 />
  )

}


export default Card2;