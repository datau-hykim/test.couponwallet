import styled from 'styled-components'
import { FooterProps } from 'src/components/layout/Footer/index'
import { NavLink } from 'react-router-dom'

const FooterView = ({}: FooterProps) => {
  return (
    <FooterViewWrap>
        Footer
      <FooterTopContents>
        <FooterNavLink to={'/test'}>이용약관</FooterNavLink>
        <FooterNavLink to={'/test'}>개인정보처리방침</FooterNavLink>
      </FooterTopContents>
      <FooterBottomContents>
        
      </FooterBottomContents>
    </FooterViewWrap>
  )
}
export default FooterView

const FooterViewWrap = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: slategray;
  color: #fff;
`
const FooterTopContents = styled.div`
  display: flex;
  gap: 20px;
`
const FooterBottomContents = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterNavLink = styled(NavLink)``

