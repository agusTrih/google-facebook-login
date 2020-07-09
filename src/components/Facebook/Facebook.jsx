import React from "react";
import { useHisory } from "react-router-dom";
import { FacebookProvider, Login } from "react-facebook";
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
            history.push("/home");
        }
    }, [facebook, history]);

    return (
        <div>
            <FacebookProvider appId="2697154960539775">
                <Login
                    scope="email"
                    onCompleted={handleResponse}
                    onError={handleError}
                >
                    {({ loading, handleClick, error, data }) => (
                        <span onClick={handleClick}>
                            Login via Facebook
                            {loading && <span>Loading...</span>}
                        </span>
                    )}
                </Login>
            </FacebookProvider>
        </div>
    );
}

export default Facebook;
