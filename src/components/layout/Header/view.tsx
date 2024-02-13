import React from 'react'
import styled from 'styled-components'
import { HeaderProps } from 'src/components/layout/Header/index'
import {useNavigate} from "react-router-dom";

const HeaderView = ({}: HeaderProps) => {
    const navigate = useNavigate()
  return (
    <HeaderViewWrap>
      <HeaderBackButton onClick={()=>navigate(-1)}>백버튼</HeaderBackButton>
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
