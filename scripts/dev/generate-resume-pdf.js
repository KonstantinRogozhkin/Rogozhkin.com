/**
 * Описание: Скрипт для генерации PDF резюме из HTML шаблона
 * Бизнес-логика: Использует Puppeteer для конвертации HTML в PDF с сохранением стилей
 * Версия: 1.0.0
 * Дата: 2026-03-13
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..', '..');
const htmlPath = join(__dirname, 'generate-resume-v2.html');
const outputPath = join(projectRoot, 'public', 'resume.pdf');
const logDir = join(projectRoot, '.neira', 'logs', 'runs', new Date().toISOString().split('T')[0], 
                    new Date().toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4));
const logPath = join(logDir, 'generate-resume-pdf.log');

// Создаем директорию для логов
fs.mkdirSync(logDir, { recursive: true });

const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logPath, logMessage);
};

async function generatePDF() {
  let browser;
  
  try {
    log('[INFO] Запуск генерации PDF резюме...');
    log(`[INFO] HTML шаблон: ${htmlPath}`);
    log(`[INFO] Выходной файл: ${outputPath}`);
    
    // Проверяем существование HTML файла
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`HTML файл не найден: ${htmlPath}`);
    }
    
    log('[INFO] Запуск Puppeteer...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    log('[INFO] Загрузка HTML шаблона...');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });
    
    log('[INFO] Генерация PDF...');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
    
    log('[SUCCESS] PDF резюме успешно создано!');
    log(`[SUCCESS] Файл сохранен: ${outputPath}`);
    log(`[SUCCESS] Размер файла: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    log(`[ERROR] Ошибка при генерации PDF: ${error.message}`);
    log(`[ERROR] Stack trace: ${error.stack}`);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
      log('[INFO] Puppeteer закрыт');
    }
  }
}

// Запуск генерации
generatePDF()
  .then(() => {
    log('[INFO] Скрипт завершен успешно');
    process.exit(0);
  })
  .catch((error) => {
    log(`[ERROR] Скрипт завершен с ошибкой: ${error.message}`);
    process.exit(1);
  });
