"use client";

import { useState, FormEvent } from "react";

interface DreamFormProps {
  onSubmit: (data: any) => void;
}

export default function DreamForm({ onSubmit }: DreamFormProps) {
  // Get current date for default values
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() + 543; // Convert to Buddhist Era (BE)

  const [formData, setFormData] = useState({
    day: currentDay.toString(),
    month: currentMonth.toString(),
    year: currentYear.toString(),
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    birthTime: "06:00",
    dream: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Convert Buddhist Era to Christian Era for API
    const birthYear = parseInt(formData.birthYear) - 543;
    const predictionYear = parseInt(formData.year) - 543;

    // Format dates for API
    const birthDate = `${birthYear}-${formData.birthMonth.padStart(2, '0')}-${formData.birthDay.padStart(2, '0')}`;
    const predictionDate = `${predictionYear}-${formData.month.padStart(2, '0')}-${formData.day.padStart(2, '0')}`;

    const apiData = {
      birth_date: birthDate,
      birth_time: formData.birthTime,
      dream_text: formData.dream,
      prediction_date: predictionDate
    };

    try {
      setIsLoading(true);
      const response = await fetch('https://ideasoft.app.n8n.cloud/webhook/dream-predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        const result = await response.json();
        onSubmit(result);
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error calling API:', error);
      // Handle error - you might want to show an error message to user
      onSubmit({ error: 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  // Generate options for days (1-31)
  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  // Generate options for years (2500-2568 BE)
  const yearOptions = Array.from({ length: 69 }, (_, i) => 2568 - i);


  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="mystical-card p-8 md:p-12 space-y-8 relative max-w-4xl mx-auto"
    >
      <div className="relative z-10">
        <div className="mystical-input-group">
          <label className="mystical-label">🗓️ วันที่ต้องการทำนาย</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              required
              value={formData.day}
              onChange={handleChange("day")}
              className="tail-input"
            >
              <option value="">วันที่</option>
              {dayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select
              required
              value={formData.month}
              onChange={handleChange("month")}
              className="tail-input"
            >
              <option value="">เดือน</option>
              {monthNames.map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>

            <select
              required
              value={formData.year}
              onChange={handleChange("year")}
              className="tail-input"
            >
              <option value="">พ.ศ.</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mystical-input-group">
          <label className="mystical-label mt-6">🎂 วัน/เดือน/ปีเกิด</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              required
              value={formData.birthDay}
              onChange={handleChange("birthDay")}
              className="tail-input"
            >
              <option value="" disabled>
                วันที่
              </option>
              {dayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select
              required
              value={formData.birthMonth}
              onChange={handleChange("birthMonth")}
              className="tail-input"
            >
              <option value="" disabled>
                เดือน
              </option>
              {monthNames.map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>

            <select
              required
              value={formData.birthYear}
              onChange={handleChange("birthYear")}
              className="tail-input"
            >
              <option value="" disabled>
                พ.ศ.
              </option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mystical-input-group">
          <label className="mystical-label mt-6">⏰ เวลาเกิด</label>
          <input
            type="time"
            required
            value={formData.birthTime}
            onChange={handleChange("birthTime")}
            className="tail-input"
          />
          <p className="text-sm text-gold-500/60 mt-2">
            💡 เลือกเวลาเกิดในรูปแบบ 24 ชั่วโมง (ค่าเริ่มต้น 06:00)
          </p>
        </div>

        <div className="mystical-input-group">
          <label htmlFor="dream" className="mystical-label mt-6">
            💭 อธิบายความฝันของคุณ
          </label>
          <textarea
            id="dream"
            value={formData.dream}
            onChange={handleChange("dream")}
            placeholder="เล่าความฝันของคุณ (ไม่บังคับ)... ยิ่งละเอียดยิ่งแม่นยำ"
            className="tail-input min-h-[150px] resize-y"
          />
          <p className="text-sm text-gold-500/60 mt-3">
            💡 เคล็ดลับ: อธิบายสิ่งที่เห็นในฝัน สถานที่ คน และความรู้สึก (ไม่บังคับ)
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm text-gold-400/60 text-center md:text-left">
            🔒 ข้อมูลของคุณปลอดภัย ใช้เพื่อประมวลผลเท่านั้น
          </p>
          <button type="submit" disabled={isLoading} className="gold-button group disabled:opacity-50 disabled:cursor-not-allowed">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {isLoading ? 'กำลังทำนาย...' : 'ทำนายเลขเด็ด'}
            <span className="text-sm">✨</span>
          </button>
        </div>
      </div>

      {/* Loading Modal */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="mystical-card p-12 max-w-md mx-4 text-center">
            <div className="animate-spin h-16 w-16 border-4 border-gold-300 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-gold-100 mb-4">🔮 กำลังทำนายความฝัน</h3>
            <p className="text-gold-300 text-lg">เดี่ยวฝันจะกลายเป็นเลขเด็ด...</p>
            <div className="flex justify-center mt-6 space-x-3">
              <div className="w-3 h-3 bg-gold-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-gold-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-gold-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
