/**
 * Описание: Генератор PDF cover letter для xAI
 * Бизнес-логика: Создание профессионального cover letter в PDF формате
 * Версия: 1.0.0
 * Дата: 2026-03-13
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateXAICoverLetterPDF() {
  const htmlPath = path.join(__dirname, 'generate-xai-cover-letter.html');
  const outputPath = path.join(__dirname, '../../public/xai-cover-letter.pdf');

  console.log('📄 Generating xAI Cover Letter PDF...');
  console.log('📂 HTML Template:', htmlPath);
  console.log('📂 Output Path:', outputPath);

  if (!fs.existsSync(htmlPath)) {
    console.error('❌ HTML template not found:', htmlPath);
    process.exit(1);
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      }
    });

    console.log('✅ xAI Cover Letter PDF generated successfully!');
    console.log('📍 Location:', outputPath);

    const stats = fs.statSync(outputPath);
    console.log('📊 File size:', (stats.size / 1024).toFixed(2), 'KB');

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

generateXAICoverLetterPDF().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
