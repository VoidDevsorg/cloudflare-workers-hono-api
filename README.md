# Cloudflare Workers  [Hono](https://hono.dev) API Script

<br />
<br />

## Getting Started

To use this script, follow these steps:
<br />

- Create a Cloudflare Account:
  - If you don't have a Cloudflare account yet, [sign up for Cloudflare](https://www.cloudflare.com/) and create an account.

- Enable Cloudflare Workers:
  - You may need to enable Cloudflare Workers for your account. Once enabled, you can access the Workers section.

- Create a Worker Script:
   - Go to the Cloudflare Workers interface.
   - Create a new Worker and give it a name.

- Activate the Worker:
   - When your Worker script is ready, activate it and assign it to the desired domain names.

<br />
<br />

- Download Required Packages:

```bash
npm i -g wrangler
# then
npm i
```

- Update the wrangler.toml Configuration File:

```toml
name = "<YOUR-WORKERS-NAME>"
```
Replace `<YOUR-WORKERS-NAME>` in `name = "<>"` with your chosen worker's name.

- Run the Template:

```bash
npm run dev
```

- Deploy Your Worker to Cloudflare Workers:

```bash
npm run deploy
```

<br />
<br />

## Example Usage

```javascript
app.get('/user/:id', async (c) => {
    const { id } = c.req.param();
    c.header('Content-Type', 'application/json');

    return c.json({
        id
    });
});
```

<br />
<br />

## License

```md
MIT License

Copyright (c) 2023 Void Development

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

