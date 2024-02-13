import { ContentsLayoutProps } from 'src/components/layout/ContentsLayout/index'
import styled from 'styled-components'

const ContentsLayoutView = ({ children }: ContentsLayoutProps) => {
  return <ContentsLayoutViewWrap>{children}</ContentsLayoutViewWrap>
}
export default ContentsLayoutView

const ContentsLayoutViewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid red;
  height: 100%;
  
  
`
