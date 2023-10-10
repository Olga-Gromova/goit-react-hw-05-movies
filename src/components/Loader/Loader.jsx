import { Vortex } from 'react-loader-spinner';

const Loader = () => {
    return (
  <div>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '50%',
      }}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  </div>
);
};
export default Loader;