import { useState } from "react"
import Image from "next/image"

interface IProps {
    image: {url: string, title: string},
    index: number,
    styles:{ readonly [key: string]: string }
}

const FilteredImage = ( {image , index, styles}: IProps) => {

    const [ isError, setIsError ] = useState(false)


    return (
        //if the img is broken (checked by onError prop), set the isError to true
        //if isError = true, display none of img
        <div style={{ "display": isError ? "none" : "block" , "width": "200px"}}>

        <div>
                <span className={styles.index}> { index + 1} </span>
                <Image
                    loader={()=> image.url}
                    onError= {()=> setIsError(true)}
                    src={image.url}
                    alt={image.title}
                    width={200}
                    height={200}

                />
            </div>

        <div className={ styles.subtitle }> { image.title } </div>

        </div>
    )    
}

export default FilteredImage