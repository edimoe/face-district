FACE DISTRICT WEBSITE V2 — DARK LUXURY
======================================

Isi paket:
- index.html: halaman utama
- styles.css: desain responsif hitam-emas
- script.js: katalog produk, filter Male/Female, detail produk, kontak
- assets/faces/: folder gambar preview custom face

SEBELUM DIPUBLIKASIKAN
1. Buka script.js di editor teks.
2. Isi nomor WhatsApp internasional tanpa +, spasi, atau strip:
   const whatsappNumber = "60123456789";
3. Isi tautan invite Discord:
   const discordInvite = "https://discord.gg/INVITEKAMU";
4. Edit array products di script.js. Nama, ID, harga RM dan deskripsi saat ini hanya contoh.
5. Letakkan gambar asli di assets/faces/, misalnya assets/faces/fd-001.jpg.
6. Isi properti image produk, misalnya image: "assets/faces/fd-001.jpg".
7. Pastikan foto benar-benar preview produkmu. Ilustrasi bawaan adalah placeholder, bukan foto produk asli.

CARA TAMBAH PRODUK
Di script.js, tambahkan objek baru di dalam array products:
{id:"FD-007",name:"Nama Face",gender:"male",price:"RM 45",status:"NEW",description:"Deskripsi produk.",image:"assets/faces/fd-007.jpg"}
Gunakan ID unik. gender harus "male" atau "female". Tambahkan koma setelah objek sebelumnya.

GITHUB + CLOUDFLARE WORKERS
A. Upload ke GitHub
1. Masuk https://github.com lalu buat repository, misalnya face-district.
2. Klik Add file > Upload files.
3. Upload index.html, styles.css, script.js dan folder assets beserta isinya.
4. Pastikan index.html berada di root repository (bukan folder bersarang).
5. Commit perubahan ke branch main.

B. Sambungkan Worker yang sudah ada
1. Buka https://dash.cloudflare.com > Workers & Pages.
2. Pilih Worker Face District yang sudah digunakan.
3. Masuk Settings > Builds (nama menu mungkin sedikit berbeda).
4. Pilih Connect / Connect Git repository, lalu izinkan akses GitHub.
5. Pilih repository face-district dan branch main.
6. Ini situs HTML/CSS/JS tanpa proses build. Jangan isi API token sebagai variable situs.
7. Jika Cloudflare meminta deploy command atau Wrangler config, lihat bagian C. Jangan menebak nama Worker; pastikan sama persis dengan nama di dashboard.
8. Save/Deploy, periksa build log, lalu buka URL workers.dev.
Setelah integrasi aktif, commit/push baru ke branch terhubung bisa memicu deployment otomatis.

C. Jika Cloudflare meminta Wrangler config
Situs statis yang dikemas sebagai Worker Assets bisa memakai wrangler.jsonc seperti:
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "GANTI_DENGAN_NAMA_WORKER_PERSIS",
  "compatibility_date": "2026-10-22",
  "assets": {
    "directory": ".",
    "not_found_handling": "404-page"
  }
}
Ganti name agar sama PERSIS dengan nama Worker pada dashboard. Simpan file ini di root repository. Jika Worker yang sekarang memakai konfigurasi berbeda, backup dan periksa dulu sebelum mengganti. Jangan upload API token atau secret ke GitHub.

D. Alternatif: buat Cloudflare Pages baru dari GitHub
1. Dashboard > Workers & Pages > Create application > Pages > Connect to Git.
2. Pilih repo GitHub.
3. Untuk situs statis biasa, production branch: main; build command: exit 0 (atau kosong jika diperbolehkan); build output directory: /.
4. Deploy. Pages akan memberikan URL pages.dev yang terpisah. Ini tidak mengganti Worker workers.dev yang sekarang.

Dokumentasi resmi:
Workers static assets: https://developers.cloudflare.com/workers/static-assets/
Workers GitHub integration: https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/
Workers Builds: https://developers.cloudflare.com/workers/ci-cd/builds/
Pages Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/

Catatan: website ini katalog statis. Belum memproses pembayaran atau menyimpan order pelanggan.
