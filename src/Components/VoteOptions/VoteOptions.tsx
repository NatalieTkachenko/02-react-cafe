import type { VoteType } from '../types';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        type="button"
        onClick={() => onVote('good')}
        className={css.button}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => onVote('neutral')}
        className={css.button}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => onVote('bad')}
        className={css.button}
      >
        Bad
      </button>

      {canReset ? (
        <button
          type="reset"
          onClick={onReset}
          className={`${css.button} ${css.reset}`}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
