// Write your Character component here
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  margin: 0 4rem;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 3rem;
`;

const CharacterText = styled.h2`
  border: 3px solid blue;
  padding: 1rem;
  color: yellow;
  fontsize: 18px;
  background-color: black;
  margin: 0 3rem;
`;

const CharacterBday = styled.h3`
  fontsize: 2rem;
  color: yellow;
  background-color: black;
  border: 2px solid red;
  padding: 1rem;
`;

const Character = (props) => {
  console.log("character: ", props);
  return (
    <MainContainer>
      <CharacterContainer
        onClick={() => {
          console.log(props.character.name);
        }}
      >
        <CharacterText>{props.character.name}</CharacterText>
        <CharacterBday>Born: {props.character.birth_year}</CharacterBday>
      </CharacterContainer>
    </MainContainer>
  );
};

export default Character;
