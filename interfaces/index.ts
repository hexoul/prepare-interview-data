export type Content = {
  content: string,
  link: string,
  num: number
}

export type Question = {
  question: string,
  choices: string[],
  answer: number,
  explanation: string,
  references: Record<string, string>[],
  visible?: boolean
}

export type Questions = {
  questions: Question[]
}
