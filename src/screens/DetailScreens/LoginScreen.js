import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginActions } from "./../../redux/reducers/loginReducer";

const LoginScreen = () => {
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();

    console.log(login.userId);
    return (
        <div>
            <h3>Login</h3>
            <input
                type="text"
                value={login.userId}
                onChange={(e) => {
                    dispatch(loginActions.setUsers(e.target.value));
                }}
            ></input>
            <button
                onClick={() => {
                    // dispatch(loginActions.getUsers("123"));
                    console.log(login.userId);
                    window.location.replace("/home");
                }}
            >
                login
            </button>
        </div>
    );
};

export default LoginScreen;
