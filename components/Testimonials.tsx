import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "张三",
      company: "某科技有限公司",
      role: "销售总监",
      avatar: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20businessman%20avatar&image_size=square`,
      quote: "使用CRM获客系统后，我们的销售效率提升了30%，客户转化率显著提高。系统操作简单，功能强大，是我们销售团队的得力助手。"
    },
    {
      name: "李四",
      company: "某电子商务公司",
      role: "市场经理",
      avatar: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20female%20businesswoman%20avatar&image_size=square`,
      quote: "CRM系统的数据分析功能非常强大，帮助我们精准定位目标客户，制定更有效的营销策略。团队协作功能也让我们的工作更加高效。"
    },
    {
      name: "王五",
      company: "某金融服务公司",
      role: "CEO",
      avatar: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20executive%20avatar&image_size=square`,
      quote: "作为一家快速成长的公司，我们需要一个能够适应我们发展的CRM系统。这个系统不仅满足了我们的需求，还为我们的业务增长提供了有力支持。"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            客户的声音
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            听听我们的客户如何评价我们的CRM获客系统
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}，{testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;