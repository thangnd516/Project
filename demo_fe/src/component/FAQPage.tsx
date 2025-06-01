
const FAQPage = () => {
  return (
    <div className="faq-container" style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      <header style={{ padding: "2rem", maxWidth: "960px", margin: "auto" }}>
        <nav><a href="#">Home</a> / <a href="#">FAQs</a></nav>
        <h1>FAQs</h1>
      </header>

      <section style={{ padding: "2rem", maxWidth: "960px", margin: "auto", display: "flex", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 300px" }}>
          <h2>Frequently Asked Question</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><strong>How can you help?</strong><br />Lorem ipsum dolor sit amet...</li>
            <li><strong>What is a return policy?</strong><br />Lorem ipsum dolor sit amet...</li>
            <li><strong>What payment methods do you accept?</strong><br />Lorem ipsum dolor sit amet...</li>
            <li><strong>Do you sell gift cards?</strong><br />Lorem ipsum dolor sit amet...</li>
          </ul>
        </div>
        <div style={{ flex: "1 1 300px", textAlign: "right" }}>
          <img src="https://via.placeholder.com/150" alt="FAQ Illustration" style={{ maxWidth: "100%" }} />
        </div>
      </section>

      <section style={{ padding: "2rem", maxWidth: "960px", margin: "auto", display: "flex", justifyContent: "space-between", textAlign: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ flex: "1 1 250px", padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
          <div>✅</div>
          <h3>Submit a task</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div style={{ flex: "1 1 250px", padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
          <div>💬</div>
          <h3>Send message</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div style={{ flex: "1 1 250px", padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
          <div>👤</div>
          <h3>Trusted experience</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>

      <section style={{ padding: "2rem", maxWidth: "960px", margin: "auto" }}>
        <p>FAQs use 3 of 10 slots</p>
        <h2>Display FAQ accordions</h2>
        <div style={{ border: "1px solid #ccc", borderRadius: "5px", margin: "2rem 0" }}>
          <details open style={{ borderTop: "1px solid #ccc", padding: "1rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Global search engine optimization</summary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </details>
          <details style={{ borderTop: "1px solid #ccc", padding: "1rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Complete Social Media Integration</summary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </details>
          <details style={{ borderTop: "1px solid #ccc", padding: "1rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>End-to-end encryption for messages</summary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
