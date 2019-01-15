import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  forma:FormGroup;
  formaCompany:FormGroup;
  press:boolean = false;
  dateAd:any;
  older:any;
  step:boolean = true;
  idUser:string;

  user:User = {
    name:"",
    lastname:"",
    identification:"",
    brithday: new Date('00/00/0000'),
    company: {
      company:"",
      nit:"",
      current_salary:"",
      admission_date: new Date('00/00/0000')
    }
  }


  constructor(
    private _userService:UserService,
    private router:Router,
    private _activatedRoute:ActivatedRoute
  ) {
    this._activatedRoute.params
      .subscribe(params=>{
        this.idUser = params['id'];

        if(this.idUser !== "nuevo"){
          this._userService.getUser(this.idUser)
            .subscribe( user => this.user = user )
        }
      })
  }

  ngOnInit() {

    this.dateAd = new Date();
    this.older = new Date();
    this.older.setMonth(this.older.getMonth() - 216);

    this.forma = new FormGroup({
      'name': new FormControl('',[ Validators.required ]),
      'lastname': new FormControl('',[ Validators.required ]),
      'identification': new FormControl('',[ Validators.required , Validators.pattern('[0-9]+')]),
      'brithday': new FormControl('',[ Validators.required ])
    })

    this.formaCompany = new FormGroup({
      'company': new FormControl('',[ Validators.required ]),
      'nit': new FormControl('',[ Validators.required , Validators.pattern('[0-9]+')]),
      'current_salary': new FormControl('',[ Validators.required , Validators.pattern('[0-9]+')]),
      'admission_date': new FormControl('',[ Validators.required ])
    })

  }

  saveClient(){
    this.press = true;
    if(this.forma.valid){
      this.press = false;
      this.step = false;

      if(this.idUser == "nuevo"){

        this._userService.newUser(this.user)
          .subscribe(data=>{
             this.router.navigate(['/register',data.name])
          },
          error=> console.error(error));

      }else{

        this._userService.updateUser(this.user, this.idUser)
          .subscribe( data =>{
            console.log(data);
          },
          error=> console.error(error));

      }

    }
  }

  saveCompany(){
    this.press = true;
    console.log(this.formaCompany);

    if(this.formaCompany.valid){

      this._userService.updateUser(this.user, this.idUser)
        .subscribe( data =>{
          this.router.navigate(['/credit',this.idUser ])
        },
        error=> console.error(error));
    }
  }

}
