import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myAngularApp';
  students: Student[];

  constructor(private httpService: HttpService){}
  ngOnInit(){
    this.httpService.getStudent().subscribe((res:Student[])=>{
        console.log(res);
        this.students= res;
        console.log(this.students);

    });
  }


}
