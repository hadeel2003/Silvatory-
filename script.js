// عدّلي بيانات الدعوة من هنا فقط
const wedding = {
  groom: "أحمد",
  bride: "سارة",
  dateShort: "٢٠ أكتوبر ٢٠٢٦",
  dateFull: "الثلاثاء، ٢٠ أكتوبر ٢٠٢٦",
  time: "السابعة مساءً",
  venue: "قصر الورد — القاهرة",
  mapUrl: "https://maps.google.com/?q=Cairo"
};

// عرض بيانات الدعوة داخل الصفحة
const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

setText("groomCover", wedding.groom);
setText("brideCover", wedding.bride);
setText("groomName", wedding.groom);
setText("brideName", wedding.bride);
setText("coverDate", wedding.dateShort);
setText("eventDate", wedding.dateFull);
setText("eventTime", wedding.time);
setText("venue", wedding.venue);

const mapLink = document.getElementById("mapLink");
if (mapLink) mapLink.href = wedding.mapUrl;

// فتح الدعوة وإظهار تفاصيلها
const openButton = document.getElementById("openInvitation");
const details = document.getElementById("details");

if (openButton && details) {
  openButton.addEventListener("click", () => {
    details.classList.remove("hidden");
    details.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => details.classList.add("opened"));
    openButton.textContent = "تم فتح الدعوة ✦";
    openButton.disabled = true;
    setTimeout(() => details.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  });
}

// زر تشغيل وإيقاف موسيقى الفالس
const audio = document.getElementById("waltz");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

if (audio && musicToggle) {
  musicToggle.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        musicToggle.classList.add("playing");
        if (musicLabel) musicLabel.textContent = "إيقاف الموسيقى";
        musicToggle.setAttribute("aria-label", "إيقاف الموسيقى");
      } catch (error) {
        if (musicLabel) musicLabel.textContent = "أضيفي ملف الموسيقى";
        alert("ضعي ملف فالس بصيغة MP3 باسم waltz.mp3 داخل مجلد assets، ثم ارفعي الملفات إلى GitHub Pages.");
      }
    } else {
      audio.pause();
      musicToggle.classList.remove("playing");
      if (musicLabel) musicLabel.textContent = "تشغيل الموسيقى";
      musicToggle.setAttribute("aria-label", "تشغيل الموسيقى");
    }
  });
}
