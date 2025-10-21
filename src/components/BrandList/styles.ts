import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const BrandList = styled.div`
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
  }
`

export const BrandItem = styled.li`
  display: flex;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 16px;
  width: 720px;
  margin: 16px;

  img {
    height: 240px;
    width: 240px;
    padding: 8px;
  }

  .oakley {
    width: 420px;
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
  }

  button {
    margin: auto 32px 16px;
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
`
