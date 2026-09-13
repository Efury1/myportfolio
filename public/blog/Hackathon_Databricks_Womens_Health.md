*This project is for research and educational purposes. Created for the Databricks Health Challenge.*

**Repo:** [github.com/Efury1/Women-s-Health-Hackathon](https://github.com/Efury1/Women-s-Health-Hackathon)
**Live app:** [womens-health-app-7474655901580247.aws.databricksapps.com](https://womens-health-app-7474655901580247.aws.databricksapps.com/)
**Demo video:** [Watch on YouTube](https://www.youtube.com/watch?v=y8nwkaXXHJc&feature=youtu.be)

## What it is

A patient-reported data project on IUD insertion, built for the Databricks Health Challenge. It looks at pain during insertion, how well patients felt listened to, and adverse events, and turns that into something a healthcare provider could actually read and use.

## What was built

- **Survey**: anonymous, patient-facing, collected via Google Forms
- **Data pipeline**: CSV export → Unity Catalog table → Python notebook for cleaning and stats
- **Analysis notebook** (`Understanding_IUD_Analysis.py`): correlations, ANOVA, sentiment analysis (TextBlob), matplotlib charts
- **Dashboards**: a Chart.js findings dashboard with regional filtering, plus a patient recruitment poster
- **App**: a Streamlit app deployed on Databricks Apps to host and view the HTML/markdown outputs

## Key findings

- 60.6% of respondents said the pain was worse than they expected
- A significant correlation (r = -0.52, p = 0.002) between feeling believed by a provider and actual pain level, so patients who felt dismissed tended to report more pain
- The most common adverse event was severe cramping lasting more than a week
- Regional split showed even sharper numbers in the UK NHS subset: 73.3% reported worse-than-expected pain

## Sample and limits

- n = 33 respondents total, n = 15 for the UK subset, so subgroup analysis is underpowered
- A convenience sample recruited through social media, not necessarily representative
- USA and Australia data files exist as placeholders, not yet populated
- The pipeline is still manual: new responses need the notebook re-run by hand to refresh the dashboards
- Regional filtering on the dashboard isn't fully working yet

## Where it's headed

The plan is to close the loop end to end: survey responses sync automatically into Unity Catalog, the analysis notebook runs on new data without manual triggering, and the dashboards update themselves. That would let the project scale past a single hackathon dataset into something closer to a live monitoring tool.

## Stack

Databricks (Unity Catalog, Notebooks, Apps), Python (pandas, scipy, matplotlib, textblob), SQL, and a JavaScript/HTML/Chart.js front end, with Streamlit serving the app.