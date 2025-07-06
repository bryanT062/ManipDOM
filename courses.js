const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const liste = document.getElementById("listeCourses");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    liste.appendChild(li);
    input.value = "";
  }
});
