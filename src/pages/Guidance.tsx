import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, LineChart } from 'lucide-react';

function Guidance() {
  const handleDownload = () => {
    // Create a sample Excel file URL (you'll need to replace this with your actual file)
    const fileUrl = "/guidance.xlsx";
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'guidance.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Professional Guidance
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Professional Consultation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold">Professional Consultation</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Our expert accounting and taxation professionals provide tailored consultation services
              to help you navigate complex financial matters with confidence. Whether you're a startup,
              small business, or large corporation, we offer:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Tax Planning & Compliance</strong> – Ensuring you maximize deductions while
                  staying compliant with regulations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Financial Reporting</strong> – Accurate financial statements to support
                  informed decision-making.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>GST & Income Tax Filing</strong> – Hassle-free tax filing with expert guidance.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Regulatory Compliance</strong> – Assisting businesses in adhering to legal requirements.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Payroll Management</strong> – Streamlined payroll Solution for smooth operations.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Business Advisory */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <LineChart className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold">Business Advisory</h2>
            </div>
            <p className="text-gray-600 mb-6">
              We provide expert guidance to ensure businesses maintain financial stability,
              regulatory compliance, and efficient tax management. Our advisory services include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Compliance & Risk Management</strong> – Identifying potential financial risks
                  and ensuring adherence to tax laws and regulations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Budgeting & Cost Control</strong> – Helping businesses plan their finances
                  effectively and minimize unnecessary expenses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Cash Flow Management</strong> – Strategies to ensure a steady cash flow
                  and avoid financial disruptions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Bookkeeping & Record Maintenance</strong> – Ensuring proper financial
                  documentation for audits and legal reporting.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Tax Efficiency & Planning</strong> – Structuring financial activities
                  to minimize tax liabilities while staying compliant.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Download Resources</h2>
          <p className="text-gray-600 mb-6">
            Download our comprehensive guide for detailed information about our services
            and business advisory Solution.
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Guide
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Guidance;