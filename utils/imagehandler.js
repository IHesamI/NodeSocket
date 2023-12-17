function imghandler() {
  function emailToRGB(email) {
    // Initialize RGB values
    let r = 0;
    let g = 0;
    let b = 0;

    // Loop through each character in the email and calculate RGB values
    for (let i = 0; i < email.length; i++) {
      const charCode = email.charCodeAt(i);

      // Distribute the character code into RGB channels
      r = (r + charCode) % 256;
      g = (g + charCode * 2) % 256;
      b = (b + charCode * 3) % 256;
    }

    return { r, g, b };
  }
  return { emailToRGB };
}
const imgHandler = imghandler();

module.require = imgHandler;
