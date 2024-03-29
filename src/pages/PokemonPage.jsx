import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useFetchById, useFetchNext, useFetchPrevious } from "../hooks/useFetch";

export const PokemonPage = () => {
    var { id } = useParams()
    var newId = parseInt(id)
    const { pokemon } = useFetchById()
    const { previous } = useFetchPrevious()
    const { next } = useFetchNext()

    const imgPkmUrl = `https://img.pokemondb.net/artwork/avif/${pokemon?.data.name}.avif`;

    let types = [];
    for (let i in pokemon?.data.types) {
        types.push(pokemon?.data.types[i].type.name)
    }

    const allStats = () => {
        var somaStats = 0
        for (var i = 0; i <= 5; i++) {
            somaStats = (pokemon?.data.stats[i].base_stat) + somaStats
        }
        return somaStats;
    }

    //Evento Hover nos links Previous e Next
    function MouseOver(event) {
        event.target.style.opacity = '0.70';
      }
      function MouseOut(event){
        event.target.style.opacity="";
      }

    return (
        <>
            <Container
                style={{
                    maxWidth: '1140px',
                    width: '100%',
                    margin: 'auto',
                    backgroundColor: '#fff',
                    color: '#696969'
                }}>
                <Container style={{}}>
                    <Container style={{
                        marginTop:'3em',
                        alignItems: 'center',
                        display: 'flex',
                    }}>
                        <Container className="pokemon--info--name"
                            style={{ textAlign: 'left', textTransform: 'capitalize' }}>
                            <a  onMouseOver={MouseOver} onMouseOut={MouseOut}
                                style={{ color: '#2769be', textDecoration: 'inherit' }}
                                href={`/pokemon/${newId - 1}`}>
                                <h3>« #{previous?.data.id}-{previous?.data.name}</h3>
                            </a>
                        </Container>
                        <Container className="pokemon--info--name"
                            style={{ textAlign: 'center', textTransform: 'capitalize' }}>
                            <h1 style={{ color: '#050509' }}>{pokemon?.data.name}</h1>
                        </Container>
                        <Container className="pokemon--info--name"
                            style={{ textAlign: 'right', textTransform: 'capitalize' }}>
                            <a  onMouseOver={MouseOver} onMouseOut={MouseOut}
                                style={{ color: '#2769be', textDecoration: 'inherit' }}
                                href={`/pokemon/${newId + 1}`}>

                                <h3>#{next?.data.id}-{next?.data.name} »</h3>
                            </a>
                        </Container>
                    </Container>
                    <Container style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <Container
                            style={{ magin: 'auto' }}>
                            <img height={330} src={imgPkmUrl} alt="Pokemon" />
                        </Container>
                        <Container >
                            <h4 style={{ color: '#050509' }}>Pokedex Data</h4>
                            <Table>
                                <tbody style={{ textTransform: 'capitalize' }}>
                                    <tr>
                                        <td style={{ color: '#737373', fontSize: ".875rem", textAlign: 'right' }} >National nº</td>
                                        <td style={{ fontWeight: 'bold' }}>#{pokemon?.data.id}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#737373', fontSize: ".875rem", textAlign: 'right' }}>Type</td>
                                        <td> {types.join(" | ")}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#737373', fontSize: ".875rem", textAlign: 'right' }}>Stats</td>
                                        <td style={{ fontWeight: 'bold' }}>{allStats()}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#737373', fontSize: ".875rem", textAlign: 'right' }}>Height</td>
                                        <td style={{ textTransform: 'lowercase', fontStyle: 'italic' }}>{(pokemon?.data.height * 0.1).toFixed(2)} m</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#737373', fontSize: ".875rem", textAlign: 'right' }}>Weight</td>
                                        <td style={{ textTransform: 'lowercase', fontStyle: 'italic' }}>{(pokemon?.data.weight * 0.1).toFixed(2)} kg</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#737373', fontSize: ".875rem", textAlign: 'right' }}>Abilities</td>
                                        <td><Container>{"1. " + pokemon?.data.abilities[0].ability.name.replace("-", " ")}</Container>
                                            <Container>{("2. " + pokemon?.data.abilities[1]?.ability.name.replace("-", " ")).replace("2. undefined", "")}</Container>
                                            <Container>{("(Hidden) - " + pokemon?.data.abilities[2]?.ability.name.replace("-", " ")).replace("(Hidden) - undefined", "")}</Container></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                        <Container>
                            <Container>
                                <h4 style={{ color: '#050509' }}>Combat Sprites</h4>
                            </Container>
                            <Container
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Container>
                                    <h6 style={{ color: '#737373', fontSize: ".875rem", textAlign: 'left' }}>Normal</h6>
                                    <img
                                        height={96}
                                        src={pokemon?.data.sprites.front_default}
                                        alt="Front Sprite" />
                                    <img
                                        height={96}
                                        src={pokemon?.data.sprites.back_default}
                                        alt="Back Sprite" />
                                </Container>
                                <Container>
                                    <h6 style={{ color: '#737373', fontSize: ".875rem", textAlign: 'left' }}>Shiny</h6>
                                    <img
                                        height={96}
                                        src={pokemon?.data.sprites.front_shiny}
                                        alt="Front Sprite" />
                                    <img
                                        height={96}
                                        src={pokemon?.data.sprites.back_shiny}
                                        alt="Back Sprite" />
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                </Container>
            </Container>
        </>
    )
}