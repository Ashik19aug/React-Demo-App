import {chakra, Flex} from '@chakra-ui/react'

const FlexTest = chakra(Flex, {
    baseStyle: {
        h: '5vh',
        bg: 'white',
        w: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        boxShadow:'md',
    },
});



export default {FlexTest,} ;
