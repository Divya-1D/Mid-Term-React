import React from "react";
// Functional Component for Header, which handles toggling 
const Header = ({ handleToggleDarkMode }) => {
    return(
            <div className="header">
                <h1>Welcome to Notes</h1>
                <button
                        onClick={() => 
                            handleToggleDarkMode(
                               (previousDarkMode)=> !previousDarkMode
                            )
                        }
                        className="save"
                >
                        Toggle Mode
                </button>
        </div>
    );
};

export default Header;