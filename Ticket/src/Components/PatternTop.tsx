import Pattern from "../assets/Images/pattern-squiggly-line-top.svg";

function PatternTop() {
    return (
        <div className="absolute top-0 right-0 z-[1]">
            <img src={Pattern} alt="PatternTop" />
        </div>
    )
}

export default PatternTop;