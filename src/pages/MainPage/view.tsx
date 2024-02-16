import { MainPageProps } from 'src/pages/MainPage/index'
import AlwaysDiscountSection from "src/pages/MainPage/AlwaysDiscountSection";
import HotDealSection from "src/pages/MainPage/HotDealSection";
import MainGnb from "src/pages/MainPage/MainGnb";
import styled from "styled-components";

const MainPageView = ({}: MainPageProps) => {

  return (
      <>
          <MainGnb/>
          <HotDealSection/>
          <AlwaysDiscountSection/>
      </>
  )
}
export default MainPageView;





