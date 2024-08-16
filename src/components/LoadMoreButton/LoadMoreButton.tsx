import { Button } from '@mui/material';
import style from './LoadMoreButton.module.css';

type Prop = {
  onPage: () => void;
}

const LoadMoreButton: React.FC<Prop> = ({ onPage }) => {
  return (
    <div className={style.loadMoreBtnBox}>
      <Button
        type='button'
        size='large'
        variant='contained'
        onClick={() => onPage()}
      >
        Load more
      </Button>
    </div>
  );
};

export default LoadMoreButton;
