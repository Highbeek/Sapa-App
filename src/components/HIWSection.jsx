import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 748px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 25px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  color: var(--olive);
`;

const CardIconWrap = styled.div`
  font-size: 2em;
  margin-top: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: space-around;
  padding-top: 1.3em;
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0;
  padding-left: 1em;
`;

const CardList = styled.ul`
  list-style-type: disc;
`;

const CardListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  font-size: 1em;
  font-weight: 400;
  line-height: 3;
  list-style-type: disc;
`;

const HIWSection = ({ iconUrl, title, bulletPoints }) => {
  return (
    <CardGrid>
      <Card>
        <CardIconWrap>{iconUrl}</CardIconWrap>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardList>
            {bulletPoints.map((bullet) => (
              <CardListItem key={bullet}>{bullet}</CardListItem>
            ))}
          </CardList>
        </CardContent>
      </Card>
    </CardGrid>
  );
};

export default HIWSection;
