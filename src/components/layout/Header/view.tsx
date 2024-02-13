import React from 'react'
import styled from 'styled-components'
import { HeaderProps } from 'src/components/layout/Header/index'

const HeaderView = ({}: HeaderProps) => {
  return (
    <HeaderViewWrap>
      <HeaderBackButton>백버튼</HeaderBackButton>
      <HeaderContents>example Header</HeaderContents>
      <span />
    </HeaderViewWrap>
  )
}
export default HeaderView

const HeaderViewWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: tomato;
  color: #fff;
`

const HeaderBackButton = styled.button``

const HeaderContents = styled.div``
