const menuLinks = document.querySelectorAll("nav a");

// NAVIGASI MENU
menuLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        // SIGN OUT
        if (this.id === "signOut") {
            event.preventDefault();
            alert("Anda memilih Sign Out!");
            return;
        }

        event.preventDefault();

        // HAPUS HIGHLIGHT SEBELUMNYA
        document.querySelectorAll(".section-highlight")
            .forEach(element => {
                element.classList.remove("section-highlight");
            });

        // HAPUS MENU AKTIF
        menuLinks.forEach(menu => {
            menu.classList.remove("active");
        });

        // AKTIFKAN MENU YANG DIKLIK
        this.classList.add("active");

        // CARI BAGIAN TUJUAN
        const idTujuan = this.getAttribute("href");
        const target = document.querySelector(idTujuan);

        if (target) {

            // TAMBAHKAN HIGHLIGHT
            target.classList.add("section-highlight");

            // SCROLL KE BAGIAN TUJUAN
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        } else {
            console.log("Bagian tidak ditemukan:", idTujuan);
        }

    });

});


// FITUR PENCARIAN DASHBOARD
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const keyword = this.value.toLowerCase();

    const items = document.querySelectorAll(
        ".class-item, .activity, .document"
    );

    items.forEach(item => {

        const text = item.textContent.toLowerCase();

        if (text.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});