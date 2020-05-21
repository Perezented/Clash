import React from 'react';

const ProjectsListed = (allProjects) => {
    console.log(allProjects.projects);
    let fillerArray = [];
    for (let i = 0; i < allProjects.projects.length; i++) {
        // console.log(allProjects.projects[i].lastUpdated);
        fillerArray.push(allProjects.projects[i].lastUpdated);
    }
    let set = new Set([...fillerArray]);
    console.log(set);
    let newArray = [...set];
    return (
        <section>
            <h3>Select a Project Id: </h3>
            {newArray.map((value) => {
                console.log(value);
                return <h4 key={value}>{value}</h4>;
            })}
        </section>
    );
};
export default ProjectsListed;
