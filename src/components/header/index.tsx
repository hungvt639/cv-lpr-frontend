import "./style.scss";

const Header = () => {
    return (
        <div className="header flex w-full">
            <div className="flex w-full justify-center items-center text-6xl font-bold flex-col">
                <p>Computer Vision</p>
                <p className="text-3xl mt-3">License Plate Recognition</p>
            </div>
        </div>
    );
};
export default Header;
