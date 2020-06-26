import React, { useState, useContext, useEffect } from "react"
import MovieItem from "../components/MovieItem"
import images from "../sampleImages"
import { Grid, Cell } from "styled-css-grid"


function Movies() {
    const [movieList, setMovieList] = useState([])
    const [title, setTitle] = useState('')

    const movieItemElements = movieList.map(item => (
        <MovieItem key={item.id} item={item} speedVal={randomSpeed()} />
    ))

    function randomSpeed() {
        const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        const speedValue = Math.floor(Math.random() * 5)
        return plusOrMinus * speedValue
    }

    function setMovies(newMovie) {
        if(newMovie.results[0].poster_path !== "") {
            localStorage.setItem(newMovie.id,newMovie)
            setMovieList([...movieList, newMovie.results[0]])
        }
    }

    function handleChange(event) {
        setTitle(event.target.value)
    }
    console.log(movieList)
    function searchMovie() {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=95ae7f5873f8ed7d551d67d546cbfbf0&query=" + title)
            .then(res => res.json())
            .then((data) => {
                if (data.results.length > 0)
                    setMovies(data)
            })
    }

    return (
        <Grid columns={6} rows="repeat(auto-fit,minmax(120px,1fr))">
           {movieItemElements}
           <Cell>
                <input 
                    placeholder="search for a movie" 
                    name="title" 
                    value={title} 
                    onChange={handleChange}
                />
                <button onClick={searchMovie}>Add Movie</button>
            </Cell>
            
        </Grid>


    )
}

export default Movies