import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';
import { CheckCircle2, Volume2, ArrowLeft } from 'lucide-react';

const TeacherNotesScreen = ({ t, language, onBack }) => {
  const notes = language === 'en' ? [
    "This simulation is designed for primary school pupils (Years 4-6) and pupils with mild learning difficulties.",
    "Goal: Financial literacy - managing RM10 for a day.",
    "Pedagogical focus: Needs vs Wants, Price comparison, Decision making.",
    "Teachers can use this as a post-lesson activity for Mathematics (Money)."
  ] : [
    "Simulasi ini direka untuk murid sekolah rendah (Tahun 4-6) dan murid berkeperluan pendidikan khas (MBPK).",
    "Matlamat: Literasi kewangan - mengurus RM10 untuk sehari.",
    "Fokus pedagogi: Keperluan vs Kehendak, Perbandingan harga, Membuat keputusan.",
    "Guru boleh menggunakan ini sebagai aktiviti pengukuhan untuk Matematik (Wang)."
  ];

  const handleListen = () => {
    speakText(notes.join(" "), language);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <h2>{t.teacherNotes}</h2>
        <div className="notes-content" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {notes.map((note, i) => (
            <p key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={20} color="var(--grass-green)" style={{ flexShrink: 0 }} /> {note}
            </p>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '30px' }}>
          <GameButton color="#666" onClick={handleListen}>
            <Volume2 size={20} /> {t.listen}
          </GameButton>
        </div>

        <div style={{ textAlign: 'center' }}>
          <GameButton color="var(--soft-red)" onClick={onBack}>
            <ArrowLeft size={20} /> {t.back}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default TeacherNotesScreen;
