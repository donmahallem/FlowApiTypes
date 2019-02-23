import { ActivityTimelineSchema } from "./schemas/day-summary";
import { IDaySummary } from "./model";
import * as jsonschema from "jsonschema";

export class FlowApiValidator {
    public static validateTimelineSummary(data: IDaySummary | any): jsonschema.ValidatorResult {
        const val: jsonschema.Validator = new jsonschema.Validator();
        val.addSchema(ActivityTimelineSchema);
        return val.validate(data, ActivityTimelineSchema);
    }

    public static validateTimelineSummaryPromise(data: IDaySummary | any): Promise<jsonschema.ValidatorResult> {
        return new Promise((resolve, reject) => {
            const result: jsonschema.ValidatorResult = this.validateTimelineSummary(data);
            resolve(result);
        });
    }
}
