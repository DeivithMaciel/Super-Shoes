import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import rightIcon from '../../Assets/images/216151_right_chevron_icon.png'

import * as S from './styles'
import { add, open } from '../../store/reducers/cart'

export type ItemShoe = {
  id: number
  name: string
  price: number
  oldPrice: number | null
  image: string
}

type CarouselProps = {
  brand: string
}

export const formatPrice = (price: number | null): string => {
  if (price === null || isNaN(price)) {
    return ''
  }
  return `R$ ${price.toFixed(2).replace('.', ',')}`
}

const Carousel = ({ brand }: CarouselProps) => {
  const [data, setData] = useState<ItemShoe[]>([])
  const carousel = useRef<HTMLUListElement>(null)

  useEffect(() => {
    fetch('/static/shoes.json')
      .then((res) => res.json())
      .then((data) => {
        const filterBrand = data.filter((item: ItemShoe) =>
          item.name.toLowerCase().includes(brand.toLowerCase())
        )
        setData(filterBrand)
      })
  }, [brand])

  const dispatch = useDispatch()

  const addToCart = (shoe: ItemShoe) => {
    dispatch(add(shoe))
    dispatch(open())
  }

  const handleLeftClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
  }

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth
    }
  }

  if (!data || !data.length) return null
  return (
    <>
      <S.Carousel ref={carousel}>
        {data.map(({ id, image, name, oldPrice, price }) => (
          <S.Item key={id}>
            <S.Image>
              <img src={image} alt={name} />
            </S.Image>
            <S.Info>
              <span className="name">{name}</span>
              <span className="oldPrice">{formatPrice(oldPrice)}</span>
              <span
                onClick={() => addToCart({ id, image, name, oldPrice, price })}
                className="price"
              >
                {formatPrice(price)}
              </span>
            </S.Info>
          </S.Item>
        ))}
      </S.Carousel>
      <S.Buttons>
        <button onClick={handleLeftClick} className="left">
          <img src={rightIcon} alt="Scroll left" />
        </button>
        <button onClick={handleRightClick}>
          <img src={rightIcon} alt="Scroll right" />
        </button>
      </S.Buttons>
    </>
  )
}

export default Carousel
