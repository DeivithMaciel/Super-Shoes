import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import closeIcon from '../../Assets/images/closeIcon.png'
import { ItemShoe } from '../Carousel'
import { RootReducer } from '../../Redux/store'

const Aside = () => {
  const { isOpen, items } = useSelector(
    (state: RootReducer) => state.cartReducer
  )

  const dispatch = useDispatch()

  return (
    <S.AsidePage className={isOpen ? 'is-open' : ''}>
      <S.ItemsList>
        {items.map((shoe) => (
          <S.Item key={shoe.id}>
            <img className="product" src={shoe.image} alt={shoe.name} />
            <S.Infos>
              <h4>{shoe.name}</h4>
              <span>{shoe.price}</span>
            </S.Infos>
            <S.CloseButton src={closeIcon} alt="remover da lista" />
          </S.Item>
        ))}
      </S.ItemsList>
    </S.AsidePage>
  )
}

export default Aside
