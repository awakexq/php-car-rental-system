-- Tworzenie bazy danych
CREATE DATABASE IF NOT EXISTS wypozyczalnia_samochodow;
USE wypozyczalnia_samochodow;

-- Tworzenie tabeli Rola
CREATE TABLE Rola (
    id_roli INT PRIMARY KEY AUTO_INCREMENT,
    nazwa VARCHAR(64) NOT NULL,
    opis TEXT
);

-- Tworzenie tabeli Osoba
CREATE TABLE Osoba (
    id_osoby INT PRIMARY KEY AUTO_INCREMENT,
    id_roli INT NOT NULL,
    imie VARCHAR(64) NOT NULL,
    nazwisko VARCHAR(64) NOT NULL,
    email VARCHAR(128) NOT NULL UNIQUE,
    telefon VARCHAR(15) NOT NULL,
    haslo VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_roli) REFERENCES Rola(id_roli)
);

-- Tworzenie tabeli Samochód
CREATE TABLE Samochod (
    id_samochodu INT PRIMARY KEY AUTO_INCREMENT,
    zdjecie VARCHAR(255) NOT NULL,
    marka VARCHAR(64) NOT NULL,
    model VARCHAR(64) NOT NULL,
    ilosc_koni INT NOT NULL,
    rocznik INT NOT NULL,
    kolor VARCHAR(32) NOT NULL,
    cena_za_dzien DECIMAL(10,2) NOT NULL,
    dostepny BOOLEAN NOT NULL DEFAULT true,
    typ VARCHAR(32) NOT NULL,
    rodzaj VARCHAR(32) NOT NULL,
    CHECK (typ IN ('coupe', 'sedan', 'suv', 'kombi', 'hatchback', 'cabrio', 'van', 'inne')),
    CHECK (rodzaj IN ('elektryczny', 'benzyna', 'diesel', 'hybryda', 'lpg', 'inne'))
);

-- Tworzenie tabeli Wypożyczenie
CREATE TABLE Wypozyczenie (
    id_wypozyczenia INT PRIMARY KEY AUTO_INCREMENT,
    id_osoby INT NOT NULL,
    id_samochodu INT NOT NULL,
    data_od DATE NOT NULL,
    data_do DATE NOT NULL,
    cena_calkowita DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_osoby) REFERENCES Osoba(id_osoby),
    FOREIGN KEY (id_samochodu) REFERENCES Samochod(id_samochodu),
    CHECK (data_do >= data_od)
);

-- Dodanie podstawowych ról
INSERT INTO Rola (nazwa, opis) VALUES
('admin', 'Administrator systemu'),
('user', 'Zwykły użytkownik');

-- Dodanie domyślnego administratora (hasło: admin123)
INSERT INTO Osoba (id_roli, imie, nazwisko, email, telefon, haslo) VALUES
(1, 'Admin', 'Systemowy', 'admin@example.com', '123456789', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'); 