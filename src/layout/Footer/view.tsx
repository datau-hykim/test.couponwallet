import styled from 'styled-components'
import { FooterProps } from 'src/layout/Footer/index'

const FooterView = ({}: FooterProps) => {
  return <FooterViewWrap>Footer</FooterViewWrap>
}
export default FooterView


const FooterViewWrap = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: slategray;
  color: #fff;
`
