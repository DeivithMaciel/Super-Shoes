import JsBarcode from 'jsbarcode'
import { useEffect, useRef } from 'react'

type Props = {
  value: string
}

const BarCode = ({ value }: Props) => {
  const reference = useRef<SVGSVGElement | null>(null)
  const notDesktop = window.innerWidth < 1024

  useEffect(() => {
    if (reference.current) {
      JsBarcode(reference.current, value, {
        format: 'CODE128',
        width: notDesktop ? 1 : 2,
        height: 40
      })
    }
  }, [notDesktop, value])
  return <svg ref={reference} />
}

export default BarCode
