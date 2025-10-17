import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../Assets/images/super-shoes.png'
import cartIcon from '../../Assets/images/CartIcon.png'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header>
      <S.Logo>
        <img src={logo} alt="SUPER SHOES" />
      </S.Logo>
      <S.LinkList>
        <S.LinkItem>
          <a href="#">Nike</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Asics</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Oakley</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Adidas</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Pulma</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Mizuno</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Fila</a>
        </S.LinkItem>
      </S.LinkList>
      <S.Cart>
        <h2>{items.length}</h2>
        <img onClick={openCart} src={cartIcon} alt="Carrinho" />
      </S.Cart>
    </S.Header>
  )
}

export default Header
