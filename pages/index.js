import Layout from "components/Layout";
import ResourceHighlighte from "components/ResourceHighlighte";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";

function Home({resources}) {
  debugger
  return (
    <Layout>
       <ResourceHighlighte
           resources={resources.slice(0, 2)}
       />
       <Newsletter/>
       <ResourceList
           resources={resources.slice(2)}
       />
       <Footer/>
    </Layout>
  )
}
export async function getServerSideProps(){
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
  console.log(data);
  return{
    props:{
      resources: data
    }
  }
}
export default Home;
