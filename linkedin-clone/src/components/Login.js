import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Nav>
            <a href="/">
                <img src='linkedin-clone/public/images/login-logo.svg' alt=""/>
            </a>
        </Nav>
    </Container>
  )
}

const Container = styled.div``;
const Nav = styled.nav``;

export default Login