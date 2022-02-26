import Link from "next/link";
import Layout from "../../components/Layout";

export default function index({ data }) {
  return (
    <Layout
      title="Blog | next.js"
      description="Indice del blog"
    >
        <h1>Blog 2.0</h1>
        {
          data.map(({ id, title, body }) => (
            <div key={ id }>
              <Link href={`/blog/${id}`}>
                <h3>{ id } - { title }</h3>
              </Link>
              <p>{ body }</p>
            </div>
          ))
        }
    </Layout>
  )
}

// Genera el sitio de forma ESTATICA (SEO), 
// para hacerlo de forma dinamica ver 'getServerSideProps()' 
// y para que la peticion la haga solo el cliente ver 'useSWR()'
export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }
  catch (error) {
    console.error(error)
  }
}
