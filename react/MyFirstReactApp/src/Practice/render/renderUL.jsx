import { RenderList } from "./renderLI";

export function RenderLists({allSeries}) {
  return (
    <ul>
      {allSeries.map((seriesList) => {
        return <RenderList seriesName={seriesList} key={seriesList} />;
      })}
    </ul>
  );
}
