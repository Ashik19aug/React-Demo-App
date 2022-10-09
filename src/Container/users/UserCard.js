import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";
import {UserCardAction, UserCardInformation} from "../../Component";

const UserCard = () => {
    return (
        <>
           <GlobalStyle.UserCardContainer>
               <GlobalStyle.UserCardInformationContainer>
                   <UserCardInformation/>
               </GlobalStyle.UserCardInformationContainer>
               <GlobalStyle.UserCardActionContainer>
                   <UserCardAction/>
               </GlobalStyle.UserCardActionContainer>
           </GlobalStyle.UserCardContainer>
        </>
    );
};

export default UserCard;
