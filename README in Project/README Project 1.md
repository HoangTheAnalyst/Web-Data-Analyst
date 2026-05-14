# Sales & Customer Segmentation Analysis in Online Retail

## Tech Stack
PowerBI

## Overview
This project analyzes customer behavior and its impact on revenue for a UK-based online gifts and decor store. The analysis aims to improve customer retention and support business growth strategies.

---

### 📊 Dashboard Preview
![Dashboard Preview](Images/Sales%20&%20Revenue.png)

### 🔗 Interactive Dashboard
[View on Power BI Service](https://app.powerbi.com/links/DcjQElbYAK?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare&bookmarkGuid=aa5b9596-6963-4128-8ffb-1fa04e59450d)

---

## 📋 Business Problem & Objectives

### Problem
Although revenue has been growing, the business is struggling to attract and retain new customers consistently.

### Objective
Analyze customer behavior and its impact on revenue to improve customer retention and support business growth strategies.

---

## 🎯 Business Questions

- Which products and customer segments contribute the most to revenue?
- How are customer retention and churn rates performing?
- What is the estimated customer lifetime value (CLV)?
- Which products are frequently purchased together?

---

## 📊 Dataset & Assumptions

### Dataset Information
- **Source:** [Kaggle - Online Retail Dataset](https://www.kaggle.com/datasets/tunguz/online-retail)
- **Time Period:** December 2010 - December 2011
- **Business Type:** UK-based gifts and decor online retail store

### Data Assumptions
- Valid invoices contain 6-digit invoice numbers
- Cancelled orders start with the letter "C"
- Valid transactions must have Quantity > 0 and Price > 0
- Customers with missing CustomerID are grouped as "Guests"
- Guest customers are included in Revenue and RFM Analysis but excluded from Cohort and CLV Analysis

---

## 🔧 Key Steps Taken

- **Data Cleaning:** Removed non-analytical transaction codes (POST, D, BANK), filtered invalid transactions using Python (Jupyter Notebook), and standardized missing CustomerID values as "Guests".
- **KPI Development:** Created key business metrics, including Revenue, Orders, Customers, AOV, Retention Rate, Churn Rate, and CLV.
- **Reporting:** Developed charts sequentially from Revenue Analysis, RFM Analysis, Cohort Analysis, CLV Analysis & Market Basket Analysis.

---

## 💡 Key Insights

- Revenue grew significantly during the second half of 2011 and peaked in November during the Black Friday period, driven mainly by Gifts and Decor products.
- Champion customers accounted for a disproportionately large share of total revenue, with several customers outperforming in monetary (≥ £250k) or in frequency (≥ 200 orders).
- While short-term repeat purchase behavior was relatively positive, long-term retention remained low for customers acquired during 2011.
- Products frequently purchased together were typically similar items with different colors, sizes, or variations.

---

## 📈 Implications

- The business is highly seasonal and overly dependent on a small group of high-value customers.
- Without improving retention and diversifying the customer base, revenue will remain volatile, and long-term growth will be unsustainable once top customers churn or seasonal demand fades.

---

## 🚀 Recommendations

- Focus on acquiring and retaining new customers during and immediately after the Black Friday period, when purchase demand is at its highest.
- Create bundle promotions for products with similar colors, sizes, or designs, as these items are frequently purchased together.
- Continue investing in loyalty programs and personalized campaigns to strengthen relationships with high-value customers.

---

## 📝 Project Structure

```
Project 1 - Sales & Customer Analysis in Online Retail
├── README.md
├── Dashboard/
│   └── [Visualizations and findings]
├── Dataset/
│   ├── OnlineRetail.csv
│   └── ProductPairs_MBA.csv
├── Images/
└── README in DOCX/
```

---


**Last Updated:** May 2026
