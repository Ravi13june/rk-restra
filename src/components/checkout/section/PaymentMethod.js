import { useState } from "react";

const PaymentMethod = (props) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();

  const MethodRow = (props) => {
    return (
      <div
        className={
          selectedPaymentMethod === props.id
            ? "col-12 d-flex selected"
            : "col-12 d-flex"
        }
        onClick={() => {
          setSelectedPaymentMethod(props.id);
        }}
      >
        <div className="flex-column">
          <img
            src={props.image ? props.image : "http://via.placeholder.com/100"}
            alt=""
            height="30"
          />
        </div>
        <div className="flex-fill align-self-center m-0 ml-2">
          <h6>{props.name}</h6>
        </div>
        {selectedPaymentMethod === props.id && (
          <div className="flex-column">
            <i className="icofont icofont-checked text-success" />
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="bg-white rounded shadow-sm p-4 payment-methods">
      <h3 className="mb-1">Choose payment method</h3>
      <hr />
      <h4>
        <i className="icofont icofont-credit-card" /> Credit/Debit Cards
      </h4>
      <div className="row">
        <MethodRow id="cards" name="Credit, Debit & ATM Cards" />
        <MethodRow id="pass" name="Sodexo Meal Pass" />
      </div>

      <h4>
        <i className="icofont icofont-id-card" /> UPI
      </h4>
      <div className="row">
        <MethodRow id="paytm-upi" name="Paytm UPI" />
        <MethodRow id="gpay-upi" name="Google Pay" />
        <MethodRow id="upi" name="Pay via UPI" />
      </div>
      <h4>
        <i className="icofont icofont-card" /> Wallets
      </h4>

      <div className="row">
        <MethodRow id="paytm-wallet" name="Paytm" />
        <MethodRow id="mobikwik" name="Mobikwik" />
        <MethodRow id="freecharge" name="Freecharge" />
      </div>
      <h4>
        <i className="icofont icofont-bank-alt" /> Net Banking
      </h4>

      <div className="row">
        <MethodRow id="net-banking" name="Net Banking" />
      </div>
      <h4>
        <i className="icofont icofont-money" /> Cash on Delivery
      </h4>

      <div className="row">
        <MethodRow id="cod" name="COD" />
      </div>
    </div>
  );

  // return (
  //   <div className="bg-white rounded shadow-sm p-4 rk-restra-payment">
  //     <h4 className="mb-1">Choose payment method</h4>
  //     <h6 className="mb-3 text-black-50">Credit/Debit Cards</h6>
  //     <div className="row">
  //       <div className="pr-0 col-sm-4">
  //         <div className="flex-column nav nav-pills" role="tablist">
  //           <a
  //             href="#"
  //             role="tab"
  //             data-rb-event-key="first"
  //             id="left-tabs-example-tab-first"
  //             aria-controls="left-tabs-example-tabpane-first"
  //             aria-selected="false"
  //             className="nav-link"
  //             tabIndex={-1}
  //           >
  //             <i className="icofont icofont-credit-card" /> Credit/Debit Cards
  //           </a>
  //           <a
  //             href="#"
  //             role="tab"
  //             data-rb-event-key="second"
  //             id="left-tabs-example-tab-second"
  //             aria-controls="left-tabs-example-tabpane-second"
  //             aria-selected="false"
  //             className="nav-link"
  //             tabIndex={-1}
  //           >
  //             <i className="icofont icofont-id-card" /> Food Cards
  //           </a>
  //           <a
  //             href="#"
  //             role="tab"
  //             data-rb-event-key="third"
  //             id="left-tabs-example-tab-third"
  //             aria-controls="left-tabs-example-tabpane-third"
  //             aria-selected="true"
  //             className="nav-link active"
  //           >
  //             <i className="icofont icofont-card" /> Credit
  //           </a>
  //           <a
  //             href="#"
  //             role="tab"
  //             data-rb-event-key="fourth"
  //             id="left-tabs-example-tab-fourth"
  //             aria-controls="left-tabs-example-tabpane-fourth"
  //             aria-selected="false"
  //             className="nav-link"
  //             tabIndex={-1}
  //           >
  //             <i className="icofont icofont-bank-alt" /> Netbanking
  //           </a>
  //           <a
  //             href="#"
  //             role="tab"
  //             data-rb-event-key="fifth"
  //             id="left-tabs-example-tab-fifth"
  //             aria-controls="left-tabs-example-tabpane-fifth"
  //             aria-selected="false"
  //             className="nav-link"
  //             tabIndex={-1}
  //           >
  //             <i className="icofont icofont-money" /> Pay on Delivery
  //           </a>
  //         </div>
  //       </div>
  //       <div className="pl-0 col-sm-8">
  //         <div className="h-100 tab-content">
  //           <div
  //             id="left-tabs-example-tabpane-first"
  //             aria-labelledby="left-tabs-example-tab-first"
  //             role="tabpanel"
  //             aria-hidden="true"
  //             className="fade tab-pane"
  //           >
  //             <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
  //             <p>
  //               WE ACCEPT
  //               <span className="rk-restra-card">
  //                 <i className="icofont icofont-visa-alt" />
  //                 <i className="icofont icofont-mastercard-alt" />
  //                 <i className="icofont icofont-american-express-alt" />
  //                 <i className="icofont icofont-payoneer-alt" />
  //                 <i className="icofont icofont-apple-pay-alt" />
  //                 <i className="icofont icofont-bank-transfer-alt" />
  //                 <i className="icofont icofont-discover-alt" />
  //                 <i className="icofont icofont-jcb-alt" />
  //               </span>
  //             </p>
  //             <form className>
  //               <div className="form-row">
  //                 <div className="col-md-12 form-group">
  //                   <label className="form-label">Card number</label>
  //                   <div className="input-group">
  //                     <input
  //                       placeholder="Card number"
  //                       type="number"
  //                       className="form-control"
  //                     />
  //                     <div className="input-group-append">
  //                       <button
  //                         id="button-addon2"
  //                         type="button"
  //                         className="btn btn-outline-secondary"
  //                       >
  //                         <i className="icofont icofont-card" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="col-md-8 form-group">
  //                   <label className="form-label">Valid through(MM/YY)</label>
  //                   <input
  //                     placeholder="Enter Valid through(MM/YY)"
  //                     type="number"
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="col-md-4 form-group">
  //                   <label className="form-label">CVV</label>
  //                   <input
  //                     placeholder="Enter CVV Number"
  //                     type="number"
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="col-md-12 form-group">
  //                   <label className="form-label">Name on card</label>
  //                   <input
  //                     placeholder="Enter Card number"
  //                     type="text"
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="col-md-12 form-group">
  //                   <div className="custom-control custom-checkbox">
  //                     <input
  //                       type="checkbox"
  //                       id="custom-checkbox1"
  //                       className="custom-control-input"
  //                     />
  //                     <label
  //                       title
  //                       type="checkbox"
  //                       htmlFor="custom-checkbox1"
  //                       className="custom-control-label"
  //                     >
  //                       Securely save this card for a faster checkout next time.
  //                     </label>
  //                   </div>
  //                 </div>
  //                 <div className="col-md-12 mb-0 form-group">
  //                   <a
  //                     className="btn btn-success btn-block btn-lg"
  //                     href="/thanks"
  //                   >
  //                     PAY $1329
  //                     <i className="icofont icofont-long-arrow-right" />
  //                   </a>
  //                 </div>
  //               </div>
  //             </form>
  //           </div>
  //           <div
  //             id="left-tabs-example-tabpane-second"
  //             aria-labelledby="left-tabs-example-tab-second"
  //             role="tabpanel"
  //             aria-hidden="true"
  //             className="fade tab-pane"
  //           >
  //             <h6 className="mb-3 mt-0 mb-3">Add new food card</h6>
  //             <p>
  //               WE ACCEPT
  //               <span className="rk-restra-card">
  //                 <i className="icofont icofont-sage-alt" />
  //                 <i className="icofont icofont-stripe-alt" />
  //                 <i className="icofont icofont-google-wallet-alt-1" />
  //               </span>
  //             </p>
  //             <form className>
  //               <div className="form-row">
  //                 <div className="col-md-12 form-group">
  //                   <label className="form-label">Card number</label>
  //                   <div className="input-group">
  //                     <input
  //                       placeholder="Card number"
  //                       type="number"
  //                       className="form-control"
  //                     />
  //                     <div className="input-group-append">
  //                       <button
  //                         id="button-addon2"
  //                         type="button"
  //                         className="btn btn-outline-secondary"
  //                       >
  //                         <i className="icofont icofont-card" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="col-md-8 form-group">
  //                   <label className="form-label">Valid through(MM/YY)</label>
  //                   <input
  //                     placeholder="Enter Valid through(MM/YY)"
  //                     type="number"
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="col-md-4 form-group">
  //                   <label className="form-label">CVV</label>
  //                   <input
  //                     placeholder="Enter CVV Number"
  //                     type="number"
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="col-md-12 form-group">
  //                   <label className="form-label">Name on card</label>
  //                   <input
  //                     placeholder="Enter Card number"
  //                     type="text"
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="col-md-12 form-group">
  //                   <div className="custom-control custom-checkbox">
  //                     <input
  //                       type="checkbox"
  //                       id="custom-checkbox"
  //                       className="custom-control-input"
  //                     />
  //                     <label
  //                       title
  //                       type="checkbox"
  //                       htmlFor="custom-checkbox"
  //                       className="custom-control-label"
  //                     >
  //                       Securely save this card for a faster checkout next time.
  //                     </label>
  //                   </div>
  //                 </div>
  //                 <div className="col-md-12 mb-0 form-group">
  //                   <a
  //                     className="btn btn-success btn-block btn-lg"
  //                     href="/thanks"
  //                   >
  //                     PAY $1329
  //                     <i className="icofont icofont-long-arrow-right" />
  //                   </a>
  //                 </div>
  //               </div>
  //             </form>
  //           </div>
  //           <div
  //             id="left-tabs-example-tabpane-third"
  //             aria-labelledby="left-tabs-example-tab-third"
  //             role="tabpanel"
  //             aria-hidden="false"
  //             className="fade tab-pane active show"
  //           >
  //             <div className="border shadow-sm-sm p-4 d-flex align-items-center bg-white mb-3">
  //               <i className="mr-3 icofont-3x icofont-apple-pay-alt" />
  //               <div className="d-flex flex-column">
  //                 <h5 className="card-title">Apple Pay</h5>
  //                 <p className="card-text">
  //                   Apple Pay lets you order now &amp; pay later at no extra
  //                   cost.
  //                 </p>
  //                 <a className="card-link font-weight-bold" href="/checkout">
  //                   LINK ACCOUNT <i className="icofont icofont-link-alt" />
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center mb-3">
  //               <i className="mr-3 icofont-3x icofont-paypal-alt" />
  //               <div className="d-flex flex-column">
  //                 <h5 className="card-title">Paypal</h5>
  //                 <p className="card-text">
  //                   Paypal lets you order now &amp; pay later at no extra cost.
  //                 </p>
  //                 <a className="card-link font-weight-bold" href="/checkout">
  //                   LINK ACCOUNT <i className="icofont icofont-link-alt" />
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center">
  //               <i className="mr-3 icofont-3x icofont-diners-club" />
  //               <div className="d-flex flex-column">
  //                 <h5 className="card-title">Diners Club</h5>
  //                 <p className="card-text">
  //                   Diners Club lets you order now &amp; pay later at no extra
  //                   cost.
  //                 </p>
  //                 <a className="card-link font-weight-bold" href="/checkout">
  //                   LINK ACCOUNT <i className="icofont icofont-link-alt" />
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //           <div
  //             id="left-tabs-example-tabpane-fourth"
  //             aria-labelledby="left-tabs-example-tab-fourth"
  //             role="tabpanel"
  //             aria-hidden="true"
  //             className="fade tab-pane"
  //           >
  //             <h6 className="mb-3 mt-0 mb-3">Netbanking</h6>
  //             <form className>
  //               <div role="toolbar" className="btn-toolbar">
  //                 <div
  //                   role="group"
  //                   className="d-flex w-100 btn-group btn-group-toggle"
  //                 >
  //                   <label className="btn active btn-info">
  //                     <input
  //                       name="options"
  //                       type="checkbox"
  //                       autoComplete="off"
  //                       defaultValue={1}
  //                       defaultChecked
  //                     />
  //                     HDFC
  //                     <i className="icofont icofont-check-circled" />
  //                   </label>
  //                   <label className="btn btn-info">
  //                     <input
  //                       name="options"
  //                       type="checkbox"
  //                       autoComplete="off"
  //                       defaultValue={2}
  //                     />
  //                     ICICI
  //                     <i className="icofont icofont-check-circled" />
  //                   </label>
  //                   <label className="btn btn-info">
  //                     <input
  //                       name="options"
  //                       type="checkbox"
  //                       autoComplete="off"
  //                       defaultValue={3}
  //                     />
  //                     AXIS
  //                     <i className="icofont icofont-check-circled" />
  //                   </label>
  //                 </div>
  //               </div>
  //               <hr />
  //               <div className="form-row">
  //                 <div className="col-md-12 form-group">
  //                   <label className="form-label">Select Bank</label>
  //                   <br />
  //                   <select className="custom-select form-control">
  //                     <option>Bank</option>
  //                     <option>One</option>
  //                     <option>Two</option>
  //                     <option>Three</option>
  //                   </select>
  //                 </div>
  //                 <div className="col-md-12 mb-0 form-group">
  //                   <a
  //                     className="btn btn-success btn-block btn-lg"
  //                     href="/thanks"
  //                   >
  //                     PAY $1329
  //                     <i className="icofont icofont-long-arrow-right" />
  //                   </a>
  //                 </div>
  //               </div>
  //             </form>
  //           </div>
  //           <div
  //             id="left-tabs-example-tabpane-fifth"
  //             aria-labelledby="left-tabs-example-tab-fifth"
  //             role="tabpanel"
  //             aria-hidden="true"
  //             className="fade tab-pane"
  //           >
  //             <h6 className="mb-3 mt-0 mb-3">Cash</h6>
  //             <p>Please keep exact change handy to help us serve you better</p>
  //             <hr />
  //             <form className>
  //               <a className="btn btn-success btn-block btn-lg" href="/thanks">
  //                 PAY $1329
  //                 <i className="icofont icofont-long-arrow-right" />
  //               </a>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default PaymentMethod;
