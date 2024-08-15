import style from './ImageCard.module.css';

const ImageCard = ({ onLink, onAlt }) => {
  const link = onLink.small;

  return (
    <div>
      <img src={link} alt={onAlt} className={style.image} />
    </div>
  );
};

export default ImageCard;
