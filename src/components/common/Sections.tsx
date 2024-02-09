const Sections = () => {
  return (
    <div className="wrapper">
      <div className="divisions">
        <section></section>
        <section></section>

        <section className="section-3">
          <div className="section-3-content absolute w-full h-full">
            <div className="flex justify-center items-center h-full w-full  ">
              <div className="menu w-40 h-40  rounded-full border-2 border-[#4f4c4c]"></div>
            </div>
            <div className="play">
              <div className="play-backdrop"></div>
              <div className="play-button">
                <svg className="play-circles" viewBox="0 0 152 152">
                  <circle
                    className="play-circle-01"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-dasharray="343 343"
                    cx="76"
                    cy="76"
                    r="72.7"
                  />
                  <circle
                    className="play-circle-02"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-dasharray="309 309"
                    cx="76"
                    cy="76"
                    r="65.5"
                  />
                </svg>
                <div className="play-perspective">
                  <button className="play-close"></button>
                  <div className="play-triangle">
                    <div className="play-video">
                      <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sections;
