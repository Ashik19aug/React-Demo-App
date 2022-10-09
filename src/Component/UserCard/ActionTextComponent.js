import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {ChatIcon} from "@chakra-ui/icons";

const ActionTextComponent = (props) => {
    return (
        <>
            <Flex w={'100%'} alignItems={'center'} justify={'flex-start'} h={'3.5vh'} ml={'1rem'}>
                <Flex>
                    <ChatIcon h={4} w={4} marginInline={'0.5rem'}/>
                </Flex>
                <Flex>
                    <Text>{props.Text} </Text>
                </Flex>
                {props.time ?
                    (
                        <Flex>
                            <Text color={'red'} marginInline={'0.5rem'}>2hr</Text>
                        </Flex>
                    ):
                    (<Flex/>)
                }
            </Flex>
        </>
    );
};

export default ActionTextComponent;
