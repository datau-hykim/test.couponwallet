import styled from 'styled-components'

const RouterLoaderLoading = () => {
  return (
    <RouterLoaderLoadingWrap>
      <div> loader가 실행 완료되기전까지 노출 되는 화면입니다.</div>
    </RouterLoaderLoadingWrap>
  )
}
export default RouterLoaderLoading

const RouterLoaderLoadingWrap = styled.div`
  display: block;
  z-index: 9998;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: yellow;
  justify-content: center;
  align-items: center;
  > div {
    width: 140px;
    height: 140px;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
