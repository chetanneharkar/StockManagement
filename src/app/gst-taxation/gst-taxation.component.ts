import { Component, OnInit } from '@angular/core';
import { GstCodeDtlsTO } from './gsttaxationTO';
import { GstTaxationServiceService } from './gst-taxation-service.service';

@Component({
  selector: 'gsttaxation',
  templateUrl: './gst-taxation.component.html',
  styleUrls: ['./gst-taxation.component.css']
})
export class GSTTaxationComponent implements OnInit {

  constructor( private gstTaxationServiceService:GstTaxationServiceService ) {

  }

  gstCodeDtlsTO:GstCodeDtlsTO = {};
  GstCodeDtlsList:GstCodeDtlsTO[] = [];
 
  submitNewTax()
  {
    console.log(this.gstCodeDtlsTO);
  }
  ngOnInit() {
    this.gstTaxationServiceService.test123(this.gstCodeDtlsTO).subscribe(data=>{
      
    })

    this.gstTaxationServiceService.getdata().subscribe(data=>{
      this.GstCodeDtlsList = data;
    })
  }



}
