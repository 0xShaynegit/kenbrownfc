@echo off
REM Batch file to commit kenbrownfc to GitHub
REM This script sets up git config, initializes the repo, and pushes to GitHub

echo.
echo ======================================================
echo  Ken Brown FC - GitHub Commit Script
echo ======================================================
echo.

REM 1) Set your identity for this repo
echo [1/6] Setting git identity...
git config user.email "slrclaude@proton.me"
git config user.name "0xShaynegit"
echo. & echo ✓ Git identity configured
echo.

REM 2) Initialize repo (if not already a git repo)
echo [2/6] Initializing git repository...
git init
echo. & echo ✓ Repository initialized
echo.

REM 3) Add everything and commit
echo [3/6] Adding all files and creating initial commit...
git add .
git commit -m "Initial commit"
echo. & echo ✓ Files added and committed
echo.

REM 4) Add GitHub remote
echo [4/6] Adding GitHub remote...
git remote add origin https://github.com/0xShaynegit/kenbrownfc.git
echo. & echo ✓ GitHub remote added
echo.

REM 5) Make sure branch is master
echo [5/6] Setting branch to master...
git branch -M master
echo. & echo ✓ Branch set to master
echo.

REM 6) Push initial code to GitHub on master
echo [6/6] Pushing to GitHub...
git push -u origin master
echo. & echo ✓ Push complete!
echo.

echo ======================================================
echo  Commit successful!
echo ======================================================
echo.
pause
