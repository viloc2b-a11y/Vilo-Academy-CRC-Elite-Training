import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserProfile } from "@/lib/progress/helpers";
import { getUserCertifications, getCertificationLevel } from "@/lib/certifications/helpers";

// ---------------------------------------------------------------------------
// GET /api/certifications/pdf?verificationId=VACRC-2026-XXXXX
// Returns an HTML page formatted as a certificate (print-to-PDF compatible)
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const verificationId = searchParams.get("verificationId");
  const userId = searchParams.get("userId");

  if (!verificationId) {
    return NextResponse.json({ error: "verificationId required" }, { status: 400 });
  }

  // If userId is provided, verify it matches the current user
  if (userId) {
    const user = await getCurrentUserProfile();
    if (!user || user.id !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // Fetch the certification
  const { verifyCertification } = await import("@/lib/certifications/helpers");
  const verification = await verifyCertification(verificationId);

  if (!verification.valid || !verification.certification) {
    return NextResponse.json({ error: "Invalid certification" }, { status: 404 });
  }

  const { certification } = verification;
  const levelMeta = [...Array.from(
    new Map(
      (await import("@/curriculum-engine")).CRC_CERTIFICATION_LEVELS.map(
        (l: { levelId: string; title: { en: string } }) => [l.levelId, l.title.en],
      ),
    ).entries(),
  )].find(([id]) => id === certification.level)?.[1] ?? certification.level;

  const issueDate = certification.issued_at
    ? new Date(certification.issued_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Certificate of Completion — Vilo Academy</title>
  <style>
    @page {
      size: letter landscape;
      margin: 0;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #1a1a2e;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #f8f9fa;
    }
    .certificate {
      width: 1000px;
      height: 700px;
      background: white;
      border: 12px solid #0d1b2a;
      padding: 40px 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    .certificate::before {
      content: '';
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      bottom: 12px;
      border: 2px solid #0d1b2a;
      pointer-events: none;
    }
    .seal {
      width: 80px;
      height: 80px;
      border: 3px solid #0d1b2a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin-bottom: 20px;
      background: #0d1b2a;
      color: #34d399;
    }
    h1 {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #34d399;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 28px;
      font-weight: bold;
      color: #0d1b2a;
      margin-bottom: 10px;
    }
    .presented {
      font-size: 14px;
      color: #64748b;
      margin-bottom: 8px;
    }
    .level {
      font-size: 22px;
      font-weight: bold;
      color: #0d1b2a;
      margin-bottom: 30px;
      padding: 8px 30px;
      border: 2px solid #0d1b2a;
      display: inline-block;
    }
    .details {
      display: flex;
      gap: 40px;
      margin-bottom: 30px;
      font-size: 13px;
      color: #475569;
    }
    .details span {
      font-weight: bold;
      color: #0d1b2a;
    }
    .id {
      font-family: monospace;
      font-size: 12px;
      color: #94a3b8;
      margin-bottom: 20px;
    }
    .footer {
      font-size: 10px;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .qr-placeholder {
      position: absolute;
      bottom: 40px;
      right: 60px;
      width: 70px;
      height: 70px;
      border: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      color: #94a3b8;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="seal">✦</div>
    <h1>Vilo Academy · CRC Elite Training</h1>
    <h2>Certificate of Completion</h2>
    <p class="presented">This is to certify that</p>
    <div class="level">${levelMeta}</div>
    <div class="details">
      <div>Issue date: <span>${issueDate}</span></div>
      <div>Version: <span>${certification.version}</span></div>
    </div>
    <p class="id">Verification: ${verificationId}</p>
    <p class="footer">Verify at /certification/verify/${verificationId}</p>
    <div class="qr-placeholder">QR</div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
