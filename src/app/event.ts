export interface Event {
    readonly id: number;
    type: number;
    date: Date;
    location: string;
    description: string;
    cost: number;
    gradingFormat: string;
    passingGrade: string;
}
