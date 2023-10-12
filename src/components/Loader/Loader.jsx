import { ThreeCircles } from 'react-loader-spinner';
import { StyledDiv } from './Loader.styled';

const Loader = () => {
  return (
    <StyledDiv>
      <ThreeCircles
        height="100"
        width="100"
        color="#FF9B50"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </StyledDiv>
  );
};
export default Loader;
