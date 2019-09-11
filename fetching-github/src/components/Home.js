import React from 'react'

export default function Home() {
    return (
        <div>
            <h1> About</h1>
            <p>this a small webapp that will list the most starred Github repos that were created in the last 30 days. We'll be fetching the sorted JSON data directly from the Github API .</p>
            <h1>Technlogie used</h1>
            <p>-I used Reactjs as a front framework .</p>
            <p>-For data fetching I used axiox library that provide a promise based HTTP client for the browser .</p>
            <p>-simple desine using semantic ui React . </p>
            <h1>Visulisation the data </h1>
            <p>You can see the  github project by clicking on projects link in the navbar  </p>
        </div>
    )
}