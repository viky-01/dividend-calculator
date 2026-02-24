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
  let totalDividends = 0

  for (let year = 1; year <= years; year++) {
    const yearlyDividend = currentShares * currentDividend
    totalDividends += yearlyDividend

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
      totalDividends,
    })

    currentDividend = currentDividend * (1 + growthRate / 100)
  }

  return results
}