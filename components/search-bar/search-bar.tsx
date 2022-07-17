import { useMemo, useState } from 'react';
import { MdSearch as Search, MdClear as Clear } from 'react-icons/md';
import { API_ROUTE_SCORECARD_MINIMUM_SEARCH_LIMIT, debounce } from '../../core';
import styles from './search-bar.module.css';

const PLACEHOLDER = 'Enter a college name';
const DEBOUNCE_PERIOD = 300;

type Props = {
  onInputChange: (value: string) => void;
};

const SearchBar = ({ onInputChange }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedOnChange = useMemo(
    () =>
      debounce((value) => {
        // Only initiate a search if the user has entered a sufficient number of
        // characters
        if (
          typeof value === 'string' &&
          value.length < API_ROUTE_SCORECARD_MINIMUM_SEARCH_LIMIT
        ) {
          return;
        }
        onInputChange(value);
      }, DEBOUNCE_PERIOD),
    [onInputChange],
  );

  const clearSearchTerm = () => {
    setSearchTerm('');
    onInputChange('');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => {
          const value = e?.target?.value;
          setSearchTerm(value);
          debouncedOnChange(value);
        }}
        placeholder={PLACEHOLDER}
        value={searchTerm}
        className={styles.input}
      />
      {searchTerm.length ? (
        <button className={styles.button}>
          <Clear className={styles.clearIcon} onClick={clearSearchTerm} />
        </button>
      ) : (
        <Search className={styles.icon} />
      )}
    </div>
  );
};

export default SearchBar;
