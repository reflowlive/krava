$(document).keypress(function (event) {
  if (event.which === "13") {
    event.preventDefault();
  }
});

let productParent = $(".product-parent-wrapper");
let k1Parent = $(".k1-parent-wrapper");
let k1plusParent = $(".k1plus-parent-wrapper");
let k1proParent = $(".k1pro-parent-wrapper");
let productTitle = $(".product-title-wrapper");
let productTitleMobile = $(".product-title-mobile-wrapper");
let wrapperText = $("[text-data=wrapper-text]");
let productPrice = $("#product-price");
let k1Success = k1Parent.find(".success-text");
let k1plusSuccess = k1plusParent.find(".success-text");
const blContact = $("[bl-data=contact]");
const blK1 = $("[bl-data=k1]");
const blK1plus = $("[bl-data=k1plus]");
const blK1pro = $("[bl-data=k1pro]");
const blK1agreement = $("[bl-data=k1-agreement]");
const blK1contact = $("[bl-data=k1-contact]");
const blK1option = $("[bl-data=k1-option]");
const blK1plusagreement = $("[bl-data=k1plus-agreement]");
const blK1pluscontact = $("[bl-data=k1plus-contact]");
const blK1plusoption = $("[bl-data=k1plus-option]");
const blK1proagreement = $("[bl-data=k1pro-agreement]");

function updateAndRedirect(button) {
  button.onclick = null; // Remove the initial onclick function
  setTimeout(function () {
    window.location.href = "https://buy.stripe.com/00g5mO9Wy1KOfew6op";
  }, 2000);
}

$("#contact-button").on("click", function () {
  productParent.addClass("hide");
  $(".product-contact-wrapper").removeClass("hide");
  productTitle.removeClass("hide");
  productTitleMobile.removeClass("hide");
  wrapperText.text("Schedule a Call");
  productPrice.text("$30,000 reserved by a $250 deposit");
  blContact.removeClass("hide");
});

blContact.on("click", function () {
  productParent.removeClass("hide");
  $(".product-contact-wrapper").addClass("hide");
  productTitle.addClass("hide");
  productTitleMobile.addClass("hide");
  wrapperText.text("Reserve your K1");
  productPrice.text("Starting at $30,000");
  $(this).addClass("hide");
});

$("#k1-button").on("click", function () {
  productParent.addClass("hide");
  k1Parent.removeClass("hide");
  productTitle.removeClass("hide");
  productTitleMobile.removeClass("hide");
  wrapperText.text("Reserve your K1");
  productPrice.text("$30,000 reserved by a $250 deposit");
  blK1.removeClass("hide");
});

blK1.on("click", function () {
  productParent.removeClass("hide");
  k1Parent.addClass("hide");
  productTitle.addClass("hide");
  productTitleMobile.addClass("hide");
  wrapperText.text("Reserve your K1");
  productPrice.text("Starting at $30,000");
  $(this).addClass("hide");
});

$("#k1plus-button").on("click", function () {
  productParent.addClass("hide");
  k1plusParent.removeClass("hide");
  productTitle.removeClass("hide");
  productTitleMobile.removeClass("hide");
  wrapperText.text("Reserve your K1+");
  productPrice.text("$35,000 reserved by a $250 deposit");
  $("#product-title").text("Reserve K1+");
  blK1plus.removeClass("hide");
});

blK1plus.on("click", function () {
  productParent.removeClass("hide");
  k1plusParent.addClass("hide");
  productTitle.addClass("hide");
  productTitleMobile.addClass("hide");
  wrapperText.text("Reserve your K1");
  productPrice.text("Starting at $30,000");
  $("#product-title").text("Reserve K1");
  $(this).addClass("hide");
});

$("#k1pro-button").on("click", function () {
  productParent.addClass("hide");
  k1proParent.removeClass("hide");
  productTitle.removeClass("hide");
  productTitleMobile.removeClass("hide");
  wrapperText.text("Reserve your K1 Pro");
  productPrice.text("Contact for Pricing");
  $("#product-title").text("Reserve K1 Pro");
  blK1pro.removeClass("hide");
});

