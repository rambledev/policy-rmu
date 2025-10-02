'use client'

import React, { useState } from 'react';
import { FileText, Download, Calendar, Shield, Book } from 'lucide-react';

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

  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);

  const policies: Policy[] = [
    {
      id: 'p1',
      title: 'ข้อบังคับมหาวิทยาลัยราชภัฏมหาสารคาม ว่าด้วย ธรรมาภิบาลข้อมูลของมหาวิทยาลัย',
      year: 'พ.ศ. 2566',
      date: '27 มกราคม 2566',
      type: 'ธรรมาภิบาลข้อมูล',
      description: 'กำหนดหลักเกณฑ์และแนวทางในการบริหารจัดการข้อมูลของมหาวิทยาลัยให้เป็นไปตามหลักธรรมาภิบาล',
      file: 'p1.pdf',
      icon: Book
    },
    {
      id: 'p2',
      title: 'ข้อบังคับมหาวิทยาลัยราชภัฏมหาสารคาม ว่าด้วย การคุ้มครองข้อมูลส่วนบุคคล',
      year: 'พ.ศ. 2566',
      date: '27 กุมภาพันธ์ 2566',
      type: 'คุ้มครองข้อมูลส่วนบุคคล',
      description: 'กำหนดหลักเกณฑ์การเก็บรวบรวม ใช้ เปิดเผย หรือดำเนินการใดๆ เกี่ยวกับข้อมูลส่วนบุคคล',
      file: 'p2.pdf',
      icon: Shield
    },
    {
      id: 'p3',
      title: 'ข้อบังคับมหาวิทยาลัยราชภัฏมหาสารคาม ว่าด้วย การคุ้มครองข้อมูลส่วนบุคคล (ฉบับที่ 2)',
      year: 'พ.ศ. 2567',
      date: '26 เมษายน 2567',
      type: 'คุ้มครองข้อมูลส่วนบุคคล',
      description: 'แก้ไขเพิ่มเติมข้อบังคับว่าด้วยการคุ้มครองข้อมูลส่วนบุคคล เพื่อให้สอดคล้องกับข้อกฎหมายที่รับผิดชอบ',
      file: 'p3.pdf',
      icon: Shield
    }
  ];

  const handleDownload = (filename: string) => {
    // จำลองการดาวน์โหลดไฟล์
    alert(`กำลังดาวน์โหลด ${filename}\n\nในระบบจริง คุณต้องวางไฟล์ PDF ไว้ใน public/policies/${filename}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                ศูนย์กลางนโยบายและข้อบังคับ
              </h1>
              <p className="text-gray-600 mt-1">
                มหาวิทยาลัยราชภัฏมหาสารคาม
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            เกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล (PDPA)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            มหาวิทยาลัยราชภัฏมหาสารคามให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของนักศึกษา บุคลากร 
            และผู้มีส่วนได้ส่วนเสียทุกท่าน โดยปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 
            และได้จัดทำข้อบังคับและประกาศต่างๆ เพื่อเป็นแนวทางในการดำเนินงาน
          </p>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>หมายเหตุ:</strong> ข้อบังคับและประกาศเหล่านี้ใช้เป็นกรอบในการดำเนินงานของทุกหน่วยงานภายในมหาวิทยาลัย
            </p>
          </div>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div
                key={policy.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {policy.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {policy.date}
                            </span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {policy.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {policy.description}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDownload(policy.file)}
                          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                        >
                          <Download className="w-4 h-4" />
                          ดาวน์โหลด PDF
                        </button>
                        <button
                          onClick={() => setSelectedPolicy(policy)}
                          className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          รายละเอียด
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">ติดต่อสอบถาม</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2">
                <strong>สำนักวิทยบริการและเทคโนโลยีสารสนเทศ</strong>
              </p>
              <p className="text-blue-100">มหาวิทยาลัยราชภัฏมหาสารคาม</p>
              <p className="text-blue-100">ตำบลตลาด อำเภอเมือง จังหวัดมหาสารคาม 44000</p>
            </div>
            <div>
              <p className="mb-2">
                <strong>ช่องทางการติดต่อ</strong>
              </p>
              <p className="text-blue-100">โทรศัพท์: 043-754-321</p>
              <p className="text-blue-100">อีเมล: pdpa@rmu.ac.th</p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Policy Details */}
      {selectedPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">รายละเอียดประกาศ</h3>
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
                <p><strong>ประกาศ:</strong> {selectedPolicy.year}</p>
                <p><strong>วันที่ประกาศ:</strong> {selectedPolicy.date}</p>
                <p><strong>ประเภท:</strong> {selectedPolicy.type}</p>
                <p><strong>รายละเอียด:</strong> {selectedPolicy.description}</p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <button
                  onClick={() => handleDownload(selectedPolicy.file)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md"
                >
                  <Download className="w-5 h-5" />
                  ดาวน์โหลดเอกสารฉบับเต็ม
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2567 มหาวิทยาลัยราชภัฏมหาสารคาม สงวนลิขสิทธิ์
            </p>
            <p className="text-gray-500 text-sm mt-2">
              ข้อมูลอัพเดทล่าสุด: 2 ตุลาคม 2568
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}