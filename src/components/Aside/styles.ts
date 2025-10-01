import styled from 'styled-components'

export const AsidePage = styled.div`
  display: none;

  .is-open {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 360px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
  }
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
