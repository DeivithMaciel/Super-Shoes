import styled from 'styled-components'
import { breakpoints, colors } from '../../globalStyle'

export const Container = styled.div`
  display: flex;
  padding: 32px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  height: 240px;
  max-width: 240px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    height: 120px;
    max-width: 140px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`

export const Infos = styled.div`
  font-weight: bold;
  background-color: ${colors.white};
  margin-left: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 16px;
    font-size: 52px;
  }

  p {
    font-size: 36px;
    margin-top: auto;
    margin-bottom: 36px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`
