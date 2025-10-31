import { quizQuestions } from "./constants";
import { QuizAnswer, QuizResult } from "./types";

export function calculateQuizResult(answers: QuizAnswer[]): QuizResult {
  let gaabScore = 0;
  let rodriguinhoScore = 0;
  let mrDanScore = 0;

  answers.forEach((answer) => {
    const question = quizQuestions.find((q) => q.id === answer.questionId);
    if (!question) return;

    if (question.type === "slider") {
      const value = Number(answer.value);
      gaabScore += question.scoring.gaab(value);
      rodriguinhoScore += question.scoring.rodriguinho(value);
      mrDanScore += question.scoring.mrdan(value);
    } else if (question.type === "multiple-choice" || question.type === "lyrics") {
      const selectedOption = question.options.find((opt) => opt.text === answer.value);
      if (selectedOption) {
        if (selectedOption.artist === "gaab") gaabScore += selectedOption.points;
        if (selectedOption.artist === "rodriguinho") rodriguinhoScore += selectedOption.points;
        if (selectedOption.artist === "mrdan") mrDanScore += selectedOption.points;
      }
    }
  });

  // Determinar artista com maior pontuação
  const scores = {
    gaab: gaabScore,
    rodriguinho: rodriguinhoScore,
    mrdan: mrDanScore,
  };

  const topArtist = (
    Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0] as
      | "gaab"
      | "rodriguinho"
      | "mrdan"
  );

  return {
    gaabScore,
    rodriguinhoScore,
    mrDanScore,
    topArtist,
  };
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
