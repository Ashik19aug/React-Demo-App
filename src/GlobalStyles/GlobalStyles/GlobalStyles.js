import {chakra, Flex, Text} from '@chakra-ui/react'
import UserCardInformation from "../../Component/UserCard/UserCardInformation";

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

const NavBarText = chakra(Text, {
    baseStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: ['1.5rem', '1.8rem', '2rem'],
    },
});

const PageContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        paddingX: ['1rem','1.5rem','2rem',],
    },
});

const HomePageContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        flexDirection: 'row',
    },
});


const HomePageOptionContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: ['0%','0%','25%','30%','30%',],
        display: ['none','none','block','block','block',],
        flexDirection: 'row',
    },
});


const HomePageCardContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: ['100%','100%','75%','70%','70%',],
        flexDirection: 'column',
    },
});


const UserCardContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        flexDirection: 'row',
        boxShadow: 'md',
        borderColor: 'gray',
        borderWidth: '0.5px',
        borderRadius: '5px',
        marginBottom: '2vh',
    },
});

const UserCardInformationContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: ['100%', '100%', '70%', '70%', '70%', ],
        flexDirection: 'row',
        borderColor: 'gray',
        borderRightWidth: ['0px','0px','0.5px','0.5px','0.5px',],
        margin: '0.5rem',
    },
});

const UserCardActionContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: ['0%', '0%', '30%', '30%', '30%', ],
        display: ['none','none','block','block','block',],
        flexDirection: 'column',
        margin: '0.5rem',
    },
});

const UserAvatarContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '25%',
        margin: '0.5rem',
    },
});

const UserPersonalInfoContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '70%',
        margin: '0.5rem',
        flexDirection: 'column',
    },
});

const UserFollowIconContainer = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '5%',
        margin: '0.5rem',
    },
});


const UserName = chakra(Text, {
    baseStyle: {
        color: 'black',
        fontWeight: 'semisolid',
        fontSize: ['1rem','1rem','1rem','1.2rem','1.2rem',]
    },
});

const UserVrctName = chakra(Text, {
    baseStyle: {
        color: 'black',
        fontSize: ['1rem','1rem','1rem','1.2rem','1.2rem',]
    },
});


const UserDepartment = chakra(Text, {
    baseStyle: {
        color: 'gray',
        fontSize: ['0.9rem','0.9rem','0.9rem','1.1rem','1.1rem',]
    },
});

const UserReview = chakra(Text, {
    baseStyle: {
        color: 'gray.500',
        lineHeight: '1.3rem',
        fontSize: ['0.9rem','0.9rem','0.9rem','1.1rem','1.1rem',],
        marginInline: '0.2rem',
        noOfLines: 1,
    },
});

const UserValue = chakra(Text, {
    baseStyle: {
        color: 'black',
        lineHeight: '1.3rem',
        fontSize: ['0.9rem','0.9rem','0.9rem','1.1rem','1.1rem',],
        noOfLines: 1,
    },
});

const UserBio = chakra(Text, {
    baseStyle: {
        color: 'black',
        lineHeight: '1.5rem',
        fontSize: ['0.7rem','0.8rem','0.8rem','1rem','1rem',],
        marginInline: '1rem',
        noOfLines: [3,3,2,2,2,],
    },
});

const UserCapsulText = chakra(Text, {
    baseStyle: {
        color: 'black',
        lineHeight: '1.5rem',
        fontSize: ['0.7rem','0.8rem','0.8rem','0.8rem','0.8rem',],
        marginInline: '0.3rem',
    },
});

const UserReviewContainer = chakra(Flex, {
    baseStyle: {
        width: '100%',
        alignItems: 'center',
    },
});

const UserValueContainer = chakra(Flex, {
    baseStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',

    },
});

const UserSingleValueContainer = chakra(Flex, {
    baseStyle: {
        width: '33.3%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


const UserDepartmentContainer = chakra(Flex, {
    baseStyle: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginInline: '1rem',
        marginY: '0.8rem',
        flexWrap: 'wrap',
    },
});

const UserDepartmentCapsul = chakra(Flex, {
    baseStyle: {
        width: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        borderRadius: 'full',
        borderColor: 'black',
        borderWidth: '0.5px',
        paddingInline: '0.5rem',
        flexWrap: 'wrap',
    },
});




export default { NavBarText, FlexFull, PageContainer, HomePageContainer, HomePageOptionContainer, HomePageCardContainer,
    UserCardContainer, UserCardInformationContainer, UserCardActionContainer, UserAvatarContainer, UserPersonalInfoContainer,
    UserFollowIconContainer, UserName, UserVrctName, UserDepartment, UserReviewContainer, UserReview, UserValueContainer,
    UserSingleValueContainer, UserValue, UserBio, UserDepartmentContainer, UserDepartmentCapsul, UserCapsulText
} ;
