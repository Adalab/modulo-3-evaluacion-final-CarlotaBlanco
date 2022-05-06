import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import '../styles/MovieSceneDetail.scss';
function MovieSceneDetail(props) {
  if (props.scene === undefined) {
    return <NotFoundPage />;
  } else {
    return (
      <section className='section_detail'>
        <img
          className='section_detail__image'
          alt={props.scene.movie}
          title={props.scene.movie}
          src={props.scene.poster}
        />
        <div className='section_detail__text'>
          <p className='section_detail__text--title'>
            <i className='fas fa-film'></i> <b>Película:</b> {props.scene.movie}
          </p>
          <p className='section_detail__text--director'>
            <i className='fas fa-user	'></i> <b>Director:</b>{' '}
            {props.scene.director}
          </p>
          <p className='section_detail__text--line'>
            <i className='fas fa-microphone-alt'></i> <b>Frase:</b>{' '}
            <em>{props.scene.line}</em>
          </p>
          <a
            className='section_detail__text--audio'
            href={props.scene.audio}
            title='Audio'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fas fa-music'></i>Audio
          </a>
          <Link className='section_detail__text--back' to='/'>
            <p>
              <i className='fas fa-arrow-circle-left'></i> Atrás
            </p>
          </Link>
        </div>
      </section>
    );
  }
}
export default MovieSceneDetail;
