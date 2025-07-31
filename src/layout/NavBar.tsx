import { Container, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <Image size='mini'  src="/STO6828.jpg" alt="logo" />
        </Menu.Item>
        <Menu.Item as={NavLink} to='/about' name="About Me" />
        <Menu.Item as={NavLink} to='/interests' name="My Interests" />
        <Menu.Item as={NavLink} to='/contacts' name="Contacts" />
      </Container>
    </Menu>
  );
}
