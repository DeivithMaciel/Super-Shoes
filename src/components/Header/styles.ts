import styled from 'styled-components'

import { colors } from '../../globalStyle'

export const Header = styled.div`
  background-color: ${colors.white};
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
  color: ${colors.orange};

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

  &:hover {
    background-color: ${colors.blue};
  }

  a {
    color: ${colors.orange};
    text-decoration: none;
  }
`
