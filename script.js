/* Singleton */
new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  })

var mySingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;
    function init() {
      // Singleton
      // Private methods and variables
      function privateMethod(){
          console.log( "I am private" );
      }
      var privateVariable = "Im also private";
      var privateRandomNumber = Math.random();
      return {
        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
        publicProperty: "I am also public",
        getRandomNumber: function(){
            return privateRandomNumber;
        }
      };
    };
    return {
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }
    };
  })();

  var inst= mySingleton.getInstance();
  console.log(inst.getRandomNumber())

// var counter=(function () {
//     var counter = 0;
//     return {
//         get: function () {
            
//             return counter;
//         },
//         set: function (t) {
//             counter = t;
//         },
//         print: function () {
//             console.log('this is counter: ' + counter);
//         }

//     }

    
// })();

// var mySingleton=(function(){
//     var instance;
//     function init(){
//         function privateMethod(){
//             console.log("I am private")
//         }
//         var privateRandom=Math.random();
//         return{
//             publicMethod: function(){
//                 console.log('this public method')
//             }, 
//             publicPpropeter: "I am also publick",
//             getRandom: privateRandom
//         }
//     }

// })();

var retinaMacbook=(function(){
    var RAM, addRAM;
    RAM=4;

    addRam=function(AdditoinalRam){
        RAM+=AdditoinalRam;
    }

    return{
        //public variable
        USB: undefined,
        insertUSB: function(device){
            this.USB=device;
        },
        removeUSB: function(){
            var device=this.USB;
            this.USB=undefined;
            return device;
        },
        RAM:RAM
        
    }

})();

var ran=retinaMacbook;
ran.insertUSB(4);
console.log(USB)
// retinaMacbook.insertUSB(5);
// alert(retinaMacbook.RAM);
// // counter.set(4)
// // console.log(counter.get())

// // let Add=function(a, b){
// //     return a+b;
// // }
// // let calc=function(a,b,callback){
// //     return callback(a,b);
// // }

// // console.log(calc(33,4444, Add));

// // let populatePopup=function(callback){

// //     let test=function(){
// //         console.log('test')
// //     }
   
    
// // }



// // var revealingModuleName = (function() {
// //     'use strict';

// //     function methodName() {
// //         alert('hlleo')
// //     }

// //     return {
// //         methodName:methodName
// //     };
// // }());

// // revealingModuleName.methodName();



// // populatePopup.test(counter);