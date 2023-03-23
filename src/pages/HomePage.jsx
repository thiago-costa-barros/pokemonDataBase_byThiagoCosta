import React from "react";
import { Container } from "react-bootstrap";
import PokedexSwiper from "../components/PokedexSwiper";
export const HomePage = () => {
    return (
        <>

            <Container style={{ marginTop: "5em" }}>
                <h1>Select Pokemon Generation</h1>
                <Container style={{
                    backgroundColor:'#404040',
                    width:'50%',
                    color:'#f2f2f2'
                    }}>
                    Select the list of Pokemons from all 9 generations of Pokemon series.
                </Container>
            </Container>
            <Container
                style={{
                    marginTop: '3em',
                    height: '50vh',
                    width:'50%'
                }}>
                <PokedexSwiper />
            </Container>
        </>
    )
}