blK1pro.on("click", function () {
  productParent.removeClass("hide");
  k1proParent.addClass("hide");
  productTitle.addClass("hide");
  productTitleMobile.addClass("hide");
  wrapperText.text("Reserve your K1");
  productPrice.text("Starting at $30,000");
  $("#product-title").text("Reserve K1");
  $(this).addClass("hide");
});

//Contact Us Form//

$(".product-contact-wrapper")
  .find(".order-form-input")
  .on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("border-color", "");
    } else {
      $(this).css("border-color", "red");
    }
  });

$(".product-contact-wrapper")
  .find(".order-submit-button")
  .on("click", function () {
    var wrapper = $(".product-contact-wrapper");
    var allInputsFilled = true;

    wrapper.find(".order-form-input").each(function () {
      if ($(this).val().trim() === "") {
        $(this).css("border-color", "red");
        allInputsFilled = false;
      } else {
        $(this).css("border-color", ""); // Reset border color if input is not empty
      }
    });

    if (!allInputsFilled) {
      event.preventDefault();
    } else {
      $(".back-link-wrapper").addClass("hide");
    }
  });

//K1 Form//

// K1 Agreement

$(".k1-agreement-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    $(".k1-agreement-wrapper").addClass("hide");
    $(".k1-contact-wrapper").removeClass("hide");
    blK1.addClass("hide");
    blK1agreement.removeClass("hide");
  });

blK1agreement.on("click", function () {
  $(".k1-agreement-wrapper").removeClass("hide");
  $(".k1-contact-wrapper").addClass("hide");
  blK1.removeClass("hide");
  $(this).addClass("hide");
});

//K1 Contact

$(".k1-contact-wrapper")
  .find(".order-form-input")
  .on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("border-color", "");
    } else {
      $(this).css("border-color", "red");
    }
  });

$(".k1-contact-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    var wrapper = $(".k1-contact-wrapper");
    var allInputsFilled = true;

    blK1agreement.addClass("hide");
    blK1contact.removeClass("hide");

    wrapper.find(".order-form-input").each(function () {
      if ($(this).val().trim() === "") {
        $(this).css("border-color", "red");
        allInputsFilled = false;
      } else {
        $(this).css("border-color", ""); // Reset border color if input is not empty
      }
    });

    if (allInputsFilled) {
      $(".k1-contact-wrapper").addClass("hide");
      $(".k1-option-wrapper").removeClass("hide");
    }
  });

blK1contact.on("click", function () {
  $(".k1-contact-wrapper").removeClass("hide");
  $(".k1-option-wrapper").addClass("hide");
  $(this).addClass("hide");
  blK1agreement.removeClass("hide");
});

//K1 Option

$(".k1-option-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    var $radioButtons = $(".k1-option-wrapper").find("input[type='radio']");
    var checkedCount = $radioButtons.filter(":checked").length;
    var $errorLine = $(".k1-option-wrapper").find(".error-line");

    blK1contact.addClass("hide");
    blK1option.removeClass("hide");

    if (checkedCount < 3) {
      $errorLine.show();
    } else {
      $errorLine.hide();
      $(".k1-option-wrapper").addClass("hide");
      $(".k1-address-wrapper").removeClass("hide");
    }
  });

blK1option.on("click", function () {
  $(".k1-option-wrapper").removeClass("hide");
  $(".k1-address-wrapper").addClass("hide");
  $(this).addClass("hide");
  blK1contact.removeClass("hide");
});

$(".k1-option-wrapper input[type='radio']").on("change", function () {
  var $radioButtons = $(".k1-option-wrapper").find("input[type='radio']");
  var checkedCount = $radioButtons.filter(":checked").length;

  var $errorLine = $(this).closest(".k1-option-wrapper").find(".error-line");

  if (checkedCount >= 3) {
    $errorLine.hide();
  }
});

//K1 Address

$(".k1-address-wrapper")
  .find(".order-form-input")
  .not("#k1-apartment")
  .on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("border-color", "");
    } else {
      $(this).css("border-color", "red");
    }
  });

