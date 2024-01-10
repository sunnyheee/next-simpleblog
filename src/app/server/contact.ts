import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // API Route에 이메일 전송을 위한 요청을 보냄 (fetch)
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "applicatioin/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버 요청에 실패함");
  }

  return data;
}
