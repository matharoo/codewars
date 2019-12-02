//function factory method for private variables
function StopWatch(){
    let _duration = 0;
    let startTime = 0;
    let running = false;
    return{
      start(){
          console.log('Starting...');
          startTime  = Date.now();
          running = true;
      },
      stop(){
        if(running){
          console.log('Stopping...');
          _duration += (Date.now() - startTime)/1000; 
          running = false;
        }
      },
      getDuration(){
        return _duration;
      }
    }
  }

  let s1 = new StopWatch();
  // console.log(s1.start())

// IIFE for private variables
// let StopWatch = (function(){
//     let _duration = 0;
//     class StopWatch{
//       constructor(){
//         this.startTime = 0;
//         this.running = false;
//       }
    
//       start(){
//         console.log('Starting stpwtch...');
//         this.startTime = Date.now();
//         this.running = true;
//       }
    
//       stop(){
//         if(this.running){
//           console.log('Stopping...');
//           _duration += (Date.now() - this.startTime)/1000;
//           this.running = false;
//         }
//       }
//       getDuration(){
//         return _duration
//       }
//     }
//     return StopWatch
//   })();

//   let s1 = new StopWatch();
//   console.log(s1.start())