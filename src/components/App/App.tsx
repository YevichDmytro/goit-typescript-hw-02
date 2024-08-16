import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreButton/LoadMoreButton';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchGallery } from '../../unsplash-api';
import { ImagesDataType, ResponseData } from '../../types/Images.types';
import style from './App.module.css';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [gallery, setGallery] = useState<ImagesDataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [modalImg, setModalImg] = useState<ImagesDataType | null>(null);

  const isVisible = gallery.length > 0;

  useEffect(() => {
    if (loader) {
      document.body.style.overflow = 'hidden';
    }
    document.body.style.overflow = 'auto';
  }, [loader]);

  useEffect(() => {
    if (topic === '') return;

    const getGallery = async (): Promise<void> => {
      try {
        setLoader(true);
        setError(false);

        const data: ResponseData = await fetchGallery(topic, currentPage);

        setTotalPages(data.total_pages);
        setGallery(prevGallery => [...prevGallery, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getGallery();
  }, [topic, currentPage]);

  const handleSearch = async (newTopic: string): Promise<void> => {
    setGallery([]);
    setCurrentPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = (): void => {
    setCurrentPage(currentPage + 1);
  };

  const handleOpenModal = (item: ImagesDataType): void => {
    setOpenModal(true);
    setModalImg(item);
    document.body.style.overflow = 'hidden';
  };

  const openCloseModal = (): void => {
    setOpenModal(false);
    setModalImg(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={style.mainBox}>
      <SearchBar onSearch={handleSearch} />
      {isVisible && (
        <ImageGallery items={gallery} handleOpenModal={handleOpenModal} />
      )}
      {openModal && (
        <ImageModal modalImg={modalImg} openCloseModal={openCloseModal} />
      )}
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {isVisible && !loader && currentPage < totalPages && (
        <LoadMoreBtn onPage={handleLoadMore} />
      )}
      {currentPage >= totalPages && gallery.length !== 0 && (
        <p className={style.textElem}>This is the end of gallery</p>
      )}
      {totalPages === 0 && <p>No one image for this request</p>}
    </div>
  );
};

export default App;
