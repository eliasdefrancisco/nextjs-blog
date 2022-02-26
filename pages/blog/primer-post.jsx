import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"

export default function primerPost() {
  return (
    <Layout
      title="Mi primer post | next.js"
      description="Mi primer post con Next"
    >
        <h1>Este es el primer post</h1>
        <Link href="/"><a>Volver</a></Link>
        <Image 
          src="/img/erizo_mar.jpg" 
          width={800}
          height={540}
          alt="El erizo de mar"
        />
    </Layout>
  )
}
