import React from 'react';
import { BsCalendarCheck } from 'react-icons/bs';

function Card3() {

class Card3 extends React.Component {
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
            <p className='icon'> <BsCalendarCheck/> </p>
            <b>Terminowość dostaw</b>
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
        <p style={labelStyle}> Staramy się aby każdy nasz transport dojechał do celu na czas. </p>
      );
    }
  }

  return(
    <Card3 />
  )

}


export default Card3;