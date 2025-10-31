import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../Assets/images/super-shoes.png'
import cartIcon from '../../Assets/images/CartIcon.png'

import * as S from './styles'
import { NavLink } from 'react-router-dom'

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
          <NavLink
            to="/shoes/nike"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Nike
          </NavLink>
        </S.LinkItem>
        <S.LinkItem>
          <NavLink
            to="/shoes/asics"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Asics
          </NavLink>
        </S.LinkItem>
        <S.LinkItem>
          <NavLink
            to="/shoes/oakley"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Oakley
          </NavLink>
        </S.LinkItem>
        <S.LinkItem>
          <NavLink
            to="/shoes/adidas"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Adidas
          </NavLink>
        </S.LinkItem>
        <S.LinkItem>
          <NavLink
            to="/shoes/puma"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Puma
          </NavLink>
        </S.LinkItem>
        <S.LinkItem>
          <NavLink
            to="/shoes/mizuno"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Mizuno
          </NavLink>
        </S.LinkItem>
        <S.LinkItem>
          <NavLink
            to="/shoes/fila"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Fila
          </NavLink>
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
