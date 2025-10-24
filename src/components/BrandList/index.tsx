import { motion } from 'framer-motion'
import * as S from './styles'
import { Brand, Brands as mockBrands } from '../../data/brands'
import { useEffect, useState } from 'react'

const BrandList = () => {
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setBrands(mockBrands)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <S.BrandList>
      <h2>Nossas marcas</h2>

      {brands.length === 0 ? (
        <p>Carregando marcas...</p>
      ) : (
        <ul>
          {brands.map((brand, index) => (
            <motion.li
              key={brand.id}
              className={index % 2 === 0 ? 'left' : 'right'}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <S.BrandItem>
                <img src={brand.image} alt={brand.name} />
                <S.BrandInfos>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                  <button>Lista de tênis</button>
                </S.BrandInfos>
              </S.BrandItem>
            </motion.li>
          ))}
        </ul>
      )}
    </S.BrandList>
  )
}

export default BrandList
