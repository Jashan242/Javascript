//callbacks are most important for async programming

//issues - callback hell (callback inside another callback) 
/*
---to many apis inside one another
---code starts to grow horizontally instead of vertically
---difficult to maintain code
---also known as Pyramid of Doom
---here, we are passing callback function to other function
*/

//example of callback hell
const cart=["shoes","kurti","dresses"]

api.createOrder(cart, function(){
    
    api.payment(function(){
    
        api.summary(function(){

        })
    
    })

})

// Inversion of control
/*
you loose the control of your code when using callback, ex-payment could be called twice, 
called createorder-gave its control to someone else
*/