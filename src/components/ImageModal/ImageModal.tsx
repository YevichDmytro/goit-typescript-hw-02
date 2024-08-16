import Modal from 'react-modal';
import { ImagesDataType } from '../../types/Images.types';
import style from './ImageModal.module.css';

type Props = {
  openCloseModal: () => void;
  modalImg: ImagesDataType | null;
};

const ImageModal: React.FC<Props> = ({ openCloseModal, modalImg }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: 'none',
      background: 'transparent',
    },
  };

  Modal.setAppElement('#root');

  if (!modalImg) return null;

  return (
    <Modal
      isOpen={true}
      style={customStyles}
      onRequestClose={() => openCloseModal()}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <img
        src={modalImg.urls.regular}
        alt={modalImg.alt_description}
        className={style.img}
      />
      <div className={style.wrap}>
        <div>
          {modalImg.description && <p>Description: {modalImg.description}</p>}
          {modalImg.likes && <p>Likes: {modalImg.likes}</p>}
        </div>
        <div>
          <p>
            {modalImg.user.name && <p>Author: {modalImg.user.name}</p>}
            {modalImg.user.location && (
              <p>Location: {modalImg.user.location}</p>
            )}
          </p>
          {modalImg.user.bio && <p>Bio: {modalImg.user.bio}</p>}
          <p>My links:</p>
          <ul className={style.navList}>
            {modalImg.user.portfolio_url && (
              <li>
                <a href={modalImg.user.portfolio_url}>Portfolio</a>
              </li>
            )}
            {modalImg.user.instagram_username && (
              <li>
                <a href={modalImg.user.instagram_username}>Instagram</a>
              </li>
            )}
            {modalImg.user.twitter_username && (
              <li>
                <a href={modalImg.user.twitter_username}>Twitter | X</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
