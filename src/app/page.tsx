'use client'

import React, { useState } from 'react';
import { FileText, Download, Calendar, Shield, Book, Mail, Phone, User, HelpCircle, FileCheck, Users, Globe, BarChart, Lock, ChevronDown, ChevronUp, ExternalLink, MessageSquare } from 'lucide-react';

export default function PolicyCenter() {
  type Policy = {
    id: string;
    title: string;
    year: string;
    date: string;
    type: string;
    description: string;
    file: string;
    icon: React.ComponentType<{ className?: string }>;
  };

  type FAQ = {
    question: string;
    answer: string;
  };

  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [activeTab, setActiveTab] = useState<'policies' | 'faq' | 'forms' | 'contact' | 'guidelines' | 'resources'>('policies');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [language, setLanguage] = useState<'th' | 'en'>('th');
  const [formType, setFormType] = useState<'access' | 'modify' | 'delete' | 'complaint' | null>(null);

  const policies: Policy[] = [
    {
      id: 'p1',
      title: language === 'th' ? 'ข้อบังคับมหาวิทยาลัยราชภัฏมหาสารคาม ว่าด้วย ธรรมาภิบาลข้อมูลของมหาวิทยาลัย' : 'Rajabhat Maha Sarakham University Regulations on Data Governance',
      year: 'พ.ศ. 2566',
      date: '27 มกราคม 2566',
      type: language === 'th' ? 'ธรรมาภิบาลข้อมูล' : 'Data Governance',
      description: language === 'th' ? 'กำหนดหลักเกณฑ์และแนวทางในการบริหารจัดการข้อมูลของมหาวิทยาลัยให้เป็นไปตามหลักธรรมาภิบาล' : 'Guidelines for data management according to good governance principles',
      file: 'p1.pdf',
      icon: Book
    },
    {
      id: 'p2',
      title: language === 'th' ? 'ข้อบังคับมหาวิทยาลัยราชภัฏมหาสารคาม ว่าด้วย การคุ้มครองข้อมูลส่วนบุคคล' : 'Rajabhat Maha Sarakham University Regulations on Personal Data Protection',
      year: 'พ.ศ. 2566',
      date: '27 กุมภาพันธ์ 2566',
      type: language === 'th' ? 'คุ้มครองข้อมูลส่วนบุคคล' : 'Personal Data Protection',
      description: language === 'th' ? 'กำหนดหลักเกณฑ์การเก็บรวบรวม ใช้ เปิดเผย หรือดำเนินการใดๆ เกี่ยวกับข้อมูลส่วนบุคคล' : 'Guidelines for collection, use, disclosure and processing of personal data',
      file: 'p2.pdf',
      icon: Shield
    },
    {
      id: 'p3',
      title: language === 'th' ? 'ข้อบังคับมหาวิทยาลัยราชภัฏมหาสารคาม ว่าด้วย การคุ้มครองข้อมูลส่วนบุคคล (ฉบับที่ 2)' : 'Rajabhat Maha Sarakham University Regulations on Personal Data Protection (Version 2)',
      year: 'พ.ศ. 2567',
      date: '26 เมษายน 2567',
      type: language === 'th' ? 'คุ้มครองข้อมูลส่วนบุคคล' : 'Personal Data Protection',
      description: language === 'th' ? 'แก้ไขเพิ่มเติมข้อบังคับว่าด้วยการคุ้มครองข้อมูลส่วนบุคคล เพื่อให้สอดคล้องกับข้อกฎหมายที่รับผิดชอบ' : 'Amendments to personal data protection regulations for legal compliance',
      file: 'p3.pdf',
      icon: Shield
    }
  ];

  const faqs: FAQ[] = [
    {
      question: language === 'th' ? 'PDPA คืออะไร?' : 'What is PDPA?',
      answer: language === 'th' ? 'PDPA (Personal Data Protection Act) คือ พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 เป็นกฎหมายที่ออกมาเพื่อคุ้มครองข้อมูลส่วนบุคคลของบุคคลธรรมดา ให้สิทธิ์เจ้าของข้อมูลในการควบคุมข้อมูลส่วนบุคคลของตนเอง และกำหนดหน้าที่ของผู้ควบคุมข้อมูลส่วนบุคคลในการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล' : 'PDPA (Personal Data Protection Act) B.E. 2562 (2019) is a law designed to protect personal data of individuals, granting data subjects rights to control their personal data and defining obligations for data controllers in collecting, using, or disclosing personal data.'
    },
    {
      question: language === 'th' ? 'ข้อมูลส่วนบุคคลคืออะไร?' : 'What is personal data?',
      answer: language === 'th' ? 'ข้อมูลส่วนบุคคล คือ ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ไม่ว่าทางตรงหรือทางอ้อม เช่น ชื่อ-นามสกุล, เลขบัตรประชาชน, ที่อยู่, เบอร์โทรศัพท์, อีเมล, รูปภาพ, ข้อมูลสุขภาพ, ข้อมูลทางการเงิน เป็นต้น' : 'Personal data refers to information about an individual that can identify that person directly or indirectly, such as name, ID number, address, phone number, email, photos, health information, financial data, etc.'
    },
    {
      question: language === 'th' ? 'มหาวิทยาลัยเก็บข้อมูลอะไรของฉันบ้าง?' : 'What data does the university collect about me?',
      answer: language === 'th' ? 'มหาวิทยาลัยเก็บข้อมูลที่จำเป็นต่อการดำเนินการด้านการศึกษาและบริหารจัดการ เช่น ข้อมูลส่วนตัว (ชื่อ-นามสกุล, เลขบัตรประชาชน), ข้อมูลการศึกษา, ผลการเรียน, ข้อมูลการเงิน, ข้อมูลการลงทะเบียน, ข้อมูลการติดต่อ และข้อมูลอื่นๆ ที่เกี่ยวข้องกับการให้บริการทางการศึกษา' : 'The university collects data necessary for educational operations and administration, such as personal information (name, ID number), educational records, grades, financial information, registration data, contact information, and other data related to educational services.'
    },
    {
      question: language === 'th' ? 'ฉันมีสิทธิ์อะไรบ้างตาม PDPA?' : 'What rights do I have under PDPA?',
      answer: language === 'th' ? 'คุณมีสิทธิ์: (1) เพิกถอนความยินยอม (2) เข้าถึงและขอสำเนาข้อมูล (3) ขอให้โอนย้ายข้อมูล (4) คัดค้านการเก็บรวบรวมหรือใช้ข้อมูล (5) ขอให้ลบหรือทำลายข้อมูล (6) ขอให้ระงับการใช้ข้อมูล (7) ขอให้แก้ไขข้อมูลให้ถูกต้อง (8) ร้องเรียนหากสิทธิ์ถูกละเมิด' : 'You have the right to: (1) Withdraw consent (2) Access and obtain copies of data (3) Request data portability (4) Object to data collection or use (5) Request deletion or destruction of data (6) Request suspension of data use (7) Request correction of inaccurate data (8) File complaints if rights are violated.'
    },
    {
      question: language === 'th' ? 'จะขอใช้สิทธิ์ตาม PDPA ได้อย่างไร?' : 'How can I exercise my PDPA rights?',
      answer: language === 'th' ? 'คุณสามารถขอใช้สิทธิ์ได้โดยกรอกแบบฟอร์มในแท็บ "แบบฟอร์มออนไลน์" หรือติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ของมหาวิทยาลัยโดยตรง ทางอีเมล pdpa@rmu.ac.th หรือโทรศัพท์ 043-754-321' : 'You can exercise your rights by filling out the form in the "Online Forms" tab or by contacting the university\'s Data Protection Officer (DPO) directly via email at pdpa@rmu.ac.th or phone at 043-754-321.'
    },
    {
      question: language === 'th' ? 'ใช้เวลานานแค่ไหนในการดำเนินการคำขอ?' : 'How long does it take to process requests?',
      answer: language === 'th' ? 'มหาวิทยาลัยจะดำเนินการภายใน 30 วัน นับแต่วันที่ได้รับคำขอ หากมีเหตุจำเป็นที่ไม่สามารถดำเนินการได้ภายในกำหนด มหาวิทยาลัยจะแจ้งให้ทราบล่วงหน้า และอาจขยายระยะเวลาได้อีกไม่เกิน 30 วัน' : 'The university will process requests within 30 days from the date of receipt. If there are necessary reasons that prevent completion within this timeframe, the university will notify you in advance and may extend the period by no more than 30 days.'
    }
  ];

  const handleDownload = (filename: string) => {
    alert(`กำลังดาวน์โหลด ${filename}\n\nในระบบจริง คุณต้องวางไฟล์ PDF ไว้ใน public/policies/${filename}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ส่งแบบฟอร์มสำเร็จ! เจ้าหน้าที่จะติดต่อกลับภายใน 3-5 วันทำการ');
    setFormType(null);
  };

  const content = {
    th: {
      header: 'ศูนย์กลางนโยบายและข้อบังคับ',
      subtitle: 'มหาวิทยาลัยราชภัฏมหาสารคาม',
      aboutTitle: 'เกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล (PDPA)',
      aboutDesc: 'มหาวิทยาลัยราชภัฏมหาสารคามให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของนักศึกษา บุคลากร และผู้มีส่วนได้ส่วนเสียทุกท่าน โดยปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 และได้จัดทำข้อบังคับและประกาศต่างๆ เพื่อเป็นแนวทางในการดำเนินงาน',
      tabs: {
        policies: 'นโยบายและข้อบังคับ',
        faq: 'คำถามที่พบบ่อย',
        forms: 'แบบฟอร์มออนไลน์',
        contact: 'ติดต่อ DPO',
        guidelines: 'แนวปฏิบัติ',
        resources: 'ทรัพยากร'
      }
    },
    en: {
      header: 'Policy & Regulations Center',
      subtitle: 'Rajabhat Maha Sarakham University',
      aboutTitle: 'About Personal Data Protection (PDPA)',
      aboutDesc: 'Rajabhat Maha Sarakham University prioritizes the protection of personal data of students, staff, and all stakeholders, in compliance with the Personal Data Protection Act B.E. 2562 (2019). We have established regulations and announcements to guide our operations.',
      tabs: {
        policies: 'Policies & Regulations',
        faq: 'FAQ',
        forms: 'Online Forms',
        contact: 'Contact DPO',
        guidelines: 'Guidelines',
        resources: 'Resources'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              {/* University Logo */}
              
              {/* Shield Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-700 to-red-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-xl md:text-3xl font-bold text-gray-900">{t.header}</h1>
                <p className="text-sm md:text-base text-gray-600 mt-1">{t.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm md:text-base"
            >
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium">{language === 'th' ? 'EN' : 'TH'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* University Logo Section - Between Header and Content */}
      <div className="bg-gradient-to-r from-green-700 via-white to-red-600 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col items-center">
            <img 
              src="/100.png" 
              alt="Logo มหาวิทยาลัยราชภัฏมหาสารคาม" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4"
            />
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent mb-2">
                {language === 'th' ? 'มหาวิทยาลัยราชภัฏมหาสารคาม' : 'Rajabhat Maha Sarakham University'}
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {language === 'th' ? 'ศูนย์กลางนโยบายและข้อบังคับด้านการคุ้มครองข้อมูลส่วนบุคคล' : 'Policy and Regulations Center for Personal Data Protection'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-green-700">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">{t.aboutDesc}</p>
          
          {/* What is PDPA */}
          <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-lg p-4 md:p-6 border border-green-200 mb-4">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              {language === 'th' ? '🛡️ PDPA คืออะไร?' : '🛡️ What is PDPA?'}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              {language === 'th' 
                ? 'พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) คือกฎหมายที่คุ้มครองสิทธิส่วนบุคคลของคุณ ให้คุณมีอำนาจควบคุมข้อมูลของตัวเอง และกำหนดให้องค์กรต่างๆ ต้องจัดการข้อมูลของคุณอย่างปลอดภัยและโปร่งใส'
                : 'The Personal Data Protection Act (PDPA) is a law that protects your privacy rights, gives you control over your data, and requires organizations to manage your data securely and transparently.'
              }
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-green-50 rounded-lg p-4 md:p-6 border border-green-200">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              {language === 'th' ? '✨ สิทธิ์พื้นฐานของคุณ' : '✨ Your Basic Rights'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{language === 'th' ? 'เข้าถึงและขอสำเนาข้อมูลของคุณ' : 'Access and obtain copies of your data'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{language === 'th' ? 'แก้ไขข้อมูลให้ถูกต้องครบถ้วน' : 'Correct inaccurate or incomplete data'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{language === 'th' ? 'ลบหรือทำลายข้อมูลส่วนบุคคล' : 'Delete or destroy personal data'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{language === 'th' ? 'คัดค้านการใช้ข้อมูล' : 'Object to data processing'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{language === 'th' ? 'ขอให้โอนย้ายข้อมูล' : 'Request data portability'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{language === 'th' ? 'ถอนความยินยอม' : 'Withdraw consent'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="flex flex-wrap border-b overflow-x-auto">
            {Object.entries(t.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex-1 min-w-[120px] md:min-w-[140px] px-3 md:px-4 py-3 md:py-4 font-medium transition-colors text-xs md:text-base whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-green-700 to-red-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-4 md:p-6">
            {/* Policies Tab */}
            {activeTab === 'policies' && (
              <div className="space-y-4 md:space-y-6">
                {policies.map((policy) => {
                  const Icon = policy.icon;
                  return (
                    <div
                      key={policy.id}
                      className="bg-gray-50 rounded-xl p-4 md:p-6 hover:shadow-md transition-all border border-gray-200"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-green-700" />
                        </div>
                        <div className="flex-1 w-full">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                            {policy.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                              {policy.date}
                            </span>
                            <span className="px-2 md:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                              {policy.type}
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                            {policy.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => handleDownload(policy.file)}
                              className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-green-700 to-red-600 hover:from-green-800 hover:to-red-700 text-white rounded-lg font-medium transition-colors shadow-md text-sm md:text-base"
                            >
                              <Download className="w-4 h-4" />
                              {language === 'th' ? 'ดาวน์โหลด PDF' : 'Download PDF'}
                            </button>
                            <button
                              onClick={() => setSelectedPolicy(policy)}
                              className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors text-sm md:text-base"
                            >
                              <FileText className="w-4 h-4" />
                              {language === 'th' ? 'รายละเอียด' : 'Details'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'th' ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'}
                </h3>
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-3 text-left">
                        <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                      </div>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="p-5 bg-white border-t">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Forms Tab */}
            {activeTab === 'forms' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'th' ? 'แบบฟอร์มออนไลน์' : 'Online Forms'}
                </h3>
                
                {!formType ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setFormType('access')}
                      className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all text-left border-2 border-blue-200"
                    >
                      <FileText className="w-10 h-10 text-blue-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        {language === 'th' ? 'ขอเข้าถึงข้อมูล' : 'Data Access Request'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === 'th' ? 'ขอรับสำเนาข้อมูลส่วนบุคคลของคุณ' : 'Request a copy of your personal data'}
                      </p>
                    </button>

                    <button
                      onClick={() => setFormType('modify')}
                      className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all text-left border-2 border-green-200"
                    >
                      <FileCheck className="w-10 h-10 text-green-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        {language === 'th' ? 'ขอแก้ไขข้อมูล' : 'Data Correction Request'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === 'th' ? 'แก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์' : 'Correct inaccurate or incomplete data'}
                      </p>
                    </button>

                    <button
                      onClick={() => setFormType('delete')}
                      className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all text-left border-2 border-red-200"
                    >
                      <Shield className="w-10 h-10 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        {language === 'th' ? 'ขอลบข้อมูล' : 'Data Deletion Request'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === 'th' ? 'ขอลบหรือทำลายข้อมูลส่วนบุคคล' : 'Request deletion of personal data'}
                      </p>
                    </button>

                    <button
                      onClick={() => setFormType('complaint')}
                      className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all text-left border-2 border-purple-200"
                    >
                      <MessageSquare className="w-10 h-10 text-purple-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        {language === 'th' ? 'แจ้งเหตุละเมิด' : 'Report Violation'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === 'th' ? 'แจ้งเหตุการละเมิดข้อมูลส่วนบุคคล' : 'Report data protection violations'}
                      </p>
                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-gray-900">
                        {formType === 'access' && (language === 'th' ? 'แบบฟอร์มขอเข้าถึงข้อมูล' : 'Data Access Request Form')}
                        {formType === 'modify' && (language === 'th' ? 'แบบฟอร์มขอแก้ไขข้อมูล' : 'Data Correction Request Form')}
                        {formType === 'delete' && (language === 'th' ? 'แบบฟอร์มขอลบข้อมูล' : 'Data Deletion Request Form')}
                        {formType === 'complaint' && (language === 'th' ? 'แบบฟอร์มแจ้งเหตุละเมิด' : 'Violation Report Form')}
                      </h4>
                      <button
                        onClick={() => setFormType(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'} *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {language === 'th' ? 'อีเมล' : 'Email'} *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {language === 'th' ? 'เบอร์โทรศัพท์' : 'Phone Number'} *
                          </label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'th' ? 'สถานะ' : 'Status'} *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">{language === 'th' ? 'เลือกสถานะ' : 'Select Status'}</option>
                          <option value="student">{language === 'th' ? 'นักศึกษา' : 'Student'}</option>
                          <option value="staff">{language === 'th' ? 'บุคลากร' : 'Staff'}</option>
                          <option value="alumni">{language === 'th' ? 'ศิษย์เก่า' : 'Alumni'}</option>
                          <option value="other">{language === 'th' ? 'อื่นๆ' : 'Other'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'th' ? 'รายละเอียดคำขอ' : 'Request Details'} *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={language === 'th' ? 'กรุณาระบุรายละเอียดคำขอของคุณ...' : 'Please provide details of your request...'}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md"
                      >
                        {language === 'th' ? 'ส่งคำขอ' : 'Submit Request'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Contact DPO Tab */}
            {activeTab === 'contact' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'th' ? 'ติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)' : 'Contact Data Protection Officer (DPO)'}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {language === 'th' ? 'ศูนย์เทคโนโลยีดิจิทัลและนวัตกรรม' : 'Digital Technology and Innovation Center'}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {language === 'th' ? 'เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล' : 'Data Protection Officer'}
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <div>
                          <div>cc@rmu.ac.th</div>
                          <div>cc@lives.rmu.ac.th</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <div>
                          <div>+66 81-564-7994</div>
                          <div>+66 91-019-9179</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <a href="https://cc.rmu.ac.th" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          cc.rmu.ac.th
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">
                      {language === 'th' ? 'เวลาทำการ' : 'Office Hours'}
                    </h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>{language === 'th' ? 'จันทร์ - ศุกร์' : 'Monday - Friday'}</span>
                        <span className="font-medium">08:30 - 16:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === 'th' ? 'พักเที่ยง' : 'Lunch Break'}</span>
                        <span className="font-medium">12:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === 'th' ? 'เสาร์ - อาทิตย์' : 'Saturday - Sunday'}</span>
                        <span className="font-medium text-red-600">{language === 'th' ? 'ปิดทำการ' : 'Closed'}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-bold text-gray-900 mb-3">
                        {language === 'th' ? 'ที่อยู่' : 'Address'}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {language === 'th' 
                          ? 'เลขที่ 80 ถนนนครสวรรค์ ตำบลตลาด อำเภอเมือง จังหวัดมหาสารคาม 44000'
                          : '80 Nakhon Sawan Road, Talad, Mueang, Maha Sarakham 44000'
                        }
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {language === 'th' ? 'เวลาตอบกลับ' : 'Response Time'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === 'th' 
                          ? 'คำขอจะได้รับการพิจารณาภายใน 3-5 วันทำการ และดำเนินการภายใน 30 วัน'
                          : 'Requests will be reviewed within 3-5 business days and processed within 30 days'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-600" />
                    {language === 'th' ? 'การรักษาความลับ' : 'Confidentiality'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {language === 'th'
                      ? 'ข้อมูลทั้งหมดที่คุณส่งมาจะได้รับการรักษาความลับอย่างเคร่งครัด และใช้เฉพาะเพื่อการดำเนินการตามคำขอของคุณเท่านั้น'
                      : 'All information you submit will be kept strictly confidential and used solely for processing your request.'
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Guidelines Tab */}
            {activeTab === 'guidelines' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'th' ? 'แนวปฏิบัติเฉพาะกลุ่ม' : 'Specific Guidelines'}
                </h3>

                <div className="space-y-6">
                  {/* For Students */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {language === 'th' ? 'สำหรับนักศึกษา' : 'For Students'}
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ตรวจสอบและอัพเดทข้อมูลส่วนตัวในระบบทะเบียนให้เป็นปัจจุบัน' : 'Check and update your personal information in the registration system'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ระมัดระวังการแชร์ข้อมูลส่วนตัวในโซเชียลมีเดียของมหาวิทยาลัย' : 'Be cautious when sharing personal information on university social media'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{language === 'th' ? 'หากไม่ประสงค์ให้เผยแพร่ข้อมูล กรุณาแจ้งหน่วยงานที่เกี่ยวข้อง' : 'If you do not wish to disclose information, please notify the relevant department'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{language === 'th' ? 'สามารถขอดูประวัติการเข้าถึงข้อมูลของคุณได้ตลอดเวลา' : 'You can request access logs to your data at any time'}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* For Faculty */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Book className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {language === 'th' ? 'สำหรับคณาจารย์' : 'For Faculty'}
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{language === 'th' ? 'เก็บข้อมูลนักศึกษาเฉพาะที่จำเป็นต่อการเรียนการสอน' : 'Collect only student data necessary for teaching purposes'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ไม่เปิดเผยผลการเรียนหรือข้อมูลส่วนตัวของนักศึกษาในที่สาธารณะ' : 'Do not disclose student grades or personal information publicly'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ใช้ช่องทางการสื่อสารที่ปลอดภัยในการติดต่อนักศึกษา' : 'Use secure communication channels when contacting students'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ลบข้อมูลที่ไม่จำเป็นใช้แล้วตามระยะเวลาที่กำหนด' : 'Delete unnecessary data according to retention periods'}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* For Staff */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {language === 'th' ? 'สำหรับบุคลากร' : 'For Staff'}
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ปฏิบัติตามนโยบายการรักษาความปลอดภัยข้อมูลของหน่วยงาน' : 'Follow your department\'s data security policies'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{language === 'th' ? 'ไม่นำข้อมูลส่วนบุคคลออกนอกระบบโดยไม่ได้รับอนุญาต' : 'Do not take personal data outside the system without authorization'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{language === 'th' ? 'แจ้งเหตุการละเมิดหรือรั่วไหลของข้อมูลทันทีที่พบเห็น' : 'Report data breaches or leaks immediately upon discovery'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{language === 'th' ? 'เข้ารับการอบรม PDPA ที่มหาวิทยาลัยจัดอย่างสม่ำเสมอ' : 'Attend PDPA training sessions regularly organized by the university'}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'th' ? 'ทรัพยากรและลิงก์ที่เกี่ยวข้อง' : 'Resources and Related Links'}
                </h3>

                <div className="space-y-6">
                  {/* External Resources */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                      {language === 'th' ? 'แหล่งข้อมูลภายนอก' : 'External Resources'}
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="https://www.pdpc.or.th"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'สำนักงาน กคช.' : 'Office of the PDPC'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {language === 'th' ? 'สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล' : 'Personal Data Protection Committee'}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </a>

                      <a
                        href="https://www.pdpc.or.th/law"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล' : 'PDPA Full Text'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {language === 'th' ? 'พ.ศ. 2562 ฉบับเต็ม' : 'B.E. 2562 (2019) Complete Version'}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </a>

                      <a
                        href="https://www.rmu.ac.th"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {language === 'th' ? 'มหาวิทยาลัยราชภัฏมหาสารคาม' : 'Rajabhat Maha Sarakham University'}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </a>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-blue-600" />
                      {language === 'th' ? 'สถิติการดำเนินงาน (ปี 2567)' : 'Operation Statistics (2024)'}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-blue-600">127</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {language === 'th' ? 'คำขอทั้งหมด' : 'Total Requests'}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-green-600">98%</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {language === 'th' ? 'เสร็จตามกำหนด' : 'On-time Completion'}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-purple-600">4.2</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {language === 'th' ? 'วัน (เฉลี่ย)' : 'Days (Average)'}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-orange-600">0</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {language === 'th' ? 'การละเมิด' : 'Violations'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Security Measures */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-blue-600" />
                      {language === 'th' ? 'มาตรการรักษาความปลอดภัย' : 'Security Measures'}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600">✓</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'การเข้ารหัสข้อมูล' : 'Data Encryption'}
                          </p>
                          <p className="text-gray-600">
                            {language === 'th' ? 'SSL/TLS 256-bit encryption' : 'SSL/TLS 256-bit encryption'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600">✓</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'การควบคุมการเข้าถึง' : 'Access Control'}
                          </p>
                          <p className="text-gray-600">
                            {language === 'th' ? 'ระบบยืนยันตัวตนหลายชั้น' : 'Multi-factor authentication'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600">✓</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'การสำรองข้อมูล' : 'Data Backup'}
                          </p>
                          <p className="text-gray-600">
                            {language === 'th' ? 'สำรองข้อมูลอัตโนมัติทุกวัน' : 'Daily automated backups'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600">✓</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {language === 'th' ? 'การตรวจสอบความปลอดภัย' : 'Security Audit'}
                          </p>
                          <p className="text-gray-600">
                            {language === 'th' ? 'ตรวจสอบระบบเป็นประจำทุกเดือน' : 'Monthly system security audits'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Training & Events */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-600" />
                      {language === 'th' ? 'การอบรมและกิจกรรม' : 'Training & Events'}
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              {language === 'th' ? 'การอบรม PDPA สำหรับบุคลากร' : 'PDPA Training for Staff'}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {language === 'th' ? 'รอบถัดไป: 15 พฤศจิกายน 2567' : 'Next Session: November 15, 2024'}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {language === 'th' ? 'เปิดรับสมัคร' : 'Open'}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              {language === 'th' ? 'เวิร์กช็อป Data Protection' : 'Data Protection Workshop'}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {language === 'th' ? 'รอบถัดไป: 22 พฤศจิกายน 2567' : 'Next Session: November 22, 2024'}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {language === 'th' ? 'เปิดรับสมัคร' : 'Open'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-green-700 to-red-600 rounded-xl shadow-lg p-6 md:p-8 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            {language === 'th' ? 'ติดต่อสอบถาม' : 'Contact Us'}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div>
              <p className="mb-2 text-sm md:text-base">
                <strong>
                  {language === 'th' 
                    ? 'ศูนย์เทคโนโลยีดิจิทัลและนวัตกรรม' 
                    : 'Digital Technology and Innovation Center'
                  }
                </strong>
              </p>
              <p className="text-xs md:text-base text-blue-100">
                {language === 'th' 
                  ? 'มหาวิทยาลัยราชภัฏมหาสารคาม' 
                  : 'Rajabhat Maha Sarakham University'
                }
              </p>
              <p className="text-xs md:text-base text-blue-100">
                {language === 'th' 
                  ? 'เลขที่ 80 ถนนนครสวรรค์ ตำบลตลาด' 
                  : '80 Nakhon Sawan Road, Talad'
                }
              </p>
              <p className="text-xs md:text-base text-blue-100">
                {language === 'th' 
                  ? 'อำเภอเมือง จังหวัดมหาสารคาม 44000' 
                  : 'Mueang, Maha Sarakham 44000'
                }
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm md:text-base">
                <strong>
                  {language === 'th' ? 'ช่องทางการติดต่อ' : 'Contact Channels'}
                </strong>
              </p>
              <p className="text-xs md:text-base text-blue-100">
                {language === 'th' ? 'โทรศัพท์' : 'Phone'}: +66 81-564-7994
              </p>
              <p className="text-xs md:text-base text-blue-100 ml-8 md:ml-16">
                +66 91-019-9179
              </p>
              <p className="text-xs md:text-base text-blue-100 mt-2">
                {language === 'th' ? 'อีเมล' : 'Email'}: cc@rmu.ac.th
              </p>
              <p className="text-xs md:text-base text-blue-100 ml-8 md:ml-12">
                cc@lives.rmu.ac.th
              </p>
              <p className="text-xs md:text-base text-blue-100 mt-2">
                {language === 'th' ? 'เว็บไซต์' : 'Website'}: 
                <a href="https://cc.rmu.ac.th" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
                  cc.rmu.ac.th
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Policy Details */}
      {selectedPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'th' ? 'รายละเอียดประกาศ' : 'Policy Details'}
              </h3>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {selectedPolicy.title}
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>{language === 'th' ? 'ประกาศ' : 'Announced'}:</strong> {selectedPolicy.year}
                </p>
                <p>
                  <strong>{language === 'th' ? 'วันที่ประกาศ' : 'Date'}:</strong> {selectedPolicy.date}
                </p>
                <p>
                  <strong>{language === 'th' ? 'ประเภท' : 'Type'}:</strong> {selectedPolicy.type}
                </p>
                <p>
                  <strong>{language === 'th' ? 'รายละเอียด' : 'Description'}:</strong> {selectedPolicy.description}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <button
                  onClick={() => handleDownload(selectedPolicy.file)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md"
                >
                  <Download className="w-5 h-5" />
                  {language === 'th' ? 'ดาวน์โหลดเอกสารฉบับเต็ม' : 'Download Full Document'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-400">
              {language === 'th' 
                ? '© 2567 มหาวิทยาลัยราชภัฏมหาสารคาม สงวนลิขสิทธิ์' 
                : '© 2024 Rajabhat Maha Sarakham University. All rights reserved.'
              }
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              {language === 'th' 
                ? 'ข้อมูลอัพเดทล่าสุด: 2 ตุลาคม 2568' 
                : 'Last Updated: October 2, 2025'
              }
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === 'th' ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy'}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === 'th' ? 'เงื่อนไขการใช้งาน' : 'Terms of Use'}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === 'th' ? 'แผนผังเว็บไซต์' : 'Sitemap'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}