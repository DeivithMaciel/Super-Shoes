import logo from '../../Assets/images/super-shoes.png'
import cartIcon from '../../Assets/images/CartIcon.png'

import * as S from './styles'

const Header = () => (
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
      <h2>0</h2>
      <img src={cartIcon} alt="Carrinho" />
    </S.Cart>
  </S.Header>
)

export default Header
