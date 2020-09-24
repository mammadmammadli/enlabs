import { IDate } from './common';
import { ICompany } from './company';

export interface IOffice extends IDate {
    city: string;
    company: ICompany;
}