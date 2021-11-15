import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import webchain from '../img/webchain.png';
import CtaButton from './CtaButton';



function MainContent(){

    return(
       
            <MainContentStyled>
               <Navigation />
                <div className="herocontent">
                    <div className="left">
                        <SmallHeading  title={'All Web Development Services in One Place'} identifier={'Before'}/>
                        
                        <h1>
                        All Web Dev Serivces in One Place
                        You Focus on Your Business and Leave the Tech to <span className='GradientText'>Respect Tech</span> 
                        </h1>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies. 
                          Nibh mauris cursus mattis molestie a iaculis.Lobortis elementum nibh tellus molestie. 
                          Aliquet sagittis id consectetur purus.  
                        </p>
                        <div className="btns-con">
                            <CtaButton name={'Book Now'} />
                            <CtaButton name={'Pkg Prices'} />
                        </div>
                    </div>
                    <div className="right">
                        <img src={webchain} alt="" />

                    </div>
                </div>

            </MainContentStyled>  
    );

}

const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    transform: translateX(-50%);

    .herocontent{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width:100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
               padding: 1.8rem 0;
            }
        }
        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: 10%;
                width: 60%;
            }
        }
    }
    .btns-con{
        margin-top: 2rem;
    }
`;

export default MainContent;