# słuch'am

Dyktafon AI na wykłady, działający w przeglądarce na iPhonie. Po kliknięciu „Zacznij słuchać” aplikacja wysyła dźwięk kawałkami do transkrypcji, co kilka minut dopisuje uporządkowane notatki, a po zakończeniu zapisuje wykład w archiwum z podsumowaniem. Notatki można pobrać jako plik Word, udostępnić albo skopiować.

## Jak to działa

- Jeden plik `index.html`, bez serwera i bez instalacji.
- Transkrypcja i notatki przez API zgodne z OpenAI. Domyślnie Groq: `whisper-large-v3` i `openai/gpt-oss-120b`.
- Klucz API wpisuje się w ustawieniach aplikacji. Zostaje tylko w przeglądarce na telefonie i nie trafia do tego repozytorium.
- Archiwum wykładów leży w pamięci przeglądarki (IndexedDB). Ważne notatki warto pobierać od razu, a w ustawieniach co jakiś czas robić kopię archiwum.

## Pierwsze uruchomienie

1. Załóż klucz na https://console.groq.com/keys.
2. Otwórz stronę aplikacji w Safari, wejdź w ustawienia (⚙︎), wklej klucz i kliknij „Zapisz i sprawdź”.
3. Zainstaluj jak aplikację: w Safari Udostępnij → „Do ekranu początkowego” → Dodaj. Na ekranie pojawi się ikona „słuch'am”, a aplikacja otwiera się na pełnym ekranie, bez paska Safari.
4. Zrób najpierw pięciominutową próbę.

## Ograniczenia na iPhonie

- Podczas nagrywania ekran musi być włączony, a strona na wierzchu. Aplikacja blokuje wygaszanie ekranu i ma przycisk „Wygaś ekran”, który zaciemnia go do czerni.
- Telefon potrzebuje internetu przez cały wykład. Fragmenty, których nie udało się wysłać, czekają w kolejce i są ponawiane.
