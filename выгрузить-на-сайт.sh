#!/bin/bash
cd "/Volumes/Extreme Pro/Lendinng_postor/postor-landing"

echo "Что изменил? Напиши описание и нажми Enter:"
read COMMENT

git add .
git commit -m "$COMMENT"
git push

echo ""
echo "✅ Готово! Сайт обновится на Vercel через 1-2 минуты."
echo "   Смотри: https://vercel.com/dashboard"
