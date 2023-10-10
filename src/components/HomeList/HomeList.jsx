const { default: HomeItem } = require("components/HomeItem/HomeItem")
const { StyledHomeList } = require("./HomeList.styled")

const HomeList = ({movies}) => {
    return (
        <StyledHomeList>
            {movies.map(({title, id, poster_path}) => (
                <HomeItem 
                key={id}
                title={title}
                poster_path={poster_path}
                id={id} />
            ))}
            </StyledHomeList>
    );
};

export default HomeList;