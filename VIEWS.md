# Dashboard

 - `/`
  - statystyki dzisiajszych zamowien (zdanle i lokalne)
  - liste rezweracji i eventow zaplanowanych na dzisiaj

# Logowanie

 - `/login`
  - pola na login i haslo
  - guzik do zalogowania (link do dashboardu)

# Widok dostepnosci stolokow

 - `/tables`
  - wybor dati i godziny
  - tabela z lista rezerwacji oraz wydarzen
   - kazda kolumna = 1 stolik
   - kazdy wiersz = 30 minut
    ma przypominac widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa rozne stoliki
    - po kliknieciu rezerwacji lub eventu, przechodzimy na strone szczegolow
 - `/tables/booking/:id`
  - zawiera wszystkie info dotyczace rezewwacji
  - umozliwia edycje  zapisanie zmian
 - `/tables/booking/new`
  - analogicznie do powyzszej, bez poczatkowych rezerwacji
 - `/tables/events/:id`
  - anaogicznie do powyzszej, dla eventow
 - `/tables/events/new`
 - anaogicznie do powyzszej, dla eventow, bez poczatkowych rezerwacji

# Widok kelnera

 - `/waiter`
  - tabela
  - w wierszach stoliki
  - w kolumnach rozne rodzaje informacji (status od ostatniej aktywnosci)
  - w ostatniej kolumnie dostepne akcje dla danego stolika
 - `/waiter/order/new`
  - numer stolika (edit)
  - menu produktow
  - opcje wybranego produktu
  - zamowienie (zamowione produkty z opcjami i cena)
  - kwote zamowienia
 - `/waiter/order/:id`
 - jak powyzsza

# Widok kuchni
- `/kitchen`
 - wyswietlac liste zamowein w kolejnosci ich zlozenia
 - lista musi zawiewrac:
   - nr stolika (lub zamowienia zdalenego)
   - pelne informacje dot. zamowienia dan
 - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane




