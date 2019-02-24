import { Schema } from "jsonschema";

export const StartEndTimePairSchema: Schema = {
    properties: {
        endTime: {
            type: "number",
        },
        startTime: {
            type: "integer",
        },
    },
    type: "object",
};

export interface IStartEndTimePair {
    endTime: number;
    startTime: number;
}
