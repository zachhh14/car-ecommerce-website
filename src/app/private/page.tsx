
import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server'

export default async function PrivatePage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        redirect('/login')
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.error(error)
        }
    }

    return (
        <>
            <p>Hello {data?.user?.email}</p>
            {/* <button onClick={signOut}>Sign out</button> */}
        </>
    )
}
