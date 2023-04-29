import React from 'react';
import styled from 'styled-components';

const Jaewon = () => {
    return (
        <>
            <Header>
                <Me>
                    <HeadLine>Hello,🖐 I'm Jaewon💪</HeadLine>
                </Me>
                <Info>
                    <Box>
                        <Title>Who am I ❓</Title>
                        <UnderLine></UnderLine>
                        <MyInfo>
                            프론트 엔드 개발자로 취업하기 위해 하루하루 자신을 성장 시키며 더 나은 미래의 나를 위해
                            정진하는 '심재원'입니다.{' '}
                        </MyInfo>
                    </Box>
                    <Box>
                        <Title>
                            I want to be<Imoji>🌈</Imoji>
                        </Title>
                        <UnderLine></UnderLine>
                        <MyInfo>
                            자기가 맡은일에 책임감을 갖고 끝내 완수하며 높은 추진력으로 능률있게 행동하는 개발자가
                            되고싶습니다.{' '}
                        </MyInfo>
                    </Box>
                    <Box>
                        <Title>🔥Learning🔥</Title>
                        <UnderLine></UnderLine>
                        <Image src={`../images/HtmlIcon.png`} />
                        <Image src={`../images/CssIcon.png`} />
                        <Image src={`../images/JsIcon.png`} />
                        <Image src={`../images/ReactIcon.png`} />
                    </Box>
                </Info>
            </Header>
        </>
    );
};

export default Jaewon;

const Header = styled.div`
    height: 100vh;
    width: 100%;
    background: #1488cc;
    background: -webkit-linear-gradient(to right, #2b32b2, #1488cc);
    background: linear-gradient(to right, #2b32b2, #1488cc);
`;

const HeadLine = styled.h4`
    text-shadow: 12px 12px 12px #000069;
    padding-bottom: 32px;
`;

const Me = styled.div`
    font-size: 84px;
    color: #ebf5ff;
    font-weight: 1000;
    text-align: center;
    padding-top: 84px;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Box = styled.div`
    width: 350px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-top: 120px;
    border-radius: 20px;
    text-align: center;
    font-size: 44px;
    font-weight: 1000;
    color: #e0ebff;
    padding: 20px;
    box-shadow: 10px 10px 10px #000069;
`;

const UnderLine = styled.div`
    width: 300px;
    height: 3px;
    background-color: rgba(51, 51, 102, 0.3);
    box-shadow: 1px 1px 1px #000069;
    border-radius: 1.5px;
    margin-bottom: 36px;
`;

const Image = styled.img`
    width: 130px;
    height: 120px;
    margin: 10px;
    box-shadow: 6px 6px 6px #000033;
    border-radius: 20px;
`;

const Title = styled.p`
    margin-top: 10px;
    margin-bottom: 32px;
    text-shadow: 4px 4px 4px #000069;
`;

const MyInfo = styled.span`
    font-size: 28px;
    color: #e0ebff;
    text-shadow: 2px 2px 2px #000033;
`;
const Imoji = styled.span`
    font-size: 36px;
`;
