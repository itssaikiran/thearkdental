# THE ARK DENTAL — React Frontend

Built with the same dependency ecosystem as the supplied Designation frontend:
React 19.2.7, Vite 8.1.5, TypeScript 6.0.2, MUI 9.2.0, Emotion 11.14.x, React Router 7.18.1 and Axios 1.18.1.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Before deployment

Edit `src/data/site.ts`:
- clinic phone
- WhatsApp number
- email
- Click4Appointment URL
- Google Maps URL
- clinic timings
- exact location

## Images

Your supplied clinic photographs are in `public/assets/`. They were exported as optimized WebP files at up to 2x their original dimensions with restrained sharpening. This is upscaling/optimization, not AI reconstruction of missing detail.

## Notes

This first frontend is intentionally static:
- no patient database
- no login
- no custom appointment storage
- appointment button opens Click4Appointment
- WhatsApp opens a chat
- Google Maps opens directions

Do not publish invented testimonials. Replace the placeholder testimonial section with genuine, appropriately consented patient reviews.
