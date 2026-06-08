import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
  "sales@wisdmlabs.com",
  "sales-lead@wisdmlabs.com",
  "csm@wisdmlabs.com",
  "sme@wisdmlabs.com",
  "helpdesk@wisdmlabs.com",
  "tariq.kotwal@wisdmlabs.com",
  "arunesh.parab@wisdmlabs.com",
  "shailesh.vishwakarma@wisdmlabs.com",
  "growth@wisdmlabs.com",
];

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, page } = await req.json();
    const countryCode = req.headers.get("x-vercel-ip-country") || "Unknown";
    const country = regionNames.of(countryCode) || countryCode;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "WisdmLabs Services <noreply@services.wisdmlabs.com>",
      to: RECIPIENTS,
      subject: `New Lead: ${name} from ${country}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a2e;">New Lead from Services Site</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${esc(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${esc(email)}">${esc(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Country</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${esc(country)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Page</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${esc(page)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px;">${esc(message)}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "email_failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Notify error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
