import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const PaymentPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 120px 120px;
  gap: 40px;

  h2 {
    padding-top: 24px;
    margin-bottom: auto;
    font-size: 48px;
  }
`

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 350px;

  font-weight: bold;
  background-color: ${colors.orange};
  color: ${colors.white};
  border-radius: 8px;
`

export const Infos = styled.div`
  margin-top: 24px;
  margin-bottom: auto;

  select {
    margin: 8px;
    font-weight: bold;
    font-size: 24px;
    padding: 8px;
    color: ${colors.orange};
  }

  button {
    background-color: ${colors.white};
    padding: 8px;
    border: 1px solid ${colors.white};
    color: ${colors.orange};
    font-weight: bold;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.gray};
    }
  }
`

export const PaymentCart = styled.div`
  background-color: ${colors.orange};
  color: ${colors.white};
  width: 35vw;
  font-weight: bold;
  align-items: center;
  border-radius: 8px;

  img {
    height: 128px;
    width: 128px;
    border-radius: 8px;
  }

  h2 {
    margin-top: 0;

    display: flex;
    justify-content: center;
  }

  h3 {
    display: flex;
    justify-content: center;
    font-size: 32px;
    padding-bottom: 8px;
  }
`

export const CartList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  padding: 16px;
`

export const CartItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    padding: 6px;
  }
`

export const PaymentPay = styled.div`
  padding: 16px;
  width: 35vw;
  height: 100%;
  background-color: ${colors.orange};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  h2 {
    margin: 8px auto;
  }

  p {
    padding: 16px;
  }

  button {
    background-colors: ${colors.white};
    color: ${colors.orange};
    border: 1px solid ${colors.white};
    border-radius: 8px;
    margin: 8px auto;
    padding: 8px 36px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.gray};
    }
  }
`

export const FakeQRCode = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 8px;
  margin: 24px auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Row = styled.div`
  display: flex;
`

export const InputGroup = styled.div`
  padding: 8px;
  justify-content: space-between;

  label {
    margin-right: 1vw;
  }
`

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .container {
    background-color: ${colors.blue};
    max-width: 1024px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  border-radius: 8px;

  p {
    padding: 16px;
  }

  button {
    backgroind-color: ${colors.white};
    color: ${colors.blue};
    border-radius: 8px;
    padding: 8px 16px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: ${colors.gray};
    }
  }
`
