import { generateFakeBoleto } from '../../utils/fakeBoleto'

import * as S from './styles'

const FakeBoleto = () => {
  const boleto = generateFakeBoleto()
  return (
    <S.Infos>
      <h3>boleto (AMBIENTE DE TESTE)</h3>
      <p>Vencimento: {boleto.dueDate}</p>
      <p>valor: {boleto.amount}</p>
      <S.Line>{boleto.line}</S.Line>
      <S.BarCode>CÓDIGO DE BARRAS (IMAGEM DE TESTE)</S.BarCode>
    </S.Infos>
  )
}

export default FakeBoleto
