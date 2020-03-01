import React from 'react'
import styled from 'styled-components';
import NavLinks from './NavLinks';




const MobileNav = styled.div`
background: #500c2f;
border:none;
width: 50vw;
align-self:flex-end;
background:  maroon ;
opacity:1;
box-shadow: -10px 10px 5px black;
display:none;
@media screen and (max-width:768px) {
    display:block;
}

.logo{
    display:flex;
    flex-direction:column;
    font-size: 5vh;
    font-weight:bold;
    text-shadow: 3px 3px 3px black;
    color:white;
}
.nav-links{
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style:none;
    height:60vh;

}

.link{
    color:white;
    font-size:2.5vh;
    text-decoration:none;
    
}
`


    
      

const Mobile = () => {
  
        return (

             <MobileNav>
                <NavLinks />
                
             </MobileNav>
        )
    }


export default Mobile