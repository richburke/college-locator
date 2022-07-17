import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { MdSchool as MortarBoard } from 'react-icons/md';
import { fetchScorecardData, ScorecardEntry } from '../core';
import SearchBar from '../components/search-bar';
import SearchResults from '../components/search-results';
import Map from '../components/map';
import styles from '../styles/Home.module.css';

const TITLE = 'College Locator';

const Home: NextPage = () => {
  const [searchResults, setSearchResults] = useState<
    Record<string, ScorecardEntry>
  >({});
  const [activeItem, setActiveItem] = useState<ScorecardEntry | null>(null);

  const handleInputChange = async (search: string) => {
    const searchResults = await fetchScorecardData(search);
    setSearchResults(searchResults);
    setActiveItem(null);
  };

  const handleResultClick = (id: string) => {
    setActiveItem(searchResults[id]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content="Search and find colleges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <MortarBoard />
          {TITLE}
          <MortarBoard />
        </h1>
        <SearchBar onInputChange={handleInputChange} />

        <section className={styles.content}>
          <div className={styles.results}>
            <SearchResults
              results={Object.values(searchResults)}
              onItemClick={handleResultClick}
            />
          </div>
          <div className={styles.sidebar}>
            <Map
              latitude={activeItem?.location?.latitude}
              longitude={activeItem?.location?.longitude}
              name={activeItem?.name}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
