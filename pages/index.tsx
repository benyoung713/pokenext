import type { NextPage, GetServerSideProps } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { PokemonOption } from '../models/PokemonOption';
import { Pokemon } from '../models/Pokemon';
import PokemonDropdown from '../components/PokemonDropdown/PokemonDropdown';
import PokemonCard from '../components/PokemonCard/PokemonCard';

type Props = {
  initialOptions: PokemonOption[];
}

const Home: NextPage<Props> = ({ initialOptions }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined);
  const [optionsList, setOptionsList] = useState<PokemonOption[]>(initialOptions);
  const [menuOffset, setOffset] = useState<number>(40);

  const getPokemonInfo = async (name: string): Promise<void> => {
    try {
      const result = await fetch(`/api/pokemon/${name}`);
      const chosenPokemon: Pokemon = await result.json();
      setSelectedPokemon(chosenPokemon);
    } catch (err) {
      console.error(err);
    }
  }

  const getMoreOptions = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/pokemon?offset=${menuOffset}`);
      const moreOptions = await response.json();
      setOptionsList([...optionsList, ...moreOptions]);
      setOffset(menuOffset + 20);
    } catch (err) {
      console.error(err);
    }
  }

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
                  <PokemonDropdown
                    options={optionsList}
                    select={getPokemonInfo}
                    loadMore={getMoreOptions}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
              <div className="bg-purple-400 max-w-sm rounded overflow-hidden shadow-lg">
                {selectedPokemon ?
                  <PokemonCard selectedPokemon={selectedPokemon} />
                  :
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Please choose a Pokemon</div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/pokeball.jpg" alt="Pokemon logo" width={72} height={72} />
        </span>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(process.env.BASE_URL + 'api/pokemon/');
  const initialOptions: PokemonOption[] = await response.json();
  return {
    props: {
      initialOptions
    },
  }
}

export default Home
