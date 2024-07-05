// https://mui.com/material-ui/react-paper/ - try paper component behind images to give drop shadow
import "../App.css";
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import { useState } from "react";

export const Concerts = ({ props }) => {
    const [open, setOpen] = useState(false);
    const [clickedImage, setClickedImage] = useState(null)

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (e) => {
        setClickedImage(e)
        setOpen(true);
    };
    return (
        <>
            <Container>
                <h1>Concerts</h1>
            </Container>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div class="concert-image">
                    <img src={clickedImage} alt="" style={{ borderRadius: 5, maxHeight: "95%", maxWidth: "95%" }} />
                </div>
            </Backdrop>
            <ImageList cols={3} gap={5} sx={{ paddingLeft: 5, paddingRight: 5 }}>
                {props.map((item) => (
                    <div class="concert-image">
                        <ImageListItem key={item.id}
                            sx={{
                                fill: (theme) => theme.palette.common.white,
                                stroke: (theme) => theme.palette.divider,
                                strokeWidth: 1,
                            }}>
                            <img
                                srcSet={item.link}
                                src={item.link}
                                //alt={item.caption}
                                loading="lazy"
                                style={{ borderRadius: 5 }}
                                onClick={(e) => { handleOpen(e.target.currentSrc) }}
                            />
                        </ImageListItem>
                    </div>
                ))}
            </ImageList>
        </>
    )
};
