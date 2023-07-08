import { ItemNav } from './Header.styled';

const Header = () => {
  return (
    <nav>
      <ItemNav to="/">Home</ItemNav>
      <ItemNav to="/movies">Movies</ItemNav>
    </nav>
  );
};

export default Header;

