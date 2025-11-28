import styled from 'styled-components'
import { breakpoints, colors } from '../../globalStyle'

export const PaymentPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 8vh 8vw;
  gap: 2.5vw;

  h2 {
    padding-top: 1.5vh;
    margin-bottom: auto;
    font-size: 8vh;
  }

  @media (max-width: ${breakpoints.desktop}) {
    gap: 1vw;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 56vh;

  font-weight: bold;
  background-color: ${colors.orange};
  color: ${colors.white};
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const Infos = styled.div`
  margin-top: 24px;
  margin-bottom: auto;

  select {
    margin: 8px;
    font-weight: bold;
    font-size: 20px;
    padding: 8px;
    color: ${colors.orange};
  }

  button {
    background-color: ${colors.white};
    padding: 8px;
    border: 1px solid ${colors.white};
    color: ${colors.orange};
    font-weight: bold;
    font-size: 4vh;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.gray};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    text-align: center;

    select {
      padding: 4px;
      font-size: 14px;
    }

    button {
      font-size: 3vh;
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
    font-size: 6vh;
    padding-bottom: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    h3 {
      font-size: 4vh;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 16px;
  }
`

export const CartList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  padding: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
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
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
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

  @media (max-width: ${breakpoints.desktop}) {
    padding: 4px;

    label {
      font-size: 12px;
    }

    input {
      font-size: 10px;
    }
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

export const Adress = styled.div`
  background-color: ${colors.orange};
  color: ${colors.white};
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  .infos {
    margin-bottom: auto;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
