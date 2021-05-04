import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function Footer() {
    return (
        <Container className="stickyFooter" maxWidth="false">
            <Typography variant="body1" color="inherit">
            © First React Project
            </Typography>
        </Container>
    )
}