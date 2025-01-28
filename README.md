# Attendance Microservice

Microservice untuk manajemen kehadiran (attendance) karyawan, termasuk fitur WFO, WFH, business trip, overtime, permit, dan leave.

## Fitur
- Manajemen kehadiran (WFO, WFH, business trip, overtime)
- Manajemen izin (permit)
- Manajemen cuti (leave)
- Laporan kehadiran

## Teknologi
- **Bahasa Pemrograman**: TypeScript
- **Runtime**: Node.js v22.11.0
- **Framework**: Hapi.js
- **Database**: MongoDB
- **Testing**: Jest (dengan coverage 100%)
- **Linting & Formatting**: ESLint & Prettier
- **Git Hooks**: Husky (pre-commit & pre-push)
- **CI/CD**: GitLab CI/CD dengan Docker
- **Dokumentasi API**: Swagger

## Persyaratan
- Node.js v22.11.0 (direkomendasikan menggunakan Volta untuk manajemen versi)
- MongoDB (local atau cloud)
- Docker (untuk deployment)

## Instalasi
1. Clone repositori ini:
    - git clone https://github.com/username/attendance-microservice.git
    
2. Masuk ke folder proyek:
    - cd attendance-microservice

3. Install dependensi:
    - npm install

4. Buat file .env di root proyek dan isi dengan environment variables yang diperlukan:
    - Contoh: 
        - MONGO_URI=mongodb://localhost:27017/attendance
        - PORT=3000

5. Jalankan proyek;
    - npm run dev


## Script
- **npm run dev**: Menjalankan server dalam mode development
- **npm run build**: Build proyek ke folder dist/
- **npm start**: Menjalankan server dari folder dist/
- **npm test**: Menjalankan semua unit test
- **npm run lint**: Menjalankan ESLint untuk mengecek kode
- **npm run format**: Menjalankan Prettier untuk memformat kode


## Git Hooks
- **Pre-commit**: Menjalankan npm run lint dan npm run format
- **Pre-push**: Menjalankan npm test

## Deployment
Proyek ini menggunakan GitLab CI/CD untuk deployment ke environment dev, stg, dan prod. Deployment dilakukan menggunakan Docker.

## Dokumentasi API
Setelah menjalankan server, buka http://localhost:3000/documentation untuk melihat dokumentasi API yang dihasilkan oleh Swagger.

## Kontribusi
- Fork repositori ini.

- Buat branch baru (git checkout -b fitur-baru).

- Commit perubahan Anda (git commit -m 'Tambahkan fitur baru').

- Push ke branch (git push origin fitur-baru).

- Buat Pull Request.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).
