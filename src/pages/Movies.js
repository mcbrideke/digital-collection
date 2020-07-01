import React, { useContext } from "react"
import { MovieContext } from "../contexts/MovieContext"

//import images from "../sampleImages"
import { Grid, Cell } from "styled-css-grid"

function Movies() {
   const {title, handleChange, searchMovie, movieItemElements} = useContext(MovieContext)
    return (
        <Grid
            columns={"100px 1fr 100px"}
            rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
            <Cell width={3}>
                <input
                    placeholder="search for a movie"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <button onClick={searchMovie}>Add Movie</button>
            </Cell>
            <Cell>Menu</Cell>
            <Cell>
                <Grid  columns="repeat(auto-fit,minmax(200px,1fr))">
                    {movieItemElements}
                </Grid>
            </Cell>
            <Cell>Ads</Cell>
            <Cell width={3}>
                Footer
            </Cell>
        </Grid>
    )
}

export default Movies