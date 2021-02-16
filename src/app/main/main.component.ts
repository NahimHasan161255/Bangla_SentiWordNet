import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import data from '../file/data.json'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent  
{

  public pos:any;
  public id: any;
  public pos_score: any;
  public neg_score: any;
  public Synset: any;
  public Meaning:any;
  public array:any=[];
  public searchValue:any;
  v:any;
  s:any;
  g:any;
  width1:number=0;
  width2:number=0;
  word : {pos: any, id: any, pos_score: any,neg_score: any,Synset: any,Meaning:any}[]=data;


// DropDown sh
  showDropDown=false;
  DropDown(){
    this.showDropDown = !this.showDropDown
  }


selectValue(value:any){
  
  this.searchValue=value
  this.showDropDown = !this.showDropDown
  this.check(value)
}


  typeahead: FormControl = new FormControl();
  countries: string[]=this.array ;
  suggestions: string[] = [];

  suggest(event: any) {
    console.log('event', event.target.value);
    
    this.array.length = 0;
    for(let i=0 ; i < this.word.length;i++){
      this.array.push(this.word[i].Synset)
    }
    this.suggestions = this.countries
      .filter(c => c.startsWith(event.target.value))
      .slice(0, 5);

  }

  

  




  check(p:any){
    this.v=0;
    this.s=0;

  for(let i=0;i<this.word.length;i++){
    
    var sp = this.word[i].Synset.split(" ");
  
    
    for(let j=0;j<sp.length;j++)
    {
        if((p==sp[j] && p!="")||(p==this.word[i].Synset && p!="")){
          this.v=1
          this.s=i;
          break;
        }
      
    }
    

  }
  if(this.v==1 )
  {  
      if(this.word[this.s].pos=='a'){
        this.pos='Adjective';
      }
      if(this.word[this.s].pos=='n'){
        this.pos='Noun';
      }if(this.word[this.s].pos=='v'){
        this.pos='Verb';
      }if(this.word[this.s].pos=='r'){
        this.pos='Adverb';
      }
      this.id=this.word[this.s].id;
      this.pos_score=this.word[this.s].pos_score;
      this.neg_score=this.word[this.s].neg_score;
      this.Synset=this.word[this.s].Synset;
      this.Meaning=this.word[this.s].Meaning; 
      
        this.width1 = (parseFloat(this.pos_score))*100
        this.width2=(parseFloat(this.neg_score))*100
      
      
        
      
      
  }
  else if(p!="")
  {
      this.pos="Not Found";
      this.id="Not Found";
      this.Synset="Not Found";
      this.Meaning="Not Found";
  }
  else
  {
      this.pos="";
      this.id="";
      this.Synset="";
      this.Meaning="";
      this.width1=0;
      this.width2=0;
      this.pos_score=0
      this.neg_score=0
  }
  
  }


  


}
