import seriesData from "../api/seriesData.json"
import List from "./List";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-col">
      {
        seriesData.map((curElem) => <List key={curElem.id} data={curElem} />)
      }
    </ul>
  );
};

export default NetflixSeries