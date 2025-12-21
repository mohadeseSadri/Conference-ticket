import BackgroundImg from "../assets/Images/background-desktop.png";

function Background() {
    return (
        <div className="background">
            <img src={BackgroundImg} alt="BackgroundImg" className="absolute w-full h-full z-[0]" />
        </div>
    )
}

export default Background;