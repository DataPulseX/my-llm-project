async function main() {
  async function handleReCommand(event) {
    event.preventDefault();

    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#box").appendChild(spinner);

    const url = "https://valuable-abyssinian-iberis.glitch.me";
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
    spinner.remove();

    const { image, desc } = json;
    const box = document.querySelector("#box");
    const imageTag = document.createElement("img");
    imageTag.classList.add("img-fluid");
    imageTag.src = image;
    const descTag = document.createElement("p");
    descTag.textContent = desc;

    box.appendChild(imageTag);
    box.appendChild(descTag);
  }
  document.querySelector("#rcform").addEventListener("submit", handleReCommand);
}

document.addEventListener("DOMContentLoaded", main);
