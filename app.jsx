import React, { useState } from 'react';
import { Scale, TrendingUp, TrendingDown, AlertCircle, CheckCircle, XCircle, Filter, Download } from 'lucide-react';

const TradeoffAnalyzer = () => {
  const [activeTab, setActiveTab] = useState('api');
  const [filters, setFilters] = useState({
    priority: 'all',
    budget: 'all',
    complexity: 'all'
  });

  const comparisons = {
    api: {
      title: "REST API vs GraphQL",
      options: [
        {
          name: "REST API",
          score: 7.5,
          pros: [
            { text: "Simple and widely understood", weight: "high" },
            { text: "Better caching with HTTP", weight: "high" },
            { text: "Mature tooling ecosystem", weight: "medium" },
            { text: "Easy to version and maintain", weight: "medium" }
          ],
          cons: [
            { text: "Over-fetching or under-fetching data", weight: "high" },
            { text: "Multiple endpoints needed", weight: "medium" },
            { text: "Can require multiple round trips", weight: "medium" }
          ],
          bestFor: ["Simple CRUD operations", "Public APIs", "Mobile apps with bandwidth constraints"],
          metrics: {
            complexity: "Low",
            performance: "Good",
            scalability: "Excellent",
            learningCurve: "Easy"
          }
        },
        {
          name: "GraphQL",
          score: 7.8,
          pros: [
            { text: "Precise data fetching", weight: "high" },
            { text: "Single endpoint for all queries", weight: "high" },
            { text: "Strong typing and introspection", weight: "medium" },
            { text: "Real-time subscriptions built-in", weight: "medium" }
          ],
          cons: [
            { text: "Steeper learning curve", weight: "high" },
            { text: "Complex caching strategies", weight: "high" },
            { text: "Potential for expensive queries", weight: "medium" },
            { text: "Overkill for simple use cases", weight: "low" }
          ],
          bestFor: ["Complex data requirements", "Rapid frontend iteration", "Multiple client types"],
          metrics: {
            complexity: "High",
            performance: "Excellent",
            scalability: "Good",
            learningCurve: "Moderate"
          }
        }
      ],
      recommendation: {
        context: "For a startup MVP with limited resources",
        choice: "REST API",
        reasoning: "Lower complexity and faster initial development. You can always migrate to GraphQL later when data requirements become more complex."
      }
    },
    cloud: {
      title: "AWS vs Google Cloud vs Azure",
      options: [
        {
          name: "AWS",
          score: 8.5,
          pros: [
            { text: "Largest market share and community", weight: "high" },
            { text: "Most comprehensive service catalog", weight: "high" },
            { text: "Best third-party integrations", weight: "medium" },
            { text: "Mature documentation", weight: "medium" }
          ],
          cons: [
            { text: "Can be expensive at scale", weight: "high" },
            { text: "Complex pricing structure", weight: "medium" },
            { text: "Steeper learning curve", weight: "medium" }
          ],
          bestFor: ["Enterprise applications", "Startups needing comprehensive services", "Heavy compute workloads"],
          metrics: {
            complexity: "High",
            cost: "$$$",
            performance: "Excellent",
            ecosystem: "Largest"
          }
        },
        {
          name: "Google Cloud",
          score: 7.8,
          pros: [
            { text: "Best for data analytics and ML", weight: "high" },
            { text: "Competitive pricing", weight: "high" },
            { text: "Excellent Kubernetes support", weight: "medium" },
            { text: "Simple, clean interface", weight: "low" }
          ],
          cons: [
            { text: "Smaller service catalog than AWS", weight: "medium" },
            { text: "Less enterprise adoption", weight: "medium" },
            { text: "Fewer third-party integrations", weight: "low" }
          ],
          bestFor: ["Data-heavy applications", "Machine learning projects", "Container-based workloads"],
          metrics: {
            complexity: "Medium",
            cost: "$$",
            performance: "Excellent",
            ecosystem: "Growing"
          }
        },
        {
          name: "Azure",
          score: 8.2,
          pros: [
            { text: "Best Microsoft integration", weight: "high" },
            { text: "Strong hybrid cloud support", weight: "high" },
            { text: "Good enterprise features", weight: "medium" },
            { text: "Competitive enterprise pricing", weight: "medium" }
          ],
          cons: [
            { text: "Less intuitive interface", weight: "medium" },
            { text: "Inconsistent documentation", weight: "medium" },
            { text: "Smaller community vs AWS", weight: "low" }
          ],
          bestFor: ["Microsoft-heavy organizations", "Hybrid cloud deployments", "Enterprise .NET applications"],
          metrics: {
            complexity: "Medium",
            cost: "$$",
            performance: "Excellent",
            ecosystem: "Enterprise"
          }
        }
      ],
      recommendation: {
        context: "For a Python-based ML startup",
        choice: "Google Cloud",
        reasoning: "Superior ML tools (Vertex AI, BigQuery ML), competitive pricing, and excellent support for modern development practices."
      }
    },
    stack: {
      title: "Tech Stack Comparison",
      options: [
        {
          name: "React + Node.js + PostgreSQL",
          score: 8.3,
          pros: [
            { text: "Full JavaScript stack", weight: "high" },
            { text: "Large talent pool", weight: "high" },
            { text: "Excellent for real-time apps", weight: "medium" },
            { text: "Rich ecosystem of libraries", weight: "medium" }
          ],
          cons: [
            { text: "JavaScript fatigue (too many choices)", weight: "medium" },
            { text: "Not ideal for CPU-intensive tasks", weight: "medium" },
            { text: "Callback complexity potential", weight: "low" }
          ],
          bestFor: ["Real-time applications", "Rapid prototyping", "Teams with JS expertise"],
          metrics: {
            complexity: "Medium",
            performance: "Good",
            hiring: "Easy",
            maturity: "Very Mature"
          }
        },
        {
          name: "Next.js + Prisma + PostgreSQL",
          score: 8.7,
          pros: [
            { text: "Built-in SSR and SSG", weight: "high" },
            { text: "Excellent SEO capabilities", weight: "high" },
            { text: "Type-safe database access", weight: "medium" },
            { text: "Great developer experience", weight: "medium" }
          ],
          cons: [
            { text: "Vendor lock-in to Vercel patterns", weight: "medium" },
            { text: "Learning curve for full-stack features", weight: "medium" },
            { text: "Can be overkill for simple apps", weight: "low" }
          ],
          bestFor: ["SEO-critical apps", "E-commerce platforms", "Content-heavy sites"],
          metrics: {
            complexity: "Medium",
            performance: "Excellent",
            hiring: "Moderate",
            maturity: "Mature"
          }
        },
        {
          name: "Django + PostgreSQL + React",
          score: 8.0,
          pros: [
            { text: "Batteries-included framework", weight: "high" },
            { text: "Excellent admin interface", weight: "high" },
            { text: "Strong security defaults", weight: "medium" },
            { text: "Great for data-driven apps", weight: "medium" }
          ],
          cons: [
            { text: "Monolithic architecture", weight: "medium" },
            { text: "Less flexible than micro-frameworks", weight: "medium" },
            { text: "Python can be slower than compiled languages", weight: "low" }
          ],
          bestFor: ["Content management systems", "Data science integration", "Rapid MVP development"],
          metrics: {
            complexity: "Low",
            performance: "Good",
            hiring: "Moderate",
            maturity: "Very Mature"
          }
        }
      ],
      recommendation: {
        context: "For a SaaS product with complex business logic",
        choice: "Next.js + Prisma + PostgreSQL",
        reasoning: "Combines modern developer experience with production-ready features. Type safety across the stack reduces bugs, and Next.js handles both marketing pages and app logic efficiently."
      }
    }
  };

  const current = comparisons[activeTab];

  const getWeightColor = (weight) => {
    const colors = {
      high: "text-red-600 bg-red-50",
      medium: "text-yellow-600 bg-yellow-50",
      low: "text-green-600 bg-green-50"
    };
    return colors[weight] || colors.medium;
  };

  const downloadReport = () => {
    const report = `
TRADE-OFF ANALYSIS REPORT
========================
${current.title}
Generated: ${new Date().toLocaleDateString()}

${current.options.map((option, idx) => `
${idx + 1}. ${option.name} (Score: ${option.score}/10)
${'='.repeat(option.name.length + 20)}

STRENGTHS:
${option.pros.map(pro => `  ✓ ${pro.text} [${pro.weight} priority]`).join('\n')}

WEAKNESSES:
${option.cons.map(con => `  ✗ ${con.text} [${con.weight} impact]`).join('\n')}

BEST FOR:
${option.bestFor.map(use => `  • ${use}`).join('\n')}

KEY METRICS:
${Object.entries(option.metrics).map(([key, value]) => `  ${key}: ${value}`).join('\n')}
`).join('\n\n')}

RECOMMENDATION
==============
Context: ${current.recommendation.context}
Suggested Choice: ${current.recommendation.choice}
Reasoning: ${current.recommendation.reasoning}
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tradeoff-analysis-${activeTab}-${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Trade-off Analyzer</h1>
          </div>
          <p className="text-gray-600 text-lg">Make informed decisions by comparing options side-by-side</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 shadow-sm">
          {Object.entries(comparisons).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                activeTab === key
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        {/* Download Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={downloadReport}
            className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg shadow-sm hover:shadow-md transition-all border border-indigo-200"
          >
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {current.options.map((option, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold">{option.score}</div>
                  <div className="text-sm opacity-90">/10 Overall Score</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 border-b">
                <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(option.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                      <div className="text-sm font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros */}
              <div className="p-6 border-b">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Strengths</h4>
                </div>
                <ul className="space-y-2">
                  {option.pros.map((pro, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="text-sm text-gray-700">{pro.text}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getWeightColor(pro.weight)}`}>
                          {pro.weight}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="p-6 border-b">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-gray-900">Weaknesses</h4>
                </div>
                <ul className="space-y-2">
                  {option.cons.map((con, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="text-sm text-gray-700">{con.text}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getWeightColor(con.weight)}`}>
                          {con.weight}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                <ul className="space-y-1">
                  {option.bestFor.map((use, uIdx) => (
                    <li key={uIdx} className="text-sm text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border-2 border-green-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Recommendation</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Context:</span> {current.recommendation.context}
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-600 mb-1">Suggested Choice</div>
                <div className="text-2xl font-bold text-green-700">{current.recommendation.choice}</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Why:</span> {current.recommendation.reasoning}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>💡 Remember: The "best" choice depends on your specific context, team, and constraints.</p>
          <p className="mt-1">Use this tool to understand trade-offs, not to find absolute answers.</p>
        </div>
      </div>
    </div>
  );
};

export default TradeoffAnalyzer;