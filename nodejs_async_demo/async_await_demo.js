function foo(params, callback){
  console.log(1)

  setTimeout(
    ()=>{
      callback(
        new Error('oops'),
        'hey')
    }
    ,2000 )
  console.log(2)
}

foo({},(err, result)=>{
  if(err) console.log(err)
  else console.log(result)
  console.log(4)
})

console.log(3)

(async() =>{
  async function dealWithObjAsync(obj){
    return new Promise(
      (resolve)=>{

        setTimeout(()=>{
          obj.dealt=true
          resolve()
        }
          ,2000)
      },
      (reject)=>{
      }
    )
  }

  let obj = {}
  console.log(obj)
  await dealWithObjAsync(obj)

  console.log(obj)
})()

let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log(1)
    resolve('done')

  }, 2000)
})

console.log(`Promise object : ${promise}`)

promise.then((r)=>{
  console.log(`result: `,r)
  return r

}).then((r)=>{
console.log(`result: `, r)
})

console.log('promise.then(): ', promise.then())
