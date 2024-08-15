import style from './ImageModal.module.css';
import Modal from 'react-modal';

const ImageModal = ({
  openCloseModal,
  modalImg: {
    urls,
    alt_description,
    description,
    likes,
    user: {
      bio,
      name,
      location,
      portfolio_url,
      instagram_username,
      twitter_username,
    },
  },
}) => {
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

  return (
    <Modal
      isOpen={true}
      style={customStyles}
      onRequestClose={() => openCloseModal()}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <img src={urls.regular} alt={alt_description} className={style.img} />
      <div className={style.wrap}>
        <div>
          {description && <p>Description: {description}</p>}
          {likes && <p>Likes: {likes}</p>}
        </div>
        <div>
          <p>
            {name && <p>Author: {name}</p>}
            {location && <p>Location: {location}</p>}
          </p>
          {bio && <p>Bio: {bio}</p>}
          <p>My links:</p>
          <ul className={style.navList}>
            {portfolio_url && (
              <li>
                <a href={portfolio_url}>Portfolio</a>
              </li>
            )}
            {instagram_username && (
              <li>
                <a href={instagram_username}>Instagram</a>
              </li>
            )}
            {twitter_username && (
              <li>
                <a href={twitter_username}>Twitter | X</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
