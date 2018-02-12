import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as myGlobals from './global';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class CoinService {

  api_url: any = myGlobals.api_url;

  getallcoinlistAPI: any = myGlobals.getallcoinlistAPI;
  getallcoinlistdemoAPI: any = myGlobals.getallcoinlistdemoAPI;
  gettotalcoincountAPI: any = myGlobals.gettotalcoincountAPI;
  getnewcoincountAPI: any = myGlobals.getnewcoincountAPI;
  getactivecoincountAPI: any = myGlobals.getactivecoincountAPI;
  getinactivecoincountAPI: any = myGlobals.getinactivecoincountAPI;
  categorylistAPI: any = myGlobals.categorylistAPI;
  supportlistAPI: any = myGlobals.supportlistAPI;
  messagelistAPI: any = myGlobals.messagelistAPI;
  singlemessageAPI: any = myGlobals.singlemessageAPI;

  // getcoinupdatedataAPI: any = myGlobals.getcoinupdatedataAPI;
  coinupdatedataAPI: any = myGlobals.coinupdatedataAPI;
  addnewcategoryAPI: any = myGlobals.addnewcategoryAPI;
  addupdatenewquestionAPI: any = myGlobals.addupdatenewquestionAPI;
  getsupportupdatedataAPI: any = myGlobals.getsupportupdatedataAPI;
  deletesupportdataAPI: any = myGlobals.deletesupportdataAPI;
  updatesinglemessageAPI: any = myGlobals.updatesinglemessageAPI;
  deletemessageAPI: any = myGlobals.deletemessageAPI;

  userid: any = myGlobals.userid;
  basecur: any = localStorage.getItem('base');
  user_base: any = localStorage.getItem('user_base');
  base_sing: any = localStorage.getItem('base_sing');

  constructor(private http: Http) { }

  getallcoin() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.getallcoinlistdemoAPI, options)
      .map((response: Response) => response.json());
  }

  gettotalcoin() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.gettotalcoincountAPI, options)
      .map((response: Response) => response.json());
  }

  getnewcoin() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.getnewcoincountAPI, options)
      .map((response: Response) => response.json());
  }

  getactivecoin() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.getactivecoincountAPI, options)
      .map((response: Response) => response.json());
  }

  getinactivecoin() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.getinactivecoincountAPI, options)
      .map((response: Response) => response.json());
  }

  /* getcoinupdatedata(coinid) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('coinid', coinid);

    return this.http.post(this.api_url + this.getcoinupdatedataAPI, form, options)
      .map((response: Response) => response.json());
  } */

  updatecoindata(coin) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('coinid', coin);
    form.append('status', '1');

    return this.http.post(this.api_url + this.coinupdatedataAPI, form, options)
      .map((response: Response) => response.json());
  }

  addnewcategory(category) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('cat_name', category);

    return this.http.post(this.api_url + this.addnewcategoryAPI, form, options)
      .map((response: Response) => response.json());
  }

  categorylist() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.categorylistAPI, options)
      .map((response: Response) => response.json());
  }

  addupdatenewquestion(qus) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    if (qus.support_id !== '') {
      form.append('support_id', qus.support_id);
    } else {
      form.append('support_id', '');
    }
    form.append('cat_id', qus.catid);
    form.append('question', qus.question);
    form.append('answer', qus.answer);

    return this.http.post(this.api_url + this.addupdatenewquestionAPI, form, options)
      .map((response: Response) => response.json());
  }

  questionlist() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.supportlistAPI, options)
      .map((response: Response) => response.json());
  }

  messagelist() {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api_url + this.messagelistAPI, options)
      .map((response: Response) => response.json());
  }

  singlemessage(id) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('message_id', id);

    return this.http.post(this.api_url + this.singlemessageAPI, form, options)
      .map((response: Response) => response.json());
  }

  supportupdatedata(id) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('support_id', id);

    return this.http.post(this.api_url + this.getsupportupdatedataAPI, form, options)
      .map((response: Response) => response.json());
  }

  deletesupportdata(id) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('support_id', id);

    return this.http.post(this.api_url + this.deletesupportdataAPI, form, options)
      .map((response: Response) => response.json());
  }

  updatesinglemessage(msg) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('message_id', msg.message_id);
    form.append('name', msg.name);
    form.append('email', msg.email);
    form.append('answer', msg.answer);
    form.append('status', '2');

    return this.http.post(this.api_url + this.updatesinglemessageAPI, form, options)
      .map((response: Response) => response.json());
  }

  deletemessage(id) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('message_id', id);

    return this.http.post(this.api_url + this.deletemessageAPI, form, options)
      .map((response: Response) => response.json());
  }
}