import Main from "../../../layout/main";


const Suceess = () => {
    return (
        <Main>
            <div className="bg-white p-8 rounded shadow-md text-center h-screen">
    <h1 className="text-3xl text-green-500 mb-4">Payment Successful!</h1>
    <p className="mb-4">Thank you for your payment. Your transaction was successful.</p>
    <div className="text-left">
      <p className="font-semibold">Order Details:</p>
   
    </div>
  </div>
        </Main>
    );
};

export default Suceess;