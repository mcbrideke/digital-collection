import React from "react"
import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to="/movies">Movies</Link>
            <Link to="/books">Books</Link>
        </div>
    )
}

export default Home