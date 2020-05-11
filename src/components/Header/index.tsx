import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Logo from '../../assets/logo.svg';
import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={clsx({ active: pathname === '/' })} to="/">
            Listagem
          </Link>
          <Link
            className={clsx({ active: pathname === '/import' })}
            to="/import"
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
