# Project 8: End-to-End AI Platform Data Engineering & Analytics with Microsoft Fabric

## 1. Executive Summary & Overview

* **Business Scenario**: An EdTech company is deploying an AI-powered learning assistant designed to enhance student engagement for Grade 12 learners. To ensure continuous operational monitoring, optimize LLM API expenditure, and analyze user retention, the platform requires a robust, scalable data infrastructure.
* **Core Objectives**: Leveraging **Microsoft Fabric**, this project delivers an end-to-end data analytics platform structured into two primary pipelines:
  1. **Real-Time Telemetry & Operational Analytics**: Captures instantaneous telemetry, operational error rates, and short-term usage spikes using **Eventstream & KQL Database**.
  2. **Historical Analytics & Data Marts**: Ingests and transforms transactional data through a **Medallion Architecture (Bronze → Silver → Gold)** into a Star Schema Data Mart with both **SCD Type 1** and **SCD Type 2** dimension tracking for executive reporting.

---

## 2. Source Data Architecture

* **Database Engine**: **Neon DB** (Serverless PostgreSQL) serving as the core transactional OLTP store.
* **Data Schema**: Normalized enterprise OLTP structure tracking entity lifecycles, including `users`, `user_subscriptions`, `conversations`, `messages`, `app_reviews`, `message_reviews`, `plans`, and `models`.
* **Business Context**: Captures interaction telemetry from Grade 12 students. Under the current EdTech service model, access is controlled via token allocation (capped free allocations vs. unlimited tiers) rather than direct per-transaction billing.

![Schema OLTP](../Images/Schema%20OLTP.png)
*Figure 1: Normalized PostgreSQL OLTP Entity-Relationship Diagram (ERD) capturing source transactional entities.*

> 💡 **Source Data Repository**: For data generation logic, mock datasets, and DDL scripts, please visit the [Source Data Repository](https://github.com/hai262626/fake-AI-data).

---

## 3. Real-Time Telemetry & Operational Analytics Workflow

* **Ingestion Pipeline**: Streaming telemetry from Neon DB is captured directly via **Microsoft Fabric Eventstream** and landed into an **Eventhouse (KQL Database)** with zero complex transformations required at the ingestion layer.
* **Analytical Serving & Visualization**: Key operational metrics are queried in near real-time using **KQL (Kusto Query Language)** and exposed via a native **Real-Time Dashboard**.
* **Automated Alerting**: Data-driven alerts monitor critical system thresholds. If key metrics breach operational tolerances (e.g., system message error count exceeding 100 errors in a given window), automated email notifications are dispatched directly to the engineering and management teams.

![Real-time Workflow](../Images/Real-time%20Fabric%20Flow.png)
*Figure 2: Real-time telemetry streaming architecture utilizing Fabric Eventstream and KQL Database.*

![Real-time Dashboard](../Images/Real-time%20Dashboard%20Screenshot.png)
*Figure 3: Real-Time Operational Dashboard visualizing live message rates, error spikes, and active session metrics.*

> 💡 **KQL Queries**: For detailed KQL logic supporting the Real-Time Dashboard, please refer to the [KQL Queries Directory](https://github.com/HoangTheAnalyst/Project-8-Using-Fabric-to-Ingest-Transform-Analyze-AI-Platform-Data-in-a-Edtech-Company/blob/master/kql_code_for_fabric/kql_for_event_dashboard.sql).

---

## 4. Historical Analytics Pipeline (Medallion Architecture)

![Historical Workflow](../Images/Fabric%20Pipeline%20Flow.png)
*Figure 4: End-to-end historical data pipeline orchestrating Ingestion, Dataflow Gen2 transformation, Warehouse loading, and Teams alerting.*

* **Data Ingestion (Bronze)**: Daily scheduled batch pipelines ingest 8 transactional tables concurrently from Neon DB into the `raw` schema of the Data Lakehouse to preserve raw source state.
* **Transformation & Staging (Silver)**: Utilizing **Dataflow Gen2**, raw ingestion datasets are cleansed by stripping unreferenced metadata/comments, casting boolean event flags, and enforcing strict data typing before landing in the `staging` schema.
* **Star Schema Modeling & Warehousing (Gold)**: Stored procedures execute **Cross-Database Queries** to transform `staging` entities into Star Schema Dimensions and Facts within the `mart` schema of the Data Warehouse. Dimensions utilize overwrite patterns, except for `dim_models`, which implements **SCD Type 2** tracking to preserve historical token price changes via surrogate keys (`model_sk`).

![Schema OLAP](../Images/Data%20Model%20(OLAP).png)
*Figure 5: Enterprise Data Mart Star Schema design optimizing analytical queries with 1:N relationships and SCD Type 2 dimension tracking.*

* **Semantic Layer & Executive Reporting**: On successful warehouse load, the **Semantic Model** triggers an automated refresh to serve executive Power BI reports tracking daily active users, subscription churn, error distribution, and cumulative LLM token expenditures.
* **Pipeline Monitoring & Resilience**: Integrated try-catch logic and pipeline activity triggers capture execution failures at any stage, firing real-time alerts to the dedicated Microsoft Teams channel for rapid incident response.

![Historical Report](../Images/Dashboard%20Screenshot.png)
*Figure 6: Executive Power BI Report tracking long-term user retention, token API expenditure, and subscription analytics.*

> 💡 **SQL Scripts**: For full DDLs, CTAS scripts, and Stored Procedures driving the Star Schema, please visit the [SQL Code Directory](https://github.com/HoangTheAnalyst/Project-8-Using-Fabric-to-Ingest-Transform-Analyze-AI-Platform-Data-in-a-Edtech-Company/blob/master/sql_code_for_fabric).

---

## 5. System Limitations & Scope

* **Synthetic Data Boundary**: While the underlying schema strictly adheres to production OLTP design standards, the dataset itself is synthetically generated. Consequently, deep behavioral modeling and edge-case customer journey simulations are limited, with reporting focused predominantly on core operational metrics, platform adoption, and financial telemetry.

---

## 6. Technical Documentation & Key Resources

For in-depth technical implementation details, architectural trade-offs, and deployment specifications, explore the dedicated documentation guides:

* 🏛️ **[Architecture Decision Records (ADRs)](https://github.com/HoangTheAnalyst/Project-8-Using-Fabric-to-Ingest-Transform-Analyze-AI-Platform-Data-in-a-Edtech-Company/blob/master/docs/architecture_decisions.md):** Comprehensive analysis of platform trade-offs, dual-engine topology (Real-Time KQL vs. Batch Medallion), Cross-Database Warehouse query strategies, and SCD Type 2 dimension design.
* 📖 **[Data Dictionary](https://github.com/HoangTheAnalyst/Project-8-Using-Fabric-to-Ingest-Transform-Analyze-AI-Platform-Data-in-a-Edtech-Company/blob/master/docs/data_dictionary.md):** Complete entity schemas, column definitions, surrogate key formulas (`model_sk`), and validation constraints across `raw` (Bronze), `staging` (Silver), and `mart` (Gold) schemas.
* 🚀 **[Deployment & Configuration Guide](https://github.com/HoangTheAnalyst/Project-8-Using-Fabric-to-Ingest-Transform-Analyze-AI-Platform-Data-in-a-Edtech-Company/blob/master/docs/deployment_guide.md):** Step-by-step instructions for provisioning Fabric capacities, setting up Eventstream connectors, configuring Dataflow Gen2 refresh schedules, and wiring automated Microsoft Teams / Email alerting hooks.