const cardStates = document.querySelectorAll(".rating-card__state");
const selectedValue = document.querySelector(".rating-card__selected-value");
const errorMessage = document.createElement("p");
errorMessage.classList.add("errorMessage");
errorMessage.textContent = "Please, give us at least one star.";

const submitBtn = document.querySelector("#rating-card__submit");
submitBtn.addEventListener("click", (event) => {
	if (userChoice !== null) {
		cardStates.forEach((state) => {
			state.toggleAttribute("hidden");
		});
		selectedValue.textContent = userChoice;
	} else {
		event.target.after(errorMessage);
	}
});

const choices = document.querySelectorAll(".rating-card__choice");
let userChoice = null;
choices.forEach((choice) => {
	choice.addEventListener("click", (event) => {
		if (document.querySelector(".errorMessage") !== null) {
			errorMessage.remove();
		}
		choices.forEach((c) => {
			c.classList.remove("rating-card__choice--selected");
		});
		event.target.classList.add("rating-card__choice--selected");
		userChoice = event.target.textContent;
		console.log(userChoice);
	});
});