k1Parent.find(".order-submit-button").on("click", function (event) {
  var wrapper = $(".k1-address-wrapper");
  var hoaValue = $(".k1-option-wrapper")
    .find('input[name="HOA-Consent"]:checked')
    .val();
  var buyerValue = $(".k1-option-wrapper")
    .find('input[name="Buyer-Type"]:checked')
    .val();
  var allInputsFilled = true;
  var stateInput = $(".k1-address-wrapper").find("#k1stateInput").val();
  var stateValue = stateInput.toUpperCase();

  wrapper
    .find(".order-form-input")
    .not("#k1-apartment")
    .each(function () {
      if ($(this).val().trim() === "") {
        $(this).css("border-color", "red");
        allInputsFilled = false;
      } else {
        $(this).css("border-color", ""); // Reset border color if input is not empty
      }
    });

  if (!allInputsFilled) {
    event.preventDefault();
  } else {
    if (hoaValue === "Yes" && buyerValue === "Home Owner") {
      if (stateValue === "TX" || stateValue === "TEXAS") {
        var button = k1Parent.find(".order-submit-button"); // Store the reference to the button element
        updateAndRedirect(button); // Call the function to update and redirect
        k1Success.text("Thank you. You will now be re-routed to the deposit");
        $(".back-link-wrapper").addClass("hide");
      } else {
        k1Success.text(
          "We will reach out to you when Krava is available in your state. Thanks!"
        );
        $(".back-link-wrapper").addClass("hide");
      }
    } else {
      if (!(hoaValue === "yes")) {
        k1Success.text("Thank You! Please come back after HOA Approval");
      }
      if (!(buyerValue === "Home Owner")) {
        k1Success.text("Thank You! We are only delivering to Home Owners");
      }

      $(".back-link-wrapper").addClass("hide");
    }
  }
});

//K1+ Form

//K1+ Agreement

$(".k1plus-agreement-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    $(".k1plus-agreement-wrapper").addClass("hide");
    $(".k1plus-contact-wrapper").removeClass("hide");
    blK1plus.addClass("hide");
    blK1plusagreement.removeClass("hide");
  });

blK1plusagreement.on("click", function () {
  $(".k1plus-agreement-wrapper").removeClass("hide");
  $(".k1plus-contact-wrapper").addClass("hide");
  blK1plus.removeClass("hide");
  $(this).addClass("hide");
});

//K1+ Contact

$(".k1plus-contact-wrapper")
  .find(".order-form-input")
  .on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("border-color", "");
    } else {
      $(this).css("border-color", "red");
    }
  });

$(".k1plus-contact-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    var wrapper = $(".k1plus-contact-wrapper");
    var allInputsFilled = true;

    blK1plusagreement.addClass("hide");
    blK1pluscontact.removeClass("hide");

    wrapper.find(".order-form-input").each(function () {
      if ($(this).val().trim() === "") {
        $(this).css("border-color", "red");
        allInputsFilled = false;
      } else {
        $(this).css("border-color", ""); // Reset border color if input is not empty
      }
    });

    if (allInputsFilled) {
      $(".k1plus-contact-wrapper").addClass("hide");
      $(".k1plus-option-wrapper").removeClass("hide");
    }
  });

blK1pluscontact.on("click", function () {
  $(".k1plus-contact-wrapper").removeClass("hide");
  $(".k1plus-option-wrapper").addClass("hide");
  $(this).addClass("hide");
  blK1plusagreement.removeClass("hide");
});

//K1+ Option

$(".k1plus-option-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    var $radioButtons = $(".k1plus-option-wrapper").find("input[type='radio']");
    var checkedCount = $radioButtons.filter(":checked").length;
    var $errorLine = $(".k1plus-option-wrapper").find(".error-line");

    blK1pluscontact.addClass("hide");
    blK1plusoption.removeClass("hide");

    if (checkedCount < 3) {
      $errorLine.show();
    } else {
      $errorLine.hide();
      $(".k1plus-option-wrapper").addClass("hide");
      $(".k1plus-address-wrapper").removeClass("hide");
    }
  });

