import {Outlet, ScrollRestoration} from 'react-router-dom'
import {PageLayoutProps} from 'src/layout/PageLayout/index'
import Header from "src/layout/Header/view";
import Footer from "src/layout/Footer/view";
import Tabbar from "src/layout/TabBar/view";
import styled from "styled-components";

const PageLayoutView = ({}: PageLayoutProps) => {
    return (
        <>
            <ScrollRestoration/>
            <Header/>
            <ContentsLayout>
                <Outlet/>
            </ContentsLayout>
            <Tabbar/>
            <Footer/>
        </>
    )
}
export default PageLayoutView

const ContentsLayout = styled.div`

`