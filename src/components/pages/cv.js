import React, { Component } from "react";

export default class Cv extends Component {
  render() {
    return (
      <div className="curri-content-wrapper">
        <div className="left-side">
          <div className="curri-item">
            <div className="title">Education</div>
            <div className="subtitle">
              Bottega University, Developers from Euskadi
            </div>
            Coding Fundamentals & Fullstack. 2025-2026
            <div className="subtitle">University of Basque Country UPV EHU</div>
            Fine Arts Degree. 2018-2022
          </div>

          <div className="curri-item">
            <div className="title">Work Experience</div>
            <div className="subtitle">Exam Invigilator</div>
            British Council, Bilbao. 2026-present
            <div className="subtitle">English Teacher</div>
            Kids & Us English Academy, Bilbao. 2022-present
            <div className="subtitle">Art Assistant</div>
            Assistant of artist Ivan Gomez, Jun-Sep 2024
            <div className="subtitle">Art Assistant</div>
            Assistant of artist Inés García, Oct-Dec 2022
          </div>

          <div className="curri-item">
            <div className="title">Languages</div>
            <div className="subtitle">Spanish, Italian</div>
            Native
            <div className="subtitle">English</div>
            IELTS Academic Certificate, C1
            <div className="subtitle">Euskera</div>
            Beginner
          </div>
        </div>

        <div className="mid-side">
          <div className="curri-item">
            <div className="title">Exhibitions</div>
            <div className="subtitle">Undergrass</div>
            Harriak, Arrasate Mondragón. 2022
            <div className="subtitle">A/E</div>
            Bizkaia Aretoa, Bilbao. 2022
            <div className="subtitle">
              'Casimiro Sainz' Painting Competition
            </div>
            Ayuntamiento de Reinosa, Cantabria. 2021
            <div className="subtitle">Bela Bela Jauna</div>
            With Jon Salinas at Gaztebulegoa, Barakaldo. 2021
            <div className="subtitle">Fanecas</div>
            Sutan, Bilbao. 2019
            <div className="subtitle">Margoa</div>
            Jeelie Piece, Edinburgh, Scotland. 2018
          </div>

          <div className="curri-item">
            <div className="title">Technical Skills</div>
            <div className="subtitle">Design</div>
            Advanced Photoshop, InDesign, Illustrator and Premiere. Mid/advanced
            photography (digital & analog)
            <div className="subtitle">Programming</div>
            Basic/intermediate HTML, CSS, SCSS, JavaScript, Python, React, SQL.
            <div className="subtitle">Sound</div>
            Audio/music production, recording, mixing and mastering.
            Mid/advanced technical setup, microphones and live sound.
          </div>
        </div>

        <div className="right-side">
          <div className="curri-item">
            <div className="title">Projects</div>
            <div className="subtitle">Sound Design</div>
            <span className="entry-title">'Anga'</span>, with Izaro Ieregi for
            Dantza Bilaka & TEA Tenerife. 2025
            <br />
            <span className="entry-title">'Bi Begi'</span>, with Nagore Chivite
            for Centro Huarte. 2024
            <br />
            <span className="entry-title">'Yegua manca y zurda'</span>, with
            Izaro Ieregi for Montehermoso Kulturgunea. 2023
            <br />
            <span className="entry-title">'Sentimiento Popular'</span>,
            publication by Usoa Fullaondo. 2022
            <div className="subtitle">Performer</div>
            <span className="entry-title">'Conjugate One to Another'</span>,
            dir. Izaro Ieregi, Tabakalera Donosti. 2022
            <br />
            <span className="entry-title">'Touch Me Loud'</span>, dir. Izaro
            Ieregi, Amaia Kultur Zentroa, Irun. 2022
            <br />
            <span className="entry-title">
              'Me Cabezo Me Cuello Te Ombligo'
            </span>
            , dir. Izaro Ieregi, Romo Kultur Etxea. 2021
            <br />
            <span className="entry-title">'Mugurdiak Lugorrian'</span>, dir.
            Izaro Ieregi, Getxoarte, Romo Kultur Etxea. 2021
            <div className="subtitle">Collaborations & Residencies</div>
            <span className="entry-title">'Ertibil 40' Exhibition </span>
            layout design, Sala Rekalde, Diputación Foral de Bizkaia. 2022
            <br />
            <span className="entry-title">
              UPV/EHU Labor Transition Scholarship
            </span>{" "}
            Artist Assistant to Inés García. 2022
            <br />
            <span className="entry-title">Ondoko</span> self-managed residency,
            Eremuak open call. 2022
            <br />
            <span className="entry-title">Artistic Residencies Program </span>
            Ayuntamiento de Reinosa. 2021
          </div>
        </div>
      </div>
    );
  }
}
