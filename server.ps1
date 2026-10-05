param(
    [int]$Port = 8080,
    [string]$Root = $PSScriptRoot
)

if (-not $Root) {
    $Root = (Get-Location).Path
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".webp" = "image/webp"
    ".gif"  = "image/gif"
    ".ico"  = "image/x-icon"
    ".woff2"= "font/woff2"
    ".woff" = "font/woff"
    ".ttf"  = "font/ttf"
}

$prefix = "http://localhost:$Port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    # If 8080 is busy, try 8081
    $Port = 8081
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  LUMIFLOWER LOCALHOST WEB SERVER" -ForegroundColor Green
Write-Host "  Dia chi: $prefix" -ForegroundColor Yellow
Write-Host "  Thu muc: $Root" -ForegroundColor Gray
Write-Host "  Website phi thuong mai - LumiFlower Sky Garden" -ForegroundColor Gray
Write-Host "  Nhan Ctrl + C de dung server" -ForegroundColor DarkGray
Write-Host "==========================================================" -ForegroundColor Cyan

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        # Strip query string for local file resolution
        $pathOnly = $rawUrl.Split('?')[0]
        if ($pathOnly -eq "/" -or $pathOnly -eq "") {
            $pathOnly = "/index.html"
        }

        # Convert URL path to file system path
        $relativePath = $pathOnly.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $fullPath = [System.IO.Path]::Combine($Root, $relativePath)

        # Basic security check: ensure request stays within $Root
        $normalizedFullPath = [System.IO.Path]::GetFullPath($fullPath)
        $normalizedRoot = [System.IO.Path]::GetFullPath($Root)

        if (-not $normalizedFullPath.StartsWith($normalizedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
            $response.StatusCode = 403
            $msg = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
            $response.OutputStream.Write($msg, 0, $msg.Length)
            $response.Close()
            continue
        }

        if (Test-Path $normalizedFullPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($normalizedFullPath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $contentType
            $response.StatusCode = 200

            # CORS & Cache headers for smooth local dev
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")

            $bytes = [System.IO.File]::ReadAllBytes($normalizedFullPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $response.ContentType = "text/html; charset=utf-8"
            $notFoundHtml = "<html><head><meta charset='utf-8'><title>404 - Khong tim thay</title></head><body style='font-family:sans-serif;text-align:center;padding:50px;'><h2>404 - Khong tim thay tep tin</h2><p><a href='/'>Tro ve Trang chu LumiFlower</a></p></body></html>"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($notFoundHtml)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }

        $response.Close()
    } catch {
        # Handle client abort or shutdown
    }
}
