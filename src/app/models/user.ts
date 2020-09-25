import { IDate } from './common';
import { ICompany } from './company';
import { IOffice } from './office';
import { ITag } from './tag';

export interface IUser extends IDate {
    id: number;
    company: ICompany;
    firstName: string;
    lastName: string;
    tags: ITag[];
    office: IOffice;
    phoneNumber: string;
}