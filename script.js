 async function iterateWithAsyncAwait (values) {
     for (const value of values) {
         await new Promise((resolve)=>
             setTimeout(resolve,3000)
         )   
         console.log(value)

     }
 }

 iterateWithAsyncAwait([3,4,5,6])

// task 2

 async function awaitCall () {
     try {
         const response = await new Promise((resolve)=>{
             setTimeout(()=>{
                 resolve({data:{name:"unkown", alive:true}})
             },2000)
         })
         console.log('data recieved',response.data)
     } catch (error) {
         console.log('error',error.message)
        
     }
 }
 awaitCall()

//task 3

 async function awaitCall () {
     try {
         const response = await new Promise((resolve, reject)=>{
             setTimeout(()=>{
                 resolve({data:{name:"unkown", alive:true}})
                 reject(new Error('error at fetching data'))
             },2000)
         })
         console.log('data recieved',response.data)
     } catch (error) {
         console.log('error',error.message)
        
    }
 }
 awaitCall()

// task4

 async function asyncFnc1() {
     await new Promise((resolve)=>
         setTimeout(resolve,1000))
         console.log('data 1 recieved')
        
     }

     async function asyncFnc2() {
         await new Promise((resolve)=>
             setTimeout(resolve,1000))
             console.log('data 2 recieved')
            
         }
         async function asyncFnc3() {
             await new Promise((resolve,reject)=>
                 setTimeout(reject,1000))
                 console.log('data 3 recieved')
                
             }



            async function concurrentRequests() {
                 try {
                  
                   await Promise.all([
                     asyncFnc1(),
                     asyncFnc2(),
                     asyncFnc3()
                   ]);
              
                   console.log('All data received');
                 } catch (error) {
                   console.error('Error while handling concurrent requests:', error);
                 }
               }
              
            
               concurrentRequests();


// task 5

async function fetchDt(URL) {
    const response = await fetch(URL)
    const data = await response.json()

    return data
}

async function parallelCalls (urls) {
    try {
        const reslts  = await Promise.all(urls.map((URL)=>fetchDt(URL)))
        reslts.forEach((data, index)=>{
                console.log(`the response ${index + 1}:`,data)

        })
    } catch (error) {
        console.error("the error is",error.message)
    }
}

parallelCalls(["https://rickandmortyapi.com/api/character/11","https://rickandmortyapi.com/api/character/661","https://rickandmortyapi.com/api/character/661"])
