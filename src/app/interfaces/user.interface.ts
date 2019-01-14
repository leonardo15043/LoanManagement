
export interface User{
  name:string;
  lastname:string;
  identification:any;
  brithday:Date;
  company: {
    company:string;
    nit:any;
    current_salary:any;
    admission_date:Date;
  }
}
