export const GET_GOOGLE = "GET_GOOGLE";
export const GET_FACEBOOK = "GET_FACEBOOK";
export const LOGOUT = "LOGOUT";

export const getGoogle = (data, history) => {
    const profile = {
        ...data,
    };

    if (profile.profileObj !== undefined) {
        localStorage.setItem("isLoggedIn", true);
        history.push("/home");
    }

    return {
        type: GET_GOOGLE,
        payload: {
            profile: {
                name: profile.profileObj.name,
                imageUrl: profile.profileObj.imageUrl,
                email: profile.profileObj.email,
            },
        },
    };
};

export const getFacebook = (data, history) => {
    const { profile } = data;

    if (profile.name !== undefined) {
        localStorage.setItem("isLoggedIn", true);
        history.push("/home");
    }
    return {
        type: GET_FACEBOOK,
        payload: {
            profile: {
                name: profile.name,
                imageUrl: profile.picture.data.url,
                email: profile.email,
            },
        },
    };
};

export const logout = (history) => {
    history.push("/");
    localStorage.clear();
    return {
        type: LOGOUT,
    };
};
