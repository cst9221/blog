import { createClient } from '@/app/_utils/supabase/client';

const DefaultPage = async () => {
  const supabase = await createClient();
  const { data: posts } = await supabase.from("posts").select();

  return <pre>{JSON.stringify(posts, null, 2)}</pre>

  return (
    <>
      <div className="container mx-auto">
        어떤 내용이 들어가면 좋을까요?
      </div>
    </>
  )
}

export default DefaultPage
