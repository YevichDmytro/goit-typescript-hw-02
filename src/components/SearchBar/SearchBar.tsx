import { FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import style from './SearchBar.module.css';

type Props = {
  onSearch: (inputValue: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [topic, setTopic] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (topic === '') {
      toast.error('Field are empty!');
    } else {
      onSearch(topic);
    }
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
          onChange={e => setTopic(e.target.value.trim().toLowerCase())}
        />
        <Button variant='contained' type='submit'>
          Search
        </Button>
      </form>
    </header>
  );
};

export default SearchBar;
