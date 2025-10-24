import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
  display: flex;
  padding: 32px;
  text-align: center;
`

export const Logo = styled.img`
  height: 240px;
  max-width: 240px;
  width: 100%;
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
`
