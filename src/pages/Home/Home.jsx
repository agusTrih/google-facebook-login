import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/actions";

const Main = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section = styled.section`
    width: 100%;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    width: 100px;
    background: white;
    border: 2px solid black;
    padding: 5px;
`;

export default function Home() {
    const user = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();

    const dataUser =
        user.google.profile !== undefined
            ? user.google
            : user.facebook.profile !== undefined && user.facebook;

    return (
        <Main>
            <div>
                <section>
                    <Center>
                        <h1>mencoba oAuth</h1>
                    </Center>
                </section>
                {dataUser.profile !== undefined && (
                    <Section>
                        <Center>
                            <img src={dataUser.profile.imageUrl} alt="" />
                        </Center>
                        <Center>
                            <h3>Name : {dataUser.profile.name}</h3>
                        </Center>
                        <Center>
                            <h3>Email : {dataUser.profile.email}</h3>
                        </Center>
                        <Center>
                            <Button onClick={() => dispatch(logout(history))}>
                                Logout
                            </Button>
                        </Center>
                    </Section>
                )}
            </div>
        </Main>
    );
}
