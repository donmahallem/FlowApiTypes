export enum SleepWakeStateType {
    INTERUPTIONS = 0,
    DEEP_SLEEP = 3,
    LIGHT_SLEEP = 2,
    REM = 1,
}
export interface ISleepWakeState {
    longInterruption: boolean;
    offsetFromStart: number;
    sleepWakeState: SleepWakeStateType;
}
