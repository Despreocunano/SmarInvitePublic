export default async (request, context) => {
  const country = context.geo?.country?.code;

  // Solo redirige si está en la home principal
  if (new URL(request.url).pathname === '/') {
    if (country === 'PA') {
      // Panamá
      return Response.redirect(new URL('/pa', request.url), 302);
    }
    if (country === 'CL') {
      // Chile (redirige a dominio externo)
      return Response.redirect('https://tuparte.digital', 302);
    }
    // Puedes agregar más países aquí si lo necesitas
  }

  // Si no hay redirección, sigue con la petición normal
  return context.next();
}; 