import React from 'react';
import Main from '../../../layout/main';

const Failed = () => {
    return (
        <Main>
             <div className="bg-white p-8 rounded shadow-md text-center">
    <h1 className="text-3xl text-red-500 mb-4">Payment Failed</h1>
    <p className="mb-4">We're sorry, but the transaction was unsuccessful.</p>
    <div className="text-left">
      <p className="font-semibold">Possible Reasons:</p>
      <ul className="list-disc pl-6">
        <li>Your payment method was declined.</li>
        <li>Insufficient funds.</li>
        
      </ul>
    </div>
  </div>
        </Main>
    );
};

export default Failed;