import styled from 'styled-components'
import { HeaderProps } from 'src/layout/Header/index'

const HeaderView = ({}: HeaderProps) => {
    return <HeaderViewWrap>Header</HeaderViewWrap>
}
export default HeaderView


const HeaderViewWrap = styled.header`
  width: 100%;
  padding: 10px;
  background-color: tomato;
  color: #fff;
`
