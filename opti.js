
window.adblockerDisabled = true;
function optimizeImage(file, quality, maxWidth) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Zmiana rozmiaru (skalowanie w dół, jeśli obraz jest za duży)
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Eksport do formatu WebP (lub image/jpeg) z określoną jakością (0.0 do 1.0)
        canvas.toBlob((blob) => {
          if (blob) {
            resolve({
              blob: blob,
              url: URL.createObjectURL(blob),
              oldSize: (file.size / 1024).toFixed(2) + ' KB',
              newSize: (blob.size / 1024).toFixed(2) + ' KB'
            });
          } else {
            reject(new Error('Błąd podczas kompresji pliku.'));
          }
        }, 'image/webp', quality); // Konwersja na nowoczesny format WebP
      };
    };
    reader.onerror = (error) => reject(error);
  });
}

// Przykład użycia z inputem HTML: <input type="file" id="upload">
document.getElementById('upload').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  // Kompresja: jakość 75%, maksymalna szerokość 1200px
  const result = await optimizeImage(file, 0.75, 1200);
  console.log(`Stary rozmiar: ${result.oldSize}, Nowy rozmiar: ${result.newSize}`);
  
  // Wyświetlenie podglądu na stronie
  const preview = document.createElement('img');
  preview.src = result.url;
  document.body.appendChild(preview);
});
