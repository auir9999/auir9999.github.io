import React from "react";
import './Home.css';
import Button from '@mui/material/Button';
import profile from './localData/profile.jpg';

export default function HomeProfile() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <>
            <img src={profile} alt="profile" class="img-resize" />
            <h3>CONTACT INFORMATION</h3>
            <p>Phone: (647)-546-8998</p>
            <p>Email: ryanitsuwang@hotmail.com</p>
            <Button
                size="small"
                onClick={() => openInNewTab("https://www.linkedin.com/in/ryan-itsu-wang/")}
                variant="contained"
                style={{
                    backgroundColor: "#858196",
                }}
            >
                LinkedIn Profile
            </Button>
        </>
    )
}