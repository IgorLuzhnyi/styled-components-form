import { StyledHome } from "./styles/StyledHome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledHome>
      <p>Congrats! You are in.</p>
      <Link to="/" className="logout-btn">
        Log out
      </Link>
    </StyledHome>
  );
};

export default Home;
