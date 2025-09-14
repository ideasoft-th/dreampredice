# Dream Prediction App (Next.js + PostgreSQL + Docker)

เว็บไซต์ทำนายฝันและเลขเด็ดที่พัฒนาด้วย Next.js และ PostgreSQL รันบน Docker

## Features

- 🔮 ทำนายฝันและเลขเด็ดจากข้อมูลวันเดือนปีเกิดและเวลาเกิด
- 🌙 Dark/Light mode toggle
- 📱 Responsive design ใช้งานได้บนมือถือ
- 🐘 PostgreSQL database สำหรับเก็บข้อมูล
- 🐳 Docker containerization
- 🎨 Tailwind CSS สำหรับ styling
- 📊 Google Analytics integration

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Containerization**: Docker & Docker Compose
- **Deployment**: Ready for production

## Quick Start

### 1. Clone and Setup

```bash
cd dockerFile
cp .env.example .env
```

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

แอปจะรันที่: http://localhost:3000

### 3. Database Setup

หลังจากรัน Docker แล้ว ให้รัน migration:

```bash
# เข้าไปใน container
docker exec -it dream_predict_app sh

# รัน Prisma migration
npm run db:migrate
```

## Development

### Local Development (without Docker)

```bash
# ติดตั้ง dependencies
npm install

# เริ่มต้น PostgreSQL ด้วย Docker
docker run --name postgres-dev -e POSTGRES_PASSWORD=dream_password -e POSTGRES_USER=dream_user -e POSTGRES_DB=dream_predict -p 5432:5432 -d postgres:15-alpine

# รัน migration
npm run db:migrate

# เริ่ม development server
npm run dev
```

### Environment Variables

สร้างไฟล์ `.env` จาก `.env.example`:

```env
DATABASE_URL="postgresql://dream_user:dream_password@localhost:5432/dream_predict"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_GA_ID="G-Y1XM02FJB9"
```

## Project Structure

```
dockerFile/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/predict/     # API routes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── DreamForm.tsx    # ฟอร์มกรอกข้อมูล
│   │   ├── Results.tsx      # แสดงผลการทำนาย
│   │   ├── Navigation.tsx   # แถบเมนู
│   │   └── ...
│   └── lib/
│       ├── db.ts            # Prisma client
│       └── dreamPredictor.ts # Logic การทำนาย
├── prisma/
│   └── schema.prisma        # Database schema
├── docker-compose.yml       # Docker configuration
├── Dockerfile              # App container
└── README.md
```

## API Routes

### POST /api/predict

ทำนายเลขเด็ดจากข้อมูลที่กรอก

**Request Body:**
```json
{
  "day": 15,
  "month": 8,
  "year": 2540,
  "hour": 10,
  "minute": 30,
  "dream": "ฝันเห็นงูใหญ่ในน้ำ"
}
```

**Response:**
```json
{
  "id": "prediction_id",
  "highlightNumbers": ["8", "2", "9"],
  "twoDigitNumbers": ["82", "29", "98", "28", "92", "89"],
  "threeDigitNumbers": ["829", "298", "982"],
  "predictionText": "เกณฑ์รับทรัพย์จากผู้ใหญ่..."
}
```

## Database Schema

- **users**: ข้อมูลผู้ใช้และวันเดือนปีเกิด
- **dream_predictions**: บันทึกการทำนายและผลลัพธ์
- **number_patterns**: รูปแบบคำศัพท์และเลขที่เกี่ยวข้อง

## Deployment

### Production Build

```bash
docker-compose -f docker-compose.yml up --build -d
```

### Environment Setup

สำหรับ production ให้แก้ไข environment variables ใน `docker-compose.yml` หรือใช้ `.env` file

## Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is private and proprietary.