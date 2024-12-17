import React from "react";
import "./ForYou.css";

const ForYou = () => {
    // Create an array of 15 items to map over
    const forYouItems = Array.from({ length: 200 });

    return (
        <div className="forYouComponent">
            <span>For You</span>
            {forYouItems.map((_, index) => (
                <div key={index} className="forYouContent">
                    <div className="forYou-imageComponent">
                        <img
                            src="./assets/images/background.jpg"
                            alt="stock"
                            className="forYou-imageContent"
                        />
                    </div>
                    <div className="forYou-infoComponent">
                        <div className="forYou-infoContent">
                            <div className="forYou-category-sourceComponent">
                                <div className="forYou-categoryContent">World</div>
                                <div className="forYou-sourceContent">Associated Press</div>
                            </div>
                            <div className="forYou-headlineComponent">
                                <h1 className="forYou-headlineContent">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h1>
                            </div>
                            <div className="forYou-timereadComponent">
                                <p className="forYou-timereadContent">2 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ForYou;