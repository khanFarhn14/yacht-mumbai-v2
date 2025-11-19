import React from "react";
import "./loader.scss";

export default function Loader() {
    return (
        <React.Fragment>
            <div className="loader-overlay">
                <div className="pulsating-loader" role="status" aria-label="Loading">
                    <span className="pulse"></span>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </React.Fragment>
    );
}