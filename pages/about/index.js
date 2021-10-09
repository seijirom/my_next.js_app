import Link from 'next/link'
import Content from '../components/content'
import useSWR from 'swr'
export default function About() {
let title = 'ともすた'

// ここから追加
const {data, error} = useSWR('/api/message')
if (error) return <div>failed to load</div>
if (!data) return <div>loading...</div>

    return (
      <Content>
	    <h1>About</h1>
            <p>{data.message}</p>
	    <Link href={`/`}><button>トップへ</button></Link>
      </Content>
    )
}

