import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledFaDAndD, StyledHeader, StyledImFilm, StyledLink } from './Layout.styled';
import { Container } from 'App.styled';
import Loader from 'components/Loader/Loader';
// import {FaDAndD} from "react-icons/fa";




const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <nav>
            <StyledLink to="/">
              <span>Movies</span>
              <StyledImFilm />
              
              <span>Searching</span>
              <StyledFaDAndD />
              <span>Storing</span>
            </StyledLink>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer>Footer</Footer> */}
    </>
  );
};

export default Layout;