import { ReactNode } from 'react'
import ContentsLayoutView from 'src/components/layout/ContentsLayout/view'

export interface ContentsLayoutProps {
  children: ReactNode
}

const ContentsLayout = ({ children }: { children: ReactNode }) => {
  const props = { children }
  return <ContentsLayoutView {...props} children={children} />
}
export default ContentsLayout
