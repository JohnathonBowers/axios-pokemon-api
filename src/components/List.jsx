import React, { useState, useEffect } from 'react';
import axios from 'axios';

// I referred to Instructor Calhoun's Week Three Lesson Three React App code on the class GitHub for help with constructing the elements in this component.

const List = () => {
    
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    return (
        <div className="container col-sm-5 mt-4">
            <div className="d-flex flex-row justify-content-center">
                <ul>
                    {
                        pokemon.map( (item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default List