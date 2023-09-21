# Cloudflare Workers CDN Script

## Getting Started

To use this CDN script, follow these steps:

1. **Create a Cloudflare Account**: If you don't have a Cloudflare account yet, [sign up for Cloudflare](https://www.cloudflare.com/) and create an account.

2. **Enable Cloudflare Workers**: You may need to enable Cloudflare Workers for your account. Once enabled, you can access the Workers section.

3. **Create a Worker Script**:
   - Go to the Cloudflare Workers interface.
   - Create a new Worker and give it a name.
   - Upload and process the necessary resources, if you developed your CDN script using the "hono" package.

4. **Script Configuration**:
   - Add explanatory comments to your script to describe its logic and customizable parameters.
   - Customize your script to configure the resources you want to cache and define cache rules.

5. **Activate the Worker**:
   - When your Worker script is ready, activate it and assign it to the desired domain names.

## Setup

### 1. Download Packages
```bash
npm i -g wrangler
# then
npm i
```

### 2. Update the `wrangler.toml`

```toml
name = "<YOUR-WORKERS-NAME>"
```

### 3. Run the template
```
npm install
npm run dev
```

### 4. Deploy to Cloudflare Workers
```
npm run deploy
```

- Enter your workers name to `name = "<>"` place.

## Example Usage for Get Image From GitHub

Here's an example of how to use the CDN script to serve resources like CSS, JavaScript, or image files:

```javascript
app.get('/images/:image', async (c) => {
    const { image } = c.req.param();
    c.header('Content-Type', 'image/jpeg');

    const response = await fetch(`https://avatars.githubusercontent.com/u/${image}`);

    if (response.status !== 200) {
        return c.status(response.status);
    } else {
        return c.body(response.body);
    }
});
```

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

