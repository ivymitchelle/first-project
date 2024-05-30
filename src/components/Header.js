import React from "react";

const Header =({ handleToggleDarkMode})=> {
    return(
        <div className="header">
            <h2>OP Notes</h2>
            <button 
            onClick={()=>
                 handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
            }
                className="save">Color</button>
        </div>
    );
};

export default Header;