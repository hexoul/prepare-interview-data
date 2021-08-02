import React, { useEffect, useState } from 'react'
import { Logo } from '../Logo'
import axios from 'axios'

export function Main () {
  const [contents, setContents] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/contents.json'
      )
      setContents(result.data)
    }
    fetch()
  }, [])

  return (
    <div>
      <Logo h='40vmin' pointerEvents='none' />
      <ul>
        {contents.filter(i => i.link).map(i => (
          <li key={i.content}>{i.content}</li>
        ))}
      </ul>
    </div>
  )
}
