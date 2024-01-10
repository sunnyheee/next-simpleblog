import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const res = await fetch("/api/contact", {
    method: "POST", // HTTP POST methodを使ってサーバーにデータを転送します。
    body: JSON.stringify(email), // email objectをJSONに変換してbodyに入れます。
    headers: {
      "Content-Type": "applicatioin/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "fail server request");
  }

  return data;
}
