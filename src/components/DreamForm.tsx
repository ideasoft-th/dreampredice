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
    hour: "",
    minute: "",
    dream: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Convert Buddhist Era to Christian Era for API
    const birthYear = parseInt(formData.birthYear) - 543;
    const predictionYear = parseInt(formData.year) - 543;

    // Format dates for API
    const birthDate = `${birthYear}-${formData.birthMonth.padStart(2, '0')}-${formData.birthDay.padStart(2, '0')}`;
    const predictionDate = `${predictionYear}-${formData.month.padStart(2, '0')}-${formData.day.padStart(2, '0')}`;
    const birthTime = `${formData.hour.padStart(2, '0')}:${formData.minute.padStart(2, '0')}`;

    const apiData = {
      birth_date: birthDate,
      birth_time: birthTime,
      dream_text: formData.dream,
      prediction_date: predictionDate
    };

    try {
      const response = await fetch('https://ideasoft.app.n8n.cloud/webhook-test/dream-predict', {
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
    }
  };

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  // Generate options for days (1-31)
  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  // Generate options for years (2500-2568 BE)
  const yearOptions = Array.from({ length: 69 }, (_, i) => 2568 - i);

  // Generate options for hours (0-23)
  const hourOptions = Array.from({ length: 24 }, (_, i) => i);

  // Generate options for minutes (0-59)
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i);

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
      className="mystical-card p-6 md:p-8 space-y-6 relative"
    >
      <div className="relative z-10">
        <div className="mystical-input-group">
          <label className="mystical-label">🗓️ วันที่ต้องการทำนาย</label>
          <div className="grid grid-cols-3 gap-3">
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
          <label className="mystical-label">🎂 วัน/เดือน/ปีเกิด</label>
          <div className="grid grid-cols-3 gap-3">
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
          <label className="mystical-label">⏰ เวลาเกิด</label>
          <div className="grid grid-cols-2 gap-3">
            <select
              required
              value={formData.hour}
              onChange={handleChange("hour")}
              className="tail-input"
            >
              <option value="" disabled>
                ชั่วโมง
              </option>
              {hourOptions.map((hour) => (
                <option key={hour} value={hour}>
                  {hour.toString().padStart(2, "0")}
                </option>
              ))}
            </select>

            <select
              required
              value={formData.minute}
              onChange={handleChange("minute")}
              className="tail-input"
            >
              <option value="" disabled>
                นาที
              </option>
              {minuteOptions.map((minute) => (
                <option key={minute} value={minute}>
                  {minute.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mystical-input-group">
          <label htmlFor="dream" className="mystical-label">
            💭 อธิบายความฝันของคุณ
          </label>
          <textarea
            id="dream"
            required
            value={formData.dream}
            onChange={handleChange("dream")}
            placeholder="เล่าความฝันของคุณ... ยิ่งละเอียดยิ่งแม่นยำ"
            className="tail-input min-h-[120px] resize-y"
          />
          <p className="text-xs text-gold-500/60 mt-2">
            💡 เคล็ดลับ: อธิบายสิ่งที่เห็นในฝัน สถานที่ คน และความรู้สึก
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-4">
          <p className="text-xs text-gold-400/60">
            🔒 ข้อมูลของคุณปลอดภัย ใช้เพื่อประมวลผลเท่านั้น
          </p>
          <button type="submit" className="gold-button group">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            ทำนายเลขเด็ด
            <span className="text-xs">✨</span>
          </button>
        </div>
      </div>
    </form>
  );
}
