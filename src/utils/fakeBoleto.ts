export function generateFakeBoleto() {
  const random = () => Math.floor(Math.random() * 900000000 + 100000000)

  const line = `${random()} ${random()} ${random()} ${random()} ${random()}`
  return {
    line,
    amount: 'R$ 299,00',
    dueDate: '31/10/2099'
  }
}
