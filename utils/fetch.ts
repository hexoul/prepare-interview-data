import { Content, Questions } from '../interfaces'

const prefix = 'https://raw.githubusercontent.com/hexoul/prepare-interview-data/master'

export async function getContents(subpath: string = ''): Promise<Content[]> {
  const res = await fetch(`${prefix}${subpath}/contents.json`)
  return res.json()
}

export async function getQuestions(subpath: string): Promise<Questions> {
  const res = await fetch(`${prefix}${subpath}`)
  return res.json()
}
