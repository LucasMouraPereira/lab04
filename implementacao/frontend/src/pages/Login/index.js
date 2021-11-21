export async function getStaticProps() {
    // const { data } = await api.get("/login");
  // console.log(data);
  return {
    props: {
    },
  }
}

export { default } from "containers/Login";