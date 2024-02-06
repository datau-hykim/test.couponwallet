import JsBarcode from 'jsbarcode'
import { useEffect, useState } from 'react'
import BarcodeItemScreenView from 'src/components/Common/BarcodeItemScreen/view'

export interface BarcodeItemScreenProps {
  barcode: string
}
export interface BarcodeItemScreenViewProps {
  imageUrl?: string
}
const BarcodeItemScreen = ({ barcode }: BarcodeItemScreenProps) => {
  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    const canvas = document.createElement('canvas')
    JsBarcode(canvas, barcode, {
      height: 50,
      displayValue: false,
    })
    setImageUrl(canvas.toDataURL('image/png'))
  }, [])

  const props: BarcodeItemScreenViewProps = {
    imageUrl,
  }
  return <BarcodeItemScreenView {...props} />
}

export default BarcodeItemScreen
