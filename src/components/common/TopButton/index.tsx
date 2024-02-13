import TopButtonView from "src/components/common/TopButton/view";
import {useEffect, useState} from "react";

export interface TopButtonProps {
    scrollY:number
    topButtonClickHandler: ()=> void
}

const TopButton = () => {
    const [scrollY, setScrollY] = useState(0) // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
        setScrollY(window.scrollY)
    }

    const topButtonClickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', handleFollow)

        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })

    const props = {
        topButtonClickHandler,
        scrollY
    }
    return <TopButtonView {...props} />
}
export default TopButton
