@echo off
title LumiFlower Sky Garden - Localhost Web Server
echo ========================================================
echo   DANG KHOI CHAY LUMIFLOWER TREN LOCALHOST
echo   Dia chi: http://localhost:8080
echo ========================================================
start "" "http://localhost:8080"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
