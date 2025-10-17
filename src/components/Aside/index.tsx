import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../Assets/images/closeIcon.png'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import { formatPrice } from '../Carousel'

const Aside = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // const formatPrice = (price = 0) => {
  //   return new Intl.NumberFormat('pr-BR', {
  //     style: 'currency',
  //     currency: 'BRL'
  //   })
  // }

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price ?? 0)
    }, 0)
  }

  return (
    <>
      {isOpen && <S.Overlay onClick={closeCart} />}
      <S.AsidePage className={isOpen ? 'is-open' : ''}>
        {items.length > 0 ? (
          <>
            <S.ItemsList>
              {items.map((shoe) => (
                <S.Item key={shoe.id}>
                  <img className="product" src={shoe.image} alt={shoe.name} />
                  <S.Infos>
                    <h4>{shoe.name}</h4>
                    <span>{formatPrice(shoe.price)}</span>
                  </S.Infos>
                  <S.CloseButton
                    onClick={() => removeItem(shoe.id)}
                    src={closeIcon}
                    alt="remover da lista"
                  />
                </S.Item>
              ))}
            </S.ItemsList>
            <S.totalToPay>
              <h4>Valor total:</h4>
              <span>{formatPrice(totalPrice())}</span>
            </S.totalToPay>
            <S.PayButton>Pagamento</S.PayButton>
          </>
        ) : (
          <S.noItems>Nenhum item adicionado ao carrinho</S.noItems>
        )}
      </S.AsidePage>
    </>
  )
}
export default Aside
