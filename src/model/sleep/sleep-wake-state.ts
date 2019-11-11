/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import { SleepWakeStateType, SleepWakeStateTypeSchema } from "./sleep-wake-state-type";

/**
 * Sleep Wake State Information
 * @since 2.4.0
 */
export interface ISleepWakeState {
    /**
     * Long interuption
     */
    longInterruption: boolean;
    /**
     * Offset from start of sleep
     */
    offsetFromStart: number;
    /**
     * Sleep Wakte State described in {@link SleepWakeStateType}
     */
    sleepWakeState: SleepWakeStateType;
}

export const SleepWakeStateSchema: Schema = {
    properties: {
        longInterruption: {
            type: "boolean",
        },
        offsetFromStart: {
            type: "number",
        },
        sleepWakeState: SleepWakeStateTypeSchema,
    },
    type: "object",
};
