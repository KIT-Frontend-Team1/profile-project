import React, { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
const HyerinProfile = () => {
  //url에 있는 파라미터의 값을 가져옴
  //탭을 클릭할때마다 맨뒤의 숫자가 바뀌고(id) 이를 id라는 변수에 집어넣어 활용할 수 있다.
  //=> 탭을 클릭할 때마다 사진이 바뀌도록 만듦
  //61번째 줄
  const { id } = useParams(); //page 1
  //탭마다 좋아요수를 다르게 저장함
  //75번째 줄
  const [like, setLike] = useState([0, 0, 0]);
  //clickLike : 해당 게시물의 좋아요 수를 1씩 올려주는 함수
  //처음의 state는 배열로 되어있어 배열의 원소마다 게시물의 좋아요 수를
  //각각 저장할 수 있다.
  const clickLike = () => {
    setLike((prev) => {
      //[0,0,0]
      const newLike = [...prev];
      newLike[id] += 1;
      return newLike;
    });
  };
  const [page, setPage] = useState(0);
  return (
    <>
      <Title>혜린의 스토리</Title>
      <TabContainer>
        <Link to={`/hyerin/0`}>
          {/*탭 밑에 있는 border css*/}
          <Tab
            className={page === 0 ? "show" : null}
            onClick={() => {
              setPage(0);
            }}
          >
            story1
          </Tab>
        </Link>
        <Link to={`/hyerin/1`}>
          <Tab
            className={page === 1 ? "show" : null}
            onClick={() => {
              setPage(1);
            }}
          >
            story2
          </Tab>
        </Link>
        <Link to={`/hyerin/2`}>
          <Tab
            className={page === 2 ? "show" : null}
            onClick={() => {
              setPage(2);
            }}
          >
            story3
          </Tab>
        </Link>
      </TabContainer>
      <ProfileBox>
        {/*이미지가 변환되는 곳*/}
        <ProfileImg src={`../images/hyerin${id}.jpeg`} />
        <ContentBox>
          <IconBox>
            {like[id] !== 0}
            <FontAwesomeIcon
              icon={faHeart}
              style={{ height: "2rem", color: "red" }}
              onClick={clickLike}
            />
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ height: "2rem", color: "#333" }}
            />
          </IconBox>
          {/*각 이미지마다 좋아요수를 다르게 보여주고 저장*/}
          <TextBox>
            <div>좋아요 {like[id]}개</div>
          </TextBox>
        </ContentBox>
      </ProfileBox>
    </>
  );
};
export default HyerinProfile;

const Tab = styled.div`
  width: 200px;
  height: 80px;
  font-size: 20px;
  text-align: center;
  padding-top: 30px;
  &.show {
    border-bottom: 2px solid #333;
  }
`;
const TabContainer = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const ProfileBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  justify-items: center;
  /* align-items: center; */
  flex-direction: column;
  padding-top: 50px;
`;
const ProfileImg = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 20px;
  margin: 0 auto;
`;
const ContentBox = styled.div`
  width: 450px;
  border-radius: 20px;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
`;

const IconBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;

const TextBox = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`;
