import React from 'react';

const Film = ({name, children}) => {
    return(
        <>
        <p><ul><li>{name}</li></ul></p>
        <h4>{children}</h4>
        
        </>
    )
}

export default Film;