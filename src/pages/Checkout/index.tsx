import { useSelector } from 'react-redux'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'

import Header from '../../components/Header'
import { formatPrice } from '../../components/Carousel'
import BarCode from '../../components/BarCode'
import FakeBoleto from '../../components/FakeBoleto'
import Footer from '../../components/Footer'

import * as S from './styles'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [showPayment, setShowPayment] = useState(false)
  const [modalEstaAberta, setModalEstaAberta] = useState(false)

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

  const form = useFormik({
    initialValues: {
      adress: '',
      cep: '',
      city: '',
      state: '',
      cardOwner: '',
      email: '',
      cpf: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      adress: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      state: Yup.string().required('O campo é obrigatório'),
      email: Yup.string().email().required('O campo é obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      cpf: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema.min(2).required('O campo é obrigatório')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema.min(2).required('O campo é obrigatório')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        paymentMethod === 'creditCard'
          ? schema
              .min(3, '3 número nescessários')
              .required('O CVV é obrigatório')
          : schema
      )
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      console.log('Dados enviados:', values)
      alert('Dados enviados (SIMULADO)')
    }
  })

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Header />
      <S.Form onSubmit={form.handleSubmit}>
        <S.PaymentPage>
          <S.PaymentForm>
            <h2>FORMA DE PAGAMENTO</h2>
            <S.Infos>
              <select name="payment" id="payment" onChange={paymentSelect}>
                <option value="#">Selecione a forma de pagamento</option>
                <option value="bankSlip">Boleto bancário</option>
                <option value="pix">Pix</option>
                <option value="creditCard">Cartão de crédito</option>
              </select>
              <button type="button" onClick={confirmContinue}>
                Continuar
              </button>
            </S.Infos>
          </S.PaymentForm>
          <S.Adress>
            <h2>ONDE ENTREGAMOS?</h2>
            <div className="infos">
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    placeholder="Rua/Av: Nome da rua/Número/Bairro"
                    type="text"
                    id="adress"
                    name="adress"
                    value={form.values.adress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <IMaskInput
                    mask={'00000-000'}
                    placeholder="00000-000"
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onAccept={(value) => form.setFieldValue('cep', value)}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="usuario@gmail.com"
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="state">Estado</label>
                  <select
                    name="state"
                    id="state"
                    value={form.values.state}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Destrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goias</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraiba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantis</option>
                  </select>
                </S.InputGroup>
              </S.Row>
            </div>
          </S.Adress>
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
              <h3>Valor total: {formatPrice(totalPrice())}</h3>
            </S.PaymentCart>
          </div>
          {showPayment && (
            <S.PaymentPay>
              <h2>PAGAMENTO</h2>
              {paymentMethod === '#' && <p>Selecione a forma de pagamento</p>}
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
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">Nome do titular</label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <IMaskInput
                        mask={'0000 0000 0000 0000'}
                        placeholder="0000 0000 0000 0000"
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onAccept={(value) =>
                          form.setFieldValue('cardNumber', value)
                        }
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cpf">CPF do titular</label>
                      <IMaskInput
                        mask={'000.000.000-00'}
                        placeholder="000.000.000-00"
                        id="cpf"
                        type="text"
                        name="cpf"
                        value={form.values.cpf}
                        onAccept={(value) => form.setFieldValue('cpf', value)}
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome do cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <IMaskInput
                        mask={'00'}
                        placeholder="00"
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onAccept={(value) =>
                          form.setFieldValue('expiresMonth', value)
                        }
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <IMaskInput
                        mask={'00'}
                        placeholder="00"
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onAccept={(value) =>
                          form.setFieldValue('expiresYear', value)
                        }
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <IMaskInput
                        mask={'000'}
                        placeholder="000"
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onAccept={(value) =>
                          form.setFieldValue('cardCode', value)
                        }
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <button
                    onClick={() => setModalEstaAberta(true)}
                    type="submit"
                  >
                    Confirmar
                  </button>
                </>
              )}
            </S.PaymentPay>
          )}
        </S.PaymentPage>
      </S.Form>
      <S.Modal className={modalEstaAberta ? 'visible' : ''}>
        <S.ModalContent className="container">
          <h3>Compra efetuada order - #</h3>
          <p>Agradecemos a preferência de nossa loja tenha um ótimo dia</p>
          <button type="button" onClick={() => window.location.reload()}>
            Concluir
          </button>
        </S.ModalContent>
        <div className="overlay" onClick={() => window.location.reload()}></div>
      </S.Modal>
      <Footer />
    </>
  )
}

export default Checkout
