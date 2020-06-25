import React, { useState, useContext, useEffect } from "react"
import MovieItem from "../components/MovieItem"
import images from "../sampleImages"
import { Grid, Cell } from "styled-css-grid"


function Movies() {
    const [movieList, setMovieList] = useState([])
    // const [movieData, setMovieData] = useState([])
    //const [isLoaded, setIsLoaded] = useState(false)
    const [title, setTitle] = useState('')
    //const url ="https://api.themoviedb.org/3/search/movie?api_key=95ae7f5873f8ed7d551d67d546cbfbf0&query=Jack+Reacher"

    // useEffect( ()=> {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then ((data) => {
    //             setMovieData(data)
    //             setIsLoaded(true)
    //         })
    // }, [])

    // const movieItemElements = movieList.map(item => (
    //     <MovieItem key={item.id} item={item} />
    // ))

    const movieItemElements = images.map(item => (
        <MovieItem key={item.id} item={item} speedVal={randomSpeed()} zIndex={randomZIndex()} />
    ))

    function randomSpeed() {
        const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        const speedValue = Math.floor(Math.random() * 5)
        return plusOrMinus * speedValue
    }

    function randomZIndex() {
        return Math.floor(Math.random() * 11)
    }

    console.log(movieItemElements)

    function setMovies(newMovie) {
        setMovieList([...movieList, newMovie])
    }

    function handleChange(event) {
        setTitle(event.target.value)
    }

    function searchMovie() {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=95ae7f5873f8ed7d551d67d546cbfbf0&query=" + title)
            .then(res => res.json())
            .then((data) => {
                if (data.results.length > 0)
                    setMovies(data)
            })
    }

    // if(!isLoaded) {
    //     return <h1>Loading...</h1>
    // } else
    return (
        <Grid  columns={4}>
           {movieItemElements}
            
        {/* 
        <Grid
            columns={"100px 1fr 100px"}
            rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
            <Cell width={3}>
                <h1>Movies</h1>
            </Cell>

            <Cell>
                <input 
                    placeholder="search for a movie" 
                    name="title" 
                    value={title} 
                    onChange={handleChange}
                />
                <button onClick={searchMovie}>Add Movie</button>
            </Cell>
            <Cell>
                <div className="container">
                    <div className="gallery">
                        {movieItemElements}
                    </div>
                </div>
            </Cell>
            <Cell>...</Cell>

            <Cell width={3}>
                Footer {/*<img className="img-responsive" src={"https://image.tmdb.org/t/p/w500/"+movieData.results[0].poster_path}/>
            </Cell>
        </Grid>
            
    */}

        </Grid>


    )
}

export default Movies