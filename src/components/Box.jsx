import React, { useEffect, useState } from 'react';
import { fetchData } from '../store/actions';
import { connect } from 'react-redux';
import ProjectsListed from './ProjectsListed';
const Box = (props) => {
    console.log('Box props: ', props);
    useEffect(() => {
        props.fetchData();
    }, []);
    return (
        <section>
            <h1>MoreStuff to come</h1>
            {!props.dataArray && <h1>Loading Please Wait...</h1>}
            {props.dataArray && console.log(props.dataArray.projects)}
            {props.dataArray && (
                <div>
                    <h2>Total Count: {props.dataArray.projects.totalCount} </h2>
                    <ProjectsListed
                        allProjects={props.dataArray.projects.projects}
                    />
                </div>
            )}
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        dataArray: state.dataArray,
    };
};
export default connect(mapStateToProps, { fetchData })(Box);
