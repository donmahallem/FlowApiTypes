export interface INightSleep {
    id: number;
    night: string;
    sleepEndOffset: number;
    sleepEndTime: string;
    sleepGoal: number;
    sleepRating: null | "SLEPT_NEITHER_BAD_NOR_WELL";
    sleepStartOffset: number;
    sleepStartTime: string;
}

export interface ISleepInterval {
    sleepWakeState: number;
    offsetFromStart: number;
    longInterruption: boolean;
}

export interface ISleepEvaluationData {
    asleep: number;
    continuityClass: number;
    continuityIndex: number;
    efficiencyPercent: number;
    longFeedback: string;
    longInterruptionCount: number;
    longInterruptionDuration: number;
    shortFeedback: string;
    shortInterruptionCount: number;
    shortInterruptionDuration: number;
    sleepRatioPercentage: number;
    sleepSpan: number;
    totalInterruptionCount: number;
    totalInterruptionDuration: number;
}

export interface ISleepSummary {
    date: string;
    nightSleep: INightSleep;
    sleepEvaluationData: ISleepEvaluationData;
}

export interface ISleepNearby {
    nextNight: ISleepSummary;
    previousNights: ISleepSummary[];
}
