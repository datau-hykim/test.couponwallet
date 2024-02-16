import React from 'react';
import styled from 'styled-components';

const MainGnbView = () => {
    const handleScroll = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const headerHeight = document.getElementById("MainGnbViewWrap")?.offsetHeight || 0;
        if (element) {
            const offset = element.offsetTop - headerHeight;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    };

    return (
        <MainGnbViewWrap id="MainGnbViewWrap">
            <Tab>
                <li><a href="#HotDeal" onClick={(e) => handleScroll("HotDeal", e)}>핫딜</a></li>
                <li><a href="#AlwaysDiscount" onClick={(e) => handleScroll("AlwaysDiscount", e)}>상시할인</a></li>
                <li><a href="#Brand" onClick={(e) => handleScroll("Brand", e)}>브랜드</a></li>
                <li><a href="#Search" onClick={(e) => handleScroll("Search", e)}>검색</a></li>
            </Tab>
        </MainGnbViewWrap>
    );
};

export default MainGnbView;

const MainGnbViewWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #eee;
  position: sticky;
  top:0;
`;

const Tab = styled.menu`
  width: 100%;
  display: flex;
  gap: 10px;
`;
