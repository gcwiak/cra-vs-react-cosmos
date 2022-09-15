import React, { useState, useEffect } from 'react';

export function DataFetchingComponent() {

    const [value, setValue] = useState<String>("");

    useEffect(() => {
        fetch('/api/sample')
            .then(response => response.json())
            .then(data => setValue(data.value));
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">Sample GET Request</h5>
            <div className="card-body">
                Value read from API: {value}
            </div>
        </div>
    );
}