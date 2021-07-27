import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondassgnlocalstorage',
  templateUrl: './secondassgnlocalstorage.component.html',
  styleUrls: ['./secondassgnlocalstorage.component.css']
})
export class SecondassgnlocalstorageComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
   
  }

  login(){
    let varlogin: any = document.getElementById('login');
    let varregister: any = document.getElementById('register');
    let varbtn: any = document.getElementById('btn');
    varlogin.style.left = "50px";
    varregister.style.left="450px";
    varbtn.style.left="0px";
  

  }

  register(){
    
  
    let varlogin: any = document.getElementById('login');
    let varregister: any = document.getElementById('register');
    let varbtn: any = document.getElementById('btn');
    varlogin.style.left = "-400px";
    varregister.style.left="50px";
    varbtn.style.left="50px";
  }

}
