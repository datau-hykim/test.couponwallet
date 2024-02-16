import {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {ModalCouponSheetProps} from './index';


const ModalCouponSheetView = ({}: ModalCouponSheetProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>

                {isModalOpen && (
                    <>
                        <ModalCouponSheetBg
                            as={motion.div}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        />
                        <ModalCouponSheetContent
                            as={motion.div}
                            initial={{y: '100%', opacity: 0}}
                            animate={{y: isModalOpen ? 0 : '100%', opacity: isModalOpen ? 1 : 0}}
                            transition={{duration: 0.4, type: 'tween'}}
                        >
                            <ModalCouponSheetContentHeader>
                                <button onClick={toggleModal}>닫기</button>
                            </ModalCouponSheetContentHeader>
                        </ModalCouponSheetContent>
                    </>
                )}


            <FloatingCouponBarWrap
                as={motion.div}
                initial={{y: 0}}
                animate={{y: isModalOpen ? '100%' : 0}}
            >
                <FloatingCouponBarContent>
                    <ExpirationNotify>7일 뒤에 사라져요</ExpirationNotify>
                    <ExpirationItem as={Marquee} speed={30}>
                        <p>[투썸플레이스]스트로베리초콜릿생크림</p>
                    </ExpirationItem>
                </FloatingCouponBarContent>
                <UseCouponButton onClick={toggleModal}>쿠폰사용</UseCouponButton>
            </FloatingCouponBarWrap>
        </>
    );
};

export default ModalCouponSheetView;
export const ModalCouponSheetBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
export const ModalCouponSheetContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: calc(100% - 100px);
  background: #1a1a1a;
  z-index: 100;
  border-radius: 30px 30px 0 0;
`;
const ModalCouponSheetContentHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  width: 100%;
  height: 80px;
  background: #1a1a1a;
  border-radius: 30px 30px 0 0;

  button {
    color: white;
  }
`;

const FloatingCouponBarWrap = styled.div`
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: calc(100% - 20px);
  background-color: #1a1a1a;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 15px 20px;
`;

const FloatingCouponBarContent = styled.div`
  flex: 1;
`;

const ExpirationNotify = styled.div`
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  color: #027FF3;
  background-color: #333333;
  padding: 2px 10px;
  border-radius: 100px;
`;

const ExpirationItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  color: #fff;
  margin-top: 10px;
  overflow: hidden;

  p {
    margin-left: 20px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const UseCouponButton = styled.button`
  box-sizing: border-box;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: #0083fc;
  flex: 1;
  flex-shrink: 0;
  font-weight: bold;
  color: #fff;
`;
