const ShowDeviseFn = function(a,b){
    if(a < 750){
    	b=false
    	console.log('小于750',b)
    }else{
    	b=true
    	console.log('大于750',b)
    }
    return b
    console.log(a,b)	 
}
export {ShowDeviseFn}