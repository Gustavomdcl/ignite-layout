import { GetServerSideProps } from "next"

interface ContinentsProps {
  slug: string
}

export default function Continents({slug}:ContinentsProps){
  return(
    <>Continents</>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {slug} = params

  

  // const post = {
  //   slug,
  //   title: RichText.asText(response.data.title),
  //   content: RichText.asHtml(response.data.content),
  //   updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
  //     day: '2-digit',
  //     month: 'long',
  //     year: 'numeric',
  //   }),
  // }

  return {
    props: {
      slug,
    },
  }
}