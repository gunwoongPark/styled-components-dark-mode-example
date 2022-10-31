import styled from "styled-components";

function App() {
  return (
    <Pub.Container>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <button onClick={() => console.log("click !!")}>DARK MODE</button>
    </Pub.Container>
  );
}

export default App;

const Pub = {
  Container: styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    & div {
      border: 2.5px solid black;
      width: 600px;
      height: 400px;
      padding: 0 14px;
      display: flex;
      align-items: center;
      line-height: 1.5;
      font-size: 22px;
      text-align: center;
    }

    & button {
      height: 48px;
      padding: 0 14px;
      background: transparent;
      border: 1.5px solid black;
      cursor: pointer;
    }
  `,
};
