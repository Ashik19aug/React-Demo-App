import React from 'react';
import {Avatar, AvatarBadge, Flex, Text} from "@chakra-ui/react";
import {GlobalStyle} from "../../GlobalStyles";
import {StarIcon, TimeIcon} from '@chakra-ui/icons'
import {Follow} from "../../Svg/Icons";
import {Department} from "../../Constant/ConstantValue";
import UserCardValue from "./UserCardValue";
import UserBio from "./UserBio";
import UserDepartmentCapsul from "./UserDepartmentCapsul";


const UserCardInformation = () => {
    return (
        <>
            <Flex w={'100%'} flexDirection={'column'}>
                <Flex w={'100%'}>
                    <GlobalStyle.UserAvatarContainer>
                        <Avatar size='xl' name='ASH' src='https://bit.ly/broken-link'>
                            <AvatarBadge boxSize='1em' bg='green.500'/>
                        </Avatar>
                    </GlobalStyle.UserAvatarContainer>
                    <GlobalStyle.UserPersonalInfoContainer>
                        <GlobalStyle.UserName>User Name</GlobalStyle.UserName>
                        <GlobalStyle.UserVrctName>Name Of University</GlobalStyle.UserVrctName>
                        <GlobalStyle.UserDepartment>User Department</GlobalStyle.UserDepartment>
                        <GlobalStyle.UserReviewContainer>
                            <Flex> <StarIcon color={'gold'} w={4} h={4}/> </Flex>
                            <GlobalStyle.UserReview>( 202 reviews )</GlobalStyle.UserReview>
                        </GlobalStyle.UserReviewContainer>
                    </GlobalStyle.UserPersonalInfoContainer>
                    <GlobalStyle.UserFollowIconContainer>
                        <Follow/>
                    </GlobalStyle.UserFollowIconContainer>
                </Flex>
                <UserCardValue/>
                <GlobalStyle.UserValueContainer>
                    <UserBio/>
                </GlobalStyle.UserValueContainer>
                <GlobalStyle.UserDepartmentContainer>
                    <UserDepartmentCapsul Department={ Department} />
                </GlobalStyle.UserDepartmentContainer>
            </Flex>
        </>
    );
};

export default UserCardInformation;
