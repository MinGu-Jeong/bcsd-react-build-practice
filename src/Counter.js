import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 30px;
`;
const CurrentNum = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: gray;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const StatusBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.sumProps < 10) {
      console.log(props);
      return "red";
    } else if (props.sumProps >= 10 && props.sumProps < 20) {
      return "yellow";
    } else if (props.sumProps >= 20) {
      return "green";
    }
  }};
`;
function Counter() {
  const { number } = useParams();
  const [sum, setSum] = useState(0);
  function checkSum() {
    setSum(sum + Number(number));
  }
  return (
    <div>
      <View>
        <CurrentNum onClick={checkSum}>{number}</CurrentNum>
        <StatusBox element={sum} sumProps={sum}>
          {sum}
        </StatusBox>
      </View>
    </div>
  );
}

export default Counter;
