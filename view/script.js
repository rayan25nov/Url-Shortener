// Get the elements from the document
const urlInput = document.getElementById("url-input");
const urlButton = document.getElementById("url-button");
const urlResult = document.getElementById("url-result");
const copyButton = document.getElementById("copy-button");
const popup = document.getElementById("popup");

// Add an event listener to the form for form submission
const inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  shortenUrl();
});

// Define a function to shorten the URL
const shortenUrl = async () => {
  // Disable the button and clear the result
  urlButton.disabled = true;
  urlResult.textContent = "";
  // Get the long URL from the input
  const longUrl = urlInput.value;
  // Check if the input is a valid URL
  if (isValidUrl(longUrl)) {
    try {
      const response = await fetch("/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        const shortCode = data.shortUrl.shortCode;
        urlResult.textContent = window.location.origin + "/url/" + shortCode;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      urlResult.textContent = error.message;
    } finally {
      // Enable the button
      urlButton.disabled = false;
    }
  } else {
    // Display an invalid URL message in the result
    urlResult.textContent = "Please enter a valid URL";
    // Enable the button
    urlButton.disabled = false;
  }
};

// Define a function to check if a string is a valid URL
function isValidUrl(string) {
  try {
    // Create a new URL object from the string
    new URL(string);
    // Return true if no error is thrown
    return true;
  } catch (_) {
    // Return false if an error is thrown
    return false;
  }
}

// Define a function to copy the result to the clipboard
const copyToClipboard = () => {
  // Create a temporary input element
  const tempInput = document.createElement("input");
  tempInput.value = urlResult.textContent;

  // Append the input element to the DOM
  document.body.appendChild(tempInput);

  // Select the text within the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Show the popup
  popup.style.display = "block";

  // Set a timeout to hide the popup after a few seconds (adjust the duration as needed)
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000); // 3000 milliseconds (3 seconds) in this example
};

// Add an event listener to the "Copy to Clipboard" button
copyButton.addEventListener("click", copyToClipboard);

// Define a function to toggle the theme
function toggleTheme(theme) {
  // Get the root element of the document
  const root = document.documentElement;

  // Check the requested theme and toggle the "data-theme" attribute
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
}
