import React from "react";
import {Link} from "react-router-dom";
import wings from "./Assets/wings.jpg"
import pizza from "./Assets/Pizza.jpg"
import styled from 'styled-components'

const PizzaStyle = styled.div`
  
  
    border: solid black 1px;
    font-weight: bold; 
    width: 50%;
    height: 500px;
    background-image: url("Pizza.jpg");
  
  `

const Home = () => {

return(
    <div>

        <Link to="/pizza">
            
            <button>Pizza Time</button>
            <PizzaStyle >
            <div></div>
            </PizzaStyle>
        </Link>
        <img src={wings} alt={"bobs"}></img>
        
    </div>
)
}

export default Home