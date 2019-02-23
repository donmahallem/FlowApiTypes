import * as jsonschema from 'jsonschema';

export const TimeValuePairSchema: jsonschema.Schema = {
    type: 'object',
    properties: {
        'time': {
            type: 'integer',
        }, value: {
            type: 'number'
        }
    }
}
export const StartEndTimePairSchema: jsonschema.Schema = {
    type: 'object',
    properties: {
        startTime: {
            type: 'integer',
        }, endTime: {
            type: 'number'
        }
    }
}

export const ActivityTimelineIconsSchema: jsonschema.Schema = {
    type: 'object',
    properties: {
        activityTimelineIconType: {
            type: 'string',
        },
        distance: {
            type: 'integer',
        },
        duration: {
            type: 'integer',
        },
        kiloCalories: {
            type: 'integer',
        },
        localTime: {
            type: 'integer',
        },
        sleepPlus: {
            type: 'boolean',
        },
        sportName: {
            type: 'string',
        },
        url: {
            type: 'string',
        }
    }
}

export const ActivityGraphDataSchema: jsonschema.Schema = {
    'id': '/ActivityGraphData',
    'type': 'object',
    'properties': {
        activityTimelineIcons: {
            type: 'array',
            items: ActivityTimelineIconsSchema
        },
        activityTimelineSamples: {
            type: 'array',
            'items': TimeValuePairSchema
        },
        activityZoneLimits: {
            type: 'array',
            'minItems': 1,
            'maxItems': 7,
            'items': {
                'type': 'number'
            }
        },
        heartRateSummary: {
            type: 'object',
            properties: {
                dayMaximum: { type: 'number' },
                dayMaximumDateTime: { type: 'number' },
                dayMinimum: { type: 'number' },
                dayMinimumDateTime: { type: 'number' },
                nightMinimum: { type: 'number' },
                nightMinimumDateTime: { type: 'number' }
            }
        },
        heartRateTimelineSamples: {
            type: 'array',
            items: TimeValuePairSchema
        },
        highSessionTimelineList: { type: 'array' },
        lastSync: { type: 'number' },
        trainingTimelineList: {
            type: 'array',
            items: StartEndTimePairSchema
        }
    }
}


export const ActivityTimelineSchema: jsonschema.Schema = {
    'id': '/ActivityTimeline',
    'type': 'object',
    'patternProperties': {
        // The property name will be passed to new RegExp(prop), so backslashes
        // have to be escaped.
        '^[0-9]{4,4}\-[0-9]{1,2}\-[0-9]{1,2}$': {
            'type': 'object',
            'properties': {
                'dataPanelData': {
                    'type': 'object'
                },
                'activityGraphData': ActivityGraphDataSchema
            }
        }
    },
    'additionalProperties': false
};