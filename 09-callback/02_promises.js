//promises - used to handle async operations
/*
---promise is an object
---here, we are attaching other callback function to promise object
---gives full control of our code
*/

const cart=["shoes","kurti","dresses"]

const promise=createorder(cart);

promise.then(function(orderId){
    Payment()
})

//fetch() function returns a promise

const api="https://api.github.com/users/jashandeep242"
const user=fetch(api)
console.log()

//promise chaining
createorder(cart)
.then(function(orderId){
    return payment(orderId);
})
.then(function(paymentId){
    return summary(paymentId);
})
.catch(function(error){
    return error;
});

//using arrowhead function
createOrder(cart)
.then((orderId) => payment(orderId))
.then((paymentId) => showOrder(paymentId));

//Producespart

function createOrder(cart){
    const promise=new Promise(function(resolve, reject){
        if(!validate(cart)){
            const error=new ErrorEvent("Not valid");
            reject(error);
        }
        const orderId="12345";
        if(orderId){
            resolve(orderId);
        }
    })
    return promise;
}

function validate(cart){
    return true;
}