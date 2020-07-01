import React, {useState} from "react"
import RellaxWrapper from "react-rellax-wrapper"
import { Cell } from "styled-css-grid"
import { ColorExtractor } from 'react-color-extractor'
import useHover from "../hooks/useHover"
import { LazyLoadImage } from 'react-lazy-load-image-component'

function MovieItem({item, speedVal}) {

    const [hovered, ref] = useHover()
    const [color, setColor] = useState("")
    const url = `https://image.tmdb.org/t/p/w500/${item.poster_path}`

    function styles() {
        if(hovered) {
            return {
                divStyle : {
                    position: "relative",
                    display: "inline-block",
                    backgroundColor: color
                },
                imgStyle: {
                    display: "block",
                    width: "100%",
                    height: "auto",
                    opacity: 0.3
                }
            }
        } else {
            return {
                divStyle : {
                    position: "relative",
                    display: "inline-block",
                    background: color
                },
                imgStyle: {
                    display: "block",
                    width: "100%",
                    height: "auto"
                }
            }
        }
    }

    return (
        <Cell>        
            <RellaxWrapper speed={speedVal}>
                <div style={styles().divStyle}>
                    <ColorExtractor getColors={colors => setColor(colors[0])}>
                        <img 
                            src={url}
                            style={styles().imgStyle}
                            ref={ref}  
                        />
                    </ColorExtractor>
                </div>
            </RellaxWrapper>
        </Cell>
    )
}

export default MovieItem