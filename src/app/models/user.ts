import { IDate } from './common';
import { ICompany } from './company';
import { IOffice } from './office';
import { ITag } from './tag';

export interface IUser extends IDate {
  id: number;
  company: ICompany;
  firstName: string;
  lastName: string;
  birthDate: Date;
  tags: ITag[];
  officeId: number;
  office: IOffice;
  phoneNumber: string;
}
