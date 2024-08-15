import { Button, TextField } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import style from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const inputValue = form.elements.search.value.trim();

    if (inputValue === '') {
      toast.error('Field are empty!');
    } else {
      onSearch(inputValue);
    }

    form.reset();
  };

  return (
    <header className={style.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          label='Search images and photos'
          type='text'
          name='search'
          autoComplete='on'
        />
        <Button variant='contained' type='submit'>
          Search
        </Button>
      </form>
    </header>
  );
};

export default SearchBar;
