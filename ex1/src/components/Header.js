import React, { useContext } from 'react';
import '../App.css'
import styled from 'styled-components';
import { faSeedling, faCircleHalfStroke, faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  // hook함수 useContext 사용으로 모든 자식 요소에 props를 전달하지 않고 필요한 노드에만 적용 가능
  const {isDark, setIsDark} = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <Container style={{background : isDark ? '#262626' : null}}>
      <HeaderStyled className={isDark ? 'dark' : null}>
        <Title>
          <FontAwesomeIcon icon={faSeedling} className='lightIcon' style={{color : isDark ? '#ebebeb' : null}} />
          <Span style={{color : isDark ? '#ebebeb' : null}}>Yeseul's Page</Span>
        </Title>
        <Right>
          <Btn onClick={toggleTheme}><FontAwesomeIcon icon={faCircleHalfStroke} className='headerRight' style={{color : isDark ? '#fff' : null}} /></Btn>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='headerRight' style={{color : isDark ? '#ebebeb' : null}} />
            <Link to='/'>
              <BtnNew className={isDark ? 'dark' : null}>새 글 작성</BtnNew>
            </Link>
        </Right>
      </HeaderStyled>
    </Container>
  )
}

const Container = styled.div`
  height: 4rem;
  margin: 0 auto;
`
const HeaderStyled = styled.header`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  border-bottom: 1px solid #333;
  &.dark {
    border-bottom: 1px solid #ebebeb;
  } 
`
const Title = styled.div`
  display: flex;
  align-items: center;
`
const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
`
const Btn = styled.button`
  cursor: pointer;
`

const BtnNew = styled.button`
  border: 1px solid #333;
  cursor: pointer;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  &.dark {
    color: #ebebeb;
    border: 1px solid #ebebeb;
  }
`

const Right = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Header