export default async (request, context) => {
  const country = context.geo?.country?.code;
  const cookies = request.headers.get('cookie') || '';
  const hasCountryPref = cookies.includes('countryPref=');

  if (!hasCountryPref && new URL(request.url).pathname === '/') {
    if (country === 'PA') {
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/pa',
          'Set-Cookie': 'countryPref=pa; Path=/; Max-Age=31536000'
        }
      });
    }
    if (country === 'CL') {
      return new Response(null, {
        status: 302,
        headers: {
          Location: 'https://tuparte.digital',
          'Set-Cookie': 'countryPref=cl; Path=/; Max-Age=31536000'
        }
      });
    }    if (country === 'MX') {
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/mx',
          'Set-Cookie': 'countryPref=mx; Path=/; Max-Age=31536000'
        }
      });
    }
    
    // Puedes agregar más países aquí si lo necesitas
  }

  return context.next();
}; 