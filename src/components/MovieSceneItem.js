import { Link } from 'react-router-dom';
import '../styles/MovieSceneItem.scss';
function MovieSceneItem(props) {
  return (
    <Link className='card' to={`/movie/${props.scene.id}`}>
      <img
        className='card__image'
        alt={props.scene.movie}
        title={props.scene.movie}
        src={props.scene.poster}
      />
      <div>
        <h3 className='card__title'>{props.scene.movie}</h3>
        <p className='card__line'>{props.scene.line}</p>
        <p className='card__year'>{props.scene.year}</p>
      </div>
    </Link>
  );
}

export default MovieSceneItem;
