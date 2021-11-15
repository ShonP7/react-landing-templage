import React from 'react';
import styled from 'styled-components';
import data from '../data';



function PricePkg1 (){

    return(

        <PricePkg1Styled>
           {
               data.map((item) => {
                   return <div className="PricePkg1" key={item.id}>
                       <div className="number">
                           <p>{item.id} </p>
                       </div>
                       <div className="profile">
                           <img src={item.image} alt="" />
                           <div className="text">
                               <h4>{item.name}</h4>
                               <p>{item.currency}</p>
                           </div>
                       </div>
                       
                   </div>
               })
           }
        </PricePkg1Styled>

    );

}

const PricePkg1Styled = styled.div`
 border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
    transition: all .4s ease-in-out;
    &:hover{
        transform: translateY(-20px);
    }
    .PricePkg1{
        display: flex;
        align-items: center;
        padding: 1.5rem 1rem;
        .number{
            padding-right: 1rem;
            font-size: 1.6rem;
            opacity: 0.5;
            p{
                font-weight: 700;
            }
        }
        .profile{
            display: flex;
            img{
                width: 70px;
                height: 70px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 1rem;
                border: 2px solid #395FF6;
            }
            .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                h4{
                    font-weight: 500;
                }
                p{
                    padding-top: .5rem;
                    opacity: 0.5;
                }
            }
        }
    }

`;

export default PricePkg1;