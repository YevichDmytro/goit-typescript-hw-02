import { ImagesDataType } from '../../types/Images.types';
import style from './ImageCard.module.css';

type Props = {
  onLink: ImagesDataType['urls'];
  onAlt: ImagesDataType['alt_description'];
};

const ImageCard = ({ onLink, onAlt }: Props) => {
  return (
    <div>
      <img src={onLink.small} alt={onAlt} className={style.image} />
    </div>
  );
};

export default ImageCard;
