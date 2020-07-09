import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { getGoogle } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Google() {
    const history = useHistory();
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        dispatch(getGoogle(response, history));
    };

    return (
        <GoogleLogin
            clientId="300123951755-j76ddtd9b2cboqcitch33f7sl53gcc25.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
}
