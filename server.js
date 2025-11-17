require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/ping', (req, res) => res.json({ ok: true }));
// مثال endpoint لتسجيل مستخدم (تجريبي)
app.post('/api/register', (req, res) => {
  // هنا تخزن المستخدم في DB حقيقية أو ملف (تجريبي)
  res.json({ success: true, message: "تم التسجيل (تجريبي)" });
});
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Server running on', port));
