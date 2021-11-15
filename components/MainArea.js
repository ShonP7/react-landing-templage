import React from 'react';
import styled from 'styled-components';
import digitalhero from '../img/digitalhero.mp4'
import circles from '../img/circles.svg';
import {InnerLayout} from '../Layouts';
import MainContent from './MainContent';


function MainArea(){

    return(

        <MainAreaStyled>
            <video src={digitalhero} muted playsInLine autoPlay loop></video>
            <img src={circles} alt="" className="overlay" />

            <InnerLayout>
                <MainContent />
            </InnerLayout>
        </MainAreaStyled>

    )
}

const MainAreaStyled = styled.div`
    width: 100%;
    heigh: 85vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -100px;
        opacity: 0.9; 
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default MainArea;