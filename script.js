let counter = document.getElementById("tree-counter");
let count = 98950000;
let end = 100000000;

let interval = setInterval(() => {
  if (count >= end) {
    clearInterval(interval);
  } else {
    count += 25000;
    counter.innerText = count.toLocaleString();
  }
}, 100);
const timelineItems = document.querySelectorAll('.timeline-item');

  const showOnScroll = () => {
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        item.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);

   var map = L.map('map').setView([23.8859, 45.0792], 6);

   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
   }).addTo(map);
 
   var locations = [
     { lat: 24.7136, lng: 46.6753, title: "الرياض" },
     { lat: 26.4207, lng: 50.0888, title: "الدمام" },
     { lat: 18.6245, lng: 42.8646, title: "أبها" },
     { lat: 28.3838, lng: 36.5550, title: "تبوك" },
     { lat: 26.2076, lng: 43.4839, title: "القصيم" },   
     { lat: 17.5650, lng: 44.2280, title: "نجران " },  
     { lat: 16.8892, lng: 42.5511, title: "جازان " },  
     { lat: 20.0129, lng: 41.4677, title: "الباحة" },
{ lat: 21.3891, lng: 39.8579, title: "مكة المكرمة" },
{ lat: 24.5247, lng: 39.5692, title: "المدينة المنورة" },
{ lat: 27.5219, lng: 41.6906, title: "حائل" },
{ lat: 31.4632, lng: 40.2196, title: "الحدود الشمالية" },
{ lat: 25.3831, lng: 49.5864, title: "المنطقة الشرقية" },

     
     
 

   
   ];
 
   locations.forEach(loc => {
     L.marker([loc.lat, loc.lng])
       .addTo(map)
       .bindPopup(`<strong>${loc.title}</strong><br>موقع تشجير`);
   });
  





  






   window.addEventListener('scroll', () => {
    const section = document.querySelector('.logging-box');
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.9;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
