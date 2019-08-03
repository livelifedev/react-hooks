//example of function based component using hooks
import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);

    const fetchResource =  async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
    }

    useEffect(() => {
    //the api request function has to be defined outside of useEffect
        fetchResource(resource)

    //or if defined within must be immediately invoked:
        // (async resource => {
        //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        //     setResources(response.data);
        // })(resource);

    }, [resource])

    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
}

export default ResourceList;