import { useEffect } from "react";
import { useQuery } from "react-query";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { queryOptions } from "../../api/rest/client";
import useAPI from "../../api/rest/useAPI";
import { useErrorContext } from "../../context/ErrorContext";
import { ChartProps } from "../../interfaces/props";
import Spinner from "../Spinner";

const Chart = (props: ChartProps) => {
  const { getExchangeRates } = useAPI();
  const { showError } = useErrorContext();

  const {
    data: chartData,
    isLoading,
    isError,
    error,
  } = useQuery("chartData", () => getExchangeRates(props.assetID), {
    ...queryOptions,
    refetchOnMount: true,
  });

  useEffect(() => {
    isError && showError(String(error));
  }, [isError, error]);

  return (
    <>
      <h2>{props.assetID}/USD exchange rates in the last week</h2>
      {isLoading && <Spinner />}

      <LineChart width={600} height={300} data={chartData?.data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="time_period_start" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rate_high" stroke="green" />
        <Line type="monotone" dataKey="rate_low" stroke="red" />
        <Spinner />
      </LineChart>
    </>
  );
};

export default Chart;
