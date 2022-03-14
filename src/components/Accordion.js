function Accordion(props) {
    return (
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Keturunan Adeptus Membuatnya Unik
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Ganyu adalah keturunan Adeptus atau Qilin yang akhirnya membuat penampilan fisiknya sedikit berbeda dengan manusia. Tanduk gelap dan merah di balik rambut birunya merupakan penampilan fisik yang tersisa dari keturunannya yang istimewa ini. Belum jelas siapakah Adeptus yang mungkin jadi sosok orang tua dari Ganyu.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Punya Status ATK Sangat Tinggi
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Sebagai pengguna panah, ATK dari Ganyu berada di atas rata-rata. Malah, karakter ini akan punya ATK paling tinggi mengalahkan Fischl yang sebelumnya jadi DPS bertipe panah. Bisa dipastikan Ganyu akan memberikan mimpi buruk bagi deretan monster yang kalian hadapi.

Jadi karakter dengan ATK paling tinggi, Ganyu merupakan sasaran yang baik jika kalian sudah punya tabungan Primogems yang cukup. Terlebih, senjata panah bisa membuatnya jadi DPS jarak jauh dan membuat kalian bertahan di banyak Domain dengan mudah.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Punya susu yang besar
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <img src="https://statics.indozone.news/content/2021/01/15/Z8seRp0/seberapa-kuat-sih-karakter-baru-ganyu-di-game-genshin-impact44_700.jpg"/>
      </div>
    </div>
  </div>
</div>
    )
}
export default Accordion;