blK1plusoption.on("click", function () {
  $(".k1plus-option-wrapper").removeClass("hide");
  $(".k1plus-address-wrapper").addClass("hide");
  $(this).addClass("hide");
  blK1pluscontact.removeClass("hide");
});

$(".k1plus-option-wrapper input[type='radio']").on("change", function () {
  var $radioButtons = $(".k1plus-option-wrapper").find("input[type='radio']");
  var checkedCount = $radioButtons.filter(":checked").length;

  var $errorLine = $(this)
    .closest(".k1plus-option-wrapper")
    .find(".error-line");

  if (checkedCount >= 3) {
    $errorLine.hide();
  }
});

//K1+ Address

$(".k1plus-address-wrapper")
  .find(".order-form-input")
  .not("#k1plus-apartment")
  .on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("border-color", "");
    } else {
      $(this).css("border-color", "red");
    }
  });

k1plusParent.find(".order-submit-button").on("click", function (event) {
  var wrapper = $(".k1plus-address-wrapper");
  var hoaValue = $(".k1plus-option-wrapper")
    .find('input[name="HOA-Consent"]:checked')
    .val();
  var buyerValue = $(".k1plus-option-wrapper")
    .find('input[name="Buyer-Type"]:checked')
    .val();
  var allInputsFilled = true;
  var stateInput = $(".k1plus-address-wrapper").find("#k1plusStateInput").val();
  var stateValue = stateInput.toUpperCase();

  wrapper
    .find(".order-form-input")
    .not("#k1plus-apartment")
    .each(function () {
      if ($(this).val().trim() === "") {
        $(this).css("border-color", "red");
        allInputsFilled = false;
      } else {
        $(this).css("border-color", ""); // Reset border color if input is not empty
      }
    });

  if (!allInputsFilled) {
    event.preventDefault();
  } else {
    if (hoaValue === "Yes" && buyerValue === "Home Owner") {
      if (stateValue === "TX" || stateValue === "TEXAS") {
        var button = k1plusParent.find(".order-submit-button"); // Store the reference to the button element
        updateAndRedirect(button); // Call the function to update and redirect
        k1plusSuccess.text(
          "Thank you. You will now be re-routed to the deposit"
        );
        $(".back-link-wrapper").addClass("hide");
      } else {
        k1plusSuccess.text(
          "We will reach out to you when Krava is available in your state. Thanks!"
        );
        $(".back-link-wrapper").addClass("hide");
      }
    } else {
      if (!(hoaValue === "yes")) {
        k1plusSuccess.text("Thank You! Please come back after HOA Approval");
      }
      if (!(buyerValue === "Home Owner")) {
        k1plusSuccess.text("Thank You! We are only delivering to Home Owners");
      }
      $(".back-link-wrapper").addClass("hide");
    }
  }
});
//
//
//K1 Pro Form

//K1 Pro Agreement

$(".k1pro-agreement-wrapper")
  .find(".order-next-button")
  .on("click", function () {
    $(".k1pro-agreement-wrapper").addClass("hide");
    $(".k1pro-contact-wrapper").removeClass("hide");
    blK1pro.addClass("hide");
    blK1proagreement.removeClass("hide");
  });

//K1 Pro Contact

$(".k1pro-contact-wrapper")
  .find(".order-form-input")
  .on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("border-color", "");
    } else {
      $(this).css("border-color", "red");
    }
  });

blK1proagreement.on("click", function () {
  $(".k1pro-agreement-wrapper").removeClass("hide");
  $(".k1pro-contact-wrapper").addClass("hide");
  blK1pro.removeClass("hide");
  $(this).addClass("hide");
});

$(".k1pro-contact-wrapper")
  .find(".order-submit-button")
  .on("click", function () {
    var wrapper = $(".k1pro-contact-wrapper");
    var allInputsFilled = true;

    wrapper.find(".order-form-input").each(function () {
      if ($(this).val().trim() === "") {
        $(this).css("border-color", "red");
        allInputsFilled = false;
      } else {
        $(this).css("border-color", ""); // Reset border color if input is not empty
      }
    });

    if (!allInputsFilled) {
      event.preventDefault();
    } else {
      $(".back-link-wrapper").addClass("hide");
    }
  });
