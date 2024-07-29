import React from "react";

const CarrerWebView = () => {
  return (
    <>
      <section>
        <div className="carrerWebViewContainer">
          {/* <iframe
                src="https://chatgpt.com"
                frameborder="0"
                className="h-100 w-100"
            ></iframe> */}  
          <iframe
            src="https://www.dignizant.com/"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="h-100 w-100"
          ></iframe> 
        </div>
      </section>
    </>
  );
};

export default CarrerWebView;
