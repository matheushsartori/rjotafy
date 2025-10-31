// Dados dos artistas
export const artists = {
  gaab: {
    id: "gaab",
    name: "Gaab",
    title: "O Maloqueiro Romântico",
    description: "Você é um maloqueiro romântico! Combina energia, atitude e um coração apaixonado. Vive intensamente cada momento, não tem medo de se arriscar e sabe o que quer da vida.",
    color: "#1DB954",
    emoji: "🎤",
    song: {
      title: "Tem Café",
      artist: "Gaab part. MC Hariel",
      album: "Preservé",
      image: "https://via.placeholder.com/300x300?text=Tem+Café"
    },
    characteristics: ["Moderno", "Direto", "Sedução", "Vida noturna", "Atitude"],
    themes: ["Festas", "Relacionamentos", "Bravura", "Estilo urbano"]
  },
  rodriguinho: {
    id: "rodriguinho",
    name: "Rodriguinho",
    title: "O Romântico Clássico",
    description: "Você é um romântico clássico! Sente as emoções profundamente, valoriza conexões genuínas e não tem medo de ser vulnerável. Sua sensibilidade é sua força.",
    color: "#E91E63",
    emoji: "💔",
    song: {
      title: "Ponto Final",
      artist: "Rodriguinho",
      album: "Amor Perfeito",
      image: "https://via.placeholder.com/300x300?text=Ponto+Final"
    },
    characteristics: ["Emocional", "Amor profundo", "Poético", "Sofrimento", "Superação"],
    themes: ["Amor", "Saudade", "Emoção", "Reflexão", "Relacionamentos intensos"]
  },
  mrdan: {
    id: "mrdan",
    name: "Mr. Dan",
    title: "O Good Vibes / Reflexivo",
    description: "Você é um espírito reflexivo e grato! Busca paz interior, valoriza os momentos simples e tem uma conexão profunda com a espiritualidade. Sua sabedoria inspira.",
    color: "#76FF03",
    emoji: "🌿",
    song: {
      title: "Só Agradecer",
      artist: "Mr. Dan",
      album: "Bora Viver",
      image: "https://via.placeholder.com/300x300?text=Só+Agradecer"
    },
    characteristics: ["Positividade", "Gratidão", "Espiritualidade", "Reflexão"],
    themes: ["Paz interior", "Conexão espiritual", "Reflexão", "Natureza"]
  }
};

// Perguntas do quiz
export const quizQuestions = [
  {
    id: 1,
    type: "slider",
    question: "De 0 a 10, quanto você é impulsivo e age sem pensar nas consequências?",
    min: 0,
    max: 10,
    scoring: {
      gaab: (value: number) => value,
      rodriguinho: (value: number) => 10 - value,
      mrdan: (value: number) => 5 - Math.abs(5 - value)
    }
  },
  {
    id: 2,
    type: "slider",
    question: "De 0 a 10, como você avalia sua sensibilidade emocional?",
    min: 0,
    max: 10,
    scoring: {
      gaab: (value: number) => 10 - value,
      rodriguinho: (value: number) => value,
      mrdan: (value: number) => value * 0.8
    }
  },
  {
    id: 3,
    type: "slider",
    question: "De 0 a 10, quanto você busca paz e equilíbrio interior?",
    min: 0,
    max: 10,
    scoring: {
      gaab: (value: number) => 5 - Math.abs(5 - value),
      rodriguinho: (value: number) => value * 0.6,
      mrdan: (value: number) => value
    }
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Qual estilo de vida mais te atrai?",
    options: [
      { text: "Festas, diversão e vida noturna", emoji: "🎉", artist: "gaab", points: 10 },
      { text: "Momentos românticos e profundos", emoji: "💕", artist: "rodriguinho", points: 10 },
      { text: "Natureza e espiritualidade", emoji: "🌳", artist: "mrdan", points: 10 }
    ]
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Como você lida com dificuldades?",
    options: [
      { text: "Enfrento de cabeça erguida", emoji: "💪", artist: "gaab", points: 10 },
      { text: "Reflito e sinto profundamente", emoji: "🤔", artist: "rodriguinho", points: 10 },
      { text: "Busco aprender e crescer", emoji: "📚", artist: "mrdan", points: 10 }
    ]
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "O que mais te motiva?",
    options: [
      { text: "Sucesso e reconhecimento", emoji: "🏆", artist: "gaab", points: 10 },
      { text: "Conexões genuínas", emoji: "🤝", artist: "rodriguinho", points: 10 },
      { text: "Paz e bem-estar", emoji: "☮️", artist: "mrdan", points: 10 }
    ]
  },
  {
    id: 7,
    type: "lyrics",
    question: "Qual trecho de letra combina mais com você?",
    options: [
      { text: "\"Sou maloqueiro, mas tenho coração\"", artist: "gaab", points: 15 },
      { text: "\"Meu amor é infinito, minha dor é profunda\"", artist: "rodriguinho", points: 15 },
      { text: "\"Só tenho a agradecer por cada dia\"", artist: "mrdan", points: 15 }
    ]
  },
  {
    id: 8,
    type: "lyrics",
    question: "Qual mensagem ressoa mais com você?",
    options: [
      { text: "\"Viva cada momento como se fosse o último\"", artist: "gaab", points: 15 },
      { text: "\"O amor verdadeiro nunca morre\"", artist: "rodriguinho", points: 15 },
      { text: "\"A gratidão transforma tudo\"", artist: "mrdan", points: 15 }
    ]
  },
  {
    id: 9,
    type: "lyrics",
    question: "Qual visão de vida você compartilha?",
    options: [
      { text: "\"Sem medo de arriscar, sempre pra frente\"", artist: "gaab", points: 15 },
      { text: "\"Sinto tudo, vivo tudo intensamente\"", artist: "rodriguinho", points: 15 },
      { text: "\"Simplicidade é luxo, gratidão é riqueza\"", artist: "mrdan", points: 15 }
    ]
  },
  {
    id: 10,
    type: "lyrics",
    question: "Qual filosofia de vida você segue?",
    options: [
      { text: "\"Atitude é tudo, energia é contagiante\"", artist: "gaab", points: 15 },
      { text: "\"Vulnerabilidade é força, emoção é verdade\"", artist: "rodriguinho", points: 15 },
      { text: "\"Paz interior, conexão espiritual, sabedoria\"", artist: "mrdan", points: 15 }
    ]
  }
];

export type QuizQuestion = typeof quizQuestions[0];
export type Artist = typeof artists[keyof typeof artists];
