import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import ActionTextComponent from "./ActionTextComponent";

const UserCardAction = () => {
    return (
        <>
           <Flex w={'100%'} flexDirection={'column'}>
               <ActionTextComponent Text={'DummyText'} time={true} />
               <ActionTextComponent Text={'Verified Tutor'} time={false} />
               <ActionTextComponent Text={'Background Check'} time={false} />
               <Button colorScheme='red' variant='solid' marginY={'0.5rem'} marginInline={'1rem'}>
                   View Profile
               </Button>
               <Button colorScheme='red' variant='outline' marginY={'0.5rem'} marginInline={'1rem'}>
                   Contact
               </Button>
           </Flex>
        </>
    );
};

export default UserCardAction;
