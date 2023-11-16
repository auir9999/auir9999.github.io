import React from "react";
import './Home.css';

export default function HomeBody() {
    return (
        <>
            <h1>Home Page</h1>
            <br />
            <h3>SYNOPSIS</h3>
            <p>
                My name is Ryan Wang, I am a Computer Science Major and this website serves as a central hub for the latest information
                about my skills and projects developed. Currently I am looking for opportunities to apply what I have learned
                and further develop my expertise in various aspects of programming.
            </p>
            <br />
            <h3>TABLE OF CONTENTS</h3>
            <p>
                This webpage was developed using the REACT framework and has been divided into 3 main sections:
                <br />
                &#x2022; HOME PAGE: synopsis on myself, contact information, website breakdown, changelog.
                <br />
                &#x2022; RESUME: education, work experience, general skills, technical skills
                <br />
                &#x2022; PROJECTS: projects completed / in progress, details on projects, link to deployment or repository
            </p>
            <br />
        </>
    )
}