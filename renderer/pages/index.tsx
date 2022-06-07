import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  return (
    <Layout title="HUNTER✖️HUNTER 今連載中か">
      <div className="flex flex-col justify-center items-center bg-green-50">
        <div className="bg-gray-900 p-4 mt-8 mb-2">
          <h2 className="text-5xl text-white">HUNTER✖️HUNTERは今</h2>
        </div>
        {/* <Image
          src="/senlitsu.jpeg"
          width={600}
          height={280}
        /> */}
        <img src="/senlitsu.jpeg" alt="" width={600} height={280} />
        <div className="bg-white p-6 mt-2 mb-8 shadow">
          <h1 className="text-8xl font-serif font-bold">休載中</h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
