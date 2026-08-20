# Marketing Performance & Customer Personal Engagement in Turkey's Enterprise

## Tech Stack
Tableau, MySQL

## Overview
This project analyzes marketing campaigns, B2B customers, and customer employees to identify the most effective strategies for improving lead generation, conversion performance, and long-term customer engagement. The analysis focuses on a heavy industry and energy infrastructure company in Turkey.


## 📋 Business Problem & Objectives

### Problem
The company is facing inefficient marketing campaigns, resulting in weak conversion performance and insufficient revenue growth to support future expansion.

### Objective
Analyze marketing campaigns, B2B customers, and customer employees to identify the most effective strategies for improving lead generation, conversion performance, and long-term customer engagement across industries.

---

## 🎯 Business Questions

- Which marketing campaigns are the most cost-effective in terms of cost and conversion rate, and which campaigns are underperforming?
- Which industries generate the highest engagement and long-term revenue potential for the company?
- What are the characteristics of decision-makers, and how can the company improve their participation in events and campaigns?

---

## 📊 Dataset & Assumptions

### Dataset Information
- **Source:** [Kaggle - Synthetic B2B CRM and Marketing Data](https://www.kaggle.com/datasets/ezogngrd/synthetic-b2b-crm-and-marketing-data)
- **Time Period:** 2024
- **Business Type:** Heavy industry and energy infrastructure company in Turkey
- **Data Structure:** Two tables - Companies and Employees

### Data Assumptions
- The campaign type recorded for each company is assumed to be the primary campaign responsible for all generated leads from that company.
- One lead may result in multiple purchases; therefore, the conversion rate can exceed 1.
- Valid records include standardized NULL values and cleaned employee-company relationships.

---

## 🔧 Key Steps Taken

- Cleaning: Fixed spelling inconsistencies, removed orphan Employee ID, dropped encrypted or unnecessary columns, and standardized NULL values using MySQL.

- Modeling: Built relationships between Companies and Employees tables through Company ID.

- Reporting: Developed four Tableau dashboards: Overview, Marketing Campaign, Companies, and Employees.

---

## 💡 Key Insights

- Webinar and Email campaigns achieved the highest conversion rates while maintaining the lowest Cost per Purchase (CPP) at around 3.1K ₺. In contrast, LinkedIn Ads recorded the highest Cost per Lead (CPL) but delivered weak conversion performance, while Content Marketing generated stable conversions despite having the highest marketing expenditure (3M ₺).

- Utility companies showed the strongest repeat-purchase behavior and highest conversion rates, whereas the Space and Residential sectors received high marketing investment but produced relatively weak conversion performance.

- However, the most loyal customers were concentrated in the Space and Residential industries, suggesting strong long-term retention potential despite lower short-term conversion efficiency.

- Around 70% of identified decision-makers belonged to the Marketing, Production, and Sales departments. Many of them were senior-level employees and demonstrated higher event participation rates than average.

- Although phone calls were the preferred communication method among decision-makers, email campaigns generated the strongest attendance performance.

---

## 📈 Implications

- Marketing efficiency is currently uneven: a few channels and industries drive most conversions, while a large portion of spend is allocated to underperforming segments.

- Without reallocation of budget toward high-performing campaigns (Webinar, Email) and high-potential industries (Utility, Space, Residential), marketing ROI will continue to stagnate despite increasing costs.

---

## 🚀 Recommendations

- Increase investment in Webinar and Email campaigns, as they currently provide the best balance between conversion performance and marketing cost efficiency.

- Reevaluate LinkedIn Ads and high-cost Content Marketing campaigns by narrowing audience targeting and focusing on industries with stronger conversion potential.

- Prioritize Utility companies for short-term revenue growth while building long-term relationship strategies for Space and Residential customers with high loyalty potential.

- Expand personalized email campaigns and event invitations targeting senior employees in Marketing, Production, and Sales departments, as they represent the largest and most engaged decision-maker groups.

---

## 📝 Project Structure

```
Project 5 - Marketing Performance & Customer Personal Engagement in Turkey's Enterprise
├── README.md
├── Cleaning/
│   ├── Cleaning Data.sql
│   ├── Create Stagging.sql
│   └── Load Raw Into MySQL.sql
├── Dashboard/
│   └── SQL + Tableau Marketing Performace & Customer Personnel Engagement in Turkey's Enterprise.twb
├── Dataset/
│   ├── companies_noisy_734.csv
│   └── employees_noisy_5234.csv
├── Images/
└── README in DOCX/
```

---

### 📊 Dashboard Previews


![Marketing Campaign Performance](/Images/Marketing%20Campaign%20Performance.png)

*Figure 1: Marketing Campaign Performance — Cost per Lead (CPL), Cost per Purchase (CPP), and conversion efficiency across campaign channels.*


![Customer B2B](/Images/Customer%20B2B.png)

*Figure 2: B2B Customer Breakdown — Conversion rates, repeat purchase behavior, and long-term customer value by industry segment.*


![Customer's Employee](/Images/Customer's%20Employee.png)

*Figure 3: Decision-Maker & Personnel Engagement — Department distribution, seniority levels, event attendance, and preferred communication channels.*


---

**Last Updated:** May 2026
