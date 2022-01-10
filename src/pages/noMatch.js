const { useLocation } = require("react-router-dom");


const NoMatchPage = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                올바르지 못한 주소입니다 <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default NoMatchPage
