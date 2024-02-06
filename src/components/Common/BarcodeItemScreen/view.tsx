import { BarcodeItemScreenViewProps } from 'src/components/Common/BarcodeItemScreen'

const BarcodeItemScreenView = ({ imageUrl }: BarcodeItemScreenViewProps) => {
  return <>{imageUrl && <img src={imageUrl} alt={'barcode img'} />}</>
}

export default BarcodeItemScreenView
