import styled from 'styled-components'

import { breakpoints, colors } from '../../globalStyle'

export const Header = styled.div`
  background-color: ${colors.white};
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`

export const Logo = styled.h1`
  img {
    height: 120px;
    width: 240px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 60px;
      width: 120px;
    }
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

    @media (max-width: ${breakpoints.tablet}) {
      height: 40px;
      width: 40px;
    }
  }
`

export const LinkList = styled.ul`
  &.isNot-desktop {
    list-style: none;
    display: flex;

    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
  }
`
export const LinkItem = styled.li`
  padding: 8px;
  cursor: pointer;
  font-size: 24px;

  a {
    color: ${colors.orange};
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;

    &:hover {
      background-color: ${colors.gray};
    }

    &.isActive {
      background-color: ${colors.blue};
    }
  }
`
