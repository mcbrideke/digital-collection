import React, {useState, useEffect} from "react"
import RellaxWrapper from "react-rellax-wrapper"
import {Cell} from "styled-css-grid"
    // <div className="image-stack">
    //     <div className="image-stack__item image-stack__item--top">
    //         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/portrait1.jpeg" alt="" />
    //     </div>
    //     <div className="image-stack__item image-stack__item--bottom">
    //         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg" alt="" />
    //     </div>
    // </div>
function MovieItem({item, speedVal, zIndex}) {
    const [hovered, setHovered] = useState(false)
    const z = hovered ? -1 : zIndex
    //const figureClass = `gallery__item gallery__item--${item.id}`
    return (
        <Cell style={{zIndex:z, position:"relative"}} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
            
            {/*<img className="img-responsive" src={"https://image.tmdb.org/t/p/w500/"+item.results[0].poster_path}/>*/}
           
            {/*<figure className={figureClass}>*/}
        
                <RellaxWrapper center={true} speed={speedVal}>
                    <img 
                    
                        src={item.url} 
                        classsName="image" 
                        
                    />
                </RellaxWrapper>
            
            {/*</figure>  */}
        </Cell>
    )
}

export default MovieItem