# słuch'am

Dyktafon AI na wykłady, działający w przeglądarce na iPhonie. Po kliknięciu „Zacznij słuchać” aplikacja wysyła dźwięk kawałkami do transkrypcji, co kilka minut dopisuje uporządkowane notatki, a po zakończeniu zapisuje wykład w archiwum z podsumowaniem. Notatki można pobrać jako plik Word, udostępnić albo skopiować.

## Jak to działa

- Jeden plik `index.html`, bez serwera. `sw.js` zapisuje pliki aplikacji w telefonie, więc otwiera się ona także bez internetu i sama pobiera nowe wersje (nigdy w trakcie nagrywania).
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
- Odsłuch: nagranie zostaje w telefonie, a stuknięcie zdania w transkrypcji odtwarza ten fragment i dalsze po kolei. W ustawieniach można usunąć nagrania starsze niż 30 dni.
- Zdjęcie slajdu albo tablicy w trakcie nagrywania. Zdjęcia są w galerii wykładu, przy transkrypcji w miejscu, w którym je zrobiono, i w pliku Word.
- Lista przepisów przywołanych w notatkach (np. art. 9 § 1 k.k.) w wykładzie i dla całego przedmiotu.
- Ekran przedmiotu: skrypt z wszystkich wykładów w jednym pliku Word (spis treści, słownik pojęć, przepisy), słownik pojęć, terminy, powtórka i lista wykładów.
- Fiszki z powtarzaniem: „Umiem” odsuwa pytanie o 1, 3, 7, 14 i 30 dni, „Jeszcze nie” zostawia je na dziś.
- Pytanie do notatek wykładu albo całego przedmiotu; odpowiedź tylko z notatek, ze wskazaniem, skąd pochodzi.
- Kalendarz w aplikacji (ikona na ekranie głównym). Wydarzenia zapowiedziane na wykładzie (kolokwia, egzaminy, oddanie prac, przeniesione zajęcia, konsultacje) dopisują się same w trakcie nagrywania, z datą liczoną od dnia wykładu i godziną, jeśli padła. Własne wydarzenia dodaje się ręcznie na wybrany dzień i godzinę, z przedmiotem i notatką. Każde wydarzenie można poprawić, usunąć albo jednym stuknięciem dodać do kalendarza iPhone'a; najbliższe są na ekranie głównym.
- Wczytywanie terminów ze zrzutu ekranu (np. z Notatek) albo z wklejonego tekstu: aplikacja wypisuje wydarzenia z przedmiotem, datą i szczegółami, oznacza daty z przeszłości, odhaczone pozycje i duplikaty, a ty poprawiasz i zaznaczasz, co dodać. Zrzuty czyta model `qwen/qwen3.8-27b` na Groq.

## Pierwsze uruchomienie

1. Załóż klucz na https://console.groq.com/keys.
2. Otwórz stronę aplikacji w Safari, wejdź w ustawienia (⚙︎), wklej klucz i kliknij „Zapisz i sprawdź”.
3. Zainstaluj jak aplikację: w Safari Udostępnij → „Do ekranu początkowego” → Dodaj. Na ekranie pojawi się ikona „słuch'am”, a aplikacja otwiera się na pełnym ekranie, bez paska Safari.
4. Zrób najpierw pięciominutową próbę.

## Ograniczenia na iPhonie

- W aplikacji dodanej do ekranu początkowego iPhone wycisza mikrofon po zablokowaniu ekranu. Aplikacja po odblokowaniu sama wznawia nagrywanie tego samego wykładu i zaznacza przerwę, ale tego fragmentu nie ma. Dlatego nie blokuj ekranu; przycisk z księżycem zaciemnia go do czerni.
- W zwykłej karcie Safari nagrywanie zwykle trwa też przy zablokowanym ekranie (według zgłoszeń w WebKit); warto to sprawdzić krótką próbą.
- Telefon potrzebuje internetu przez cały wykład. Fragmenty, których nie udało się wysłać, czekają w kolejce i są ponawiane.
