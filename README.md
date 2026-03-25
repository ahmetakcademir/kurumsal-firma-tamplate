# Corporate Business Website Template (HTML/CSS/JS)

Production-ready, çok sayfalı ve tekrar kullanılabilir bir kurumsal website şablonudur. Framework kullanılmadan (`HTML + CSS + JavaScript`) geliştirilmiştir ve farklı müşterilere hızlı uyarlanacak şekilde `TEMPLATE_CONFIG` merkezli tasarlanmıştır.

## Proje Açıklaması

Bu proje bir **master template** yaklaşımıyla hazırlanmıştır:

- İnşaat, üretim, mühendislik, lojistik, danışmanlık ve diğer B2B firmalara uyarlanabilir
- Tek tasarım sistemi ile tüm sayfalarda görsel tutarlılık sağlar
- Statik deploy için uygundur (GitHub Pages, Netlify)
- No-JS fallback ve static SEO fallback içerir

## Özellikler

- 6 sayfalı kurumsal yapı:
  - `index.html`
  - `about.html`
  - `services.html`
  - `projects.html`
  - `faq.html`
  - `contact.html`
- Ortak UI sistemi:
  - Tek buton sistemi
  - Tek kart sistemi
  - Tek section heading sistemi
  - Tek CTA sistemi
  - Tutarlı grid + spacing token yapısı
- `TEMPLATE_CONFIG` ile merkezi içerik yönetimi:
  - Marka, iletişim, sosyal medya
  - Hero, hizmet kartları, proje kartları, SSS
  - Etiketler (labels) ve CTA metinleri
  - SEO alanları (sayfa bazlı)
- Etkileşimler:
  - Sticky header
  - Mobil menü
  - Aktif menü durumu
  - FAQ accordion
  - Frontend form doğrulama
  - Floating WhatsApp butonu
- SEO yaklaşımı:
  - Her HTML dosyasında statik `title` + `meta description`
  - JS aktifse `TEMPLATE_CONFIG.seo` ile override
- No-JS fallback:
  - Header, kısa hero özeti, temel iletişim ve footer boş kalmaz

## Dosya Yapısı

```text
.
├── index.html
├── about.html
├── services.html
├── projects.html
├── faq.html
├── contact.html
├── README.md
└── assets
    ├── css
    │   ├── style.css
    │   └── responsive.css
    ├── js
    │   └── main.js
    └── images
        └── placeholders
            ├── logo-placeholder.svg
            ├── hero-corporate.svg
            ├── about-vision.svg
            ├── service-generic-01.svg
            ├── service-generic-02.svg
            ├── service-generic-03.svg
            ├── project-case-01.svg
            ├── project-case-02.svg
            ├── project-case-03.svg
            ├── cta-pattern.svg
            └── map-placeholder.svg
```

## 10 Dakikada Özelleştirme Rehberi

### 1) Marka ve iletişim (2-3 dk)
`assets/js/main.js` içindeki `TEMPLATE_CONFIG` alanlarını güncelleyin:

- `brand` → firma adı, slogan, logo
- `contact` → telefon, WhatsApp, e-posta, adres
- `socials` → sosyal medya linkleri

### 2) İçerik blokları (3-4 dk)
Aynı dosyada güncelleyin:

- `hero`
- `services[]`
- `projects[]`
- `faq[]`
- `cta`
- `labels`

### 3) SEO ve sayfa metaları (1-2 dk)
`TEMPLATE_CONFIG.seo` içindeki her sayfanın:

- `title`
- `description`
- `keywords`
- `ogTitle`
- `ogDescription`

alanlarını müşteri özelinde değiştirin.

### 4) Renk ve görsel kimlik (1-2 dk)

- `assets/css/style.css` içindeki `:root` token’ları (renk, spacing, radius, shadow)
- `assets/images/placeholders/` altındaki SVG görseller

## Nasıl Deploy Edilir?

## GitHub Pages

1. Projeyi GitHub repo’suna push edin.
2. Repo ayarlarında `Settings -> Pages` bölümüne gidin.
3. Source olarak `Deploy from branch` seçin.
4. Branch: `main` / Folder: `/ (root)` seçin.
5. Kaydedin; birkaç dakika içinde yayın URL’si oluşur.

## Netlify

1. Netlify hesabına giriş yapın.
2. `Add new site -> Import an existing project` seçin veya klasörü sürükleyip bırakın.
3. Build komutu gerekmez (statik).
4. Publish directory: `.`
5. Deploy ile site yayınlanır.

## Yeni Müşteri İçin Kullanım Adımları

1. Projeyi klonlayın veya kopyalayın.
2. `TEMPLATE_CONFIG` içindeki marka/iletişim/SEO/içerik alanlarını güncelleyin.
3. Gerekirse görselleri `assets/images/placeholders/` içinde değiştirin.
4. Sayfaları kontrol edin:
   - menü aktif durumları
   - mobil menü
   - form doğrulama
   - footer içerikleri
5. Son QA:
   - her sayfada `title`, `meta description`, tek `h1`
   - kırık link/path kontrolü
   - mobil görünüm kontrolü
6. GitHub’a push edin ve deploy edin.

## Notlar

- Bu şablon beginner-friendly olacak şekilde sade tutulmuştur.
- Kritik tekrar eden içerikler mümkün olduğunca JS config üzerinden yönetilir.
- HTML içinde yalnızca minimum fallback içerik bırakılmıştır (No-JS senaryosu için).
