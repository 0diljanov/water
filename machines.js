// ============================================================
// СПИСОК 118 ВОДОМАТОВ
// ============================================================
// Ключ — IMEI 4G/SIM модема внутри водомата (15 цифр).
// IMEI должен совпадать с тем, что вы напечатаете на QR коде:
//   https://0diljanov.github.io/water/?imei=XXXXXXXXXXXXXXX
// При получении MQTT команды backend публикует:
//   topic = water/<imei>/dispense   payload = {"liters": 4.5}
//
// ВРЕМЕННЫЕ IMEI — замените на реальные с ваших SIM-карт!
// ============================================================

window.MACHINES = {
  // imei                : { model, location, filterDate }
  "869771000000001": { model: "ЮА 8/20", location: "Точка 1",  filterDate: "21.05.2026" },
  "869771000000002": { model: "ЮА 8/20", location: "Точка 2",  filterDate: "21.05.2026" },
  "869771000000003": { model: "ЮА 8/20", location: "Точка 3",  filterDate: "21.05.2026" },
  // ... добавьте все 118
};

// Если IMEI ещё нет — оставляем заглушку P001-P118 для теста.
// Это делает ссылки ?id=P001 рабочими во время демо.
for (let i = 1; i <= 118; i++) {
  const pid = "P" + String(i).padStart(3, "0");
  if (!window.MACHINES[pid]) {
    window.MACHINES[pid] = {
      model: "ЮА 8/20",
      location: "Точка " + i,
      filterDate: "21.05.2026"
    };
  }
}
