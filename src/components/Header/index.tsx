import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

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
          <HashLink smooth to="#nike">
            Nike
          </HashLink>
        </S.LinkItem>
        <S.LinkItem>
          <HashLink smooth to="#asics">
            Asics
          </HashLink>
        </S.LinkItem>
        <S.LinkItem>
          <HashLink smooth to="#oakley">
            Oakley
          </HashLink>
        </S.LinkItem>
        <S.LinkItem>
          <HashLink smooth to="#adidas">
            Adidas
          </HashLink>
        </S.LinkItem>
        <S.LinkItem>
          <HashLink smooth to="#puma">
            Puma
          </HashLink>
        </S.LinkItem>
        <S.LinkItem>
          <HashLink smooth to="#mizuno">
            Mizuno
          </HashLink>
        </S.LinkItem>
        <S.LinkItem>
          <HashLink smooth to="#fila">
            Fila
          </HashLink>
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
