// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const CharacterText = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  background: gray;
  border: 2px solid red;
`;

const Character = (props) => {
  console.log("character: ", props);
  return (
    <CharacterContainer
      onClick={() => {
        console.log(props.character.name);
      }}
    >
      <CharacterText>{props.character.name}</CharacterText>
    </CharacterContainer>
  );
};

export default Character;
