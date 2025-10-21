import { Final } from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Final>
      <p>&copy; {currentYear} Super Shoes. Todos os direitos reservados.</p>
    </Final>
  )
}

export default Footer
