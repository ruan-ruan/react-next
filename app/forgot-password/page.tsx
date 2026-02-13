'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('请输入您的邮箱');
      return;
    }

    if (!validateEmail(email)) {
      setError('请输入有效的邮箱地址');
      return;
    }

    setIsSubmitting(true);
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail('');
      // 5秒后重置成功状态
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <div className="card">
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    忘记密码
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    请输入您的邮箱地址，我们将向您发送重置密码的链接
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      重置链接已发送！
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      请查收您的邮箱，点击链接重置密码
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        邮箱
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white`}
                        placeholder="请输入您的邮箱"
                      />
                      {error && (
                        <p className="mt-1 text-sm text-red-500">{error}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full"
                    >
                      {isSubmitting ? '发送中...' : '发送重置链接'}
                    </button>

                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        想起密码了？ <Link href="/login" className="text-primary hover:underline">返回登录</Link>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;