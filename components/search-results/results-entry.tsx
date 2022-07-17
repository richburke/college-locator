import cx from 'clsx';
import { ScorecardEntry } from '../../core';
import styles from './results-entry.module.css';

type Props = {
  entry: ScorecardEntry;
  onClick: (id: string) => void;
  isActive?: boolean;
};

const ResultsEntry = ({ entry, onClick, isActive = false }: Props) => {
  const { id, name, location } = entry;
  const { city, state } = location;
  return (
    <div
      role="button"
      onClick={() => onClick(id)}
      className={cx(styles.container, { [styles.active]: isActive })}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.address}>
        {city}, {state}
      </p>
    </div>
  );
};

export default ResultsEntry;
