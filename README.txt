شزام ماركت — تعليمات التشغيل

1) الملفات الأربعة: index.html, admin.html, firebase.js, firestore.rules.
2) في Firebase Console > Authentication > Users افتح مستخدم المدير وانسخ User UID (ليس كلمة المرور).
3) افتح firestore.rules واستبدل REPLACE_WITH_ADMIN_UID بالـ UID، ثم انسخ النص كله إلى Firestore Database > Rules واضغط Publish.
4) ارفع index.html وadmin.html وfirebase.js إلى جذر مستودع GitHub Pages. ملف القواعد لا يُرفع إلى موقع الويب؛ يُنشر فقط داخل Firebase Console.
5) في Firebase Authentication > Settings > Authorized domains أضف نطاق موقعك (مثل username.github.io) دون https أو مسار.
6) افتح رابط admin.html وسجل الدخول بحساب المستخدم الذي أضفته في Authentication. أضف منتجات ثم افتح index.html.
7) الصور حالياً بروابط HTTPS عامة مباشرة فقط. رفع الصور من الهاتف إلى Firebase Storage يحتاج إضافة مستقلة وإعداد قواعد Storage.
8) الطلبات تفتح محادثة واتساب مع تفاصيل السلة؛ على العميل الضغط على إرسال داخل واتساب. لا تُحفظ الطلبات في Firestore حالياً.
9) يمكن أن تتطلب خدمات Firebase خطة مدفوعة بحسب الاستهلاك والميزات. راجع حدود الاستخدام والفوترة في لوحة Firebase.
10) لا تشارك كلمة مرور المدير ولا تستخدم قواعد allow read, write: if true.
