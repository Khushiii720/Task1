import React, { useEffect, useState } from 'react';

 

const API_URL = "https://admin.losttraveller.in/api/v1/destinations";

 

const App = () => {

    const [eighthSlug, setEighthSlug] = useState(""); // State variable to hold the 8th index slug data

    const [error, setError] = useState(null); // State variable to hold any errors

 

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch(API_URL);

                const responseData = await response.json();

                console.log("Fetched Data:", responseData); // Log fetched data to console

                const data = responseData.data; // Extracting data from the response

                if (data && data.length >= 8) {

                    const eighthItem = data[7]; // Indexing starts from 0, so 8th index is at position 7

                    console.log("Eighth Item:", eighthItem); // Debugging statement

                    setEighthSlug(eighthItem.slug); // Update state with the 8th index slug data

                } else {

                    setError("Data does not have at least 8 items.");

                }

            } catch (error) {

                console.error("Error fetching data:", error);

                setError("Error fetching data. Please check your network connection.");

            }

        };

 

        fetchData();

    }, []);

 

    return (

        <div>

            {error ? (

                <div>

                    <strong>Error:</strong> {error}

                </div>

            ) : (

                <div>

                    <strong>8th Index Slug Data:</strong> {eighthSlug}

                </div>

            )}

        </div>

    );

};

 

export default App;
























