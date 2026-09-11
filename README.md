# DiveBuddy Supabase Proxy

Ten mały projekt działa jako pośrednik między aplikacją DiveBuddy a Supabase.

## Po wdrożeniu do Vercel
Otrzymasz adres w stylu:

https://divebuddy-api-xxxxx.vercel.app

W aplikacji mobilnej ustaw ten adres jako `SUPABASE_URL`.
Klucz publishable Supabase zostaje ten sam.

## Test
Po wdrożeniu otwórz w Safari:

https://TWOJ-ADRES-VERCEL/auth/v1/settings

Jeśli pojawi się odpowiedź JSON zamiast komunikatu o braku serwera, pośrednik działa.

## Własna domena
Później możesz podpiąć np.:
api.divebuddy.pl

do tego projektu w Vercel i aplikacja nie będzie musiała zmieniać backendu.
