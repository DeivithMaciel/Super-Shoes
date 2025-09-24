import styled from 'styled-components'

export const Carousel = styled.ul`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  background-color: #eee;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 16px;
  list-style: none;
  flex: none;
  flex-direction: column;
`

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Info = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 8px;
    border-radius: 8px;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 4px 0;
    color: #00a8fb;
  }

  .oldPrice {
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e81a5d;
    margin-bottom: auto;
  }

  .price {
    margin-top: auto;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
  }
`
export const Buttons = styled.div`
  width: 100%;
  text-align: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .left {
    transform: rotate(180deg);
  }
`
