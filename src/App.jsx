import { useState } from 'react'
import bioImg from "./assets/potret.jpeg"
import treinen from "./assets/Baturraden.jpg"
import sertif1 from "./assets/SeritifikatJS.png"
import sertif2 from "./assets/SertifikatCodeOrg.jpg"
import sertif3 from "./assets/SertifikatEarlyCoding.jpg"
import sertif4 from "./assets/SertifikatBasicWeb.png"
import sertif5 from "./assets/SertifikatILO.png"
import sertif6 from "./assets/SertifikatFinancialLiteracy.png"
import sertif7 from "./assets/SertifikatOSIS.png"
import belajar from "./assets/OSIS.JPG"
import basket1 from "./assets/basket1.JPG"
import basket2 from "./assets/basket2.JPG"
import basket3 from "./assets/basket3.JPG"
import basket4 from "./assets/basket4.JPG"
import basket5 from "./assets/basket5.JPG"
import basketAlt from "./assets/basketLIGHT.JPG"
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <div className="jumbotron">
          <h1>Darryl Shaquiele Herniwan</h1>
          <p>Selamat datang di web saya</p>
        </div>

        <nav>
          <ul>
            <li><a href="#Biografi">Biografi</a></li>
            <li><a href="#Sertifikat">Sertifikat</a></li>
            <li><a href="#Railfanning">Railfanning (Hobi)</a></li>
            <li><a href="#Pendidikan">Pendidikan</a></li>
            <li><a href="#Proyek">Proyek PPLG</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div id="content">

          <article id="Biografi" className="card">
            <h2>Biografi</h2>
            <img src={bioImg} alt="kumpul" width="400" />
            <div className="bio">
              <p>
                Saya lahir pada tanggal 28 September 2008 di Jakarta, selama masa kecil saya, saya tumbuh di Kota Bogor.
                Pada tahun 2012, saya sempat pindah ke Pandeglang bersama ibu saya sekaligus menempuh pendidikan di TK dan SD kelas 1 sampai
                saya naik kelas 2 pada tahun 2016. Kemudian saya balik lagi ke Bogor dan melanjutkan pendidikan dari SD, SMP dan SMK (saat ini) di
                SMK Wikrama Bogor.
              </p>
            </div>

            <section>
                <h3>Mengenal dunia programming</h3>
                <p>
                    Awalnya saya mengenal koding pada tahun 2021 di SMP Islam Ibnu Hajar oleh Pak Rizki,
                    waktu itu mengenal tentang konsep algoritme dan scratch, namun tidak dilanjutkan dan
                    akhirnya sempat menjadi mapel informatika hingga 2023. Pada tahun 2024 ini setelah saya
                    masuk SMK Wikrama, saya mengambil mapel PPLG dan mempelajari ilmu software programming 
                    seperti web dasar html dan css, akhirnya saya dapat memahami wawasan di bidang web dasar 
                    walaupun saya tidak terlalu jago di bidang css.
                </p>
                <br />
                <p>
                  Selain itu, sejak kelas 11, saya mulai mengenal lagi tentang dunia software programming seperti
                  bahasa pemograman, framework dan teknis lainnya seperti Koding dan Kecerdasan Artifisial yang
                  membahas aspek-aspek lainnya yang berhubungan dalam programming. Yang saya ketahui akhir-akhir ini
                  yang berhubungan dengan jurusan PPLG adalah:
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP (harus mengulik lagi)</li>
                    <li>Laravel Framework (dikit-dikit)</li>
                    <li>Database dan Entity Relationship Program (harus mengulik lagi)</li>
                    <li>MySQL (harus mengulik lagi)</li>
                    <li>ReactJS</li>
                  </ul>

                  Mungkin saya harus mengulik lagi lebih ekstra terkait dengan materi-materi yang diatas, dan kemungkinan
                  saya bakal lebih fokus di bagian ReactJS dan ERD (Entity Relationship Program) karena basisnya ada pada
                  semantic HTML. <br />
                  Selain belajar terkait dengan jurusan, saya juga mempelajari beberapa mata pelajaran lainnya seperti Sejarah,
                  Bahasa Indonesia dan lain sebagainya.
                </p>
              </section>

              <section>
                <h3>Kegiatan non-sekolah</h3>
                <img src={belajar} width='450px'/>
                <p>
                  Selain kegiatan internal sekolah, saya juga mengikuti kegiatan eksternal sekolah. Kebetulan saya juga adalah anggota
                  OSIS SMK Wikrama Bogor dan aktif di Divisi IX terkait dengan dokumentasi kegiatan OSIS dan sekolah (bila diterlibatkan),
                  ya, saya tertarik pada fotografi karena hobi saya adalah seorang <a href="#Railfanning">Railfans</a> atau penggemar kereta api.
                  Ada berbagai kegiatan dokumentasi yang menjadi pengalaman terbaik bagi saya dalam kegiatan eksternal sekolah, salah satunya adalah
                  saat mendokumentasikan pertandingan basket Wikrama Cup 2025.
                </p>
                <div className="galeri">
                  <img src={basket1} />
                  <img src={basket2} />
                  <img src={basket3} />
                  <img src={basketAlt} />
                  <img src={basket5} />
                </div>
              </section>
          </article>

          <article id="Sertifikat" className="card">
            <h2>Sertifikat</h2>
            <p>
              Sertifikat yang saya miliki:
            </p>
            <div className="galeri">
              <img src={sertif1} alt="1"/>
              <img src={sertif2} alt="2"/>
              <img src={sertif3} alt="3"/>
              <img src={sertif4} alt='4'/>
              <img src={sertif5} alt='5'/>
              <img src={sertif6} alt='6'/>
              <img src={sertif7} alt='7'/>
            </div>
          </article>

          <article id="Railfanning" className="card">
            <h2>Railfanning (Hobi saya)</h2>
            <img src={treinen} alt="train" width="400"/>
            <p>
              pada tahun 2018 saya mencobakan diri untuk menjadi seorang Railfans dan pada tahun 2020 Subscriber saya ada sekitar 80 orang, 
              awalnya konten youtube saya adalah konten hunting dan me-review perkiraan update bussid, pada Juli 2020 
              karena waktu itu masih kecil/sebelum remaja tepatnya usia 12 tahun, saya ingin mengganti channel youtube saya 
              menjadi RailSpotter TV, akan tetapi akun saya dinonaktifkan permanen karena waktu itu saya mengganti foto profil dan nama saya di laptop, 
              keesokan harinya saya bisa membuat ulang akun kedua saya dan dinamakan menjadi Darryl Railfans kembali pada tahun 2021, dan saat ini, Subscriber Saya bertambah lebih banyak dari akun sebelumnya 
              yang dinonaktifkan permanen yaitu sekitar lebih dari 900 Subscriber.<br />
              Awalnya saya hunting kereta api di sekitar kota Bogor saja, dan dilokasi JPL 04 Stasiun Bogor Paledang. Akan tetapi titik lokasi hunting
              keretanya mulai ke wilayah lainnya seperti Jl. R.E. Martadinata, Pasar Anyar dan Kedungbadak, bila ada acara keluarga, saya bisa hunting KA
              di Bandung hingga Cibatu, atau bahkan lebih jauh. <b>Jangan lupa subscribe channel saya di Darryl Railfans</b>
            </p>
          </article>

          <article id="Pendidikan" className="card">
            <h2>Jenjang pendidikan saya</h2>
          <ul>
            <li>TK Kartini (2013-2014)</li>
            <li>TK Kartika XIX Pandeglang (2014-2015)</li>
            <li>SDN 4 Pandeglang (2015-2016)</li>
            <li>SD Alam Ciomas (2016-2021)</li>
            <li>SMP Islam Ibnu Hajar (2021-2024)</li>
            <li>SMK Wikrama Bogor (2024-2027)</li>
          </ul>
          </article>

          <article id="Proyek" className="card">
            <h2>Daftar Proyek Praktikum PPLG saya</h2>
            <ul>
              <li><a href='https://darry244.github.io/Gelaralam/'>Website Kampung Adat Ciptagelar (kini Gelaralam)</a></li>
              <li><a href='https://darry244.github.io/Kalkulator-CO2-test-/'>Kalkulator Jejak Karbon</a></li>
              <li><a href='https://github.com/Darry244/DarrylShaquieleHerniwan-RepoSPPKB'>Aplikasi Sistem Pengecekan Pajak Kendaraan Bermotor (SPPKB)</a>, dan</li>
              <li><a href='https://github.com/Darry244/DarrylShaquieleHerniwan-FlutterProfile'>Laman Profil Flutter</a></li>
            </ul>
          </article>
          
          <article id="kontak" className="card">
            <h2>Kontak</h2>
            <ul>
              <li>Instagram: <a href="https://www.instagram.com/darryl_railfans/?next=%2F">darryl_railfans</a></li>
              <li>YouTube: <a href="https://www.youtube.com/@darrylrailfans">Darryl Railfans</a></li>
              <li>GitHub: <a href="https://github.com/Darry244">Darryl244</a></li>
            </ul>
          </article>

        </div>
      </main>

      <footer>
        <p>© 2026 Darryl Shaquiele Herniwan</p>
      </footer>
    </>
  )
}
