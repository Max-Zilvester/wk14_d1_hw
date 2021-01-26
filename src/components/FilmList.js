import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return(
            <Film name={film.name} key={film.id}></Film>
        )
    } )
    return(
        <>
        <h3>Upcoming Film Releases</h3>
        {filmArray}
        </>
    )
}

export default FilmList;