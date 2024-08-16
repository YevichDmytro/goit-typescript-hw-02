import { ImagesDataType } from '../../types/Images.types';
import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

type Props = {
  items: ImagesDataType[];
  handleOpenModal: (item: ImagesDataType) => void;
}

const ImageGallery: React.FC<Props> = ({ items, handleOpenModal }) => {
  return (
    <ul className={style.gridContainer}>
      {items.map((item: ImagesDataType) => {
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
