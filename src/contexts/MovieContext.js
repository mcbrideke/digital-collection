import React, {useState, useEffect} from "react"
import MovieItem from "../components/MovieItem"
import {Link} from "react-router-dom"

const MovieContext = React.createContext()

function MovieProvider({children}) {
    const [movieList, setMovieList] = useState([])
    const [title, setTitle] = useState('')

    const movieItemElements = movieList.map(item => (
        <Link to={`/movies/${item.id}`}>
            <MovieItem key={item.id} item={item} speedVal={randomSpeed()} />
        </Link>
    ))

    useEffect(() => {
        let keys = Object.keys(localStorage),
            i = keys.length,
            values = []
        while (i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])))
        }
        setMovieList(values)
    }, [])

    function randomSpeed() {
        const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        const speedValue = Math.floor(Math.random() * 2)
        return plusOrMinus * speedValue
    }

    function setMovies(newMovie) {
        if (newMovie.results[0].poster_path !== null) {
            setMovieList([...movieList, newMovie.results[0]])
            localStorage.setItem(newMovie.results[0].id, JSON.stringify(newMovie.results[0]))
        }
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

    function findMovieById(movieId) {
        console.log(movieId)
        console.log(movieList)
        const thisMovie = movieList.find(movie => movie.id === movieId)
        console.log(thisMovie)
        return (thisMovie)
    }
    
    return (
        <MovieContext.Provider value={{
            movieItemElements,
            handleChange,
            title,
            searchMovie,
            movieList
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export {MovieProvider, MovieContext}