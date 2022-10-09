import {chakra, Flex, Text} from '@chakra-ui/react'

const FlexFull = chakra(Flex, {
    baseStyle: {
        h: '8vh',
        bg: 'white',
        w: '100%',
        paddingX: ['1rem','1.5rem','2rem',],
        color: 'white',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        boxShadow:'md',
        marginBottom: '1rem',
    },
});

const PageContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'gray',
        color: 'black',
        width: '100%',
        paddingX: ['1rem','1.5rem','2rem',],
    },
});

const NavBarText = chakra(Text, {
    baseStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: ['1.5rem', '1.8rem', '2rem'],
    },
});



export default { NavBarText, FlexFull, PageContainer} ;
