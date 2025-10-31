"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Container, Button } from "reactstrap";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ProgressBar } from "@/components/ProgressBar";
import { SliderQuestion } from "@/components/SliderQuestion";
import { MultipleChoiceQuestion } from "@/components/MultipleChoiceQuestion";
import { LyricsQuestion } from "@/components/LyricsQuestion";
import { quizQuestions } from "@/lib/constants";
import { calculateQuizResult } from "@/lib/utils";
import { QuizAnswer } from "@/lib/types";
import { Footer } from "@/components/Footer";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleAnswer = useCallback(
    (value: number | string) => {
      const newAnswer: QuizAnswer = {
        questionId: currentQuestion.id,
        value,
      };

      const updatedAnswers = [
        ...answers.filter((a) => a.questionId !== currentQuestion.id),
        newAnswer,
      ];

      setAnswers(updatedAnswers);

      if (
        currentQuestion.type === "multiple-choice" ||
        currentQuestion.type === "lyrics"
      ) {
        setTimeout(() => {
          handleNext(updatedAnswers);
        }, 300);
      }
    },
    [currentQuestion, answers]
  );

  const handleNext = useCallback(
    (answersToUse?: QuizAnswer[]) => {
      const finalAnswers = answersToUse || answers;

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsLoading(true);
        const result = calculateQuizResult(finalAnswers);
        
        sessionStorage.setItem("quizResult", JSON.stringify(result));
        sessionStorage.setItem("quizAnswers", JSON.stringify(finalAnswers));

        setTimeout(() => {
          router.push("/result");
        }, 500);
      }
    },
    [currentQuestionIndex, totalQuestions, answers, router]
  );

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex]);

  const currentAnswer = answers.find(
    (a) => a.questionId === currentQuestion.id
  );

  return (
    <>
      <AnimatedBackground />
      <main className="position-relative" style={{ minHeight: "100vh" }}>
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

        <div className="text-center py-4">
          <p className="text-spotify-gray mb-0" style={{ fontSize: "0.875rem" }}>
            Pergunta {currentQuestionIndex + 1} de {totalQuestions}
          </p>
        </div>

        <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "calc(100vh - 150px)" }}>
          {currentQuestion.type === "slider" && currentQuestion.min !== undefined && currentQuestion.max !== undefined && (
            <SliderQuestion
              question={currentQuestion.question}
              min={currentQuestion.min}
              max={currentQuestion.max}
              value={currentAnswer ? Number(currentAnswer.value) : currentQuestion.min}
              onChange={(value) => handleAnswer(value)}
              onNext={() => handleNext()}
            />
          )}

          {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
            <MultipleChoiceQuestion
              question={currentQuestion.question}
              options={currentQuestion.options
                .filter((opt): opt is { text: string; emoji: string } => "emoji" in opt)
                .map((opt) => ({
                  text: opt.text,
                  emoji: opt.emoji,
                }))}
              onSelect={(value) => handleAnswer(value)}
            />
          )}

          {currentQuestion.type === "lyrics" && currentQuestion.options && (
            <LyricsQuestion
              question={currentQuestion.question}
              options={currentQuestion.options.map((opt) => ({
                text: opt.text,
              }))}
              onSelect={(value) => handleAnswer(value)}
            />
          )}
        </Container>

        <Container className="py-4">
          <div className="d-flex justify-content-between gap-3">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="custom-btn-option"
              style={{
                opacity: currentQuestionIndex === 0 ? 0.5 : 1,
                cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer"
              }}
            >
              ← Anterior
            </Button>

            {currentQuestion.type === "slider" && (
              <Button
                onClick={() => handleNext()}
                disabled={isLoading}
                className="custom-btn-primary"
              >
                {isLoading ? "Processando..." : "Próximo →"}
              </Button>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
