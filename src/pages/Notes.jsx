import React, { useState } from "react";
import axios from "axios";
import "../styles/features.css";

const notesData = [
  { title: "React Official Docs", file: "https://react.dev/learn" },
  { title: "Python Machine Learning Guide", file: "https://scikit-learn.org/stable/tutorial/index.html" },
  { title: "NodeJS Handbook", file: "https://nodejs.org/static/documents/Node.js%20Handbook.pdf" },
  { title: "Database Design Basics", file: "https://www3.ntu.edu.sg/home/ehchua/programming/sql/Relational_Database_Design.pdf" },
  { title: "JavaScript ES6 Guide", file: "https://exploringjs.com/es6/ES6-en.pdf" },
  { title: "Data Structures Notes", file: "https://web.stanford.edu/class/archive/cs/cs166/cs166.1206/lectures/01/Small01.pdf" },
];

function Notes() {
  const [notes] = useState(notesData);
  const [loading, setLoading] = useState(false);

  const downloadFile = async (url, filename) => {
    try {
      setLoading(true);

      if (url.endsWith(".pdf")) {
        // Direct PDF download
        const res = await fetch(url);
        const blob = await res.blob();
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        window.URL.revokeObjectURL(link.href);
      } else {
        // 1️⃣ Fetch HTML page
        const res = await fetch(url);
        const htmlText = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");
        doc.querySelectorAll("script, iframe, style, noscript, link[rel='stylesheet']").forEach(el => el.remove());
        const content = doc.querySelector("main") || doc.body;
        const plainText = content.innerText || content.textContent;

        // 2️⃣ Summarize using OpenAI API
        const openAiApiKey = "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";

        const summaryRes = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              { role: "system", content: "You are a summarization assistant." },
              { role: "user", content: `Summarize the following content in concise paragraphs:\n\n${plainText}` }
            ],
            max_tokens: 500
          },
          { headers: { "Authorization": `Bearer ${openAiApiKey}` } }
        );

        const summary = summaryRes.data.choices[0].message.content;

        // 3️⃣ Send summary to PDF.co API to generate PDF
        const pdfCoApiKey = "greeshmaasish@gmail.com_rD1tRcH2wJe8edir4CzHtpCQWfMmRGf9qVJWxDC4qCgqfPnkATHfQI7gek8I1Iui";

        const pdfResponse = await axios.post(
          "https://api.pdf.co/v1/pdf/convert/from/html",
          { html: `<h2>${filename} - Summary</h2><p>${summary.replace(/\n/g, "<br>")}</p>` },
          { headers: { "x-api-key": pdfCoApiKey } }
        );

        const pdfUrl = pdfResponse.data.url;

        // 4️⃣ Trigger download
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = filename;
        link.click();
      }
    } catch (err) {
      console.error(err);
      alert("Failed to generate summary PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="features-page">
      <h1>📝 Notes Sharing</h1>

      {/* Spinner */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
          <span style={{ marginLeft: "10px", fontWeight: "bold", color: "#2563eb" }}>
            Generating summary PDF...
          </span>
        </div>
      )}

      <div className="features-grid">
        {notes.map((n, idx) => (
          <div key={idx} className="feature-card">
            <h3>{n.title}</h3>
            {/* Preview button opens in a new tab */}
            <a href={n.file} target="_blank" rel="noopener noreferrer">
              <button style={{ marginRight: "10px", backgroundColor: "#3b82f6" }}>
                Preview
              </button>
            </a>
            {/* Download button */}
            <button
              style={{ backgroundColor: "#10b981" }}
              onClick={() => downloadFile(n.file, n.title + ".pdf")}
              disabled={loading}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
