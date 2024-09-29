const stripe = Stripe('pk_test_51Q3XjKHbY8Lnk47vMv8f4aNmVmpUMufc4aLXpOrcbValBeB9zIoMjxCtAh6zRlwa0CL4yBp8Kzqj9dWgOZOmhy7000Z0uW9nWv');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });