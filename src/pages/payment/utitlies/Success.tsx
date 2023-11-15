import {useParams} from "react-router-dom";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {useGetPaymentSuccessOrderQuery} from "../../../api/public-api";
import Container from "../../../components/ui/container";
import OrderDownload from "./OrderDownload";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Success = () => {
  const {transactionId} = useParams();
  const {data, isLoading} = useGetPaymentSuccessOrderQuery(transactionId);

  return (
    <Container>
      {/*  className="flex items-center justify-center h-screen" */}
      <div className="bg-white py-4 md:py-8 px-4 md:px-8  shadow md:shadow-lg rounded text-center max-w-lg">
        <h1 className=" text-green-500 mb-4">Payment Successful!</h1>
        <IoMdCheckmarkCircleOutline className="block text-4xl md:text-9xl mx-auto text-green-500 mb-4" />
        <p className="mb-4">
          Thank you for your payment. Your transaction was successful.
        </p>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex items-center justify-between">
            <p>Payment Type</p>
            <p className="font-semibold">{data?.cardType}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Status</p>
            <p className="font-semibold">{data?.status}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Email</p>
            <p className="font-semibold">{data?.email}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Mobile</p>
            <p className="font-semibold">{data?.phoneNumber}</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>Transaction Id</p>
            <p className="font-semibold">{data?.transactionId}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Amount paid</p>
            <p className="font-semibold text-2xl">{data?.totalAmount}.00</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <OrderDownload />
            <button
              type="button"
              className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-700">
              Close
            </button>
          </div>
        </div>
      </div>
      <br />
      {/* <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Payment Successful!</Text>
            <Text>
              Thank you for your payment. Your transaction was successful.
            </Text>
          </View>
        </Page>
      </Document> */}
    </Container>
  );
};

export default Success;
