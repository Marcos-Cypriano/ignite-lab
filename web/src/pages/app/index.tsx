import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useGetProductsQuery } from "../../graphql/generated/graphql"
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page"
import { withApollo } from "../../lib/withApollo"

function Home({ data }) {
    const { user } = useUser()

    // Query pelo client side
    //const { data, loading, error } = useGetProductsQuery()

    return (
        <div>
            <h1>Hello World</h1>
            <br />

            <h2>Courses:</h2>
            <pre>
                {JSON.stringify(data.products, null, 2)}
            </pre>
            <br />

            <h2>User's info:</h2>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

// Query pelo server side
export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async (ctx) => {
        return getServerPageGetProducts({}, ctx)
    }
})
export default withApollo(
    ssrGetProducts.withPage()(Home)
)