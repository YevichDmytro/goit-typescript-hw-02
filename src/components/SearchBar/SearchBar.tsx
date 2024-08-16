import { FormEvent } from 'react';
import { Button, TextField } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import style from './SearchBar.module.css';

type Props = {
  onSearch: (inputValue: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get('search');

    if (typeof query === 'string' && query.trim()) {
      onSearch(query);
      form.reset();
    } else {
      toast.error('Field are empty!');
    }
  };

  return (
    <>
      <header className={style.header}>
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
      <Toaster position='top-right' />
    </>
  );
};

export default SearchBar;
