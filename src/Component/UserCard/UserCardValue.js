import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";
import {Flex} from "@chakra-ui/react";
import {TimeIcon} from "@chakra-ui/icons";

const UserCardValue = () => {
    return (
        <>
            <GlobalStyle.UserValueContainer>
                <GlobalStyle.UserSingleValueContainer>
                    <GlobalStyle.UserValue>$10,000</GlobalStyle.UserValue>
                    <GlobalStyle.UserReview>/month </GlobalStyle.UserReview>
                </GlobalStyle.UserSingleValueContainer>
                <GlobalStyle.UserSingleValueContainer>
                    <GlobalStyle.UserValue>$45</GlobalStyle.UserValue>
                    <GlobalStyle.UserReview>/hr</GlobalStyle.UserReview>
                </GlobalStyle.UserSingleValueContainer>
                <GlobalStyle.UserSingleValueContainer>
                    <Flex> <TimeIcon color={'red'} w={4} h={4}/> </Flex>
                    <GlobalStyle.UserReview> 720 hr tutoring </GlobalStyle.UserReview>
                </GlobalStyle.UserSingleValueContainer>
            </GlobalStyle.UserValueContainer>
        </>
    );
};

export default UserCardValue;
