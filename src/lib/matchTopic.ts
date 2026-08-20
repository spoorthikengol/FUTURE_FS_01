import {
  assistantTopics,
  fallbackAnswer,
  type AssistantTopic,
} from "@/data/assistantKnowledge";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,'"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchTopic(question: string): AssistantTopic | null {
  const normalizedQuestion = normalize(question);

  if (!normalizedQuestion) {
    return null;
  }

  let bestTopic: AssistantTopic | null = null;
  let bestScore = 0;

  for (const topic of assistantTopics) {
    let score = 0;

    for (const keyword of topic.keywords) {
      const normalizedKeyword = normalize(keyword);

      if (!normalizedKeyword) {
        continue;
      }

      if (normalizedQuestion.includes(normalizedKeyword)) {
        const wordCount = normalizedKeyword.split(" ").length;

        score += wordCount * 10;

        if (normalizedQuestion === normalizedKeyword) {
          score += 100;
        }

        if (normalizedKeyword.length >= 15) {
          score += 5;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  return bestScore > 0 ? bestTopic : null;
}

export function answerQuestion(question: string): string {
  const topic = matchTopic(question);

  if (topic === null) {
    return fallbackAnswer;
  }

  return topic.answer;
}