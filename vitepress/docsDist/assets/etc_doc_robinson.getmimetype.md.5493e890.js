import{_ as o,o as s,c as a,Q as p}from"./chunks/framework.a333c6fb.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.getmimetype.md","filePath":"etc/doc/robinson.getmimetype.md"}'),t={name:"etc/doc/robinson.getmimetype.md"},n=p('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.getmimetype.html">getMimeType</a></p><h2 id="getmimetype-function" tabindex="-1">getMimeType() function <a class="header-anchor" href="#getmimetype-function" aria-label="Permalink to &quot;getMimeType() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>获取文件的MIME类型</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getMimeType</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">suffix</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/aac&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-abiword&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/apng&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-freearc&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/avif&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/x-msvideo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.amazon.ebook&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/octet-stream&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/bmp&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-bzip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-bzip2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-cdf&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-csh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;text/css&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;text/csv&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/msword&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.openxmlformats-officedocument.wordprocessingml.document&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.ms-fontobject&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/epub+zip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/gzip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/gif&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;text/html&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/x-icon&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;text/calendar&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/java-archive&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/jpeg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;text/javascript&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/ld+json&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/midi&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/mpeg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/mp4&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/mpeg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.apple.installer+xml&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.oasis.opendocument.presentation&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.oasis.opendocument.spreadsheet&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.oasis.opendocument.text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/ogg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/ogg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/ogg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/opus&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;font/otf&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-httpd-php&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/pdf&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.ms-powerpoint&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.openxmlformats-officedocument.presentationml.presentation&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.rar&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/rtf&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-sh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/svg+xml&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-shockwave-flash&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-tar&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/tiff&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/mp2t&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-font-ttf&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;text/plain&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.visio&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/wav&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;audio/webm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/webm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;image/webp&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;font/woff&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;font/woff2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/xhtml+xml&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.ms-excel&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/xml&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/vnd.mozilla.xul+xml&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/zip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/3gpp&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;video/32&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/x-7z-compressed&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">getMimeType</span><span style="color:#000000;">(</span><span style="color:#001080;">suffix</span><span style="color:#000000;">: </span><span style="color:#267F99;">String</span><span style="color:#000000;">): </span><span style="color:#A31515;">&quot;&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/aac&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-abiword&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/apng&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-freearc&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/avif&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/x-msvideo&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.amazon.ebook&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/octet-stream&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/bmp&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-bzip&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-bzip2&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-cdf&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-csh&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;text/css&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;text/csv&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/msword&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.openxmlformats-officedocument.wordprocessingml.document&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.ms-fontobject&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/epub+zip&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/gzip&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/gif&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;text/html&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/x-icon&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;text/calendar&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/java-archive&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/jpeg&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;text/javascript&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/json&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/ld+json&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/midi&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/mpeg&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/mp4&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/mpeg&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.apple.installer+xml&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.oasis.opendocument.presentation&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.oasis.opendocument.spreadsheet&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.oasis.opendocument.text&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/ogg&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/ogg&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/ogg&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/opus&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;font/otf&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/png&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-httpd-php&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/pdf&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.ms-powerpoint&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.openxmlformats-officedocument.presentationml.presentation&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.rar&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/rtf&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-sh&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/svg+xml&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-shockwave-flash&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-tar&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/tiff&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/mp2t&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-font-ttf&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;text/plain&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.visio&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/wav&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;audio/webm&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/webm&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;image/webp&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;font/woff&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;font/woff2&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/xhtml+xml&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.ms-excel&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/xml&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/vnd.mozilla.xul+xml&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/zip&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/3gpp&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;video/32&quot;</span><span style="color:#000000;"> | </span><span style="color:#A31515;">&quot;application/x-7z-compressed&quot;</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>suffix</td><td>String</td><td>文件扩展名</td></tr></tbody></table><p><strong>Returns:</strong></p><p>&quot;&quot; | &quot;audio/aac&quot; | &quot;application/x-abiword&quot; | &quot;image/apng&quot; | &quot;application/x-freearc&quot; | &quot;image/avif&quot; | &quot;video/x-msvideo&quot; | &quot;application/vnd.amazon.ebook&quot; | &quot;application/octet-stream&quot; | &quot;image/bmp&quot; | &quot;application/x-bzip&quot; | &quot;application/x-bzip2&quot; | &quot;application/x-cdf&quot; | &quot;application/x-csh&quot; | &quot;text/css&quot; | &quot;text/csv&quot; | &quot;application/msword&quot; | &quot;application/vnd.openxmlformats-officedocument.wordprocessingml.document&quot; | &quot;application/vnd.ms-fontobject&quot; | &quot;application/epub+zip&quot; | &quot;application/gzip&quot; | &quot;image/gif&quot; | &quot;text/html&quot; | &quot;image/x-icon&quot; | &quot;text/calendar&quot; | &quot;application/java-archive&quot; | &quot;image/jpeg&quot; | &quot;text/javascript&quot; | &quot;application/json&quot; | &quot;application/ld+json&quot; | &quot;audio/midi&quot; | &quot;audio/mpeg&quot; | &quot;video/mp4&quot; | &quot;video/mpeg&quot; | &quot;application/vnd.apple.installer+xml&quot; | &quot;application/vnd.oasis.opendocument.presentation&quot; | &quot;application/vnd.oasis.opendocument.spreadsheet&quot; | &quot;application/vnd.oasis.opendocument.text&quot; | &quot;audio/ogg&quot; | &quot;video/ogg&quot; | &quot;application/ogg&quot; | &quot;audio/opus&quot; | &quot;font/otf&quot; | &quot;image/png&quot; | &quot;application/x-httpd-php&quot; | &quot;application/pdf&quot; | &quot;application/vnd.ms-powerpoint&quot; | &quot;application/vnd.openxmlformats-officedocument.presentationml.presentation&quot; | &quot;application/vnd.rar&quot; | &quot;application/rtf&quot; | &quot;application/x-sh&quot; | &quot;image/svg+xml&quot; | &quot;application/x-shockwave-flash&quot; | &quot;application/x-tar&quot; | &quot;image/tiff&quot; | &quot;video/mp2t&quot; | &quot;application/x-font-ttf&quot; | &quot;text/plain&quot; | &quot;application/vnd.visio&quot; | &quot;audio/wav&quot; | &quot;audio/webm&quot; | &quot;video/webm&quot; | &quot;image/webp&quot; | &quot;font/woff&quot; | &quot;font/woff2&quot; | &quot;application/xhtml+xml&quot; | &quot;application/vnd.ms-excel&quot; | &quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot; | &quot;application/xml&quot; | &quot;application/vnd.mozilla.xul+xml&quot; | &quot;application/zip&quot; | &quot;video/3gpp&quot; | &quot;video/32&quot; | &quot;application/x-7z-compressed&quot;</p><p>对应的MIME类型字符串</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>getMimeType(&#39;jpg&#39;); // 返回 &#39;image/jpeg&#39; getMimeType(&#39;docx&#39;); //返回&#39;application/vnd.openxmlformats-officedocument.wordprocessingml.document&#39;</p>',13),l=[n];function e(c,r,E,u,i,y){return s(),a("div",null,l)}const d=o(t,[["render",e]]);export{F as __pageData,d as default};
