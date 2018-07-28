// nodejs  风格的异步回调: foo(error, callback) 回调的第一个参数始终是错误信息

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
