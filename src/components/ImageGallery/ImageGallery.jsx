import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ items, handleOpenModal }) => {
  return (
    <ul className={style.gridContainer}>
      {items.map(item => {
        return (
          <li
            className={style.listItem}
            key={item.id}
            onClick={() => handleOpenModal(item)}
          >
            <ImageCard onLink={item.urls} onAlt={item.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
