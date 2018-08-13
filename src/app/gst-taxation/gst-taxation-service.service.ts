import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { GstCodeDtlsTO } from './gsttaxationTO';

@Injectable({
  providedIn: 'root'
})
export class GstTaxationServiceService {

  constructor(private http:HttpClient) { }

  test123(data):Observable<GstCodeDtlsTO>{
    let datastring  = JSON.stringify(data);
    return this.http.post<GstCodeDtlsTO>("hhtppbb/fgf/",datastring);
  }
  
  
  getdata():Observable<GstCodeDtlsTO[]>{
    return this.http.get<GstCodeDtlsTO[]>("hhtppbb/fgf/");
  }
}
