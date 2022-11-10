import useSWR, { Fetcher } from "swr";
import { JMAQuakeAllOf } from "./models";

const fetcher: Fetcher<JMAQuakeAllOf[]> = async () => {
  const data: JMAQuakeAllOf[] = await (
    await fetch("https://api.p2pquake.net/v2/history?codes=551&limit=100")
  ).json();
  return data;
};

export function APIView() {
  const { data } = useSWR("/v2/history", fetcher, { suspense: true });

  return (
    <>
      {data?.map((item, index) => (
        <p key={index}>
          {item.issue.type}: {item.issue.time} {item.issue.source} 発表 (訂正:{" "}
          {item.issue.correct})<br />
          {item.earthquake.time} 発生
          <br />
          最大震度 {item.earthquake.maxScale}
          <br />
          津波の心配 {item.earthquake.domesticTsunami}
          <br />
        </p>
      ))}
    </>
  );
}
