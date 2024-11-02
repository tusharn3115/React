import seriesData from "../api/seriesData.json"

const NetflixSeries = () => {
  return (
    <ul>
      {
        seriesData.map((curElem) => {
          return (

            <li key={curElem.id}>
              <div>
                <div>
                  <img src={curElem.img_url} alt="image" style={{ height: "40%", width: "40%" }} />
                </div>
                <h2>Name: {curElem.name}</h2>
                <h3>Rating: {curElem.rating}</h3>
                <p>Summary: {curElem.description}</p>
                <p>Genre: {curElem.genre}</p>
                <p>Cast: {curElem.cast}</p>
                <a href={curElem.watch_url} target="_blank">
                  <button>Watch Now</button>
                </a>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

export default NetflixSeries