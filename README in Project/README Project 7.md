# Sales & Customer Segmentation Analysis in Online Retail
## Extended Version (Python)

---

## 📊 Tech Stack
**Python** | Pandas | Matplotlib | Plotly | Jupyter Notebook

---

## 🎯 Overview

This project analyzes customer behavior and its impact on revenue for a UK-based online gifts and decor store. The analysis aims to improve customer retention and support business growth strategies by examining seasonal trends across a 2-year period (2009-2011).

---

## 📋 Business Problem & Objectives

### Problem
The company experiences strong revenue spikes around the Black Friday period, followed by a significant post-peak decline in both revenue and customer activity. This pattern raises concerns about customer retention and long-term revenue stability.

### Objective
Analyze customer behavior and its impact on revenue to improve customer retention and support business growth strategies.

---

## 🎯 Business Questions

- Which products and customer segments contribute the most to revenue? (Expand to period 2009-2011 to see if it is a seasonal trend or not?)
- How are customer retention and churn rates performing?
- What is the customer lifetime value (CLV)?
- Which products are frequently purchased together?

---

## 📊 Dataset & Assumptions

### Dataset Information
- **Source:** [Kaggle - Online Retail II Dataset](https://www.kaggle.com/datasets/tunguz/online-retail-ii)
- **Time Period:** December 2009 - December 2011
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
- **KPI Development:** Created key business metrics including Revenue, Orders, Customers, AOV, Retention Rate, Churn Rate, and CLV.
- **Reporting:** Developed charts sequentially for Revenue Analysis, RFM Segmentation, Cohort Analysis, CLV Analysis, and Market Basket Analysis.

---

## 💡 Key Insights

- Revenue is highly seasonal, peaking around Black Friday (Nov 2010–2011), driven mainly by Gifts and Decor products, followed by a sharp drop from December to January. January also shows unusually high return activity, further impacting net performance.

- Customer revenue is highly concentrated, with a small group of users contributing a disproportionate share of total sales. Around 34% of customers generate ~80% of revenue, while the top 20 customers account for ~21.6%. The dataset also contains extreme "super-whale" customers with lifetime spend exceeding £500K.

- Customer retention is weak outside seasonal peaks, with most repeat purchases coming from early cohorts. Only a small number of customers return within 100 days, indicating low long-term engagement for newer cohorts.

- Customer value is highly uneven, with CLV heavily dependent on a small base of high-value, long-term customers, increasing revenue concentration risk.

- Product co-purchasing patterns are mostly driven by similar or variant items (e.g., same product lines with different colors, sizes, or designs), with limited evidence of strong cross-category bundling.

---

## � Key Visualizations

### Matrix Cohort Analysis
![Matrix Cohort Analysis](Images/Matrix%20Cohort%20Analysis.png)

### Treemap Revenue by Segment
![Treemap Revenue by Segment](Images/Treemap%20Revenue%20by%20Segment.png)

---

## �📈 Implications

- The business is highly seasonal and overly dependent on a small group of high-value customers.
- Without improving retention and diversifying the customer base, revenue will remain volatile, and long-term growth will be unsustainable once top customers churn or seasonal demand fades.

---

## 🚀 Recommendations

- Focus on acquiring and retaining new customers during and immediately after the Black Friday period, when purchase demand is at its highest.

- Create bundle promotions for products with similar colors, sizes, or designs, as these items are frequently purchased together.

- Continue investing in loyalty programs and personalized campaigns to strengthen relationships with high-value customers.

---

## 📁 Project Structure

```
Project 7 - Sales & Customer Segmentation Analysis (UK) - Extended Version (Python)
├── README.md                          # Project documentation
├── Analysis & Report/
│   └── Online Retail II Analysis & Report.ipynb
├── Cleaning/
│   └── Online Retail II Cleaning.ipynb
├── Dataset/
│   ├── online_retail_II.csv           # Raw dataset
│   └── online_retail_II_cleaned.csv   # Cleaned dataset
├── Images/                            # Dashboard screenshots and visualizations
└── README in DOCX/
```

---

## 🔍 How to Use This Project

1. **Data Cleaning:** Start with `Cleaning/Online Retail II Cleaning.ipynb` to understand the data preparation process.
2. **Analysis & Reporting:** Review `Analysis & Report/Online Retail II Analysis & Report.ipynb` for detailed analysis and visualizations.
3. **Dataset:** Access cleaned and raw datasets in the `Dataset/` folder.

---

**Last Updated:** May 2026
