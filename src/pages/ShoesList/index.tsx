import { useParams } from 'react-router-dom'

import { Brands } from '../../data/brands'

import Carousel from '../../components/Carousel'
import Header from '../../components/Header'

import * as S from './styles'
import Footer from '../../components/Footer'

const ShoesList = () => {
  const { name } = useParams<{ name: string }>()

  const brand = Brands.find((b) => b.name.toLowerCase() === name?.toLowerCase())

  if (!brand) {
    return <p>Marca não encontrada</p>
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.Logo src={brand.image} alt={brand.name} />
        <S.Infos>
          <h2>{brand.name}</h2>
          <p>{brand.description}</p>
        </S.Infos>
      </S.Container>
      <Carousel brand={brand.name} />
      <Footer />
    </>
  )
}

export default ShoesList
