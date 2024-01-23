import { Component , OnInit } from '@angular/core';
import { Observable  , Subscription} from 'rxjs';
import { filter } from 'rxjs';


@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit{

  private mySubscription: Subscription = new Subscription;
  ngOnInit(): void {
    
    //promise 
      const promise = new Promise(resolve =>
      {

        setTimeout(() => {
          resolve("Promise resolved !!!");

        }, 1000);
      })

      promise.then(res => console.log(res))


     // observable 

    const observable = new Observable(sub =>
        {
          setTimeout(() => {
            sub.next("observable is running ")
            sub.next("observable 2  is running ")
          }, 1000);
        })
        // observable.pipe(filter(x=>x=='Observable2 working'),
        //   ).subscribe(res => console.log(res));
        
        observable.pipe(filter(x => x== 'observable 2  is running '),).subscribe(res=> console.log(res));

        // observable.subscribe(res => console.log(res));



  //       const observable1 = new Observable(sub1 =>
  //         {
  //           console.log("observable called");
  //               let x= 1;
  //             setInterval(()=>
  //             { x=x+1;
  //               sub1.next(x);
  //               },1000);
  //             }); 
  //               this.mySubscription = 
  //             observable1.subscribe(res=> {console.log(res) });
  }

  // Unscubscribe()
  // {
  //   this.mySubscription.unsubscribe();
  // }
}

  


