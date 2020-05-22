import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
const ProjectsListed = (allProjects) => {
    console.log('in projectslisted ', allProjects.allProjects);

    let fillerArray = [];
    for (let i = 0; i < allProjects.allProjects.length; i++) {
        // console.log(allProjects.projects[i].lastUpdated);
        fillerArray.push(allProjects.allProjects[i].lastUpdated);
    }
    let set = new Set([...fillerArray]);
    console.log(set);
    let newArray = [...set];

    const [dateData, setDateData] = useState([]);
    const getDateData = (date) => {
        Axios.get(
            `https://api.nasa.gov/techport/api/projects?updatedSince=${date}&api_key=DEMO_KEY`
        )
            .then((res) => {
                console.log(res);
                setDateData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log('dateData', dateData);
    return (
        <section>
            <h3>Select a Project Date: </h3>
            {newArray.map((value) => {
                console.log(value);
                return (
                    <h4
                        key={value}
                        onClick={(e) => {
                            e.preventDefault();
                            getDateData(value);
                        }}
                    >
                        {value}
                    </h4>
                );
            })}
        </section>
    );
};
export default ProjectsListed;
