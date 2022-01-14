import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PokemonOption } from '../models/PokemonOption';
import PokemonDropdown from '../components/PokemonDropdown/PokemonDropdown';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="bg-gray-200 ">
          <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="max-w-lg">
                <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">
                  Welcome to the Pokemon Next app
                </h1>
                <p className="mt-4 text-gray-300 text-gray-600">
                  Select a Pokemon from the dropdown below to see some details about them
                </p>
                <div className="mt-6">
                  <PokemonDropdown options={[{name: "Pokemon", url: "http://"}]} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
              <img className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo" />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('http://localhost:3000/api/pokemon/');
  const initialOptions: PokemonOption[] = await response.json();
  return {
    props: {
      initialOptions
    },
  }
}

export default Home
