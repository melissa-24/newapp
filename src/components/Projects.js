import React from "react";
import { Link, useHistory } from "react-router-dom";

function Projects(props) {
    const { push, goBack } = useHistory();
    console.log(props);
    return (
        <div className="project-wraper">
            <button onClick={() => goBack()}>Go Back</button>
            <div className="project-header">
                <h2>Projects</h2>
            </div>
        </div>
    );
}

export default Projects;