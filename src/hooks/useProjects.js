import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projectsLoading,setProjectsLoading]=useState(true);
    const [projects,setProjects]=useState([]);

    useEffect(()=>{
        fetch("https://samiul-it.github.io/projects-json/projects.json")
          .then((res) => res.json())
          .then((data) => {
            setProjectsLoading(false);
            setProjects(data);
          });
    },[]);

    return [projects,projectsLoading];
    
};

export default useProjects;
