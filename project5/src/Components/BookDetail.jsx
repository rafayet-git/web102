import React, { Component, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetail = () => {  
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);
    useEffect(() => {
        const getBookDetail = async () => {
            const details = await fetch(
                `https://openlibrary.org/works/${params.book}.json`
            );
            const detailsJson = await details.json();
            setFullDetails(detailsJson);
        };
        getBookDetail().catch(console.error);
    }, [params.book]);
    
    return (
        <>
            <Link style={{ color: "white" }} to="/">
             Back to Home
            </Link>
            <h1>Book Detail</h1>
            {fullDetails ? (
                <>
                {fullDetails.covers && fullDetails.covers.length > 0 && (
                    <img
                        src={`https://covers.openlibrary.org/b/id/${fullDetails.covers[0]}-L.jpg`}
                        alt={`${fullDetails.title} cover`}
                    />
                )}
                <h2>{fullDetails.title}</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Revision</th>
                            <td>{fullDetails.revision}</td>
                        </tr>
                        <tr>
                            <th>First Published</th>
                            <td>{fullDetails.created.value}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{fullDetails.description}</td>
                        </tr>
                        <tr>
                            <th>Characters</th>
                            <td>
                                {fullDetails.subject_people && fullDetails.subject_people.length > 0 && (
                                    <ul>
                                        {fullDetails.subject_people.map((character, index) => (
                                            <li key={index}>{character}</li>
                                        ))}
                                    </ul>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </>
            ) : (
                <></>
            )}
        </>

    );
};

export default BookDetail;