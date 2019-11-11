/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";

/**
 * Sleep Wake State Type
 * @since 2.4.0
 */
export enum SleepWakeStateType {
    INTERUPTIONS = 0,
    DEEP_SLEEP = 3,
    LIGHT_SLEEP = 2,
    REM = 1,
}

export const SleepWakeStateTypeSchema: Schema = {
    maximum: 3,
    minimum: 0,
    type: "number",
};
