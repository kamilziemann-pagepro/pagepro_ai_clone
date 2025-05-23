# Pagepro - Next.js & Sanity CMS Project

Kompletny projekt Next.js z integracją Sanity CMS, odwzorowujący design z Figma.

## 🚀 Instalacja i uruchomienie

1. **Sklonuj projekt i zainstaluj zależności:**
\`\`\`bash
npm install
\`\`\`

2. **Skonfiguruj Sanity CMS:**
   - Utwórz nowy projekt w [Sanity.io](https://sanity.io)
   - Skopiuj Project ID i Dataset
   - Wygeneruj API Token z uprawnieniami do zapisu
   - Zaktualizuj plik `.env.local`

3. **Uruchom migrację treści:**
\`\`\`bash
npm run migrate
\`\`\`

4. **Uruchom projekt:**
\`\`\`bash
npm run dev
\`\`\`

## 📁 Struktura projektu

\`\`\`
├── app/                    # Next.js App Router
├── components/            # Komponenty React
├── lib/                   # Konfiguracja Sanity i zapytania GROQ
├── schemas/               # Schematy Sanity CMS
├── scripts/               # Skrypty migracyjne
└── styles/                # Style CSS
\`\`\`

## 🎨 Komponenty

- **Navbar** - Nawigacja z logo i menu
- **HeroSection** - Sekcja główna z CTA
- **BenefitsSection** - Sekcja korzyści (4 kolumny)
- **TestimonialsSection** - Opinie klientów z wideo
- **ServicesSection** - Główne usługi
- **TechStackSection** - Technologie
- **ContactSection** - Sekcja kontaktowa
- **Footer** - Stopka z linkami i informacjami

## 🔧 Konfiguracja Sanity

Wszystkie schematy są już skonfigurowane w folderze `schemas/`:
- navbar.ts
- hero.ts
- benefits.ts
- testimonials.ts
- services.ts
- techStack.ts
- contact.ts
- footer.ts

## 📊 Migracja danych

Skrypt `migrate-content.js` automatycznie przenosi wszystkie dane z pliku `migration-data.json` do Sanity CMS.

## 🎯 Funkcjonalności

- ✅ Pełna responsywność
- ✅ Optymalizacja obrazów
- ✅ SEO-friendly
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Sanity CMS integration
- ✅ GROQ queries
- ✅ Automatyczna migracja treści

## 🚀 Deployment

Projekt jest gotowy do wdrożenia na Vercel:

1. Połącz z repozytorium GitHub
2. Dodaj zmienne środowiskowe w Vercel
3. Deploy!

## 📝 Uwagi

- Wszystkie komponenty są w pełni responsywne
- Design dokładnie odwzorowuje projekt Figma
- Treść jest w pełni zarządzalna przez Sanity CMS
- Projekt zawiera kompletną migrację danych
