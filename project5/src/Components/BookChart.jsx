import React, { Component, useEffect, useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
} from "recharts";

const BookChart = ({ yearList }) => {

    const cleanData = (yearList) => {
        let yearMap = {};
        yearList.forEach(year => {
            if (yearMap[year]) {
                yearMap[year]++;
            } else {
                yearMap[year] = 1;
            }
        });
        let filteredData = [];

        for (const year in yearMap) {
            filteredData.push({
                 'year': year, 'books published': yearMap[year] 
                });
        }
        return filteredData;
    }

    return (
    <LineChart
        width={600}
        height={300}
        data={cleanData(yearList)}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
        <Line type="monotone" dataKey="books published" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year">
            <Label value="Year" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis>
            <Label value="Books Published" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
    </LineChart>
    );


};


export default BookChart;