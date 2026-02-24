export function simulateDividendGrowth({
  sharePrice,
  dividendPerShare,
  shares,
  growthRate,
  years,
  reinvest,
}) {
  let results = []
  let currentShares = shares
  let currentDividend = dividendPerShare

  for (let year = 1; year <= years; year++) {
    const yearlyDividend = currentShares * currentDividend

    if (reinvest) {
      const newShares = yearlyDividend / sharePrice
      currentShares += newShares
    }

    const portfolioValue = currentShares * sharePrice

    results.push({
      year,
      shares: currentShares,
      dividend: yearlyDividend,
      portfolioValue,
    })

    currentDividend = currentDividend * (1 + growthRate / 100)
  }

  return results
}