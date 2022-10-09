import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";
import {UserCard} from "../../Container";

const Home = () => {
    return (
        <>
            <GlobalStyle.PageContainer>
                <GlobalStyle.HomePageContainer>
                    <GlobalStyle.HomePageOptionContainer>
                    </GlobalStyle.HomePageOptionContainer>
                    <GlobalStyle.HomePageCardContainer mb={10}>
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                    </GlobalStyle.HomePageCardContainer>
                </GlobalStyle.HomePageContainer>
            </GlobalStyle.PageContainer>
        </>
    );
};

export default Home;
