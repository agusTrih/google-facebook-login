import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { getFacebook } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    background: white;
    border: 2px solid black;
`;

export default function Facebook() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const handleResponse = (data) => {
        dispatch(getFacebook(data, history));
    };

    const handleError = (error) => {
        console.log(errors);

        setErrors({ error });
    };

    return (
        <FacebookProvider appId="2697154960539775">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <Button onClick={handleClick}>
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            "Login via Facebook"
                        )}
                    </Button>
                )}
            </Login>
        </FacebookProvider>
    );
}
