import React, { useEffect, useState } from "react";
import axios from "axios";
function Apicalling() {
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        const API = "https://api.imgflip.com/get_memes";
        async function calling() {
            let resp = await axios.get(API);
            console.log("resp", resp.data.data.memes);
            setAllMemes(resp.data.data.memes);
        }
        calling();
    }, []);

    return allMemes;
}

export default Apicalling;
