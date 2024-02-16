import styled from 'styled-components';
import {AlwaysDiscountSectionProps} from 'src/pages/MainPage/AlwaysDiscountSection/index'

const AlwaysDiscountSectionView = ({}: AlwaysDiscountSectionProps) => {
    return (
        <>
            <AlwaysDiscountSectionViewWrap
                id={"AlwaysDiscount"}
            >AlwaysDiscountSection
            </AlwaysDiscountSectionViewWrap>
        </>
    );
}
export default AlwaysDiscountSectionView


const AlwaysDiscountSectionViewWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 700px;
  background: darkcyan;
`