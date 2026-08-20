import {
  assistantTopics,
  fallbackAnswer,
  type AssistantTopic,
} from "@/data/assistantKnowledge";

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

export function matchTopic(question: string): AssistantTopic | null {
  const normalizedQuestion = normalize(question);

  if (normalizedQuestion.length === 0) {
    return null;
  }

  let bestTopic: AssistantTopic | null = null;
  let bestScore = 0;

  for (const topic of assistantTopics) {
    let score = 0;

    for (const keyword of topic.keywords) {
      const normalizedKeyword = normalize(keyword);

      if (normalizedKeyword.length < 6) {
        continue;
      }

      if (normalizedQuestion.indexOf(normalizedKeyword) !== -1) {
        score += normalizedKeyword.split(" ").length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  if (bestScore === 0) {
    return null;
  }

  return bestTopic;
}

export function answerQuestion(question: string): string {
  const topic = matchTopic(question);

  if (topic === null) {
    return fallbackAnswer;
  }

  return topic.answer;
}