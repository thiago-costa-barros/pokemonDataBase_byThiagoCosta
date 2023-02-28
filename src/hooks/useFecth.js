import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function useFetch() {
    const [pokemons, setPokemons] = useState(null)
    const getAllPokemons = () => {
        var endpoints = []
        for (var i = 1; i <= 151; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllPokemons()
    }, [])

    return { pokemons }
}

export function useFetchById() {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    const getPokemonById = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setPokemon(res))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPokemonById(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }, [])
    return { pokemon }
}