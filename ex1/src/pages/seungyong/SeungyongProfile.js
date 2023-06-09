import React, { useState } from "react";
import styled from "styled-components";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const SeungyongProfile = () => {
  const { id } = useParams();
  const [like, setLike] = useState([0, 0, 0]);
  const clickLike = () => {
    setLike((prev) => {
      const newLike = [...prev];
      newLike[id] += 1;
      return newLike;
    });
  };
  const [page, setPage] = useState(0);
  return (
    <>
      <Title>룰루랄라~</Title>
      <TabContainer>
        <Link to={`/seungyong/0`}>
          <Tab
            className={page === 0 ? "show" : null}
            onClick={() => {
              setPage(0);
            }}
          >
            story1
          </Tab>
        </Link>
        <Link to={`/seungyong/1`}>
          <Tab
            className={page === 1 ? "show" : null}
            onClick={() => {
              setPage(1);
            }}
          >
            story2
          </Tab>
        </Link>
        <Link to={`/seungyong/2`}>
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
        <ProfileImg src={`../images/seungyong${id}.jpg`} />
        <ContentBox>
          <IconBox>
            {like[id] !== 0}
            <FontAwesomeIcon
              icon={faStar}
              style={{ height: "2rem", color: "red" }}
              onClick={clickLike}
            />
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ height: "2rem", color: "#333" }}
            />
          </IconBox>
          <TextBox>
            <div>좋아요 {like[id]}개</div>
            <div>댓글 {like[id]}개</div>
          </TextBox>
        </ContentBox>
      </ProfileBox>
    </>
  );
};
export default SeungyongProfile;

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
