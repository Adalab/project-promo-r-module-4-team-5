import '../styles/components/Share.scss';

const Share = (props) => {
  const handleCreateButton = (ev) => {
    ev.preventDefault();
    props.handleCreateCard();
  };
  const createCard = () => {
    if (props.dataResult.success === true) {
      return (
        <>
          {console.log(props)}
          <div className="line"></div>
          <div className="card-created-success js-created-success">
            <div className="card-created js-card-created">
              <h3 className="card-created-title js-created-title">
                La tarjeta ha sido creada:
              </h3>
              <a
                className="card-created-url js-link-share"
                target="_blank"
                href={props.dataResult.cardURL}
                rel="noreferrer"
              >
                {props.dataResult.success
                  ? props.dataResult.cardURL
                  : 'error, no se ha podido crear tu tarjeta'}
              </a>
            </div>
            <div className="share-twitter">
              <a
                className="share-twitter-tweet js-twitter-button"
                href={`https://twitter.com/intent/tweet?text=%C2%A1Mira%20la%20m%C3%A1gica%20tarjeta%20que%20he%20creado!!&url=${props.dataResult.cardURL}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter twitter-share-button-icon"></i>
                Compartir en twitter
              </a>
            </div>
          </div>
        </>
      );
    } else if (props.dataResult.success === false) {
      return (
        <>
          <div className="line"></div>
          <p className="fill_warning">Debes rellenar todos los campos</p>
        </>
      );
    }
  };
  return (
    <fieldset className="form">
      <legend className="form-legend">
        <span className="form-nodes">
          <i className="icon-form fa-sharp fa-solid fa-share-nodes"></i>
        </span>
        <span className="form-title--share">Comparte </span>
        <div className="js-eventShare">
          <i
            className={`js-share-down form-arrow fa-solid fa-wand-sparkles ${
              props.collapsShare ? 'rotate' : null
            } `}
            onClick={props.handleShare}
          ></i>
        </div>
      </legend>

      {props.collapsShare ? (
        <>
          <div className="share-div js-share">
            <button
              className="create-btn js-create-button"
              onClick={handleCreateButton}
            >
              <i className="fa-solid fa-address-card"></i>Crear tarjeta
            </button>
          </div>
          {createCard()}
        </>
      ) : null}
      <div className="line"></div>
    </fieldset>
  );
};

export default Share;
