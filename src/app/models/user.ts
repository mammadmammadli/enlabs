import { IDate } from './common';
import { ICompany } from './company';
import { IOffice } from './office';

export interface IUser extends IDate {
    id: number;
    company: ICompany;
    firstName: string;
    lastName: string;
    office: IOffice;
    phoneNumber: string;
}