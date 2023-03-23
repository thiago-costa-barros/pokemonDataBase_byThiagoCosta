import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";




export const ListPokemon = ({ image, id, name, types, abilities, stats, hpStats, attackStats, defenseStats, spaStats, spdStats, speedStats, height, weight }) => {

    const allStats = () => {
        var somaStats = 0
        for (var i = 0; i <= 5; i++) {
            somaStats = stats[i].base_stat + somaStats
        }
        return somaStats;
    }
    return (
        <>
            <tr
                style={{ height: '56px', verticalAlign: 'middle' }}>
                <td //#
                    width={128}>
                    <Container
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img height={64} src={image} alt="Pokemon" />
                        {id}
                    </Container></td>
                <td //Name
                    maxWidth={144}
                    style={{ textTransform: 'capitalize', verticalAlign: 'middle' }}>
                    <Link to={`/pokemon/${id}/`}
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            color: '#f9f9f9',
                        }}>
                        {name.replace("-f", " ♀").replace("-m", " ♂")}
                    </Link>
                </td>
                <td //Type
                    style={{ textTransform: 'capitalize' }}>
                    <Container
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container>{types[0].type.name}</Container>
                        <Container>{types[1]?.type.name}</Container>
                    </Container>
                </td>
                <td //Abilities
                    style={{ textTransform: 'capitalize' }}>
                    <Container
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container>{"1. " + abilities[0].ability.name.replace("-", " ")}</Container>
                        <Container>{("2. " + abilities[1]?.ability.name.replace("-", " ")).replace("2. undefined", "")}</Container>
                        <Container>{("(Hidden) - " + abilities[2]?.ability.name.replace("-", " ")).replace("(Hidden) - undefined", "")}</Container>
                    </Container>
                </td>
                <td //Stats
                    maxWidth={128}>
                    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {allStats()}
                        <NavDropdown>
                            <NavDropdown.Item>HP: <b>{hpStats}</b></NavDropdown.Item>
                            <NavDropdown.Item>Attack: <b>{attackStats}</b></NavDropdown.Item>
                            <NavDropdown.Item>Defense: <b>{defenseStats}</b></NavDropdown.Item>
                            <NavDropdown.Item>Sp.Atk: <b>{spaStats}</b></NavDropdown.Item>
                            <NavDropdown.Item>Sp.Def: <b>{spdStats}</b></NavDropdown.Item>
                            <NavDropdown.Item>Speed: <b>{speedStats}</b></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Total: <b>{allStats()}</b></NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </td>
                <td width={128} >{(height * 0.1).toFixed(2)} m</td>
                <td width={128} >{(weight * 0.1).toFixed(1)} kg</td>
            </tr>
        </>
    )
}