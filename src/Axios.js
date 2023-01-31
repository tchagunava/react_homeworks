import axios from "axios";
import React, { useEffect } from "react";


export const Axios = () => {
    useEffect(() => {
        axios.get("http://localhost:3001/users").then(({ data }) => {
            console.log("axios data", data);
        });
    }, []);

    return <div>Axios</div>;

};