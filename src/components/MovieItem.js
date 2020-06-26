import React, {useState, useEffect} from "react"
import RellaxWrapper from "react-rellax-wrapper"
import {Cell} from "styled-css-grid"

function MovieItem({item, speedVal, zIndex}) {
    const [hovered, setHovered] = useState(false)
    const url = `https://image.tmdb.org/t/p/w500/${item.results[0].poster_path}`
    function styles() {
        if(hovered) {
            return {
                display: "block",
                width: "90%",
                height: "auto",
                opacity: 0.5
            }
        } else {
            return {
                display: "block",
                width: "90%",
                height: "auto"
            }
        }
    }

    return (
        <Cell>        
            <RellaxWrapper speed={speedVal}>
                <img 
                    src={url}
                    style={styles()}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}  
                />
            </RellaxWrapper>
        </Cell>
    )
}

export default MovieItem