interface UETDangkymonParams {
    termId: string;
    pageSize?: number;
    studentId?: string;
    studentName?: string;
}
declare class UETDangkymon {
    readonly termId: string;
    readonly pageSize?: number;
    readonly studentId?: string;
    readonly studentName?: string;
    private readonly instance;
    constructor({ termId, pageSize, studentId, studentName, }: UETDangkymonParams);
    getList(): Promise<string>;
}

export { UETDangkymon };
