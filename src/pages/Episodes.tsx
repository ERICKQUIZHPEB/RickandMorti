import {fetchRickAndMorty, rickAndMortyEpisode} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCards from "../components/AntCards";
import styles from './character.module.css'

interface EpisodesData {
  results: Array<{
      id: number;
      name: string;
      episode:string;
  }>;
}

export const Episodes:React.FC = () => {
    const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisode, fetchRickAndMorty, {
          suspense: false,
});
  return(
      <>
        <h1>Episodes</h1>

        <div className={styles.container}>
                {data?.results.map((episode) => (
                    <AntCards  key={episode.id} name={episode.name}  episode={episode.episode}></AntCards>

                ))}
            </div>
      </>

  )
}
