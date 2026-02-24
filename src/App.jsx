import ProjectionChart from "./components/ProjectionChart"
import { useState } from "react"
import { simulateDividendGrowth } from "./utils/simulate"

function App() {
  const [form, setForm] = useState({
    sharePrice: 100,
    dividendPerShare: 5,
    shares: 100,
    growthRate: 5,
    years: 10,
    reinvest: true,
  })

  const [results, setResults] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : Number(value),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const simulation = simulateDividendGrowth(form)
    setResults(simulation)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center p-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Dividend Reinvestment Calculator
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            name="sharePrice"
            placeholder="Share Price"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="dividendPerShare"
            placeholder="Dividend per Share"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="shares"
            placeholder="Number of Shares"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="growthRate"
            placeholder="Dividend Growth Rate (%)"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="years"
            placeholder="Years"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label className="flex items-center gap-2">
            <input type="checkbox" name="reinvest" onChange={handleChange} defaultChecked />
            Reinvest Dividends
          </label>

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>

        {/* RESULTS */}
        {results.length > 0 && (
          <div className="mt-10">
            <div className="bg-slate-50 p-6 rounded-xl shadow-inner mb-8">
              <h2 className="text-xl font-semibold mb-2">Final Portfolio Value</h2>
              <p className="text-2xl font-bold text-green-600">
                ₹ {results[results.length - 1].portfolioValue.toFixed(2)}
              </p>
            </div>

            <ProjectionChart data={results} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App