import { IDate } from './common';
import { ICompany } from './company';

export interface IOffice extends IDate {
    id: number;
    city: string;
    company: ICompany;
}