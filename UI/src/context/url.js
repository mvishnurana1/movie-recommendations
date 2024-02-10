let url = '';

if (process.env.NODE_ENV === 'production') {
    url = 'http://http://71.19.144.157:3002';
} else {
    url = 'http://localhost:3002';
}

export { url };
