import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { getSession, supabase } }) => {
  const session = await getSession()
  //console.log('admin session', session?.user.id)
  if (!session) throw redirect(307, '/login')

  return { session }
}

export const actions = {
  genlink: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    const { data, error } = await supabase.auth.admin.generateLink({
      type: 'magiclink',
      email
    })

    if (data.properties?.action_link) throw redirect(302, data.properties?.action_link)
    console.log(error)
  }
}