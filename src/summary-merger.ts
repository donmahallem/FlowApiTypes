import { IDayData, IDaySummary } from "./model";

export class SummaryMerger {
    private data: IDaySummary = {};

    /**
     * generates the day key
     * @param day the day the key to generate from
     */
    public generateKey(day: IDayData): string {
        const timestamp: number = day.miniGraphData.data.date;
        const dateObj: Date = new Date(timestamp);
        return dateObj.toISOString();
    }

    /**
     * Adds a day
     * @param day the day to be added
     * @param force force insert
     */
    public add(day: IDayData, force: boolean = false, key?: string): void {
        const dayKey: string = key ? key : this.generateKey(day);
        if (this.data[dayKey] && force === false) {
            throw new Error("Day already exists in merge");
        }
        this.data[dayKey] = day;
    }

    public set(key: string, data: IDayData): void {
        this.data[key] = data;
    }

    public addSummary(summary: IDaySummary): void {
        for (const key of Object.keys(summary)) {
            this.data[key] = summary[key];
        }
    }

    /**
     * Adds multiple days to the summary
     * @param days The days to be added
     * @param force
     */
    public addAll(days: IDayData[], force: boolean = false): void {
        for (const day of days) {
            this.add(day, force);
        }
    }

    /**
     * Gets the map
     */
    public get(): IDaySummary {
        return this.data;
    }

    public contains(key: string): boolean {
        return (typeof this.data[key] !== "undefined");
    }
}
