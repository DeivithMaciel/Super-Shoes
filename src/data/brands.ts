export type Brand = {
  id: string
  name: string
  image: string
  description: string
}

export const Brands: Brand[] = [
  {
    id: 'nike',
    name: 'Nike',
    description:
      'Vender bem estar. Seu core business é focada em processos de inovação, atendendo às tendências do mercado.',
    image: 'https://www.nike.com.br/images/meta/open-graph-main-image.jpg'
  },
  {
    id: 'asics',
    name: 'Asics',
    description:
      'Conhecidos pelas tecnologias de amortecimento, estabilidade e conforto para principalmente corredores.',
    image:
      'https://i.pinimg.com/564x/0b/56/5f/0b565f085cf0f8329883bd480b1896b1.jpg'
  },
  {
    id: 'oakley',
    name: 'Oakley',
    description:
      'Conhecidos por sua robustez, tecnologia e design voltado para esportes radicais e uso casual.',
    image:
      'https://i.pinimg.com/1200x/8f/d3/18/8fd318b31a8278d309a212411c5605ee.jpg'
  },
  {
    id: 'adidas',
    name: 'Adidas',
    description:
      'Oferecendo uma ampla variedade de tênis, misturando o clássico com tecnologias de ponta.',
    image:
      'https://i.pinimg.com/originals/f9/c5/33/f9c53354567c16d3ee75aff62ff5afc5.jpg'
  },
  {
    id: 'puma',
    name: 'Puma',
    description:
      'Inovadores na tecnologia de amortecimento e design, atendendo um público casual e de alta performance.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHl68Qqh_YpAEQdvFf3DcSDDY89TBvBiKYQ&s'
  },
  {
    id: 'mizuno',
    name: 'Mizuno',
    description:
      'Marca japonesa grande em durabilidade e ventilação, que adapta o calçado ao movimento do pé.',
    image:
      'https://i.pinimg.com/474x/4c/2f/c3/4c2fc3354c8ee6d0a86ce263f46a9f0f.jpg'
  },
  {
    id: 'fila',
    name: 'Fila',
    description:
      'Possuem acolchoado interno para maior conforto com uma palmilha macia e funções antiderrapantes.',
    image:
      'https://i.pinimg.com/564x/d5/1e/56/d51e5665d3d528a98b3a513b77d793f0.jpg'
  }
]
