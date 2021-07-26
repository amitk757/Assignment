import { Component, OnInit } from '@angular/core';

class listuser{
  id:number=0
  firstname:string
  lastname:string=""
  age:number=0
  gender:string=""
  address:string=""

  constructor()
  {
    this.firstname="";
  }
  
}
@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {

  _listclass:listuser[];
  _selectedUser:listuser={id:0,firstname:"",lastname:"",age:0,gender:'-1',address:""};
  constructor() 
  {
  
this._listclass=[
  {id:101,firstname:"Amit",lastname:"Kumar",age:24,gender:'M',address:'UP India'},
  {id:102,firstname:"John",lastname:"Rambo",age:34,gender:'M',address:'Australia'},
  {id:103,firstname:"Mac",lastname:"bos",age:36,gender:'T',address:'NewZealand'},
  {id:104,firstname:"shafali",lastname:"Priya",age:28,gender:'F',address:'America'}
]}

  ngOnInit(): void {
  }

  EditUser(data:listuser){
    this._selectedUser=data;
  }

  DeleteUser(data:listuser)
  {
    this.DeleteU(data.id,this._listclass);
  }

  DeleteU(key:number,_data:listuser[])
  {
this._listclass.forEach((_data,index)=>{
  if(_data.id===key)
  {
    this._listclass.splice(index,1);
  }
})
  }

  Submit(){
    if(this._selectedUser.firstname=="")
    {
      alert("Please Enter First Name. ");
      return;
    }
    if(this._selectedUser.lastname=="")
      {
        alert("Please Enter Last Name. ");
        return;
      }
    

      
      if(this._selectedUser.gender=='-1')
      {
        alert("Please select Gender. ");
        return;
      }

      if(this._selectedUser.age==0)
      {
        alert("Please Enter Age. ");
        return;
      }
      if(this._selectedUser.address=="")
      {
        alert("Please Enter Address. ");
        return;
      }
    
    if(this._selectedUser.id==0)
    {
      
      let _maxid=0;    
      this._listclass.forEach(_item=>{
        if(_item.id>_maxid )
        {
        _maxid=_item.id;
        }
      })
      this._selectedUser.id=_maxid+1;    
      this._listclass.push(this._selectedUser);
   }

   this._selectedUser={id:0,firstname:"",lastname:"",age:0,gender:'-1',address:""};
  }

}
