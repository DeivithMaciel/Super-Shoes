import styled from 'styled-components'

import { breakpoints, colors } from '../../globalStyle'

export const BrandList = styled.div`
  background-color: ${colors.white};

  h2 {
    text-align: center;
    font-weight: bold;
    padding: 16px;
    font-size: 48px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  li.right {
    align-self: flex-end;

    @media (max-width: ${breakpoints.tablet}) {
      align-self: none;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    ul {
      align-items: center;
      text-align: center;
    }
  }
`

export const BrandItem = styled.div`
  display: flex;
  background-color: ${colors.gray};
  border-radius: 16px;
  padding: 16px;
  width: 720px;
  margin: 16px;

  img {
    height: 240px;
    max-width: 240px;
    width: 100%;
    padding: 8px;
  }

  .oakley {
    width: 420px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 640px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 240px;
    flex-direction: column;
    align-items: center;

    img {
      height: 120px;
    }
  }
`

export const BrandInfos = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    line-height: 24px;
    padding: 8px;
  }

  a {
    margin-top: auto;
    margin-bottom: 16px;

    button {
      width: 100%;
      padding: 8px;
      font-weight: bold;
      font-size: 16px;
      background-color: ${colors.orange};
      border: 1px solid ${colors.white};
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${colors.lightOrange};
      }
    }
  }
`
