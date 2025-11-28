import styled from 'styled-components'
import { breakpoints, colors } from '../../globalStyle'

export const Carousel = styled.div`
  height: 100vh;
  width: 100%;
  padding: 32px 8px;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;

    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: ${colors.orange};
    opacity: 0.5;
    height: 16px;
    width: 16px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`

export const Description = styled.p`
  background: rgba(0, 0, 0, 0.4);
  color: ${colors.orange};
  margin-top: 360px;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-top: 320px;
    text-align: center;
  }
`
