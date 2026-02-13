import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              智能CRM获客系统
              <span className="text-primary block mt-2">提升销售效率，加速业务增长</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              专为企业打造的客户关系管理系统，帮助您精准获客、高效转化，实现销售目标。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn btn-primary text-center">
                免费试用14天
              </Link>
              <Link href="/demo" className="btn bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                观看演示
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20person%20avatar&image_size=square`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  来自5000+企业的信任
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20crm%20dashboard%20interface%20with%20charts%20and%20data&image_size=landscape_16_9`}
              alt="CRM Dashboard"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;