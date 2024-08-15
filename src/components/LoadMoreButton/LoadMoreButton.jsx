import { Button } from '@mui/material';
import style from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onPage }) => {
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
