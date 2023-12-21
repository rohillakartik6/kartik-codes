import AnimatedCursor from "react-animated-cursor";

function Cursor() {
    return (
        <>
            <AnimatedCursor
                outerStyle={{ backgroundColor: "#96C291" }}
                innerStyle={{ backgroundColor: "black" }}
            />
        </>
    );
}

export default Cursor;
