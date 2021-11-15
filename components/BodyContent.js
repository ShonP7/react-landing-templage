import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../Layouts';
import MainTitle from './MainTitle';
import PricePkg1 from './PricePkg1';




function BodyContent(){

        return(
            <BodyContentStyled >
                <InnerLayout>
                    <MainTitle title={'Jump Start Your Business'} subtitle={'All Entrepreneurs'}/>

                    <div className="pricepkg1">
                        <PricePkg1 />
                        <PricePkg1 />
                        <PricePkg1 />
                    </div>
                </InnerLayout>
            </BodyContentStyled>
        );
}

const BodyContentStyled = styled.main`
    .pricepkg1{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }
   
`;

export default BodyContent;