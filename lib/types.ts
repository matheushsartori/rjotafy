export interface QuizAnswer {
  questionId: number;
  value: number | string;
}

export interface QuizResult {
  gaabScore: number;
  rodriguinhoScore: number;
  mrDanScore: number;
  topArtist: "gaab" | "rodriguinho" | "mrdan";
}

export interface QuizState {
  currentQuestion: number;
  answers: QuizAnswer[];
  result: QuizResult | null;
}
