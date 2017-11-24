import { Answer } from "./Answer";

export class MMSETest {
    id: number;
    subjectId: number;
    subjectName: string;
    status: string;
    answers: { [questionid: number]: Answer };
}