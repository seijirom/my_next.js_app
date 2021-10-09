import useSWR from 'swr'

import Link from 'next/link'
import Header from './components/header'
import Content from './components/content'
export default function Home() {
    let title = 'ともすた'

    // ここから追加
    const {data, error} = useSWR('/api/message')
    if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>
	
    return (
	<>
  	  <style jsx>{`
           h1 {
             color: #fff;
           }}
          `}</style>
	  {/* <h1 className="mytitle"> tomosuta </h1> */}
	    <Header title={title}/>
        {/*  <h1 style="jsx">tomosuta</h1>	   */} 
	  <p> learn diligently </p>
            {/* <p>{data.message}</p> */}
          <Link href={'/about'}><button> About</button></Link>
        </>
    )
}
