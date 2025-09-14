interface BirthInfo {
  day: number
  month: number
  year: number
  hour: number
  minute: number
}

interface PredictionResult {
  highlightNumbers: string[]
  twoDigitNumbers: string[]
  threeDigitNumbers: string[]
  predictionText: string
}

export class DreamPredictor {
  // Thai dream keywords and their associated numbers
  private static dreamPatterns = new Map([
    ['งู', { numbers: [2, 5, 8], weight: 1.2, meaning: 'เลขที่เกี่ยวข้องกับงู' }],
    ['ช้าง', { numbers: [9, 0, 3], weight: 1.1, meaning: 'เลขที่เกี่ยวข้องกับช้าง' }],
    ['ปลา', { numbers: [1, 4, 7], weight: 1.0, meaning: 'เลขที่เกี่ยวข้องกับปลา' }],
    ['เสือ', { numbers: [6, 8, 9], weight: 1.3, meaning: 'เลขที่เกี่ยวข้องกับเสือ' }],
    ['มด', { numbers: [3, 6, 7], weight: 0.9, meaning: 'เลขที่เกี่ยวข้องกับมด' }],
    ['นก', { numbers: [1, 5, 9], weight: 1.1, meaning: 'เลขที่เกี่ยวข้องกับนก' }],
    ['ผีเสื้อ', { numbers: [2, 4, 6], weight: 1.0, meaning: 'เลขที่เกี่ยวข้องกับผีเสื้อ' }],
    ['แมลงปอ', { numbers: [0, 3, 5], weight: 0.8, meaning: 'เลขที่เกี่ยวข้องกับแมลงปอ' }],
    ['กบ', { numbers: [1, 3, 8], weight: 1.0, meaning: 'เลขที่เกี่ยวข้องกับกบ' }],
    ['เต่า', { numbers: [4, 7, 0], weight: 0.9, meaning: 'เลขที่เกี่ยวข้องกับเต่า' }],
    ['น้ำ', { numbers: [0, 6, 9], weight: 1.1, meaning: 'เลขที่เกี่ยวข้องกับน้ำ' }],
    ['ไฟ', { numbers: [3, 7, 8], weight: 1.2, meaning: 'เลขที่เกี่ยวข้องกับไฟ' }],
    ['ทอง', { numbers: [8, 9, 5], weight: 1.4, meaning: 'เลขที่เกี่ยวข้องกับทอง' }],
    ['เงิน', { numbers: [2, 5, 7], weight: 1.3, meaning: 'เลขที่เกี่ยวข้องกับเงิน' }],
    ['บ้าน', { numbers: [1, 6, 8], weight: 1.0, meaning: 'เลขที่เกี่ยวข้องกับบ้าน' }],
    ['รถ', { numbers: [4, 5, 9], weight: 1.0, meaning: 'เลขที่เกี่ยวข้องกับรถ' }],
    ['ตาย', { numbers: [0, 1, 7], weight: 1.5, meaning: 'เลขที่เกี่ยวข้องกับความตาย' }],
    ['เด็ก', { numbers: [2, 3, 8], weight: 1.0, meaning: 'เลขที่เกี่ยวข้องกับเด็ก' }],
    ['แม่', { numbers: [1, 4, 6], weight: 1.2, meaning: 'เลขที่เกี่ยวข้องกับแม่' }],
    ['พ่อ', { numbers: [5, 7, 9], weight: 1.2, meaning: 'เลขที่เกี่ยวข้องกับพ่อ' }],
  ])

  private static predictionMessages = [
    'เกณฑ์รับทรัพย์จากผู้ใหญ่ หรือเลขที่เกี่ยวข้องกับที่อยู่อาศัย ให้โฟกัสเลขเด่นในงวดถัดไป',
    'ความฝันของคุณแสดงถึงโชคลาภที่กำลังจะมาถึง เตรียมรับข่าวดีในวันใกล้ ๆ นี้',
    'เลขเหล่านี้มีพลังงานบวกสำหรับคุณ ใช้ในการลงทุนหรือซื้อหวยอย่างระมัดระวัง',
    'ดวงดาวบอกว่าคุณจะได้รับการช่วยเหลือจากคนรอบข้าง โฟกัสที่เลขเด่นเป็นพิเศษ',
    'ความฝันนี้เป็นสัญญาณของการเปลี่ยนแปลงในทางที่ดี เลขเหล่านี้จะนำโชคมาให้',
  ]

