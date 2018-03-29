export interface Request {
    readonly id: number;
    readonly submittedDate: Date;
    employeeId: number;
    workJustification: string;
    hoursMissed: number;
    status: number;
    grade: string;
    reason: string;
    reimbursementAmount: number;
}
