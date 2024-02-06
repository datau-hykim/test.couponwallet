// hook props interface
import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface IntersectionObserverProps {
  threshold?: number
  hasNextPage: boolean | undefined
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>
}

export type targetType = HTMLDivElement | null | undefined
const useIntersectionObserver = ({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage,
}: IntersectionObserverProps) => {
  // 관찰 요소: 스크롤 최하단 div요소에 setTarget을 ref로 사용
  const [target, setTarget] = useState<targetType>(null)

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      // target이 화면에 관찰 되고, 다음 페이지가 있다면 다음 페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage()
      } else return
    })
  }

  useEffect(() => {
    if (!target) return

    // intersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    })

    // 타겟 관찰 시작
    observer.observe(target)

    // 관찰 멈춤
    // eslint-disable-next-line consistent-return
    return () => observer.unobserve(target)
  }, [observerCallback, threshold, target])

  return { setTarget }
}

export default useIntersectionObserver
