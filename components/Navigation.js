import React from 'react';
import styled from 'styled-components';
import logo3 from '../img/logo3.png'



function Navigation (){

    return(
        <NavigationStyled>
            <div className="logo">
                <img src={logo3} alt="Logo" />
            </div>

            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Our Work</a>
                </li>

                <div className="primary-btn">GET CONNECTED</div>

            </ul>
            
        </NavigationStyled>
    );

}

const NavigationStyled = styled.nav`

    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items{
      display: flex;
      align-items: center;
      li{
          margin: 0 1rem;
      }  
      .primary-btn{
          margin-left: 3rem;
          background-color: rgba(57, 95, 246, 0.6); 
          padding: 0.4rem 0.3rem;
          border-radius: 70px;
          cursor: pointer;
          transition: all .4s ease-in-out;
          &:hover{
              rgba(57, 95, 246, 1); 
          }
      }

      .logo{
          img{
              width: 60px;
          }
      }
    }
`;

export default Navigation;