import styled from 'styled-components'
import {TopButtonProps} from "src/components/common/TopButton/index";

const TopButtonView = ({topButtonClickHandler,scrollY}:TopButtonProps) => {

  return (
    <TopButtonWrap
      onClick={topButtonClickHandler}
    >
      Top
    </TopButtonWrap>
  )
}
export default TopButtonView

const TopButtonWrap = styled.div<{ display?: string }>`
  display:inline-block;
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100px;
  color: white ;
  line-height: 50px;
  font-weight: 700;
  text-align: center;
  border: 1px solid;
  background: blueviolet;
`
