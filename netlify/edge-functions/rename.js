export default async (request, context) => {
    const response = await context.next();
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
          return response;
        }
    const html = await response.text();
    const modified = html.replaceAll("\u8CC7\u6750\u7BA1\u7406", "\u7D0D\u54C1\u7BA1\u7406");
    return new Response(modified, {
          status: response.status,
          headers: response.headers,
        });
  };

export const config = {
    path: "/*",
  };
