import React, { useEffect, useState } from "react";

const BookInfo = ({ revision, title, created }) => {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const date = new Date(created);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setFormattedDate(date.toLocaleDateString(undefined, options));
    }, [created]);
    return (
        <div>
          <li className="main-list" key={title}>
          {title} <span className="tab"></span> {formattedDate} <span className="tab"></span>  rev.{revision}
        </li>
        </div>
    )

};
export default BookInfo;
