# Website calculation audit

The financial, environmental and labor calculations agree with the formulas and assumptions documented on the website. Research-derived differences and ratios also agree with their displayed rounding.

## Checks completed

- 9,410 scenarios checked against an independent Python Decimal reference model.
- 216,430 numerical comparisons, including every slider value at the baseline, all school/upgrade count combinations, randomized combinations, and proportional expansion scenarios.
- 81 representative rendering scenarios and 3,240 expansion-chart point checks across both chart modes.
- Budget categories and contingency reconcile with the unrounded total.
- Upgrade limits, reset, calculator synchronization, six retained data figures, table sorting and book controls passed code-level checks.
- Standalone HTML and modular calculator source were checked for matching code.

## Corrections made

1. Electricity and water estimates now retain up to four decimal places. Small positive estimates no longer display as zero.
2. Recovered hours and eight-hour working days retain up to four decimal places rather than rounding to whole units.
3. Very small AI-processing budget shares retain additional precision instead of showing 0.00%.
4. Donut arcs use 2 × π × radius rather than an approximate circumference.
5. The methodology explains that currency amounts are displayed to the nearest tenge and totals use unrounded values. Rounded line items may differ slightly from the displayed total.

## Confirmed default scenario

| Indicator | Verified value |
| --- | ---: |
| Teachers / AI users | 200 / 200 |
| Mentors | 10 |
| Active days / AI requests | 120 / 240,000 |
| AI processing | ₸746,592 |
| Personnel and employer costs | ₸36,900,000 |
| Subtotal | ₸52,246,592 |
| Contingency, before display rounding | ₸7,836,988.80 |
| Total, before display rounding | ₸60,083,580.80 |
| Total displayed to the nearest tenge | ₸60,083,581 |
| Electricity | 2,316 kWh |
| Illustrative cooling water | 260 L |
| Hypothetical grid emissions | 1.882908 t CO₂e, displayed as 1.88 t |
| AI budget share | 1.24% (rounded) |
| Personnel budget share | 61.4% (rounded) |
| Hypothetical recovered hours / eight-hour days | 2,400 / 300 |

Each upgraded school adds ₸2,660,000 before contingency: ₸1,100,000 for equipment plus ₸1,560,000 in additional annual connectivity charges. With the 15% contingency, the increase is ₸3,059,000 per upgraded school.

## Scope and limits

This audit verifies arithmetic, rendering logic and control handlers in code. It does not validate the underlying scientific estimates, historical price benchmarks or procurement assumptions as current real-world costs. A live browser audit was unavailable under the existing preview restrictions; physical slider interactions and visual layout have not been independently verified in a browser. Environmental outputs remain hypothetical and exclude satellite-equipment impacts, as disclosed on the website.
