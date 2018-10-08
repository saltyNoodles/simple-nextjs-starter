import styled from 'styled-components';
import Link from 'next/link';

// Main navigation component
const Navigation = ({ items = [], brand = 'Nope' }) => {
  // Create links from navigation items
  const navItems = items.map(item => (
    <NavLink href={item.href} social={item.social || false}>
      {item.name || ''}
    </NavLink>
  ));

  // Render the navbar
  return (
    <Nav>
      <NavItems>
        <NavBrand>{brand}</NavBrand>
        {navItems}
      </NavItems>
    </Nav>
  );
};

export { Navigation };

// Styled Components
const Nav = styled.nav``;

const NavItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px;
  display: flex;
  background: #000000de;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  flex: 3;
  text-align: center;
  padding-right: 10px;
  overflow: hidden;

  /* Styles for anchor tags */
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    height: 100%;
    width: 100%;
    &:hover {
      background: #000;
    }
    text-align: center;
    line-height: 100%;
    display: inline-block;

    @media (max-width: 700px) {
      text-align: left;
    }
  }

  @media (max-width: 700px) {
    text-align: left;
    align-items: left;
    align-self: left;
  }
`;

const NavItemHeader = styled(NavItem)`
  h1 {
    padding: 0px;
    margin: 0px;
    white-space: nowrap;
    text-align: left;
  }
  flex: 6;
`;

const NavItemSocial = styled(NavItem)`
  flex: 2;
`;

// Navigation Link
const NavLink = ({ href, children, social = false, header = false }) => {
  if (social) {
    return (
      <NavItemSocial>
        <Link href={href}>
          <a href={href}>{children}</a>
        </Link>
      </NavItemSocial>
    );
  }

  if (header) {
    return (
      <NavItemHeader>
        <Link href={href}>
          <a href={href}>{children}</a>
        </Link>
      </NavItemHeader>
    );
  }

  return (
    <NavItem>
      <Link href={href}>
        <a href={href}>{children}</a>
      </Link>
    </NavItem>
  );
};

const NavBrand = ({ children }) => (
  <NavLink header href="/">
    <h1>{children}</h1>
  </NavLink>
);
