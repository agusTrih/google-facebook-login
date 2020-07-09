import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function Google() {
    const history = useHistory();

    const responseGoogle = (response) => {
        if (response !== null) {
            swal({
                title: "Good job!",
                text: `Selamat datang 
                Nama: ${response.profileObj.name}
                email: ${response.profileObj.email}`,
                icon: "success",
                button: "hokay!",
            });

            history.push("/home");
        }
        console.log(response.profileObj.name, "ini log google");
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
