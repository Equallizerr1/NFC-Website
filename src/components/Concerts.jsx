import Container from 'react-bootstrap/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from 'react';
import { getMedia } from '../../utils/api';

export const Concerts = ({ props }) => {
    return (
        <>
            <Container>
                <h1>Concerts</h1>
            </Container>
            <Box sx={{ overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={5} gap={8}>
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
