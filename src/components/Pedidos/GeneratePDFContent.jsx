import React from 'react'
import { PDFDownloadLink, Document, Page, View, StyleSheet, Table, Text } from "@react-pdf/renderer";



const styles = StyleSheet.create({
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    }, 
    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      fontSize: 10 
    }
  });

export default function GeneratePDFContent({ nota }) {
    return (
        <Document>
            <Page style={styles.body}>
                <View>
                    <Text style={styles.header}>Dividir la cuenta</Text>
                    <View style={styles.table}>
                        <View style={[styles.tableRow, styles.tableHeader]}>
                            <View><Text style={[styles.tableData, { flex: 1 }]}>#</Text> </View>
                            <View> <Text style={[styles.tableData, { flex: 3 }]}>Producto</Text></View>
                            <View><Text style={[styles.tableData, { flex: 2 }]}>Cantidad</Text></View>
                            <View><Text style={[styles.tableData, { flex: 2 }]}>Precio</Text></View>
                            
                        </View>
                        {nota.map((no, index) => (
                            <View style={styles.tableRow} key={index}>
                                <Text style={[styles.tableData, { flex: 1 }]}>{index + 1}</Text>
                                <Text style={[styles.tableData, { flex: 3 }]}>{no.nombre}</Text>
                                <Text style={[styles.tableData, { flex: 2 }]}>{no.cantidad}</Text>
                                <Text style={[styles.tableData, { flex: 2 }]}>{no.precio_unitario}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>


//         <Document>
//     <Page style={styles.body}>
//       <View style={styles.table}> 
//         <View style={styles.tableRow}> 
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>Product</Text> 
//           </View> 
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>Type</Text> 
//           </View> 
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>Period</Text> 
//           </View> 
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>Price</Text> 
//           </View> 
//         </View>
//         <View style={styles.tableRow}> 
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>React-PDF</Text> 
//           </View> 
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>3 User </Text> 
//           </View> 
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
//           </View>
//           <View style={styles.tableCol}> 
//             <Text style={styles.tableCell}>5€</Text> 
//           </View> 
//         </View> 
//       </View>
//     </Page>
//   </Document>
    );
}