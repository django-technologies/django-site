/**
 * Links oficiais do Django AI nas lojas.
 *
 * Ambos verificados em 2026-10-07:
 * - Google Play: página "Django AI – Apps no Google Play" (package `com.djangotech`).
 * - App Store: catálogo público da Apple, vendedor "Django Technologies LTDA", bundle `com.djangotech`.
 *
 * Podem ser sobrescritos por `NEXT_PUBLIC_GOOGLE_PLAY_URL` e `NEXT_PUBLIC_APP_STORE_URL`.
 * Se algum ficar vazio, o botão correspondente não é renderizado (nunca um link falso).
 */
export const ANDROID_PACKAGE = 'com.djangotech';

export const GOOGLE_PLAY_URL: string | null =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

export const APP_STORE_URL: string | null =
  process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com/br/app/django-ai/id6780613202';
