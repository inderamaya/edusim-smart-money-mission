import React from 'react';
import GameButton from './GameButton';

const TeacherNotesScreen = ({ onBack }) => {
  return (
    <div className="screen-layout teacher-notes">
      <div className="card">
        <h2>Nota Guru 📒</h2>
        <div className="notes-content">
          <p>Aplikasi ini menggunakan <strong>Peta Pokok</strong> untuk mengelaskan keperluan dan kehendak. Aplikasi ini juga menggunakan carta bajet mudah bagi membantu murid mengurus maklumat kewangan.</p>
          <p>Soalan <strong>KBAT</strong> mesra murid digunakan melalui aktiviti memilih, membanding, mengira, menilai dan memberi sebab.</p>
          <p>Produk ini menyokong komunikasi, pemikiran kritis, kreativiti, pembentukan sahsiah dan celik kewangan asas. Reka bentuk visual, arahan pendek, butang besar dan maklum balas segera menjadikan aplikasi ini sesuai untuk pembelajaran terbeza dan murid yang mempunyai masalah pembelajaran ringan (MBPK).</p>
        </div>
        <GameButton onClick={onBack} color="var(--brick-orange)">Kembali</GameButton>
      </div>
    </div>
  );
};

export default TeacherNotesScreen;
