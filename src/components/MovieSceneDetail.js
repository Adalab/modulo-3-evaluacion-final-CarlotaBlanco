import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
function MovieSceneDetail(props) {
  if (props.scene === undefined) {
    return <NotFoundPage />;
  } else {
    return (
      <section>
        <img
          className='image'
          alt={props.scene.movie}
          title={props.scene.movie}
          src={props.scene.poster}
        />
        <h3 className=''>Película: {props.scene.movie}</h3>
        <p className=''>Director: {props.scene.director}</p>
        <p className=''>Frase: {props.scene.line}</p>
        <a href={props.scene.audio} title='Audio' target='_blank'>
          Escucha el Wow
        </a>
        <Link className='' to='/'>
          Volver
        </Link>
      </section>
    );
  }
}
export default MovieSceneDetail;
