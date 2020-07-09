import { GET_GOOGLE, GET_FACEBOOK, LOGOUT } from "../actions";

const initialState = {
    google: {},
    facebook: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_GOOGLE:
            return {
                ...state,
                google: payload,
            };
        case GET_FACEBOOK:
            return {
                ...state,
                facebook: payload,
            };
        case LOGOUT:
            return initialState;

        default:
            return state;
    }
};
