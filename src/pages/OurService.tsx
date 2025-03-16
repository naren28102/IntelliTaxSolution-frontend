import React from 'react';
import { motion } from 'framer-motion';
import {
  Receipt, Calculator, Users as UsersIcon, Building2, Briefcase,
  ExternalLink, Link as LinkIcon
} from 'lucide-react';

function OurService() {
  const categories = [
    {
      title: "GST & Customs Related",
      icon: <Receipt className="w-8 h-8" />,
      services: [
        "GST Registration", "GST Return Filing", "GST Annual Return Filing",
        "GST Refund", "GST LUT", "E-Way Bill", "E-Invoice", "IEC Registration",
        "ICEGATE Registration", "GST Notice & Orders"
      ]
    },
    {
      title: "Income Tax & TDS Related",
      icon: <Calculator className="w-8 h-8" />,
      services: [
        "Income Tax Filing", "TDS Return Filing", "Income Tax Notice & Orders",
        "TDS Demand Notice"
      ]
    },
    {
      title: "HR Compliance Related",
      icon: <UsersIcon className="w-8 h-8" />,
      services: [
        "EPF & ESI Registration", "EPF & ESI Return Filing", "Payroll",
        "Professional Tax", "Labour Welfare Fund", "NDA Preparation"
      ]
    },
    {
      title: "Company Compliance",
      icon: <Building2 className="w-8 h-8" />,
      services: [
        "Company Incorporation", "INC-20A - Commencement of Business(COB)",
        "DIN Renewal", "DPT-3", "Annual Filing AOC-4 & MGT-7A & FORM 11 & FORM 8",
        "Company Winding Up", "CHG-1 & 4(Charge Creation & Satisfaction)",
        "Director Addition & Removal", "Company Name Change",
        "Company Address Change", "MOA Alteration", "Share Allotment"
      ]
    },
    {
      title: "Other Services",
      icon: <Briefcase className="w-8 h-8" />,
      services: [
        "Bank Project Report", "Provisional & Projected Statement",
        "Financial Statement Preparation", "Book Keeping",
        "Professional Consultation", "GEM Registration", "Trademark",
        "Copyrights", "ISO Certificate", "StartupIndia Registration",
        "UDYAM Registration", "Food License(FSSAI)",
        "Digital Signature Certificate(DSC)", "Trade License",
        "Company Tax(Corporation)"
      ]
    }
  ];

  const links = [
    { name: "GST Registration", url: "https://reg.gst.gov.in/registration/" },
    { name: "GST Login", url: "https://services.gst.gov.in/services/login" },
    { name: "HSN & SAC CODE", url: "https://cbic-gst.gov.in/gst-goods-services-rates.html" },
    { name: "IEC Code", url: "https://www.dgft.gov.in/CP/" },
    { name: "ICEGATE", url: "https://www.icegate.gov.in/" },
    { name: "E WAY BILL", url: "https://ewaybillgst.gov.in/login.aspx" },
    { name: "E INVOICE", url: "https://einvoice1.gst.gov.in/" },
    { name: "Income Tax Registration", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/register" },
    { name: "Income Tax Login", url: "https://eportal.incometax.gov.in/iec/foservices/#/login" },
    { name: "MCA Master Data", url: "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html" },
    { name: "MCA V3", url: "https://www.mca.gov.in/content/mca/global/en/foportal/fologin.html" },
    { name: "The Check Company", url: "https://www.thecompanycheck.com/" },
    { name: "EPF & ESI Registration", url: "https://return.shramsuvidha.gov.in/user/login" },
    { name: "EPFO Login", url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" },
    { name: "ESIC Login", url: "https://www.esic.gov.in/insured-person-employer-login" },
    { name: "Traces Login", url: "https://contents.tdscpc.gov.in/en/home.html" },
    { name: "FSSAI Registration", url: "https://foscos.fssai.gov.in/apply-for-lic-and-reg" },
    { name: "Startup India Registration", url: "https://www.startupindia.gov.in/" },
    { name: "GEM Registration", url: "https://sso.gem.gov.in/ARXSSO/oauth/doLogin" },
    { name: "Professional Tax", url: "https://chennaicorporation.gov.in/gcc/online-services/online-payment/profession-tax/" },
    { name: "Company Tax", url: "https://chennaicorporation.gov.in/gcc/online-services/company-tax/" },
    { name: "Trade License", url: "https://chennaicorporation.gov.in/gcc/online-services/trade-license/" },
    { name: "PAN", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
    { name: "TAN", url: "https://tin.tin.nsdl.com/tan/form49B.html" },
    { name: "Trademark Search", url: "https://tmrsearch.ipindia.gov.in/tmrpublicsearch/" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-primary-900"
        >
          Our Services
        </motion.h1>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mr-3">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-primary-900">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service} className="text-secondary-600 hover:text-primary-600 transition-colors">
                    • {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Center aligned categories for desktop */}
        <div className="hidden lg:flex justify-center gap-8 mb-16">
          {categories.slice(3).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow w-[400px]"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mr-3">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-primary-900">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service} className="text-secondary-600 hover:text-primary-600 transition-colors">
                    • {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile view for last two categories */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.slice(3).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mr-3">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-primary-900">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service} className="text-secondary-600 hover:text-primary-600 transition-colors">
                    • {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-gray-700 hover:text-primary-600">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OurService;