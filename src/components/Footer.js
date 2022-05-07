import '../styles/Footer.scss';
function Footer() {
  return (
    <footer className='footer'>
      <p>© 2022 Carlota Blanco Aylagas</p>
      <nav>
        <ul className='rrss'>
          <li className='rrss__item'>
            <a
              className='rrss__item--link'
              href='https://www.linkedin.com/in/carlotablancoaylagas/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li className='rrss__item'>
            <a
              className='rrss__item--link'
              href='https://github.com/CarlotaBlanco'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
