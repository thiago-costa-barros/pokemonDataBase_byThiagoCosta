import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const MenuNav = () => {

    return (
        <>
            <Navbar bg="dark" variant="light" expand="lg">
                <Container>
                    <Link to="/">
                        <img src='https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-4-1.png' alt='PokemonLogo' height={70} />
                    </Link>
                    <Nav style={{ justifyContent: 'flex-end' }}>
                        <Link to="/"
                            style={{ textDecoration: 'none', color: '#f5f5f9', fontWeight: 'bold', marginLeft: '12px' }}>
                            Home
                        </Link>
                        <Link to="/pokedex"
                            style={{ textDecoration: 'none', color: '#f5f5f9', fontWeight: 'bold', marginLeft: '12px' }}>
                            Complete Pokedex
                        </Link >
                        <a href="https://pokeapi.co/docs/v2" target="_blank"
                            style={{ textDecoration: 'none', color: '#f5f5f9', fontWeight: 'bold', marginLeft: '12px' }}>
                            API Documentation
                        </a >
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}