import Container from 'react-bootstrap/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Concerts = ({ props }) => {
    //const sorted = [...props].toSorted((a, b) => a.name.replace(/\D/g, "") - b.name.replace(/\D/g, ""));
    return (
        <>
            <Container>
                <h1>Concerts</h1>
            </Container>
            <Box sx={{ overflowY: 'hidden', paddingLeft: 2 }}>
                <ImageList variant="quilted" cols={5} gap={5}>
                    {props.map((item) => (
                        <>
                            <ImageListItem key={item.id}>
                                <img
                                    srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={item.link}
                                    //alt={item.caption}
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
