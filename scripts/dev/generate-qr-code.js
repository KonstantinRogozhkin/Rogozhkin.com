/**
 * Описание: Генерация QR-кода для LinkedIn профиля
 * Бизнес-логика: Создает QR-код с ссылкой на LinkedIn для вставки в резюме
 * Версия: 1.0.0
 * Дата: 2026-03-13
 */

import QRCode from 'qrcode';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..', '..');
const outputPath = join(projectRoot, 'public', 'linkedin-qr.png');
const logDir = join(projectRoot, '.neira', 'logs', 'runs', new Date().toISOString().split('T')[0], 
                    new Date().toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 4));
const logPath = join(logDir, 'generate-qr-code.log');

fs.mkdirSync(logDir, { recursive: true });

const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logPath, logMessage);
};

async function generateQRCode() {
  try {
    log('[INFO] Генерация QR-кода для LinkedIn...');
    
    const linkedinUrl = 'https://www.linkedin.com/in/konstantinrogozhkin/';
    
    await QRCode.toFile(outputPath, linkedinUrl, {
      width: 200,
      margin: 1,
      color: {
        dark: '#667eea',
        light: '#ffffff'
      }
    });
    
    log(`[SUCCESS] QR-код создан: ${outputPath}`);
    log(`[SUCCESS] Размер файла: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    log(`[ERROR] Ошибка при генерации QR-кода: ${error.message}`);
    throw error;
  }
}

generateQRCode()
  .then(() => {
    log('[INFO] Скрипт завершен успешно');
    process.exit(0);
  })
  .catch((error) => {
    log(`[ERROR] Скрипт завершен с ошибкой: ${error.message}`);
    process.exit(1);
  });
