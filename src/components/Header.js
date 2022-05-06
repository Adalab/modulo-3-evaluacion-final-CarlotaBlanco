import cabecera from '../images/buscador_owen_willsons_wow_cabecera.png';
import '../styles/Header.scss';
function Header() {
  return (
    <header className='header'>
      <img
        className='header__image'
        src={cabecera}
        alt='Buscador de Wows de Owen Wilson'
        title='Buscador de Wows de Owen Wilson'
      />
    </header>
  );
}
export default Header;
