import { useSession } from "next-auth/react"
import Miniprofile from "./Miniprofile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggesstions from "./Suggesstions"

function Feed() {
    const { data: session} = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>
            {session && (
            <section className="hidden xl:inline-grid md:col-span-1">
                <div className="fixed top-20">
                    <Miniprofile />
                    <Suggesstions />
                </div>
            </section>
            )}
        </main>
    )
}

export default Feed
