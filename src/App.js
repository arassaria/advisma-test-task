import { useState } from "react";
import styled from "styled-components/macro";

function App() {
  const [isActive, setIsActive] = useState("black");

  return (
    <Body>
      <TopBar></TopBar>
      <Preview>
        <Sheet></Sheet>
        <Settings>
          <h2>Sample Editor</h2>
          <h3>Location</h3>
          <input type="text" placeholder="Location" value="Los Angeles" />
          <h3>Dedication</h3>
          <input
            type="text"
            placeholder="dedication"
            value="Sample dedication"
          />
          <h3>Date</h3>
          <input type="date" />
          <h3>Design</h3>
          <Buttons>
            <Blackbox onClick={() => setIsActive("black")}>
              {isActive === "black" ? "✔" : ""}
            </Blackbox>
            <Bluebox onClick={() => setIsActive("blue")}>
              {isActive === "blue" ? "✔" : ""}
            </Bluebox>
            <Greenbox onClick={() => setIsActive("green")}>
              {isActive === "green" ? "✔" : ""}
            </Greenbox>
            <Yellowbox onClick={() => setIsActive("yellow")}>
              {isActive === "yellow" ? "✔" : ""}
            </Yellowbox>
            <Orangebox onClick={() => setIsActive("orange")}>
              {isActive === "orange" ? "✔" : ""}
            </Orangebox>
            <Redbox onClick={() => setIsActive("red")}>
              {isActive === "red" ? "✔" : ""}
            </Redbox>
          </Buttons>
          <Button>Generate PDF</Button>
        </Settings>
      </Preview>
    </Body>
  );
}

export default App;

const Body = styled.div``;

const TopBar = styled.div`
  background-color: white;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  width: 1440px;
  height: 56px;
`;

const Preview = styled.div`
  background-color: #f3f3f3;
  height: 892px;
  width: 1440px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 56px;
`;

const Sheet = styled.div`
  background-color: white;
  height: 712px;
  width: 509px;
  margin-left: 211px;
  margin-top: 141px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Settings = styled.div`
  background-color: white;
  height: 100%;
  width: 466px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 376px;
  height: 49px;
  background-color: black;
  color: white;
  position: absolute;
  top: 815px;
  margin-left: 44px;
`;

const Blackbox = styled.button`
  width: 55px;
  height: 55px;
  background-color: black;
  color: white;
  font-size: 40px;
`;

const Bluebox = styled.button`
  width: 55px;
  height: 55px;
  background-color: blue;
  color: white;
  font-size: 40px;
`;

const Greenbox = styled.button`
  width: 55px;
  height: 55px;
  background-color: green;
  color: white;
  font-size: 40px;
`;

const Yellowbox = styled.button`
  width: 55px;
  height: 55px;
  background-color: yellow;
  color: white;
  font-size: 40px;
`;

const Orangebox = styled.button`
  width: 55px;
  height: 55px;
  background-color: orange;
  color: white;
  font-size: 40px;
`;

const Redbox = styled.button`
  width: 55px;
  height: 55px;
  background-color: red;
  color: white;
  font-size: 40px;
`;
