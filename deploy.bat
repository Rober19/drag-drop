@echo off
set /p commit=Enter commit name: 
git add -A
git commit -m "%commit%"
git push origin master
