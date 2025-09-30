import styled from 'styled-components'

export const Header = styled.div`
  background-color: #eee;
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  img {
    height: 120px;
    width: 240px;
  }
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  color: #ff7e3b;

  img {
    height: 64px;
    width: 64px;
    cursor: pointer;
  }
`

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
`
export const LinkItem = styled.li`
  padding: 8px;
  cursor: pointer;

  a {
    color: #ff7e3b;
    text-decoration: none;
  }
`
