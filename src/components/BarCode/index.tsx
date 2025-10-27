import JsBarcode from 'jsbarcode'
import { useEffect, useRef } from 'react'

type Props = {
  value: string
}

const BarCode = ({ value }: Props) => {
  const reference = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (reference.current) {
      JsBarcode(reference.current, value, {
        format: 'CODE128',
        width: 2,
        height: 40
      })
    }
  }, [value])
  return <svg ref={reference} />
}

export default BarCode
