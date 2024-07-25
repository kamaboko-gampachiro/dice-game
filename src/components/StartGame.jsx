import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between; /* Add spacing between items */

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center; /* Center the image within the container */
    height: 700px; /* Set a default height */
    width: 700px; /* Set a default width */
  }

  .image img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover; /* Ensure the image covers the container without distortion */
  }

  @media (max-width: 721px) {
    flex-direction: column;
    margin-top: -60px;
    justify-content: center;
    align-items: center; /* Center all items */

    .image {
      height: 60%;
      width: 100%;
    }
    .content {
      h1 {
        font-size: 36px;
        white-space: nowrap;
      }
      Button {
        width: 50%;
        padding: 5px;
      }
    }
  }
`;