  static predict(birthInfo: BirthInfo, dreamText: string): PredictionResult {
    // Extract numbers from birth info
    const birthNumbers = this.extractBirthNumbers(birthInfo)
    
    // Extract numbers from dream keywords
    const dreamNumbers = this.extractDreamNumbers(dreamText)
    
    // Combine and weight the numbers
    const combinedNumbers = this.combineNumbers(birthNumbers, dreamNumbers)
    
    // Generate different types of numbers
    const highlightNumbers = this.generateHighlightNumbers(combinedNumbers)
    const twoDigitNumbers = this.generateTwoDigitNumbers(combinedNumbers)
    const threeDigitNumbers = this.generateThreeDigitNumbers(combinedNumbers)
    
    // Generate prediction text
    const predictionText = this.generatePredictionText(dreamText)
    
    return {
      highlightNumbers,
      twoDigitNumbers,
      threeDigitNumbers,
      predictionText
    }
  }

  private static extractBirthNumbers(birthInfo: BirthInfo): number[] {
    const { day, month, year, hour, minute } = birthInfo
    
    // Convert Buddhist year to Christian year for calculation
    const christianYear = year - 543
    
    const numbers = [
      day % 10,
      (day / 10) | 0,
      month % 10,
      (month / 10) | 0,
      christianYear % 10,
      ((christianYear / 10) | 0) % 10,
      ((christianYear / 100) | 0) % 10,
      hour % 10,
      (hour / 10) | 0,
      minute % 10,
      (minute / 10) | 0
    ].filter(n => n >= 0)
    
    return numbers
  }

  private static extractDreamNumbers(dreamText: string): number[] {
    const numbers: number[] = []
    const text = dreamText.toLowerCase()
    
    for (const [keyword, pattern] of this.dreamPatterns) {
      if (text.includes(keyword)) {
        // Apply weight to the pattern
        const weightedNumbers = pattern.numbers.map(n => 
          Array(Math.ceil(pattern.weight)).fill(n)
        ).flat()
        numbers.push(...weightedNumbers)
      }
    }
    
    return numbers
  }

  private static combineNumbers(birthNumbers: number[], dreamNumbers: number[]): number[] {
    // Combine birth and dream numbers with different weights
    const combined = [
      ...birthNumbers,
      ...dreamNumbers,
      ...dreamNumbers // Dream numbers get double weight
    ]
    
    return combined
  }

  private static generateHighlightNumbers(numbers: number[]): string[] {
    // Count frequency of each number
    const frequency = new Map<number, number>()
    for (const num of numbers) {
      frequency.set(num, (frequency.get(num) || 0) + 1)
    }
    
    // Sort by frequency and take top 3
    const sorted = Array.from(frequency.entries())
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
    
    return sorted.map(([num]) => num.toString())
  }

  private static generateTwoDigitNumbers(numbers: number[]): string[] {
    const highlights = this.generateHighlightNumbers(numbers)
    const twoDigits = new Set<string>()
    
    // Generate combinations from highlight numbers
    for (let i = 0; i < highlights.length; i++) {
      for (let j = 0; j < highlights.length; j++) {
        if (i !== j) {
          twoDigits.add(highlights[i] + highlights[j])
        }
      }
    }
    
    // Add some random combinations
    for (const highlight of highlights) {
      for (let k = 0; k < 3; k++) {
        const randomNum = Math.floor(Math.random() * 10)
        twoDigits.add(highlight + randomNum.toString())
        twoDigits.add(randomNum.toString() + highlight)
      }
    }
    
    return Array.from(twoDigits).slice(0, 6)
  }

  private static generateThreeDigitNumbers(numbers: number[]): string[] {
    const highlights = this.generateHighlightNumbers(numbers)
    const threeDigits = new Set<string>()
    
    // Generate combinations from highlight numbers
    for (const h1 of highlights) {
      for (const h2 of highlights) {
        for (const h3 of highlights) {
          threeDigits.add(h1 + h2 + h3)
        }
      }
    }
    
    return Array.from(threeDigits).slice(0, 3)
  }

  private static generatePredictionText(dreamText: string): string {
    // Simple keyword-based prediction selection
    const text = dreamText.toLowerCase()
    let messageIndex = 0
    
    if (text.includes('ตาย') || text.includes('ผี')) {
      messageIndex = 4
    } else if (text.includes('เงิน') || text.includes('ทอง')) {
      messageIndex = 0
    } else if (text.includes('น้ำ') || text.includes('ไฟ')) {
      messageIndex = 1
    } else if (text.includes('คน') || text.includes('เพื่อน')) {
      messageIndex = 3
    } else {
      messageIndex = Math.floor(Math.random() * this.predictionMessages.length)
    }
    
    return this.predictionMessages[messageIndex]
  }
}