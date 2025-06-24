import React from "react";
import {
  TrendingUp,
  BarChart,
  ShowChart,
  CurrencyRupee,
  Star,
  EmojiEvents,
  CheckCircle,
} from "@mui/icons-material";

const categories = [
  { icon: <TrendingUp style={{ color: "#3B82F6" }} />, label: "Stocks" },
  { icon: <BarChart style={{ color: "#FBBF24" }} />, label: "Options" },
  { icon: <ShowChart style={{ color: "#F97316" }} />, label: "Futures" },
  { icon: <CurrencyRupee style={{ color: "#F59E0B" }} />, label: "Commodity" },
  { icon: <TrendingUp style={{ color: "#14B8A6" }} />, label: "ETFs" },
  { icon: <BarChart style={{ color: "#22C55E" }} />, label: "Mutual Funds" },
  { icon: <CurrencyRupee style={{ color: "#F97316" }} />, label: "IPO" },
  { icon: <Star style={{ color: "#6366F1" }} />, label: "NFO" },
];

export default function DhanUI() {
  return (
    <div className="min-h-screen bg-white p-6 font-sans text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-3">
          <div className="bg-green-700 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
            ध
          </div>
          <h1 className="text-2xl font-bold">dhan</h1>
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 border border-green-700 text-green-700 font-semibold px-4 py-2 rounded hover:bg-green-50 transition">
            <CheckCircle />
            <span>Already Have an Account</span>
          </button>
          <button className="bg-gradient-to-r from-green-700 to-green-400 text-white px-6 py-2.5 rounded font-semibold flex items-center space-x-2 hover:from-green-600 hover:to-green-300 transition">
            <span>Create a Free Demat Account</span>
            <div className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded text-sm">
              <span>✗</span>
              <span>₹</span>
            </div>
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left text and awards */}
        <section className="space-y-8">
          <h2 className="text-5xl font-extrabold leading-tight">
            Create Free{" "}
            <span className="text-green-700">Dhan</span>{" "}
            <span className="inline-flex items-center space-x-1">
              <span>x</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="SW Logo"
                className="h-8"
              />
            </span>
            <br />
            Account with Us
          </h2>

          <p className="max-w-md text-gray-600 text-lg">
            Create your free account and access top-tier research, strategy
            support, and real-time tools powered by Dhan and Stockwiz.
          </p>

          {/* Awards */}
          <div className="flex gap-4 flex-wrap max-w-xl">
            {/* Award Card */}
            <div className="flex border rounded-lg p-3 shadow-sm space-x-4 items-center min-w-[250px]">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
                <EmojiEvents style={{ color: "#D97706" }} fontSize="large" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Deloitte Fast 50 Awards
                </p>
                <p className="text-gray-500 text-sm">In FinTech Category 2024</p>
              </div>
            </div>

            <div className="flex border rounded-lg p-3 shadow-sm space-x-4 items-center min-w-[250px]">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                <EmojiEvents style={{ color: "#2563EB" }} fontSize="large" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Best in class</p>
                <p className="text-gray-500 text-sm">Stock Trading Solutions</p>
              </div>
            </div>

            <div className="flex border rounded-lg p-3 shadow-sm space-x-4 items-center min-w-[250px]">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                <ShowChart style={{ color: "#EA580C" }} fontSize="large" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Best by Asset Classes
                </p>
                <p className="text-gray-500 text-sm">2024</p>
              </div>
            </div>
          </div>

          {/* Buttons under awards */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 max-w-sm">
            <button className="flex justify-center items-center space-x-2 bg-gradient-to-r from-green-700 to-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-300 transition">
              <span>Create a Free Demat Account</span>
              <div className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded text-sm">
                <span>✗</span>
                <span>₹</span>
              </div>
            </button>

            <button className="flex justify-center items-center space-x-2 border border-green-700 text-green-700 font-semibold px-6 py-3 rounded hover:bg-green-50 transition">
              <CheckCircle />
              <span>Already Have an Account</span>
            </button>
          </div>
        </section>

        {/* Right mobile mockup with floating boxes */}
        <section className="relative flex justify-center lg:justify-end">
          {/* Phone Mockup */}
          <div className="relative rounded-3xl shadow-2xl bg-gradient-to-r from-green-700 to-green-500 p-2">
            <div className="bg-black rounded-2xl p-4 w-80 h-[600px] relative overflow-hidden">
              {/* Status Bar */}
              <div className="flex justify-between text-white text-sm mb-4">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                </div>
              </div>

              {/* App Content */}
              <div className="space-y-4 text-white">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      ध
                    </div>
                    <div>
                      <div className="font-semibold">Dhan</div>
                      <div className="text-gray-400 text-xs">
                        Tradable assets: Stocks, Futures, Options, Commodity
                      </div>
                    </div>
                  </div>
                  <div className="text-green-400 text-xs">● Connected</div>
                </div>

                {/* P&L Card */}
                <div className="bg-green-700 rounded-lg p-4">
                  <div className="text-sm">Today's P&amp;L</div>
                  <div className="flex items-center space-x-2 font-bold text-2xl">
                    <span>₹ 8,45,957.00</span>
                    <span className="text-green-300 text-sm">(6.35%)</span>
                  </div>
                  <div className="text-green-300 text-sm">on 4 Positions</div>
                </div>

                {/* Features */}
                <div className="bg-gray-800 rounded-lg p-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>⏰ Lifetime Free Demat A/C</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>⚡ Execution Speed 91ms</span>
                    <span>📊 Live Signals</span>
                    <span>⭐ 1</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex justify-between bg-gray-800 rounded-lg p-4 text-center text-sm space-x-4">
                  <div className="flex-1">
                    <div className="font-bold text-white">100K+</div>
                    <div className="text-gray-400">Active Users</div>
                  </div>
                  <div className="flex-1 border-x border-gray-600">
                    <div className="font-bold text-white">₹150Cr</div>
                    <div className="text-gray-400">AUM</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white flex items-center justify-center space-x-1">
                      <span>4.6</span> <Star style={{ color: "#FBBF24" }} />
                    </div>
                    <div className="text-gray-400">Rating</div>
                  </div>
                </div>

                {/* Award Badges */}
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold">
                    50
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                    GL
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                    TV
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Info Boxes */}
          <div className="absolute -right-16 top-12 bg-white rounded-lg shadow-lg p-3 border max-w-xs">
            <div className="text-xs text-gray-500 mb-1">Trade Margin</div>
            <div className="font-bold text-green-700">₹1L+</div>
            <div className="text-xs text-yellow-600 mt-1 border-t border-yellow-300 pt-1 text-center text-[10px]">
              4x MTF Starting at 12.49% p.a for Buying 1,500+ Stocks
            </div>
          </div>

          <div className="absolute -right-16 top-36 bg-white rounded-lg shadow-lg p-3 border max-w-xs">
            <div className="text-xs text-green-700 mb-1 font-semibold">You Pay</div>
            <div className="font-bold text-green-700">₹25K</div>
          </div>

          <div className="absolute -right-16 top-60 bg-white rounded-lg shadow-lg p-3 border max-w-xs">
            <div className="text-xs text-orange-600 mb-1 font-semibold">Dhan Pays</div>
            <div className="font-bold text-orange-600">₹75K</div>
          </div>
        </section>
      </main>

      {/* Bottom Categories */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4 bg-white px-6 py-3 rounded-xl shadow-lg max-w-5xl mx-auto">
        {categories.map(({ icon, label }) => (
          <button
            key={label}
            className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition text-sm font-medium"
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
