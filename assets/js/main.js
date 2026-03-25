/* =======================================
   CORPORATE MASTER TEMPLATE - MAIN SCRIPT
   ======================================= */

(() => {
  "use strict";

  const TEMPLATE_CONFIG = {
    brand: {
      name: "Atlas Kurumsal Çözümler",
      shortName: "Atlas",
      slogan: "B2B dünyasında güven veren büyüme ortağınız",
      description: "İnşaat, üretim, mühendislik, lojistik ve danışmanlık şirketleri için ölçeklenebilir kurumsal çözümler sunar.",
      logo: {
        useImage: true,
        src: "assets/images/placeholders/logo-placeholder.svg",
        alt: "Atlas Kurumsal Çözümler logosu"
      }
    },

    contact: {
      phone: "+90 (212) 000 00 00",
      phoneHref: "tel:+902120000000",
      whatsapp: "+90 (532) 000 00 00",
      whatsappRaw: "905320000000",
      whatsappHref: "https://wa.me/905320000000?text=Merhaba%2C%20kurumsal%20web%20%C5%9Fablonunuz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
      whatsappMessage: "Merhaba, kurumsal web şablonunuz hakkında bilgi almak istiyorum.",
      email: "info@atlaskurumsal.com",
      emailHref: "mailto:info@atlaskurumsal.com",
      address: "Maslak Mah. Büyükdere Cad. No:245 Sarıyer / İstanbul",
      hours: "Hafta İçi 09:00 - 18:30"
    },

    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/", enabled: true },
      { label: "Instagram", url: "https://www.instagram.com/", enabled: true },
      { label: "X", url: "https://x.com/", enabled: true },
      { label: "YouTube", url: "https://www.youtube.com/", enabled: true }
    ],

    seo: {
      index: {
        title: "Kurumsal Firma Web Sitesi Şablonu | Atlas",
        description: "Modern, güven veren ve satış odaklı çok sayfalı kurumsal web sitesi şablonu.",
        keywords: "kurumsal web sitesi, b2b template",
        ogTitle: "Kurumsal Firma Web Sitesi Şablonu",
        ogDescription: "Çok müşteriye uyarlanabilir, mobil uyumlu ve hızlı kurumsal template.",
        canonical: "index.html"
      },
      about: {
        title: "Hakkımızda | Atlas",
        description: "Kurumsal yapımız, vizyonumuz, misyonumuz ve değerlerimiz.",
        keywords: "hakkımızda, vizyon, misyon",
        ogTitle: "Hakkımızda - Atlas",
        ogDescription: "Değer odaklı ve güvenilir kurumsal yaklaşım.",
        canonical: "about.html"
      },
      services: {
        title: "Hizmetler | Atlas",
        description: "Mühendislikten lojistik optimizasyonuna kapsamlı kurumsal hizmet portföyü.",
        keywords: "kurumsal hizmetler, mühendislik, lojistik",
        ogTitle: "Hizmetlerimiz - Atlas",
        ogDescription: "Farklı sektörlere hızla uyarlanabilen profesyonel hizmet yapısı.",
        canonical: "services.html"
      },
      projects: {
        title: "Projeler ve Referanslar | Atlas",
        description: "Sektör bazlı örnek kurumsal projeler ve başarı metrikleri.",
        keywords: "projeler, referanslar, case study",
        ogTitle: "Projeler ve Referanslar",
        ogDescription: "Güven veren referans vitrini.",
        canonical: "projects.html"
      },
      faq: {
        title: "Sık Sorulan Sorular | Atlas",
        description: "Kurumsal müşterilerin en sık sorduğu sorular ve net cevaplar.",
        keywords: "sss, sık sorulan sorular",
        ogTitle: "Sık Sorulan Sorular",
        ogDescription: "Kurumsal iş birliği sürecine dair net yanıtlar.",
        canonical: "faq.html"
      },
      contact: {
        title: "İletişim | Atlas",
        description: "Teklif almak veya bilgi talep etmek için bizimle iletişime geçin.",
        keywords: "iletişim, teklif al",
        ogTitle: "İletişim - Atlas",
        ogDescription: "Kurumsal web projeniz için hızlı iletişim.",
        canonical: "contact.html"
      }
    },

    labels: {
      nav: [
        { key: "index", text: "Ana Sayfa", href: "index.html" },
        { key: "about", text: "Hakkımızda", href: "about.html" },
        { key: "services", text: "Hizmetler", href: "services.html" },
        { key: "projects", text: "Projeler", href: "projects.html" },
        { key: "faq", text: "SSS", href: "faq.html" },
        { key: "contact", text: "İletişim", href: "contact.html" }
      ],
      heroPrimaryBtn: "Teklif Alın",
      heroSecondaryBtn: "Projelerimizi Görün",
      ctaPrimary: "Ücretsiz Ön Görüşme",
      ctaSecondary: "Telefonla Ulaşın",
      footerQuickLinksTitle: "Hızlı Linkler",
      footerServicesTitle: "Hizmetler",
      footerContactTitle: "İletişim",
      footerSocialTitle: "Sosyal Medya",
      footerCompanyTitle: "Kurumsal",
      serviceCardCta: "Detay Talep Et",
      projectCardCta: "Case İncele",
      formNameLabel: "Ad Soyad",
      formEmailLabel: "E-posta",
      formPhoneLabel: "Telefon",
      formSubjectLabel: "Konu",
      formMessageLabel: "Mesajınız",
      formSubmitText: "Mesaj Gönder",
      formSuccess: "Mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.",
      formError: "Lütfen zorunlu alanları doğru formatta doldurun.",
      whatsappFloatingLabel: "WhatsApp ile Yazın"
    },

    hero: {
      badge: "Kurumsal B2B Çözüm Ortağı",
      title: "Güçlü Kurumsal Kimlik ve Yüksek Dönüşüm İçin Hazır Website Altyapısı",
      subtitle: "Satış odaklı içerik akışı, güven veren tasarım dili ve hızlı özelleştirilebilir yapısıyla farklı sektörlere anında uyarlanabilir master template.",
      image: "assets/images/placeholders/hero-corporate.svg",
      imageAlt: "Kurumsal tesis ve proje yönetim görseli",
      primaryHref: "contact.html",
      secondaryHref: "projects.html",
      stats: [
        { value: "15+", label: "Yıllık Sektör Deneyimi" },
        { value: "240+", label: "Tamamlanan B2B Proje" },
        { value: "%98", label: "Müşteri Memnuniyeti" },
        { value: "7/24", label: "Süreç Şeffaflığı" }
      ]
    },

    pageHeaders: {
      about: {
        tag: "Kurumsal Yapı",
        title: "Sürdürülebilir Büyümeyi Destekleyen Kurumsal Yaklaşım",
        text: "Vizyonumuz, misyonumuz ve değerlerimizle müşterilerimizin iş hedeflerine ölçülebilir katkı sağlıyoruz."
      },
      services: {
        tag: "Hizmet Portföyü",
        title: "Farklı Sektörlere Uyarlanabilir Stratejik Hizmetler",
        text: "Her hizmet kartı, farklı müşteri sektörlerine kolayca özelleştirilebilir bir içerik yapısı sunar."
      },
      projects: {
        tag: "Referanslar",
        title: "Sonuç Üreten Projeler ve Güçlü Referans Yapısı",
        text: "Sektör bazlı proje kartları ve ölçülebilir sonuçlarla güven veren bir referans vitrini oluşturun."
      },
      faq: {
        tag: "Sık Sorulan Sorular",
        title: "Kurumsal Süreç Hakkında En Çok Merak Edilenler",
        text: "Proje başlangıcından teslimata kadar süreci şeffaf hale getiren net cevaplar."
      },
      contact: {
        tag: "İletişim",
        title: "Projenizi Görüşmek İçin Bizimle Hemen İletişime Geçin",
        text: "Telefon, e-posta veya WhatsApp üzerinden hızlıca ulaşın; size uygun yol haritasını birlikte belirleyelim."
      }
    },

    about: {
      introTitle: "Güven, disiplin ve ölçeklenebilir süreç yönetimi",
      introText: "Atlas Kurumsal Çözümler; inşaat, üretim, mühendislik ve lojistik odaklı şirketler için güçlü kurumsal iletişim altyapısı sunar.",
      mission: "Müşterilerimizin karar süreçlerini hızlandıran, güven oluşturan ve satışa katkı veren kurumsal dijital deneyimler tasarlamak.",
      vision: "Türkiye ve global pazarda B2B odaklı kurumsal marka dönüşümünde referans gösterilen çözüm ortağı olmak.",
      values: [
        "Şeffaf iletişim ve ölçülebilir süreç",
        "Sektöre özgü stratejik planlama",
        "Uzun vadeli iş ortaklığı yaklaşımı",
        "Kalite ve hız dengesini koruyan üretim"
      ]
    },
    services: [
      {
        tag: "Mühendislik",
        title: "Mühendislik Proje Yönetimi",
        description: "Teknik planlama ve saha-uyumlu süreç yönetimi ile projeleri güvenli biçimde yönetin.",
        image: "assets/images/placeholders/service-generic-01.svg",
        alt: "Mühendislik proje yönetimi görseli",
        ctaHref: "contact.html"
      },
      {
        tag: "Üretim",
        title: "Üretim Süreç İyileştirme",
        description: "Kaynak planlama, verimlilik ölçümü ve kalite odaklı uygulamalarla performansı artırın.",
        image: "assets/images/placeholders/service-generic-02.svg",
        alt: "Üretim süreç iyileştirme görseli",
        ctaHref: "contact.html"
      },
      {
        tag: "Lojistik",
        title: "Lojistik ve Operasyon Optimizasyonu",
        description: "Tedarik zinciri ve rota planlama çözümleriyle maliyetleri düşürün.",
        image: "assets/images/placeholders/service-generic-03.svg",
        alt: "Lojistik optimizasyon görseli",
        ctaHref: "contact.html"
      },
      {
        tag: "Danışmanlık",
        title: "Kurumsal Dönüşüm Danışmanlığı",
        description: "İş hedeflerinize uygun dijital ve operasyonel dönüşüm planı oluşturun.",
        image: "assets/images/placeholders/service-generic-01.svg",
        alt: "Kurumsal danışmanlık görseli",
        ctaHref: "contact.html"
      },
      {
        tag: "Sanayi",
        title: "Fabrika Yatırım Planlama Desteği",
        description: "Yeni tesis yatırımı ve süreç standardizasyonu için uçtan uca planlama desteği alın.",
        image: "assets/images/placeholders/service-generic-02.svg",
        alt: "Sanayi yatırım planlama görseli",
        ctaHref: "contact.html"
      },
      {
        tag: "B2B",
        title: "Kurumsal Satış Altyapısı Geliştirme",
        description: "Teklif sürecini güçlendiren dijital iletişim modeliyle dönüşümü artırın.",
        image: "assets/images/placeholders/service-generic-03.svg",
        alt: "Kurumsal satış altyapısı görseli",
        ctaHref: "contact.html"
      }
    ],

    projects: [
      {
        sector: "Lojistik",
        title: "Bölgesel Dağıtım Merkezi Dönüşüm Projesi",
        description: "Operasyon akışları yeniden yapılandırılarak teslimat süreleri iyileştirildi.",
        result: "%18 operasyonel verim artışı",
        image: "assets/images/placeholders/project-case-01.svg",
        alt: "Lojistik merkez proje görseli",
        ctaHref: "projects.html"
      },
      {
        sector: "Üretim",
        title: "Endüstriyel Hat Kapasite Optimizasyonu",
        description: "Üretim darboğazlarının analiziyle kapasite kullanım oranı yükseltildi.",
        result: "%22 kapasite artışı",
        image: "assets/images/placeholders/project-case-02.svg",
        alt: "Üretim hattı proje görseli",
        ctaHref: "projects.html"
      },
      {
        sector: "Mühendislik",
        title: "Çok Disiplinli Tesis Yönetimi",
        description: "Saha koordinasyonu merkezileştirilerek teslim kalitesi artırıldı.",
        result: "Zamanında teslim oranı %96",
        image: "assets/images/placeholders/project-case-03.svg",
        alt: "Tesis mühendislik proje görseli",
        ctaHref: "projects.html"
      },
      {
        sector: "Danışmanlık",
        title: "Kurumsal Süreç Standardizasyon Programı",
        description: "Raporlama ve karar alma mekanizmaları standardize edildi.",
        result: "Raporlama süresinde %40 kısalma",
        image: "assets/images/placeholders/project-case-01.svg",
        alt: "Danışmanlık süreç standardizasyon görseli",
        ctaHref: "projects.html"
      },
      {
        sector: "İnşaat",
        title: "Şantiye Koordinasyon ve Tedarik Yönetimi",
        description: "Saha-planlama entegrasyonu ile tedarik gecikmeleri düşürüldü.",
        result: "Bütçe sapması %9 azaltıldı",
        image: "assets/images/placeholders/project-case-02.svg",
        alt: "İnşaat şantiye yönetimi görseli",
        ctaHref: "projects.html"
      },
      {
        sector: "Sanayi",
        title: "Fabrika Dijital İzleme Altyapısı",
        description: "Gerçek zamanlı izleme ile karar süreçleri hızlandırıldı.",
        result: "Arıza müdahale süresinde %27 iyileşme",
        image: "assets/images/placeholders/project-case-03.svg",
        alt: "Fabrika dijital izleme görseli",
        ctaHref: "projects.html"
      }
    ],

    faq: [
      {
        q: "Bu şablon farklı sektörlere ne kadar hızlı uyarlanabilir?",
        a: "TEMPLATE_CONFIG içindeki hizmet, proje, iletişim ve etiket alanlarını güncelleyerek aynı gün içinde yeni bir müşteriye uyarlayabilirsiniz."
      },
      {
        q: "Kod bilgisi az olan biri içerikleri güncelleyebilir mi?",
        a: "Evet. Kritik tüm içerikler tek bir config objesinde toplandığı için metin, telefon, e-posta ve CTA alanları kolayca değiştirilebilir."
      },
      {
        q: "Form gönderimleri için backend gerekli mi?",
        a: "Varsayılan yapı frontend doğrulama içerir. İsterseniz form action veya API bağlantısı ekleyerek backend entegrasyonu yapabilirsiniz."
      },
      {
        q: "SEO ayarları her sayfa için ayrı yönetilebilir mi?",
        a: "Evet. Her HTML dosyasında statik SEO fallback bulunur; JavaScript aktifse TEMPLATE_CONFIG.seo alanı ile override edilir."
      },
      {
        q: "Bu yapı statik hosting servislerine uygun mu?",
        a: "Tamamen statik dosyalardan oluştuğu için Netlify, GitHub Pages ve Vercel Static servislerinde kolayca yayınlanabilir."
      }
    ],

    cta: {
      title: "Kurumsal web altyapınızı 1 haftada devreye alın",
      text: "Mevcut içeriklerinizi ve sektör dilinizi bu template'e entegre ederek hızlıca güven veren bir dijital vitrine sahip olun.",
      primaryText: "Ücretsiz Ön Görüşme",
      primaryHref: "contact.html",
      secondaryText: "Telefonla Ulaşın",
      secondaryHref: "tel:+902120000000"
    },

    footer: {
      aboutText: "Kurumsal şirketlerin güven odaklı dijital görünürlüğünü güçlendiren, tekrar kullanılabilir web altyapıları sunuyoruz.",
      legal: "Tüm hakları saklıdır."
    },

    whatsappFloating: {
      enabled: true,
      label: "WhatsApp ile Yazın"
    }
  };

  TEMPLATE_CONFIG.labels.currentYear = String(new Date().getFullYear());
  window.TEMPLATE_CONFIG = TEMPLATE_CONFIG;

  const pageKey = document.body.dataset.page || "index";
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const getByPath = (obj, path) => {
    if (!path) return undefined;
    return path.split(".").reduce((acc, key) => {
      if (acc && Object.prototype.hasOwnProperty.call(acc, key)) return acc[key];
      return undefined;
    }, obj);
  };

  const setText = (el, value) => {
    if (!el || value === undefined || value === null) return;
    el.textContent = String(value);
  };

  const upsertMeta = (attr, key, value) => {
    if (!value) return;
    let meta = qs(`meta[${attr}="${key}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", value);
  };

  const upsertCanonical = (href) => {
    if (!href) return;
    let canonical = qs('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", href);
  };

  const applySeoOverride = () => {
    const seo = TEMPLATE_CONFIG.seo[pageKey];
    if (!seo) return;
    if (seo.title) document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("property", "og:title", seo.ogTitle || seo.title);
    upsertMeta("property", "og:description", seo.ogDescription || seo.description);
    upsertCanonical(seo.canonical);
  };

  const applyStaticBinds = () => {
    qsa("[data-bind]").forEach((el) => setText(el, getByPath(TEMPLATE_CONFIG, el.getAttribute("data-bind"))));
    qsa("[data-bind-href]").forEach((el) => {
      const value = getByPath(TEMPLATE_CONFIG, el.getAttribute("data-bind-href"));
      if (value) el.setAttribute("href", value);
    });
    qsa("[data-bind-src]").forEach((el) => {
      const value = getByPath(TEMPLATE_CONFIG, el.getAttribute("data-bind-src"));
      if (value) el.setAttribute("src", value);
    });
    qsa("[data-bind-alt]").forEach((el) => {
      const value = getByPath(TEMPLATE_CONFIG, el.getAttribute("data-bind-alt"));
      if (value) el.setAttribute("alt", value);
    });
  };
  const createCardMedia = (src, alt) => {
    const media = document.createElement("div");
    media.className = "card__media";
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    media.appendChild(image);
    return media;
  };

  const createServiceCard = (service) => {
    const article = document.createElement("article");
    article.className = "card";
    article.appendChild(createCardMedia(service.image, service.alt || service.title));

    const body = document.createElement("div");
    body.className = "card__body";

    const meta = document.createElement("p");
    meta.className = "card__meta";
    meta.textContent = service.tag;

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = service.title;

    const text = document.createElement("p");
    text.className = "card__text";
    text.textContent = service.description;

    const link = document.createElement("a");
    link.className = "btn btn--ghost mt-4";
    link.href = service.ctaHref || "contact.html";
    link.textContent = TEMPLATE_CONFIG.labels.serviceCardCta;

    body.append(meta, title, text, link);
    article.appendChild(body);
    return article;
  };

  const createProjectCard = (project) => {
    const article = document.createElement("article");
    article.className = "card";
    article.appendChild(createCardMedia(project.image, project.alt || project.title));

    const body = document.createElement("div");
    body.className = "card__body";

    const meta = document.createElement("p");
    meta.className = "card__meta";
    meta.textContent = project.sector;

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = project.title;

    const text = document.createElement("p");
    text.className = "card__text";
    text.textContent = project.description;

    const result = document.createElement("p");
    result.className = "card__result";
    result.textContent = project.result;

    const link = document.createElement("a");
    link.className = "btn btn--ghost mt-4";
    link.href = project.ctaHref || "projects.html";
    link.textContent = TEMPLATE_CONFIG.labels.projectCardCta;

    body.append(meta, title, text, result, link);
    article.appendChild(body);
    return article;
  };

  const createFaqItem = (faqItem, index) => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const button = document.createElement("button");
    button.className = "accordion-trigger";
    button.type = "button";
    button.id = `faq-trigger-${index + 1}`;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `faq-panel-${index + 1}`);
    button.textContent = faqItem.q;

    const panel = document.createElement("div");
    panel.className = "accordion-panel";
    panel.id = `faq-panel-${index + 1}`;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", button.id);

    const inner = document.createElement("div");
    inner.className = "accordion-panel__inner";
    const answer = document.createElement("p");
    answer.textContent = faqItem.a;
    inner.appendChild(answer);
    panel.appendChild(inner);

    item.append(button, panel);
    return item;
  };

  const renderNavList = (container) => {
    if (!container) return;
    container.innerHTML = "";

    TEMPLATE_CONFIG.labels.nav.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.text;
      if (item.key === pageKey) a.classList.add("is-active");
      li.appendChild(a);
      container.appendChild(li);
    });
  };

  const renderLists = () => {
    qsa('[data-render="nav"]').forEach(renderNavList);
    qsa('[data-render="mobile-nav"]').forEach(renderNavList);

    qsa('[data-render="featured-services"], [data-render="services"]').forEach((container) => {
      const limit = Number.parseInt(container.getAttribute("data-limit") || `${TEMPLATE_CONFIG.services.length}`, 10);
      container.innerHTML = "";
      TEMPLATE_CONFIG.services.slice(0, Number.isNaN(limit) ? TEMPLATE_CONFIG.services.length : limit).forEach((item) => {
        container.appendChild(createServiceCard(item));
      });
    });

    qsa('[data-render="featured-projects"], [data-render="projects"]').forEach((container) => {
      const limit = Number.parseInt(container.getAttribute("data-limit") || `${TEMPLATE_CONFIG.projects.length}`, 10);
      container.innerHTML = "";
      TEMPLATE_CONFIG.projects.slice(0, Number.isNaN(limit) ? TEMPLATE_CONFIG.projects.length : limit).forEach((item) => {
        container.appendChild(createProjectCard(item));
      });
    });

    qsa('[data-render="stats"]').forEach((container) => {
      container.innerHTML = "";
      TEMPLATE_CONFIG.hero.stats.forEach((item) => {
        const stat = document.createElement("article");
        stat.className = "stat-item";

        const value = document.createElement("p");
        value.className = "stat-item__value";
        value.textContent = item.value;

        const label = document.createElement("p");
        label.className = "stat-item__label";
        label.textContent = item.label;

        stat.append(value, label);
        container.appendChild(stat);
      });
    });

    qsa('[data-render="values"]').forEach((container) => {
      container.innerHTML = "";
      TEMPLATE_CONFIG.about.values.forEach((value) => {
        const li = document.createElement("li");
        li.textContent = value;
        container.appendChild(li);
      });
    });

    qsa('[data-render="faq"]').forEach((container) => {
      container.innerHTML = "";
      TEMPLATE_CONFIG.faq.forEach((item, index) => {
        container.appendChild(createFaqItem(item, index));
      });
    });

    qsa('[data-render="footer-links"]').forEach((container) => {
      container.innerHTML = "";
      TEMPLATE_CONFIG.labels.nav.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        container.appendChild(li);
      });
    });

    qsa('[data-render="footer-services"]').forEach((container) => {
      container.innerHTML = "";
      TEMPLATE_CONFIG.services.slice(0, 5).forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "services.html";
        a.textContent = item.title;
        li.appendChild(a);
        container.appendChild(li);
      });
    });

    qsa('[data-render="footer-socials"]').forEach((container) => {
      container.innerHTML = "";
      TEMPLATE_CONFIG.socials.filter((item) => item.enabled).forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = item.label;
        li.appendChild(a);
        container.appendChild(li);
      });
    });
  };

  const applyLogoSystem = () => {
    qsa("[data-logo]").forEach((logo) => {
      const img = qs("[data-logo-img]", logo);
      const text = qs("[data-logo-text]", logo);
      if (text) text.textContent = TEMPLATE_CONFIG.brand.name;
      if (!img) return;
      if (TEMPLATE_CONFIG.brand.logo.useImage) {
        img.hidden = false;
        img.src = TEMPLATE_CONFIG.brand.logo.src;
        img.alt = TEMPLATE_CONFIG.brand.logo.alt;
      } else {
        img.hidden = true;
      }
    });
  };

  const applyPageHeader = () => {
    const page = TEMPLATE_CONFIG.pageHeaders[pageKey];
    if (!page) return;
    qsa("[data-page-tag]").forEach((el) => setText(el, page.tag));
    qsa("[data-page-title]").forEach((el) => setText(el, page.title));
    qsa("[data-page-text]").forEach((el) => setText(el, page.text));
  };

  const syncComputedFields = () => {
    if (!TEMPLATE_CONFIG.contact.phoneHref && TEMPLATE_CONFIG.contact.phone) {
      const digits = TEMPLATE_CONFIG.contact.phone.replace(/\D+/g, "");
      if (digits) TEMPLATE_CONFIG.contact.phoneHref = `tel:+${digits}`;
    }
    if (!TEMPLATE_CONFIG.contact.emailHref && TEMPLATE_CONFIG.contact.email) {
      TEMPLATE_CONFIG.contact.emailHref = `mailto:${TEMPLATE_CONFIG.contact.email}`;
    }
    if (!TEMPLATE_CONFIG.cta.secondaryHref) {
      TEMPLATE_CONFIG.cta.secondaryHref = TEMPLATE_CONFIG.contact.phoneHref;
    }

    if (!TEMPLATE_CONFIG.contact.whatsappHref) {
      const raw = (TEMPLATE_CONFIG.contact.whatsappRaw || "").replace(/\D+/g, "");
      const text = encodeURIComponent(TEMPLATE_CONFIG.contact.whatsappMessage || "Merhaba");
      if (raw) TEMPLATE_CONFIG.contact.whatsappHref = `https://wa.me/${raw}?text=${text}`;
    }
  };

  const setupStickyHeader = () => {
    const header = qs("[data-site-header]");
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  const setupMobileMenu = () => {
    const toggle = qs("[data-mobile-toggle]");
    const menu = qs("[data-mobile-menu]");
    const overlay = qs("[data-mobile-overlay]");
    if (!toggle || !menu || !overlay) return;

    const close = () => {
      menu.hidden = true;
      overlay.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    const open = () => {
      menu.hidden = false;
      overlay.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    toggle.addEventListener("click", () => (toggle.getAttribute("aria-expanded") === "true" ? close() : open()));
    overlay.addEventListener("click", close);
    qsa("a", menu).forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  };

  const setupAccordion = () => {
    qsa(".accordion-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".accordion-item");
        if (!item) return;
        const willOpen = !item.classList.contains("is-open");

        qsa(".accordion-item").forEach((node) => {
          node.classList.remove("is-open");
          const t = qs(".accordion-trigger", node);
          const panel = qs(".accordion-panel", node);
          if (t) t.setAttribute("aria-expanded", "false");
          if (panel) panel.style.maxHeight = "0px";
        });

        if (willOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          const panel = qs(".accordion-panel", item);
          if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    });
  };

  const setupContactForm = () => {
    const form = qs("[data-contact-form]");
    const message = qs("[data-form-message]");
    if (!form || !message) return;

    const valueOf = (name) => {
      const input = form.elements.namedItem(name);
      return input && typeof input.value === "string" ? input.value.trim() : "";
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = valueOf("name");
      const email = valueOf("email");
      const phone = valueOf("phone");
      const subject = valueOf("subject");
      const detail = valueOf("message");

      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isPhoneValid = /^[+()\d\s-]{8,}$/.test(phone);
      const valid = name && email && phone && detail && isEmailValid && isPhoneValid;

      if (!valid) {
        message.classList.remove("is-success");
        message.classList.add("is-error");
        message.textContent = TEMPLATE_CONFIG.labels.formError;
        return;
      }

      message.classList.remove("is-error");
      message.classList.add("is-success");
      message.textContent = `${TEMPLATE_CONFIG.labels.formSuccess}${subject ? ` Konu: ${subject}.` : ""}`;
      form.reset();
    });
  };

  const setupWhatsappFloating = () => {
    const floating = qs("[data-whatsapp-floating]");
    if (!floating) return;

    if (!TEMPLATE_CONFIG.whatsappFloating.enabled) {
      floating.style.display = "none";
      return;
    }

    if (!TEMPLATE_CONFIG.contact.whatsappHref) {
      floating.style.display = "none";
      return;
    }
    floating.href = TEMPLATE_CONFIG.contact.whatsappHref;
    floating.textContent = TEMPLATE_CONFIG.whatsappFloating.label || TEMPLATE_CONFIG.labels.whatsappFloatingLabel;
    floating.setAttribute("aria-label", TEMPLATE_CONFIG.whatsappFloating.label || "WhatsApp");
  };

  const init = () => {
    syncComputedFields();
    applySeoOverride();
    applyStaticBinds();
    applyPageHeader();
    renderLists();
    applyLogoSystem();
    setupStickyHeader();
    setupMobileMenu();
    setupAccordion();
    setupContactForm();
    setupWhatsappFloating();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
