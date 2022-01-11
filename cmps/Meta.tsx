import Head from "next/head"

const Meta = ({title, description}: any) => {
    
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/with.ico" />
        </Head>
    )
}

Meta.defaultProps={
    title: 'Load Images App',
    description: 'This site is an exerecise from with'
}

export default Meta