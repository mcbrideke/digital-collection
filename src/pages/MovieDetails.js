import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ColorExtractor } from 'react-color-extractor'
import { Grid, Cell } from "styled-css-grid"
import { MovieContext } from "../contexts/MovieContext"

function MovieDetails() {
    const [movie, setMovie] = useState([])
    const { movieList } = useContext(MovieContext)
    const { movieId } = useParams()
    const [color, setColor] = useState("")

    useEffect(() => {
        if (movieList.find(item => item.id === parseInt(movieId, 10))) {
            setMovie(movieList.find(item => item.id === parseInt(movieId, 10)))
        }

    }, [movieList])
    let url = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null
    let title = movie.title ? movie.title : null
    return (
        <Grid columns={3}
         gap="0px" >
            <Cell width={1} style={{ backgroundColor: color, overflow: "hidden", minWidth: 0 }}>
                    <ColorExtractor getColors={colors => setColor(colors[0])}>
                        <img src={url} /> 
                    </ColorExtractor>
            </Cell>
            <Cell width={2} style={{ color: color, fontSize: "36px", fontFamily: "sans-serif" }}>
                <h1>{title}</h1>
            </Cell>

        </Grid>
    )
}

export default MovieDetails
