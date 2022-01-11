import { GetServerSideProps } from "next";
import { useState } from 'react'
import type { NextPage } from 'next'
import Meta from '../cmps/Meta'
import Dashboard from '../cmps/Dashboard'
import styles from '../styles/Home.module.css'
import { local_server } from '../config'

interface Images{
    images: {
            url: string,
            title:string
          }[]
  }

const Home: NextPage<Images> = ({images}) => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className={styles.container}>
      <Meta />
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.title}>
            Coing
          </span>

          <button onClick={() => setIsClicked(true)} className={styles.description}>
            load images
          </button>

        </div>

        {
          isClicked ?
            <Dashboard styles={styles} images={images} />
            :
            <span>Click on load images to show the dashboard</span>
        }


      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () =>  {
  
  let images = [] ;
  try{
    const response = await fetch(`${local_server}/api/images`)
    images = await response.json();    
  }
  catch(err){
    console.log(err);
  }

  return {
      props: { images },
  };
};