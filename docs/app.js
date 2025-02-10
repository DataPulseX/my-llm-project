async function main() {
  async function handleReCommand(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:3000/";
    const formData = new FormData(document.querySelector("#rcform"));
    const text = formData.get("text");

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    document.querySelector("#box").textContent = JSON.stringify(json);
  }
  document.querySelector("#rcform").addEventListener("submit", handleReCommand);
}

document.addEventListener("DOMContentLoaded", main);
