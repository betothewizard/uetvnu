import axios, { AxiosInstance, AxiosResponse } from "axios";
import https from "https";

interface UETDangkymonParams {
  termId: string;
  pageSize?: number;
  studentId?: string;
  studentName?: string;
}

export default class UETDangkymon {
  public readonly termId: string;
  public readonly pageSize?: number;
  public readonly studentId?: string;
  public readonly studentName?: string;
  private readonly instance: AxiosInstance;

  constructor({
    termId,
    pageSize = 10,
    studentId = "",
    studentName = "",
  }: UETDangkymonParams) {
    this.termId = termId;
    this.pageSize = pageSize;
    this.studentId = studentId;
    this.studentName = studentName;

    const agent = new https.Agent({ rejectUnauthorized: false });
    this.instance = axios.create({
      baseURL: "https://daotaodaihoc.uet.vnu.edu.vn",
      httpsAgent: agent,
    });
  }
  public async getList(): Promise<string> {
    const data = await this.instance
      .get("/qldt", {
        params: {
          "SinhvienLmh[term_id]": this.termId,
          "SinhvienLmh[pageSize]": this.pageSize,
          "SinhvienLmh[masvTitle]": this.studentId,
          "SinhvienLmh[hotenTitle]": this.studentName,
        },
      })
      .then((response: AxiosResponse) => {
        return response.data;
      });
    return data;
  }
}
