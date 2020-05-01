import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log(history);
    const routeToProjects = event => {
        history.push("/projects");
    };

    return (
        <div className="home-wrapper">
            <img className="home-img" src="http://images.craftsnherbs.com/melissa.png" alt="" />
            <button className="md-button home-button" onClick={routeToProjects}>See Projects</button>
        </div>
    );
}

export default Home;