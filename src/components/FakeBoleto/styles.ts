import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Infos = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 8px;
  width: 360px;
  color: ${colors.black};
`

export const Line = styled.div`
  margin: 16px 0;
  padding: 16px;
  background: ${colors.black};
  border-radius: 6px;
  text-align: center;
`

export const BarCode = styled.div`
  height: 60px;
  background-color: ${colors.black};
  colors: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
