import FilteredImage from "./FilteredImage"

interface IProps {
    styles: { readonly [key: string]: string },
    images: { url: string, title: string }[]
}

function Dashboard( {styles, images }: IProps){

    //using index as a key also it's not recommended. In this case it will be OK.
    return (

        <div className={styles.grid}>


            { images.length>0?

                images.map((image, index) => {
                    return (
                        <FilteredImage key={index} image={image} index={index} styles={styles} />
                    )
                })
                :
                <span> No Data to show... </span>
            }
        </div>
    )

}

export default Dashboard

