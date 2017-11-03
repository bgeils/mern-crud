import React, { Component } from 'react';
import {StripeProvider} from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';

class _CardForm extends Component {
  render() {
    return (
      <form onSubmit={() => this.props.stripe.createToken().then(payload => console.log(payload))}>
        <CardElement />
        <button>Pay</button>
      </form>
    )
  }
}
const CardForm = injectStripe(_CardForm)

class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">
        <h1>Test Checkout</h1>
        <Elements>
          <CardForm />
        </Elements>
      </div>
    )
  }
}
class Billing extends Component {

	render(){
		return (
		    <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">
		      <Checkout />
		    </StripeProvider>
		  )
	}
}






export default Billing;