import styled from 'styled-components'
import { TabBarProps } from 'src/components/common/TabBar/index'

const TabBarView = ({}: TabBarProps) => {
    return <TabBarViewWrap>TabBar</TabBarViewWrap>
}
export default TabBarView


const TabBarViewWrap = styled.div`
  width: 100%;
  padding: 10px;
  background-color: darkgray;
  color: #111;
`
