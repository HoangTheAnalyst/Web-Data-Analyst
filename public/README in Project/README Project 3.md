# HR Executive Dashboard Specialist

## Tech Stack
Power BI

## Overview
This project analyzes workforce changes and employee attrition trends for the organization. The analysis aims to monitor workforce stability, identify departments with high turnover, and evaluate retention strategies to support business continuity and employee satisfaction.

---

### 🔗 Interactive Dashboard
[View on Power BI Service](https://app.powerbi.com/links/sr5Ei-XCLr?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare&bookmarkGuid=48a692d1-1ab0-44db-9183-179039f6cab2)

---

## 📋 Business Problem & Objectives

### Problem
The company experienced a noticeable increase in employee turnover during 2018, while new hires were not sufficient to offset the number of employees leaving. Management needs a clearer view of workforce stability and attrition trends.

### Objective
Build an HR Executive Dashboard to monitor workforce changes, identify departments with high attrition, and evaluate the condition of the remaining workforce to support retention decisions.

---

## 🎯 Business Questions

- How have active employees and attrition rates changed over time?
- Which departments and managers have the highest employee turnover?
- What is the current condition of the remaining workforce in terms of tenure, salary, and performance?

---

## 📊 Dataset & Assumptions

### Dataset Information
- **Source:** [Kaggle - Human Resources Data Set](https://www.kaggle.com/datasets/rhuebner/human-resources-data-set)
- **Time Period:** 2006 - 2018
- **Employee Records:** Includes department, manager, salary, employment status, and performance scores

### Data Assumptions
- One manager may oversee multiple departments
- A Job_ID may correspond to multiple positions
- Attrited employees include both voluntary resignations and terminated employees

---

## 🔧 Key Steps Taken

- **Clean:** Standardized employee names, removed unnecessary ID columns, and filtered irrelevant performance categories using Power Query.
- **Modeling:** Built a star schema with fact_hr, dim_employee, dim_manager, and dim_position.
- **KPI Metrics:** Created DAX measures including Total Active Employees, Attrition Rate, Net Changes, and Average Tenure of Leavers.
- **Dashboard:** Developed Executive Overview and Attrition Deep-Dive dashboards in Power BI.


---

## 💡 Key Insights

- Workforce size remained relatively stable at over 200 active employees, but attrition increased from 3.56% in 2017 to 6.10% in 2018, with net employee growth turning negative.
- The Production Department recorded the highest attrition rate (12.69%), mainly involving long-tenured employees with comparatively lower salaries.
- High-performing employees ("Exceed" rating) showed the lowest attrition rates and highest average salaries, while most underperforming employees had already left the company.

---

## 📈 Implications

- The issue is not yet critical, but deeper analysis of remaining employees is required to address root causes of dissatisfaction; otherwise, attrition may accelerate and gradually weaken overall workforce stability and performance.

---

## 🚀 Recommendations

- Monitor attrition trends regularly through the Executive Dashboard and establish early warning thresholds for abnormal turnover.
- Review retention strategies in the Production Department, especially for experienced employees and teams with consistently high turnover.
- Reassess compensation and career development policies to improve long-term employee retention and workforce stability.

---

## 📝 Project Structure

```
Project 3 - HR Executive Dashboard Specialist
├── README.md
├── Dashboard/
│   └── [HR Executive Dashboard - Power BI visualizations]
├── Dataset/
│   └── hr.csv
├── Images/
│   └── [Dashboard screenshots and visual assets]
└── README in DOCX/
```

---

**Last Updated:** May 2026
