// --- KESİNTİSİZ AFK ENGELLEYİCİ ---
(function() {
    console.log("Sistem: WebSocket avcısı başlatıldı...");

    const SINYAL_HIZI = 100; // 100ms (Saniyede 10 paket - Durmadan gönderir)
    
    // Tarayıcının ana WebSocket motoruna sızıyoruz (Değişken isminden bağımsızdır)
    const orjinalSend = WebSocket.prototype.send;
    
    WebSocket.prototype.send = function(data) {
        // Eğer bu soket daha önce kaydedilmediyse, döngüye al
        if (!this.afkKorumasiBasladi) {
            this.afkKorumasiBasladi = true;
            console.log("Sistem: Aktif bağlantı yakalandı! Durmadan sinyal gönderiliyor.");
            
            // Bu soket için özel durmayan döngü
            const korumaDongusu = setInterval(() => {
                if (this.readyState === WebSocket.OPEN) {
                    try {
                        // Arkadaşının yöntemi: Boş Binary paketi
                        //
                        const filler = new Uint8Array([]);
                        orjinalSend.call(this, filler.buffer);
                    } catch (e) {
                        console.error("Sinyal hatası:", e);
                        clearInterval(korumaDongusu);
                    }
                } else if (this.readyState === WebSocket.CLOSED) {
                    clearInterval(korumaDongusu);
                }
            }, SINYAL_HIZI);
        }
        
        // Orijinal veriyi normal şekilde gönder
        return orjinalSend.apply(this, arguments);
    };
})();