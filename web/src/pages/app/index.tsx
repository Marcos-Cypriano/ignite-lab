import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import {  useMeQuery } from "../../graphql/generated/graphql"
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page"
import { withApollo } from "../../lib/withApollo"

function Home({ data }) {
    const { user } = useUser()

    // Query pelo client side
    //const { data, loading, error } = useGetProductsQuery()
    const { data: me } = useMeQuery()
    
    return (
        <div>
            <h1>Hello World</h1>
            <br />

            <h2>Courses:</h2>
            <pre>
                {JSON.stringify(me, null, 2)}
            </pre>
            <br />

            <h2>User's info:</h2>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async (ctx) => {
        // Query pelo server side
        //return getServerPageGetProducts({}, ctx)

        return {
            props: {}
        }
    }
})
export default withApollo(
    ssrGetProducts.withPage()(Home)
)