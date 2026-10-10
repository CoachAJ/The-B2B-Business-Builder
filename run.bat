@echo off
title NutrientsHelp B2B Lead Automation
cd /d "%~dp0"
py -3.12 main.py 2>nul || python main.py
pause
