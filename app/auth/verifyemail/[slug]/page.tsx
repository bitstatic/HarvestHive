
'use client'

export default async function Page({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

  try {
    const res = await fetch('http://localhost:3000/api/users/verifyemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: params.slug,
      }),
    });

    const data = await res.json();
    console.log(data);

    // TODO - Redirect to login page
    
    // Tell the user that the email has been verified 🔥 
  } catch (error: any) {
    console.log(error.message)
  }
  
  return (
    <div>
      <h1>Verify Email </h1>
    </div>
  );
  
}



      