// export const generateXPostText = (path: string, text: string) => {
//   const url = new URL('https://x.com/intent/tweet');
//   url.searchParams.set('url', path);
//   url.searchParams.set('text', text);
//   return url.toString();
// };

export const generateWhatsAppShareText = (path: string, text: string) => {
  const url = new URL('https://wa.me/');
  const message = `${text} ${path}`;
  url.searchParams.set('text', message);
  return `${url.toString()}?text=${encodeURIComponent(message)}`;
};
