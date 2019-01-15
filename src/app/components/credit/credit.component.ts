import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  idUser:string;
  admission_date:Date;
  worked:Date;
  salary:any;
  approved_value:number;
  message:string;

  constructor(
      private _userService:UserService,
      private _activatedRoute:ActivatedRoute,
      private router:Router
  ) {

  }

  ngOnInit() {

    this._activatedRoute.params
      .subscribe(params=>{
        this.idUser = params['id'];
          this._userService.getUser(this.idUser)
            .subscribe( data =>{
                if(data){
                    // mas de 1 año de experiencia
                    this.admission_date = new Date(data.company.admission_date);
                    this.worked = new Date();
                    this.worked.setMonth(this.worked.getMonth() - 18);
                    //salaria superior a $800.000
                    this.salary = data.company.current_salary;

                    if(this.admission_date.getMonth() < this.worked.getMonth() && this.salary > 80000){
                      this.message = "Felicidades tu credito fue aprobado";
                      //salaria inferior a $1000.000
                      if(this.salary < 1000000){
                        this.approved_value = 5000000;
                      //salario superior a $1000.000 y inferior a $4000.000
                      }else if(this.salary > 1000000 && this.salary < 4000000 ){
                        this.approved_value = 20000000;
                      //salario superior a $4000.000
                      }else if(this.salary > 4000000){
                        this.approved_value = 50000000;
                      }
                    }else{
                      this.message = "Lamentamos decirle que el credito no fue aprobado";
                      this.approved_value = 0;
                    }
                }else{
                  this.router.navigate(['/register','nuevo']);
                }
            })
      })

  }


}
