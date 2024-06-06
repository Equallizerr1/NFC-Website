import Container from 'react-bootstrap/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const MeetTheArtist = ({ props }) => {
    console.log(props)
    return (
        <>
            <Container>
                <h1>Meet The Artist</h1>
            </Container>
            <Box sx={{ overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {props.map((item) => (
                        <>
                            <ImageListItem key={item.id}>
                                <img
                                    //srcSet={`${item.media_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={item.media_url}
                                    alt={item.caption}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </>
                    ))}
                </ImageList>
            </Box>
        </>
    )
};