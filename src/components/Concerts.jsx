import Container from 'react-bootstrap/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from 'react';
import { getMedia } from '../../utils/api';

export const Concerts = () => {
    const [flattened, setFlattened] = useState([])
    const nested = []
    const word = "https://scontent-man2-1.cdninstagram.com/o1/"
    useEffect(() => {
        getMedia().then(({ data }) => {
            data.forEach((item) => {
                nested.push(item.children.data)
                setFlattened(nested.flat())
            })
        })
    }, [])

    return (
        <>
            <Container>
                <h1>Concerts</h1>
            </Container>
            <Box sx={{ overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={5} gap={8}>
                    {flattened.map((item) => (
                        <>
                            {item.media_url.includes(word) ? null : <ImageListItem key={item.id}>
                                <img
                                    //srcSet={`${item.media_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={item.media_url}
                                    alt={item.caption}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            }
                        </>
                    ))}
                </ImageList>
            </Box>
        </>
    )
};
