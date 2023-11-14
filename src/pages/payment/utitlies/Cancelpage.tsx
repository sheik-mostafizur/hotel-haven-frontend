import Main from "../../../layout/main";


const Cancelpage = () => {
    return (
        <Main>
             <div className="bg-white p-8 rounded shadow-md text-center">
    <h1 className="text-3xl text-yellow-500 mb-4">Payment Cancelled</h1>
    <p className="mb-4">Your transaction has been cancelled.</p>
    <p>Feel free to try again or contact support.</p>
  </div>
        </Main>
    );
};

export default Cancelpage;