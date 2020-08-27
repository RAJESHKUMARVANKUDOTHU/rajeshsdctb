import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralMaterialsService {
  _timezone: any = null;
  _timeZoneAbbr: any

  constructor(private _snackBar: MatSnackBar,private http:HttpClient) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }


exportToExcel(table:any,excelFileName: string,header: string){


  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(table);


  const wb: XLSX.WorkBook = XLSX.utils.book_new();


  var worksheet=XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');


  XLSX.writeFile(wb, excelFileName);
        console.log("ws===",ws)
        console.log("wb===",wb)


}

exportAsExcelFile(json: any[], excelFileName: string,header: string){
  const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(json);
      // console.log("ws===",ws)

      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      // console.log("wb===",wb)

      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.read(header)

      XLSX.writeFile(wb, excelFileName);

}



setObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
    console.log("get==",this.getObject('sensegizlogin'))
}

getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}

updateItem(key, property, value)
{
    var obj = this.getObject(key);
    obj[property] = value;
    console.log("obj===",obj)

    this.setObject(key, obj);
}

updatedOnDate(date){
  
  var months=['Jan','Feb', 'Mar','Apr','May','Jun','Jul','Aug','sep','Oct','Nov','Dec']

  var dateObj=new Date(date)
  var year = dateObj.getFullYear();
  var month = months[dateObj.getMonth()];
  var day = ("0" + dateObj.getDate()).slice(-2);
  var from = month  + ',' + day + ','  +year 

  var h=dateObj.getHours()
  var m=dateObj.getMinutes()
  var s=dateObj.getSeconds()
  var hh = h <= 9 && h >= 0 ? "0"+h : h;
  var mm = m <= 9 && m >= 0 ? "0"+m : m;
  var ss=  s <= 9 && s >= 0 ? "0"+s : s;
  var datetime=from +', '+hh+':'+mm+':'+ss
  return datetime


}
convertTime(a){
  // console.log(a)

  var timeArr = a.split(':')
  
  var date = ''
  if(timeArr[0]!='00'){
    date += timeArr[0] + ' hour '
  }
  if(timeArr[1]!='00'){
    date += timeArr[1] + ' minute '
  }
  if(timeArr[2]!='00'){
    date += timeArr[2] + ' second '
  }
  if(date == '' ||   date == '-'){
    date = '05 second'
  }
  return date
}
}
