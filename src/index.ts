import { Hono } from 'hono';
const app = new Hono();

import uuid from './utils/uuid';
import hostId from './utils/hostId';

app.notFound((c) => {
    c.header('Content-Type', 'application/xml');

    return c.body(`<?xml version="1.0" encoding="UTF-8"?>
    <Error>
        <Code>AccessDenied</Code>
        <Message>Access Denied</Message>
        <Resource>${c.req.url}</Resource>
        <RequestId>${hostId()}</RequestId>
        <HostId>${uuid()}</HostId>
    </Error>`);
});


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

app.fire();

export default app;