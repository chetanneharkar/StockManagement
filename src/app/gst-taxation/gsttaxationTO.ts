export class GstCodeDtlsTO
{
   IdGstCode?:number
   CodeTypeId?:number
   CreatedBy?:string
   UpdatedBy?:string
   EffectiveFromDt?:string
   EffectiveToDt?:string
   CreatedOn?:string
   UpdatedOn?:string
   TaxPct ?:number 
   CodeDesc?:string
   CodeNumber?:string
   TaxRatesTOList?:TaxRatesTO[]
   
}
export class TaxRatesTO
{
   IdTaxRate?:number
   GstCodeId?:number
   TaxTypeId?:number
   CreatedBy?:number
   UpdatedBy?:number
   EffectiveFromDt?:string
   EffectiveToDt?:string
   CreatedOn?:Date
   UpdatedOn?:Date
   TaxPct?:number
   TaxName?:string
   EffectiveFromDtStr:string
   EffectiveToDtStr:string
   TaxpctBifurgation?:number
}