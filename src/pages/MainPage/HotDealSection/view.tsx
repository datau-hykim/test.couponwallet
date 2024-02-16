import styled from 'styled-components';
import {HotDealSectionProps} from 'src/pages/MainPage/HotDealSection/index'

const HotDealSectionView = ({}: HotDealSectionProps) => {
    return (
        <>
            <HotDealSectionViewWrap
            id={"HotDeal"}
            >HotDealSection</HotDealSectionViewWrap>
        </>
    )
}
export default HotDealSectionView


const HotDealSectionViewWrap =styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 500px;
  background: crimson;
`