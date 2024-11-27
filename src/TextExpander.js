import { useState } from "react";

const containerStyle = {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    overflow: "hidden",
};

const textStyle = {
    margin: "0",
    color: "#333",
    fontSize: "clamp(0.9rem, 1.2vw, 1.5rem)",
    letterSpacing: "0.8px",
};

// const headingStyle = {
//     fontSize: 'clamp(2rem, 5vw, 4rem)',
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     margin: 0,
// }
export default function TextExpander({
    children = "Text Here",
    isOpen = false,
    truncateLength = 10,
    showMoreText = "Show More",
    showLessText = "Show Less",
    btnColor = "#007bff",
}) {
    const [isExpanded, setIsExpanded] = useState(isOpen);
    const truncatedText =
        String(children).split(" ").length > truncateLength
            ? String(children).split(" ").slice(0, truncateLength).join(" ") + "...."
            : String(children);

    const buttonStyle = {
        marginTop: "8px",
        padding: "6px 12px",
        backgroundColor: btnColor,
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "0.9rem",
        textAlign: "center",
        width: "fit-content",
    };

    function HandleToggle() {
        setIsExpanded(() => !isExpanded);
    }

    return (
        <div style={containerStyle}>
            <p style={textStyle}>{isExpanded ? children : truncatedText}</p>
            {String(children).split(" ").length > truncateLength && (
                <button
                    style={buttonStyle}
                    aria-expanded={isExpanded}
                    onClick={HandleToggle}
                >
                    {isExpanded ? showLessText : showMoreText}
                </button>
            )}
        </div>
    );
}
