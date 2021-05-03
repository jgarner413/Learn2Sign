import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const fullElemnt = {
        display: 'flex',
        justifyContent: 'center',
    }
    
    const containerStyles = {
        display: 'flex',
        height: 20,
        width: '50%',
        backgroundColor: "#e0e0de",
        borderRadius: 25,
        margin: 10,
      }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
    <div style={fullElemnt}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
    );
  };
  
  export default ProgressBar;