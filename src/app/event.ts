export interface Event {
    readonly id: number;
    type: number;
    date: Date;
    location: string;
    cost: number;
    gradingFormat: string;
    passingGrade: string;
}
