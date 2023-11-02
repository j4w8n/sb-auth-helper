import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { getSession, supabase } }) => {
  const session = await getSession()
  //console.log('(auth) session', session?.user.id)
  if (!session) throw redirect(307, '/login')

  // let { data, error } = await supabase.from('pages').select('subdomain')

  // return {
  //   pages: data
  // }
  return { session: getSession() }
}