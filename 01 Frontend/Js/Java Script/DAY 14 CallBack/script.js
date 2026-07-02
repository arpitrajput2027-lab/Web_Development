// Zomato App

function placeOrder(Callback) {
    console.log("Your Payment is in Progressing..")
    setTimeout(() => {
        console.log("Payment Successfully Done and Your Order has been Placed.");
        Callback();
    }, 2500)
}

function orderPreparing(Callback) {
    console.log("Your Order is  Preparing to Start..");
    setTimeout(() => {
        console.log("Order has been Prepared now ready to Pickup by delivery Person.");
        Callback();
    }, 1000)
}

function pickOrder(Callback) {
    console.log("Delivery Person is on the Way for Pickup the order...");

    setTimeout(() => {
        console.log("Order has Pickuped by Delivery Person.");
        Callback();
    }, 1000)
}

function oderDelivery() {
    console.log("Delivery is on the Way....");

    setTimeout(() => {
        console.log("Order has been Successfully Delivered.");
    }, 1000)

}


// CallBack Helllll
placeOrder(() => {
    orderPreparing(() => {
            pickOrder(()=>{
                oderDelivery();
            });
        });
});

