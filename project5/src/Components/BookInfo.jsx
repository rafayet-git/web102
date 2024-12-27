import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookInfo = ({ revision, title, created, bookKey }) => {
    const [formattedDate, setFormattedDate] = useState("");
    const [formattedKey, setFormattedKey] = useState("");
    useEffect(() => {
        const date = new Date(created);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setFormattedDate(date.toLocaleDateString(undefined, options));
        setFormattedKey(bookKey.split("/")[2]);       
    }, [created]);
    return (
        <div>
          <li className="main-list" key={title}>
          <Link style={{ color: "White" }} 
            to={`/bookDetails/${formattedKey}`} key={formattedKey}>
                {title} <span className="tab"></span> {formattedDate} <span className="tab"></span>  rev.{revision}
            </Link>
        </li>
        </div>
    )

};
export default BookInfo;
