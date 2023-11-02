import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession()
  console.log('app session', session?.user.id)
  if (!session) throw redirect(307, '/login')
}