# słuch'am

Dyktafon AI na wykłady, działający w przeglądarce na iPhonie. Po kliknięciu „Zacznij słuchać” aplikacja wysyła dźwięk kawałkami do transkrypcji, co kilka minut dopisuje uporządkowane notatki, a po zakończeniu zapisuje wykład w archiwum z podsumowaniem. Notatki można pobrać jako plik Word, udostępnić albo skopiować.

## Jak to działa

- Jeden plik `index.html`, bez serwera i bez instalacji.
- Transkrypcja i notatki przez API zgodne z OpenAI. Domyślnie Groq: `whisper-large-v3` i `openai/gpt-oss-120b`.
- Klucz API wpisuje się w ustawieniach aplikacji. Zostaje tylko w przeglądarce na telefonie i nie trafia do tego repozytorium.
- Archiwum wykładów leży w pamięci przeglądarki (IndexedDB). Ważne notatki warto pobierać od razu, a w ustawieniach co jakiś czas robić kopię archiwum.

## Funkcje

- Pauza i wznowienie nagrania w tym samym wykładzie.
- Przycisk „Oznacz jako ważne”: ostatnie ok. 30 sekund trafia do notatek jako punkt **Ważne:**.
- Niewysłane fragmenty nagrania są zapisywane w telefonie i wysyłane po ponownym otwarciu aplikacji (brak sieci, zamknięta karta).
- Trzy modele notatek na darmowym planie Groq: po wyczerpaniu dziennego limitu jednego notatki pisze następny.
- Ręczna edycja tematu, podsumowania i notatek.
- Wyszukiwarka w całym archiwum i filtr po przedmiocie.
- Pytania do powtórki z jednego wykładu albo z całego przedmiotu, z eksportem do Word.
- Przypomnienie o kopii archiwum po tygodniu.

## Pierwsze uruchomienie

1. Załóż klucz na https://console.groq.com/keys.
2. Otwórz stronę aplikacji w Safari, wejdź w ustawienia (⚙︎), wklej klucz i kliknij „Zapisz i sprawdź”.
3. Zainstaluj jak aplikację: w Safari Udostępnij → „Do ekranu początkowego” → Dodaj. Na ekranie pojawi się ikona „słuch'am”, a aplikacja otwiera się na pełnym ekranie, bez paska Safari.
4. Zrób najpierw pięciominutową próbę.

## Ograniczenia na iPhonie

- W aplikacji dodanej do ekranu początkowego iPhone wycisza mikrofon po zablokowaniu ekranu. Aplikacja po odblokowaniu sama wznawia nagrywanie tego samego wykładu i zaznacza przerwę, ale tego fragmentu nie ma. Dlatego nie blokuj ekranu; przycisk z księżycem zaciemnia go do czerni.
- W zwykłej karcie Safari nagrywanie zwykle trwa też przy zablokowanym ekranie (według zgłoszeń w WebKit); warto to sprawdzić krótką próbą.
- Telefon potrzebuje internetu przez cały wykład. Fragmenty, których nie udało się wysłać, czekają w kolejce i są ponawiane.
