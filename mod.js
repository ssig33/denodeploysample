addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(
      JSON.stringify({
        url: event.request.url,
        method: event.request.method,
        proto: event.request.proto,
      }),
      { headers: { "Content-Type": "application.json" } }
    )
  );
});
