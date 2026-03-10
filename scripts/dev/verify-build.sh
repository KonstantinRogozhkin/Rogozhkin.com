#!/bin/zsh

set -euo pipefail

DATE_DIR=$(date +%F)
TIME_DIR=$(date +%H%M)
LOG_DIR="./.neira/logs/runs/${DATE_DIR}/${TIME_DIR}"
LOG_FILE="${LOG_DIR}/verify-build.log"

mkdir -p "${LOG_DIR}"

echo "[INFO] Старт проверки сборки" | tee "${LOG_FILE}"
yarn build 2>&1 | tee -a "${LOG_FILE}"
echo "[SUCCESS] Проверка сборки завершена" | tee -a "${LOG_FILE}"
