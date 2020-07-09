import React from "react";
import { Google, Facebook } from "../../components";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    justify-content: center;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const SpaceAround = styled(Center)`
    justify-content: space-around;
    width: 500px;
`;

export default function Login() {
    return (
        <Main>
            <div>
                <Center>
                    <h1>Login</h1>
                </Center>
                <SpaceAround>
                    <Google />
                    <Facebook />
                </SpaceAround>
            </div>
        </Main>
    );
}
