import React from 'react';
import '../../App.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../Gallery.css';

//gallery tab to show all data

export default function Gallery() {
    const images = require.context('../localData/images/', true);
    const imageList = images.keys().map(image => images(image));
    return (
        <>
            <div class="main">
                <div class="content">
                    <h1>PHOTOSHOP GALLERY</h1>
                    <br />
                    <p>Here is a repository of images and infographics I have made via photoshop</p>
                    <p>content is primarily personal artwork or cheatsheets for an online MMORPG called "Lost Ark"</p>
                </div>
            </div>
            <br />
            <div class="gallery">
                <ImageList variant="masonry" cols={4} gap={10}>
                    {imageList.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                alt={index}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    );
}
