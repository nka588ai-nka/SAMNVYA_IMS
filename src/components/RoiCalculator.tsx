import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, Clock, FileText, 
  IndianRupee, Sparkles, ArrowRight, ShieldCheck 
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenLeadModal }) => {
  const [studentCount, setStudentCount] = useState<number>(3500);
  const [adminStaff, setAdminStaff] = useState<number>(20);
  const [avgFee, setAvgFee] = useState<number>(35000);

  // Computations
  const hoursSavedPerYear = Math.round(adminStaff * 160 + studentCount * 1.5);
  const paperPrintingSavings = Math.round(studentCount * 220);
  const feeReconciliationSpeedup = Math.round((studentCount * avgFee * 0.015) / 100000); // in Lakhs
  const totalFinancialImpactLakhs = (
    (paperPrintingSavings + (hoursSavedPerYear * 250)) / 100000 + feeReconciliationSpeedup
  ).toFixed(2);

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 06. QUANTIFIABLE ROI & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            MEASURE YOUR <span className="text-stroke-white text-transparent">EFFICIENCY</span> & <span className="text-[#F27D26]">ROI.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Estimate real administrative time savings, paper reduction, and fee cash-flow acceleration with Samnvya modular digitization.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F27D26]">
                1. CONFIGURE INSTITUTIONAL PARAMETERS
              </h3>

              {/* Slider 1: Students / Users */}
              <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-bold text-gray-300">
                  <span className="uppercase tracking-wider">Active Students / Users:</span>
                  <span className="text-sm font-black text-[#F27D26] font-mono">
                    {studentCount.toLocaleString('en-IN')} Users
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="20000"
                  step="100"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#F27D26]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>200</span>
                  <span>10,000</span>
                  <span>20,000+</span>
                </div>
              </div>

              {/* Slider 2: Admin & Faculty Staff */}
              <div className="space-y-3 bg-[#121212] p-5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-bold text-gray-300">
                  <span className="uppercase tracking-wider">Administrative & Faculty Staff:</span>
                  <span className="text-sm font-black text-[#F27D26] font-mono">
                    {adminStaff} Staff Members
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="150"
                  step="1"
                  value={adminStaff}
                  onChange={(e) => setAdminStaff(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#F27D26]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>3</span>
                  <span>75</span>
                  <span>150</span>
                </div>
              </div>

              {/* Slider 3: Average Fee / Transaction */}
              <div className="space-y-3 bg-[#121212] p-5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-bold text-gray-300">
                  <span className="uppercase tracking-wider">Average Annual Student Fee:</span>
                  <span className="text-sm font-black text-[#F27D26] font-mono">
                    ₹{avgFee.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={avgFee}
                  onChange={(e) => setAvgFee(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#F27D26]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>₹5,000</span>
                  <span>₹1,00,000</span>
                  <span>₹2,00,000</span>
                </div>
              </div>
            </div>

            {/* Calculated Impact Dashboard */}
            <div className="lg:col-span-6 bg-[#070e1e]/90 border border-cyan-500/20 text-white p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#F27D26]">
                  ESTIMATED ANNUAL VALUE OUTPUT
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 font-mono uppercase">
                  Automated Model
                </span>
              </div>

              {/* Big Metric Display */}
              <div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                  Total Annual Operational Value Gain
                </div>
                <div className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1.5 font-display flex items-baseline">
                  <span className="text-[#F27D26]">
                    ₹{totalFinancialImpactLakhs} LAKHS
                  </span>
                  <span className="text-xs text-gray-400 font-normal ml-3 font-mono">/ YEAR</span>
                </div>
              </div>

              {/* Sub Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-[#121212] border border-white/10">
                  <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-wider text-gray-300 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>Admin Hours Saved</span>
                  </div>
                  <div className="text-xl font-black text-white font-mono">
                    ~{hoursSavedPerYear.toLocaleString('en-IN')} HRS
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Automated admissions & fee counters</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#121212] border border-white/10">
                  <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-wider text-emerald-400 mb-1">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Paper & Register Savings</span>
                  </div>
                  <div className="text-xl font-black text-white font-mono">
                    ₹{(paperPrintingSavings / 100000).toFixed(2)} L
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Physical receipts & ledger forms</p>
                </div>
              </div>

              {/* Callout Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenLeadModal('quotation', `ROI Estimation (${studentCount} users, ₹${totalFinancialImpactLakhs}L impact)`)}
                  className="w-full py-4 rounded-full bg-white text-black hover:bg-[#F27D26] hover:text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center space-x-2 transition-all"
                  id="roi-request-report-btn"
                >
                  <span>Request Official Proposal & ROI Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
