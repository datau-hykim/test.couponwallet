import { useMatch, useMatches } from 'react-router-dom'

const useMatchHook = () => {
  const m_web_splash = useMatch('/web/splash')
  const m_web_intro = useMatch('/web/intro')
  const m_web_search = useMatch('/web/search')
  const m_web_search_result = useMatch('/web/search/result/:searchword')
  const m_web_main = useMatch('/web/main/:userId')
  const m_web_join = useMatch('/web/join')
  const m_web_join_terms = useMatch('/web/join/terms')
  const m_web_mypage = useMatch('/web/mypage/:userId')

  return {
    m_web_intro,
    m_web_splash,
  }
}
export default useMatchHook

// id: string;
// pathname: string;
// params: AgnosticRouteMatch["params"];
// data: Data;
// handle: Handle;
