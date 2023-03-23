import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function useFetch() {
    const [pokemons, setPokemons] = useState(null)
    const getAllPokemons = () => {
        var endpoints = []
        for (var i = 1; i <= 1010; i++) {
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

//Previous Pokemon

export function useFetchPrevious() {
    var { id } = useParams()
    var prevId = parseInt(id)
    const [previous, setPrevious] = useState()

    const getPokemonPrevious = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${(prevId-1)}`)
            .then((res) => setPrevious(res))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPokemonPrevious(`https://pokeapi.co/api/v2/pokemon/${(prevId-1)}`)
    }, [])
    return { previous }
}

// Next Pokemon

export function useFetchNext() {
    var { id } = useParams()
    var nextId = parseInt(id)
    const [next, setNext] = useState()

    const getPokemonNext = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nextId+1}`)
            .then((res) => setNext(res))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPokemonNext(`https://pokeapi.co/api/v2/pokemon/${(nextId+1)}`)
    }, [])
    return { next }
}

// Gen 1 pokedex
export function useFetchGen1() {
    const [gen1, setGen1] = useState(null)
    const getAllGen1 = () => {
        var endpoints = []
        for (var i = 1; i <= 151; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen1(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen1()
    }, [])

    return { gen1 }
}

// Gen 2 pokedex
export function useFetchGen2() {
    const [gen2, setGen2] = useState(null)
    const getAllGen2 = () => {
        var endpoints = []
        for (var i = 152; i <= 251; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen2(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen2()
    }, [])

    return { gen2 }
}

// Gen 3 pokedex
export function useFetchGen3() {
    const [gen3, setGen3] = useState(null)
    const getAllGen3 = () => {
        var endpoints = []
        for (var i = 252; i <= 386; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen3(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen3()
    }, [])

    return { gen3 }
}

// Gen 4 pokedex
export function useFetchGen4() {
    const [gen4, setGen4] = useState(null)
    const getAllGen4 = () => {
        var endpoints = []
        for (var i = 387; i <= 493; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen4(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen4()
    }, [])

    return { gen4 }
}

// Gen 5 pokedex
export function useFetchGen5() {
    const [gen5, setGen5] = useState(null)
    const getAllGen5 = () => {
        var endpoints = []
        for (var i = 494; i <= 649; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen5(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen5()
    }, [])

    return { gen5 }
}

// Gen 6 pokedex
export function useFetchGen6() {
    const [gen6, setGen6] = useState(null)
    const getAllGen6 = () => {
        var endpoints = []
        for (var i = 650; i <= 721; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen6(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen6()
    }, [])

    return { gen6 }
}


// Gen 7 pokedex
export function useFetchGen7() {
    const [gen7, setGen7] = useState(null)
    const getAllGen7 = () => {
        var endpoints = []
        for (var i = 722; i <= 809; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen7(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen7()
    }, [])

    return { gen7 }
}

// Gen 8 pokedex
export function useFetchGen8() {
    const [gen8, setGen8] = useState(null)
    const getAllGen8 = () => {
        var endpoints = []
        for (var i = 810; i <= 905; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen8(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen8()
    }, [])

    return { gen8 }
}

// Gen 9 pokedex
export function useFetchGen9() {
    const [gen9, setGen9] = useState(null)
    const getAllGen9 = () => {
        var endpoints = []
        for (var i = 906; i <= 1010; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios
            .all(endpoints.map((endpoint) =>
                axios
                    .get(endpoint)))
            .then((res) => setGen9(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllGen9()
    }, [])

    return { gen9 }
}