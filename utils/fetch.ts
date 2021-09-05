import { Content } from '../interfaces'

export async function getContents(): Promise<Content[]> {
  const res = await fetch('https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/contents.json')
  return res.json()
}
