export default async function handler(req, res) {
  const SUPABASE_ORIGIN = 'https://nrxuvdkoacfycbvursne.supabase.co';

  try {
    const url = new URL(req.url, 'https://proxy.local');

    let path = url.pathname.replace(/^\/api\/proxy/, '');

    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    const upstreamUrl = SUPABASE_ORIGIN + path + url.search;

    const headers = { ...req.headers };
    delete headers.host;
    delete headers['content-length'];

    const options = {
      method: req.method,
      headers,
    };

    if (!['GET', 'HEAD'].includes(req.method)) {
      options.body =
        typeof req.body === 'string'
          ? req.body
          : JSON.stringify(req.body || {});
    }

    const response = await fetch(upstreamUrl, options);

    const text = await response.text();

    res.status(response.status);

    response.headers.forEach((value, key) => {
      if (
        key.toLowerCase() !== 'content-encoding' &&
        key.toLowerCase() !== 'content-length'
      ) {
        res.setHeader(key, value);
      }
    });

    res.send(text);
  } catch (error) {
    res.status(500).json({
      error: 'proxy_error',
      message: String(error),
    });
  }
}
