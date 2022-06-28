import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const App = () => {
    const [posts, setPosts] = useState([]);
    const fetchPost = async () => {
        const response = await axios.get("https://api.github.com/users")
        setPosts(response.data)
//    console.log(response.data)
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className="main">
            <Card userData={posts}/>
        </div>
        );
    }

export default App; 