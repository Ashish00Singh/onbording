"use client";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod. PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 60, // space for header
    paddingBottom: 40, // space for footer
    paddingHorizontal: 40,
    fontSize: 12,
  },
  header: {
    position: "absolute",
    top: 20,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 14,
    borderBottom: "1px solid #000",
    paddingBottom: 5,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 10,
    borderTop: "1px solid #000",
    paddingTop: 5,
  },
  content: {
    marginTop: 20,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
     <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header} fixed>
        <Text>🏢 My Company Report</Text>
        <p>sdxcfvgbnm</p>
      </View>
      

      {/* Content */}
      <View style={styles.content}>
        
        <Text>
          This is a sample PDF created with react-pdf. The header and footer will
          repeat on every page.
        </Text>

        {/* Create lots of text to force multiple pages */}

        {Array.from({ length: 100 }).map((_, i) => (
          <Text key={i}>Line {i + 1}: This is repeating content.</Text>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
        />
      </View>
    </Page>
  </Document>
);

export default function App() {
  return (
    <div>
      <h1>Download PDF Example</h1>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="example.pdf"
        style={{
          textDecoration: "none",
          padding: "10px 20px",
          color: "#fff",
          backgroundColor: "#007BFF",
          borderRadius: 5,
        }}
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}