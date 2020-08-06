import React,{ Fragment}  from 'react';

const steps = [
  { no: 1, step: 'Sign up with mobile your'},
  { no: 2, step: 'Add Beneficiary details'},
  { no: 3, step: 'Pay and transaction will be successful within 24 hour'},
  { no: 4, step: 'Pay and transaction will be successful within 24 hour'}
]

const showSteps = () => {
    return steps.map((item, i) => {
      return <div key={i} className="row">
                <div className="col-2 dk-home-fold2-working-step">
                 {item.no}
                </div>
                <div className="col-8 dk-home-fold2-working-procedure">
                 {item.step}
                </div>
             </div>
    })
}

const Fold2 = () => {
  return <Fragment>
            <div className="dk-fold2-container">
               <h1 className='dk-home-fold2-title'>How to send money</h1>
               <div className="container">
                  <p className="dk-home-fold2-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
                 <div className="row justify-content-center dk-home-fold2-steps">
                   <div className="col-6">
                      <img src="send.svg" className="dk-home-fold2-img"/>
                   </div>
                   <div className="col-6 dk-home-fold2-steps-container">
                      {showSteps()}
                   </div>
                 </div>
            </div>
         </Fragment>
}

export default Fold2;
