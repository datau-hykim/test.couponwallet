import { ContentsLayoutProps } from 'src/layout/ContentsLayout/index'
import styled from 'styled-components'

const ContentsLayoutView = ({ children }: ContentsLayoutProps) => {
  return <ContentsLayoutViewWrap>{children}</ContentsLayoutViewWrap>
}
export default ContentsLayoutView

const ContentsLayoutViewWrap = styled.div``
