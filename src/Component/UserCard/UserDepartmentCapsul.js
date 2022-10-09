import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";

const UserDepartmentCapsul = (props) => {
    return (
        <>
            {props.Department.map(item =>
                <GlobalStyle.UserDepartmentCapsul key={item.value}>
                    <GlobalStyle.UserCapsulText>{item.name}</GlobalStyle.UserCapsulText>
                </GlobalStyle.UserDepartmentCapsul>
            )}
        </>
    );
};

export default UserDepartmentCapsul;
