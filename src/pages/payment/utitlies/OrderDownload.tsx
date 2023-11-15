import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Button from "../../../components/ui/button";
import {BeatSpinner} from "../../../components/spinner";
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
const OrderDownload = () => {
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
            </View>
          </Page>
        </Document>
      }>
      {({loading}) =>
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
