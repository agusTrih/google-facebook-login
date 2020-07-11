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

const Wrapper = styled(Center)`
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
                <Wrapper>
                    <Google />
                    <Facebook />
                </Wrapper>
            </div>
        </Main>
    );
}
