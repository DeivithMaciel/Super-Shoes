import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

import Header from '../../components/Header'
import { formatPrice } from '../../components/Carousel'
import BarCode from '../../components/BarCode'
import FakeBoleto from '../../components/FakeBoleto'

import * as S from './styles'
import Footer from '../../components/Footer'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [showPayment, setShowPayment] = useState(false)

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price ?? 0)
    }, 0)
  }

  const paymentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value)
  }

  const confirmContinue = () => {
    if (paymentMethod) {
      setShowPayment(true)
    } else {
      alert('Selecione uma forma de pagamento!')
    }
  }

  return (
    <>
      <Header />
      <S.PaymentPage>
        <S.PaymentForm>
          <h2>FORMA DE PAGAMENTO</h2>
          <S.Infos>
            <select name="payment" id="payment" onChange={paymentSelect}>
              <option value="bankSlip">Boleto bancário</option>
              <option value="pix">Pix</option>
              <option value="creditCard">Cartão de crédito</option>
            </select>
            <button onClick={confirmContinue}>Continuar</button>
          </S.Infos>
        </S.PaymentForm>
        <div>
          <S.PaymentCart>
            <h2>CARRINHO</h2>
            <S.CartList>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                  <h4>{formatPrice(item.price)}</h4>
                </S.CartItem>
              ))}
            </S.CartList>
            <h3>valor total: {formatPrice(totalPrice())}</h3>
          </S.PaymentCart>
        </div>
        {showPayment && (
          <S.PaymentPay>
            <h2>PAGAMENTO</h2>
            {paymentMethod === 'pix' && (
              <>
                <p>
                  Use o QR Code abaixo para pagar com pix (AMBIENTE DE TESTE)
                </p>
                <S.FakeQRCode>QR Code</S.FakeQRCode>
              </>
            )}
            {paymentMethod === 'bankSlip' && (
              <>
                <p>Um boleto foi gerado. Pague até a data de vencimento</p>
                <FakeBoleto />
                <BarCode value="FAKEBOLETO1234567890" />
              </>
            )}
            {paymentMethod === 'creditCard' && (
              <>
                <p>Digite os dados do seu cartão</p>
                <S.Form>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">Nome do titular(cartão)</label>
                      <input id="cardOwner" type="text" name="cardOwner" />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" name="email" />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cpf">CPF do titular</label>
                      <input id="cpf" type="text" name="cpf" />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome do cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input id="cardNumber" type="number" name="cardNumber" />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input id="expiresMonth" type="id" name="expiresMonth" />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input id="expiresYear" type="text" name="expiresYear" />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <input id="cardCode" type="number" name="cardCode" />
                    </S.InputGroup>
                  </S.Row>
                  <button>Confirmar</button>
                </S.Form>
              </>
            )}
          </S.PaymentPay>
        )}
      </S.PaymentPage>
      <Footer />
    </>
  )
}

export default Checkout
