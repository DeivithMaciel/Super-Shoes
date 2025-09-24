import { useEffect, useState, useRef } from 'react'

import rightIcon from '../../Assets/images/216151_right_chevron_icon.png'

import * as S from './styles'

type ItemShoe = {
  id: number
  name: string
  price: number | null
  oldPrice: number | null
  image: string
}

const Carousel: React.FC = () => {
  const [data, setData] = useState<ItemShoe[]>([])
  const carousel = useRef<HTMLUListElement>(null)

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((res) => res.json())
      .then(setData)
  }, [])

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

  const formatPrice = (price: number | null): string => {
    if (price === null || isNaN(price)) {
      return 'R$ 0,00'
    }
    return `R$ ${price.toFixed(2).replace('.', ',')}`
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
              <span className="price">{formatPrice(price)}</span>
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
