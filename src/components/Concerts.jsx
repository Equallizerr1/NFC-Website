// https://mui.com/material-ui/react-paper/ - try paper component behind images to give drop shadow
import "../App.css";
import Container from 'react-bootstrap/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grow, Fade } from '@mui/material';

export const Concerts = ({ props }) => {
    const [loaded, setLoaded] = useState([false]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoaded(true);
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <Container>
                <h1>Concerts</h1>
            </Container>
            <Box sx={{ overflowY: 'hidden', padding: 2 }}>
                <ImageList variant="quilted" cols={4} gap={5}>
                    {props.map((item) => (
                        <>
                            {/* <Fade in={loaded}> */}
                            <Grow
                                in={loaded}
                                style={{ transformOrigin: "1 1 1" }}
                                {...(loaded ? { timeout: 4000 } : {})}
                            >
                                <ImageListItem key={item.id}
                                    sx={{
                                        fill: (theme) => theme.palette.common.white,
                                        stroke: (theme) => theme.palette.divider,
                                        strokeWidth: 1,
                                    }}>
                                    <img
                                        srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={item.link}
                                        //alt={item.caption}
                                        loading="eager"
                                        style={{ borderRadius: 5 }}
                                    />
                                </ImageListItem>
                            </Grow>
                            {/* </Fade> */}
                        </>
                    ))}
                </ImageList>
            </Box>
        </>
    )
};
