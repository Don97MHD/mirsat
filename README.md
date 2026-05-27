# Mirsat TV

موقع Next.js عربي لخدمة IPTV موجه للعرب في أوروبا، مع صفحات أسعار، محتوى، تركيب، مدونة، وتواصل عبر واتساب.

## التشغيل

```bash
npm install
npm run dev
```

افتح:

```text
http://127.0.0.1:3000
```

إذا كان أمر `npm` في ويندوز يعطي خطأ على هذا الجهاز، استخدم npm الداخلي مباشرة:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

## التحقق

```bash
npm run typecheck
npm run build
```

## النشر

اربط الدومين `https://www.mirsat.tv/` بمنصة الاستضافة التي ستستخدمها، ثم ارفع المشروع كـ Next.js app. الموقع يحتوي على `sitemap.xml` و `robots.txt` وبيانات SEO جاهزة.
