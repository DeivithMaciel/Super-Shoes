import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
        <Link to="/">
          <img src={logo} alt="SUPER SHOES" />
        </Link>
      </S.Logo>
      <S.LinkList>
        <S.LinkItem>
          <Link to="/shoes/nike">Nike</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/shoes/asics">Asics</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/shoes/oakley">Oakley</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/shoes/adidas">Adidas</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/shoes/puma">Puma</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/shoes/mizuno">Mizuno</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/shoes/fila">Fila</Link>
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
