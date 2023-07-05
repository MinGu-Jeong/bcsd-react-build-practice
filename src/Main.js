import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 30px;
`;
const Input = styled.input`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;
const MoveButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: gray;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

function Main() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  const inputNum = useRef();
  function inputChange() {
    const numValue = inputNum.current.value;
    setNumber(numValue);
  }
  function clickMoveButton() {
    navigate(`/Counter/${number}`);
  }
  return (
    <div>
      <View>
        <Input ref={inputNum} onChange={inputChange} />
        <MoveButton onClick={clickMoveButton}>이동하기</MoveButton>
      </View>
    </div>
  );
}

export default Main;
