'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: "基础版",
      monthlyPrice: "99",
      yearlyPrice: "999",
      description: "适合小型团队或个人使用",
      features: [
        "最多5个用户",
        "500条客户记录",
        "基础客户管理",
        "销售线索跟踪",
        "基础报表分析",
        "邮件支持"
      ],
      popular: false
    },
    {
      name: "专业版",
      monthlyPrice: "299",
      yearlyPrice: "2999",
      description: "适合中型企业使用",
      features: [
        "最多20个用户",
        "5000条客户记录",
        "高级客户管理",
        "销售自动化",
        "高级报表分析",
        "电话支持",
        "营销集成",
        "团队协作"
      ],
      popular: true
    },
    {
      name: "企业版",
      monthlyPrice: "999",
      yearlyPrice: "9999",
      description: "适合大型企业使用",
      features: [
        "无限用户",
        "无限客户记录",
        "企业级客户管理",
        "全功能销售自动化",
        "企业级报表分析",
        "24/7专属支持",
        "全功能营销集成",
        "高级团队协作",
        "自定义开发"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            选择适合您的方案
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            无论您是个人还是企业，我们都有适合您的CRM解决方案
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${isMonthly ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
              月付
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isMonthly ? 'translate-x-1' : 'translate-x-6'}`}
              ></span>
            </button>
            <span className={`text-sm font-medium ${!isMonthly ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
              年付 <span className="text-primary font-bold">省15%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-200 dark:border-gray-700'} transition-all hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 px-4 rounded-t-lg">
                  <span className="text-sm font-semibold">最受欢迎</span>
                </div>
              )}
              <div className={`p-6 ${plan.popular ? 'rounded-t-none' : 'rounded-t-lg'}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ¥{isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    /{isMonthly ? '月' : '年'}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`btn ${plan.popular ? 'btn-primary' : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'} w-full text-center block`}
                >
                  立即购买
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            需要自定义方案？联系我们为您量身定制
          </p>
          <Link href="/contact" className="btn btn-secondary">
            联系销售
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;