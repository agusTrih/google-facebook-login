import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";

function Facebook() {
    const history = useHistory();
    const [facebook, setFacebook] = useState({});

    const handleResponse = (data) => {
        setFacebook(data);
    };
    const handleError = (error) => {
        this.setState({ error });
    };
    useEffect(() => {
        if (facebook.profile !== undefined) {
            swal({
                title: "Good job!",
                text: `Selamat datang 
                Nama: ${facebook.profile.name}
                email: ${facebook.profile.email}`,

                icon: "success",
                button: "hokay!",
            });
            history.push("/home");

            console.log(facebook.profile, "consolenih");
        }
    }, [facebook, history]);

    return (
        <FacebookProvider appId="2697154960539775">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <button>
                        {" "}
                        <span onClick={handleClick}>
                            Login via Facebook
                            {loading && (
                                <span style={{ color: "pink" }}>
                                    Loading...
                                </span>
                            )}
                        </span>
                    </button>
                )}
            </Login>
        </FacebookProvider>
    );
}

export default Facebook;
