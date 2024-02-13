import { BarcodeItemScreenViewProps } from 'src/components/common/BarcodeItemScreen/index'

const BarcodeItemScreenView = ({ imageUrl }: BarcodeItemScreenViewProps) => {
  return <>{imageUrl && <img src={imageUrl} alt={'barcode img'} />}</>
}

export default BarcodeItemScreenView
