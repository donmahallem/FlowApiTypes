import { INightSleep } from "./night-sleep";
import { ISleepEvaluationData } from "./sleep-evaluation-data";

export interface ISleepSummary {
    date: string;
    nightSleep: INightSleep;
    sleepEvaluationData: ISleepEvaluationData;
}
