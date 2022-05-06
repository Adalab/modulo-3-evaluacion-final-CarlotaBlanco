import { Link } from 'react-router-dom';
import notfound from '../images/not_found.png';
import '../styles/NotFoundPage.scss';
function NotFoundPage() {
  return (
    <section className='notfound'>
      <img
        className='notfound__image'
        src={notfound}
        alt='Página no encontrada'
        title='Página no encontrada'
      />
      <Link className='notfound__link' to='/'>
        <p>
          <i className='fas fa-arrow-circle-left'></i> Atrás
        </p>
      </Link>
    </section>
  );
}
export default NotFoundPage;
