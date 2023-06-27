import { ClinicInterface } from 'interfaces/clinic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  clinic_id: string;
  patient_id: string;
  created_at?: any;
  updated_at?: any;

  clinic?: ClinicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  clinic_id?: string;
  patient_id?: string;
}
