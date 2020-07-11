import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { getFacebook } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    background: white;
    border-radius: 3px;
    cursor: pointer;
    background-color: rgba(59, 89, 152, 0.8);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
        background-color: rgba(59, 89, 152, 1);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
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
                        {loading ? <span>Loading...</span> : "Login Facebook"}
                    </Button>
                )}
            </Login>
        </FacebookProvider>
    );
}
