import { useState } from 'react';
import { ScorecardEntry } from '../../core';
import ResultsEntry from './results-entry';
import styles from './search-results.module.css';

type Props = {
  results: ScorecardEntry[];
  onItemClick: (id: string) => void;
};

const Instruction = () => (
  <div className={styles.instruction}>
    <p>Enter a college name to initiate your search.</p>
  </div>
);

const SearchResults = ({ results, onItemClick }: Props) => {
  const [active, setActive] = useState('');

  const handleResultClick = (id: string) => {
    setActive(id);
    onItemClick(id);
  };

  return (
    <div className={styles.container}>
      {results.length ? (
        results.map((entry, index) => (
          <ResultsEntry
            key={`search-result-${index}`}
            entry={entry}
            onClick={handleResultClick}
            isActive={active === entry.id}
          />
        ))
      ) : (
        <Instruction />
      )}
    </div>
  );
};

export default SearchResults;
