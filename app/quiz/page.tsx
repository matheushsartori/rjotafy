"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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

      // Auto-advance for multiple choice and lyrics questions
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
        // Quiz completed
        setIsLoading(true);
        const result = calculateQuizResult(finalAnswers);
        
        // Store result in session storage for result page
        sessionStorage.setItem("quizResult", JSON.stringify(result));
        sessionStorage.setItem("quizAnswers", JSON.stringify(finalAnswers));

        // Redirect to result page
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
      <main className="relative min-h-screen flex flex-col">
        {/* Progress Bar */}
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

        {/* Question Counter */}
        <div className="text-center pt-6 pb-2 text-gray-400 text-sm">
          Pergunta {currentQuestionIndex + 1} de {totalQuestions}
        </div>

        {/* Question Container */}
        <div className="flex-1 flex items-center justify-center">
          {currentQuestion.type === "slider" && (
            <SliderQuestion
              question={currentQuestion.question}
              min={currentQuestion.min}
              max={currentQuestion.max}
              value={currentAnswer ? Number(currentAnswer.value) : currentQuestion.min}
              onChange={(value) => handleAnswer(value)}
              onNext={() => handleNext()}
            />
          )}

          {currentQuestion.type === "multiple-choice" && (
            <MultipleChoiceQuestion
              question={currentQuestion.question}
              options={currentQuestion.options.map((opt) => ({
                text: opt.text,
                emoji: opt.emoji,
              }))}
              onSelect={(value) => handleAnswer(value)}
            />
          )}

          {currentQuestion.type === "lyrics" && (
            <LyricsQuestion
              question={currentQuestion.question}
              options={currentQuestion.options.map((opt) => ({
                text: opt.text,
              }))}
              onSelect={(value) => handleAnswer(value)}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="px-6 py-8 flex gap-4 justify-between max-w-2xl mx-auto w-full">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-colors"
          >
            ← Anterior
          </button>

          {currentQuestion.type === "slider" && (
            <button
              onClick={() => handleNext()}
              disabled={isLoading}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-black font-bold rounded-full transition-colors"
            >
              {isLoading ? "Processando..." : "Próximo →"}
            </button>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
