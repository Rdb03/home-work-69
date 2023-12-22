import {NavLink} from "react-router-dom";
import './ToolBar.css';

const ToolBar = () => {
    return (
        <div className="toolbar">
            <div className="container">
                <NavLink to="/" className="logo">TV Shows</NavLink>
            </div>
        </div>
    );
};

export default ToolBar;