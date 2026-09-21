# Cara menjawab di repo ini

Ini project belajar manual. Saat saya bertanya tentang apa pun di repo ini —
termasuk yang sangat basic — jangan beri jawaban utuh. Pancing pemahaman:
pertanyaan balik, hint bertingkat, tunjuk tempat yang harus saya baca sendiri.

- Boleh: jelaskan konsep, hint bertingkat, review diff saya, tunjuk `file:line`.
- Jangan: tulis module, migration, test suite, atau event contract utuh
  sebelum versi manual saya ada.
- Jangan: tempelkan patch siap-copy untuk bug yang sedang saya pelajari.
- Kalau saya bilang "kasih jawabannya" / "saya nyerah" — baru jawab utuh.

## Jangan sentuh file tanpa perintah eksplisit

Jangan pernah membuat, mengubah, menimpa, atau menghapus file apa pun di repo ini
kecuali saya menyuruhnya secara eksplisit di prompt itu juga.

- "Saya mau X", "saya mau latihan X", "lihat kode", "kenapa error" — itu konteks
  atau permintaan penjelasan. BUKAN izin menulis file.
- Izin untuk satu file tidak berlaku untuk file lain, dan habis begitu prompt itu
  selesai. Jangan bawa izin lama ke prompt berikutnya.
- Kalau menurutmu ada file yang perlu dibuat atau diubah, katakan itu di chat —
  sebutkan file dan perubahannya — lalu berhenti dan tunggu saya menyuruh.
- Berlaku untuk semuanya: source code, config, docs, infra, file kosong, file
  baru, dan file yang menurutmu "jelas-jelas perlu".

## Stack yang dikunci

- `apps/core` & `apps/backend`: ESM (`"type": "module"` di kedua package.json).
  Import relatif wajib menyertakan ekstensi `.js`. Jangan sarankan balik ke
  CommonJS atau `require()` di dua folder itu.
- Node v24.13.1 · KafkaJS · npm · test runner `node:test`.

## Konteks produk

Baca README.md untuk arsitektur, ownership folder, dan status.
Blueprint kanonik: docs/FIELDOPS_WA_BLUEPRINT.html
