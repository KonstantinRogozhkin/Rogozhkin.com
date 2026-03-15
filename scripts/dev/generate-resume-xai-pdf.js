/**
 * Описание: Генератор PDF резюме для xAI Software Engineer Tutor
 * Бизнес-логика: Создание специализированного резюме с акцентом на code quality, testing, debugging
 * Версия: 1.0.0
 * Дата: 2026-03-13
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateXAIResumePDF() {
  const htmlPath = path.join(__dirname, 'generate-resume-xai.html');
  const outputPath = path.join(__dirname, '../../public/resume.pdf');

  console.log('📄 Generating xAI Software Engineer Tutor Resume PDF...');
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
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    console.log('✅ xAI Resume PDF generated successfully!');
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

generateXAIResumePDF().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
