import { DaySummary } from './model';
import * as jsonschema from 'jsonschema';
import { ActivityTimelineSchema } from './schemas/day-summary';

export class FlowApiValidator {
    public static validateTimelineSummary(data: DaySummary | any): jsonschema.ValidatorResult {
        const val: jsonschema.Validator = new jsonschema.Validator();
        val.addSchema(ActivityTimelineSchema);
        return val.validate(data, ActivityTimelineSchema);
    }

    public static validateTimelineSummaryPromise(data: DaySummary | any): Promise<jsonschema.ValidatorResult> {
        return new Promise((resolve, reject) => {
            const result: jsonschema.ValidatorResult = this.validateTimelineSummary(data);
            resolve(result);
        });
    }
}