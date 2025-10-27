import styled from 'styled-components'

import { colors } from '../../globalStyle'

export const AsidePage = styled.div`
  display: none;

  &.is-open {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 360px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    z-index: 3;
  }
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: 2;
`

export const ItemsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const Item = styled.li`
  display: flex;
  margin: 16px 0;
  position: relative;

  .product {
    height: 128px;
    width: 128px;
  }
`

export const Infos = styled.div`
  padding: 8px;

  h4 {
    margin: 16px 0px;
  }
`
export const CloseButton = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`
export const totalToPay = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 24px;
`

export const noItems = styled.h3`
  display: flex;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  padding: 48px 8px;
`
export const PayButton = styled.button`
  background-color: ${colors.orange};
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin: 0 8px;
  width: 95%;

  &:hover {
    background-color: ${colors.lightOrange};
  }
`
