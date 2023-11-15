import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Button from "../../../components/ui/button";
import { BeatSpinner } from "../../../components/spinner";
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
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
const OrderDownload = ({ data }: { data: any }) => {
  return (
    <PDFDownloadLink
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Payment Successful!</Text>
              <Text>
                Thank you for your payment. Your transaction was successful.
              </Text>

              <Text style={styles.div}>
                <Text>Payment Type:</Text>
                <Text>{data?.cardType}</Text>
              </Text>
              <Text style={styles.div}>
                <Text>Status</Text>
                <Text>{data?.status}</Text>
              </Text>
              <Text style={styles.div}>
                <Text>Email</Text>
                <Text>{data?.email}</Text>
              </Text>
              <Text style={styles.div}>
                <Text>Mobile</Text>
                <Text>{data?.phoneNumber}</Text>
              </Text>
              <hr />
              <Text style={styles.div}>
                <Text>Transaction Id</Text>
                <Text>{data?.transactionId}</Text>
              </Text>
              <Text style={styles.div}>
                <Text>Amount paid</Text>
                <Text>{data?.totalAmount}.00</Text>
              </Text>
            </View>
          </Page>
        </Document>
      }
    >
      {({ loading }) =>
        loading ? (
          <Button>
            <BeatSpinner />
          </Button>
        ) : (
          <Button>Print</Button>
        )
      }
    </PDFDownloadLink>
  );
};

export default OrderDownload;
