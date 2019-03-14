import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL: string = 'http://localhost:2022';

  constructor(private httpClient: HttpClient) { }

  public getStudent(){
    return this.httpClient.get<Student[]>(`${this.apiURL}/sdetails`);
}

/*public createStudent(student: Student){
  return this.httpClient.post(`${this.apiURL}/sdetails/`,student);
}*/

}
