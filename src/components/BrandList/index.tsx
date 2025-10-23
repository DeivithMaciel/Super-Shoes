import { motion } from 'framer-motion'
import * as S from './styles'

const BrandList = () => {
  return (
    <S.BrandList>
      <h2>Nossas marcas</h2>
      <ul>
        <motion.li
          className="left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="nike">
            <img
              src="https://www.nike.com.br/images/meta/open-graph-main-image.jpg"
              alt="Nike"
            />
            <S.BrandInfos>
              <h3>Nike</h3>
              <p>
                Vender bem estar. Seu core business é focada em processos de
                inovação, atendendo a ás tendências do mercado.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
          </S.BrandItem>
        </motion.li>
        <motion.li
          className="right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="asics">
            <S.BrandInfos>
              <h3>Asics</h3>
              <p>
                Conhecidos pelas tecnologias de amortecimento, estabilidade e
                conforto para para principalmente corredores.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
            <img
              src="https://i.pinimg.com/564x/0b/56/5f/0b565f085cf0f8329883bd480b1896b1.jpg"
              alt="Asics"
            />
          </S.BrandItem>
        </motion.li>
        <motion.li
          className="left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="oakley">
            <img
              className="oakley"
              src="https://i.pinimg.com/1200x/8f/d3/18/8fd318b31a8278d309a212411c5605ee.jpg"
              alt="Oakley"
            />
            <S.BrandInfos>
              <h3>Oakley</h3>
              <p>
                Conhecidos por sua robustez, tecnologia e design voltado para
                esportes radicais e uso casual.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
          </S.BrandItem>
        </motion.li>
        <motion.li
          className="right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="adidas">
            <S.BrandInfos>
              <h3>Adidas</h3>
              <p>
                Oferecendo uma ampla variedade de tênis, misturando o clássico
                com tecnologias de ponta.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
            <img
              src="https://i.pinimg.com/originals/f9/c5/33/f9c53354567c16d3ee75aff62ff5afc5.jpg"
              alt="Adidas"
            />
          </S.BrandItem>
        </motion.li>
        <motion.li
          className="left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="puma">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHl68Qqh_YpAEQdvFf3DcSDDY89TBvBiKYQ&s"
              alt="Puma"
            />
            <S.BrandInfos>
              <h3>Puma</h3>
              <p>
                Inovadores na tecnologia de amortecimento e design, atendendo um
                público casual e de alta perfomance.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
          </S.BrandItem>
        </motion.li>
        <motion.li
          className="right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="mizuno">
            <S.BrandInfos>
              <h3>Mizuno</h3>
              <p>
                Marca japonesa grandes em durabilidade e ventilação, que adapta
                o calçado ao movimento do pé.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
            <img
              src="https://i.pinimg.com/474x/4c/2f/c3/4c2fc3354c8ee6d0a86ce263f46a9f0f.jpg"
              alt="Mizuno"
            />
          </S.BrandItem>
        </motion.li>
        <motion.li
          className="left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <S.BrandItem id="fila">
            <img
              src="https://i.pinimg.com/564x/d5/1e/56/d51e5665d3d528a98b3a513b77d793f0.jpg"
              alt="Fila"
            />
            <S.BrandInfos>
              <h3>Fila</h3>
              <p>
                Pòssuem alcolchoado interno para maior conforto com uma palmilha
                macia, com funções antiderrapantes.
              </p>
              <button>Lista de tênis</button>
            </S.BrandInfos>
          </S.BrandItem>
        </motion.li>
      </ul>
    </S.BrandList>
  )
}

export default BrandList
