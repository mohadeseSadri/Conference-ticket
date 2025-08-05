import BackgroundImg from "../assets/Images/background-desktop.png";

function Background() {
    return (
        <div className="background">
            <img src={BackgroundImg} alt="BackgroundImg" className="absolute w-100 h-100" />
        </div>
    )
}

export default Background;