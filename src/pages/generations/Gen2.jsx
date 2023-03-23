import React from "react";
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { ListPokemon } from "../../components/ListPokemon"
import { useFetchGen2 } from "../../hooks/useFetch";
export const Gen2 = () => {
    const { gen2 } = useFetchGen2()
    

    return (
        <Container style={{ margin: '48px auto' }}>
            <Table responsive striped="columns" bordered hover variant="dark"
                style={{
                    maxWidth: '1140px',
                    width: '100%',
                    margin: 'auto'
                }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Abilities</th>
                        <th>Stats</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {gen2?.map((pokemon, key) => (
                        <ListPokemon key={key}
                            image={pokemon.data.sprites.front_default}
                            id={pokemon.data.id}
                            name={pokemon.data.name}
                            types={pokemon.data.types}
                            stats={pokemon.data.stats}
                            hpStats={pokemon.data.stats[0].base_stat}
                            attackStats={pokemon.data.stats[1].base_stat}
                            defenseStats={pokemon.data.stats[2].base_stat}
                            spaStats={pokemon.data.stats[3].base_stat}
                            spdStats={pokemon.data.stats[4].base_stat}
                            speedStats={pokemon.data.stats[5].base_stat}
                            abilities={pokemon.data.abilities}
                            height={pokemon.data.height}
                            weight={pokemon.data.weight}
                        />
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}