var itemCounter = 0;
var termsCounter = 0;
var noteCounter = 0;
var totalInvoiceItems = 0;
var totalInvoiceAmount = 0;

function addItem() {
  var itemName = document.getElementById("itemName").value;
  var itemRate = document.getElementById("itemRate").value;
  var itemQty = document.getElementById("itemQty").value;
  var itemPrice = Number(document.getElementById("itemPrice").value);

  const table = document.getElementById("table-invoice-items");

  const id = "item" + itemCounter;
  const nameid = "name" + itemCounter;
  const rateid = "rate" + itemCounter;
  const qtyid = "qty" + itemCounter;
  const priceid = "price" + itemCounter;

  const newRow = document.createElement("tr");
  newRow.id = id;
  newRow.className = "bill-item";

  // Create and append the item name cell
  const itemNameCell = document.createElement("td");
  itemNameCell.id = nameid;
  itemNameCell.textContent = itemName;
  itemNameCell.setAttribute("onclick", `nameClickChange('${nameid}')`);
  newRow.appendChild(itemNameCell);

  // Create and append the rate cell
  const itemRateCell = document.createElement("td");
  itemRateCell.id = rateid;
  itemRateCell.textContent = itemRate;
  itemRateCell.setAttribute("onclick", `rateClickChange('${rateid}')`);
  newRow.appendChild(itemRateCell);

  // Create and append the quantity cell
  const qtyCell = document.createElement("td");
  qtyCell.id = qtyid;
  qtyCell.textContent = itemQty;
  qtyCell.setAttribute("onclick", `qtyClickChange('${qtyid}')`);
  newRow.appendChild(qtyCell);

  // Create and append the price cell
  const priceCell = document.createElement("td");
  priceCell.id = priceid;
  priceCell.textContent = itemPrice;
  priceCell.setAttribute("onclick", `priceClickChange('${priceid}')`);
  newRow.appendChild(priceCell);

  // Create and append the delete cell
  const deleteCell = document.createElement("td");
  deleteCell.className = "delete-ico-bill";
  const deleteSpan = document.createElement("span");
  deleteSpan.className = "text-danger";
  const deleteLink = document.createElement("a");
  deleteLink.href = `javascript:removeItemFromInvoice('${id}','${priceid}')`;
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "bi bi-trash-fill";
  deleteLink.appendChild(deleteIcon);
  deleteSpan.appendChild(deleteLink);
  deleteCell.appendChild(deleteSpan);
  newRow.appendChild(deleteCell);

  // Append the new row to the table body
  table.appendChild(newRow);

  itemCounter++;
  totalInvoiceItems++;
  totalInvoiceAmount = totalInvoiceAmount + itemPrice;

  document.getElementById("addItemModal-alert").textContent =
    itemName + " - added to invoice";
  document.getElementById("total-invoice-items").textContent =
    totalInvoiceItems;
  document.getElementById("total-invoice-amount").textContent =
    totalInvoiceAmount;
}

function nameClickChange(id) {
  var name = document.getElementById(id).textContent;
  var newName = prompt("Update - " + name, name);
  if (prompt != null && prompt != "") {
    document.getElementById(id).textContent = newName;
  }
}

function rateClickChange(id) {
  var rate = document.getElementById(id).textContent;
  var newRate = Number(prompt("Update - " + rate, rate));
  if (!isNaN(newRate)) {
    document.getElementById(id).textContent = newRate;
  }
}

function qtyClickChange(id) {
  var qty = document.getElementById(id).textContent;
  var newQty = Number(prompt("Update - " + qty, qty));
  if (!isNaN(newQty)) {
    document.getElementById(id).textContent = newQty;
  }
}

function priceClickChange(id) {
  var price = Number(document.getElementById(id).textContent);
  var newPrice = Number(prompt("Update - " + price, price));
  if (!isNaN(newPrice)) {
    document.getElementById(id).textContent = newPrice;
    totalInvoiceAmount = totalInvoiceAmount - price;
    totalInvoiceAmount = totalInvoiceAmount + newPrice;
    document.getElementById("total-invoice-amount").textContent =
      totalInvoiceAmount;
  }
}

function removeItemFromInvoice(id, priceid) {
  var price = Number(document.getElementById(priceid).textContent);
  totalInvoiceAmount = totalInvoiceAmount - price;
  totalInvoiceItems--;
  document.getElementById("total-invoice-items").textContent =
    totalInvoiceItems;
  document.getElementById("total-invoice-amount").textContent =
    totalInvoiceAmount;
  document.getElementById(id).remove();
}

function addMyself() {
  var company = document.getElementById("companyName").value;
  var name = document.getElementById("yourName").value;
  var ph = document.getElementById("yourPhone").value;
  var address = document.getElementById("yourAddress").value;
  var gst = document.getElementById("yourGST").value;

  if (company != "") {
    document.getElementById("seller-from-h").classList.remove("invisible");
    document.getElementById("seller-from").textContent = company;
  } else {
    document.getElementById("seller-from-h").classList.add("invisible");
    document.getElementById("seller-from").textContent = company;
  }

  if (name != "") {
    document.getElementById("seller-name-h").classList.remove("invisible");
    document.getElementById("seller-name").textContent = name;
  } else {
    document.getElementById("seller-name-h").classList.add("invisible");
    document.getElementById("seller-name").textContent = name;
  }

  if (ph != "") {
    document.getElementById("seller-phone-h").classList.remove("invisible");
    document.getElementById("seller-phone").textContent = ph;
  } else {
    document.getElementById("seller-phone-h").classList.add("invisible");
    document.getElementById("seller-phone").textContent = ph;
  }

  if (address != "") {
    document.getElementById("seller-address-h").classList.remove("invisible");
    document.getElementById("seller-address").textContent = address;
  } else {
    document.getElementById("seller-address-h").classList.add("invisible");
    document.getElementById("seller-address").textContent = address;
  }

  if (gst != "") {
    document.getElementById("seller-gst-h").classList.remove("invisible");
    document.getElementById("seller-gst").textContent = gst;
  } else {
    document.getElementById("seller-gst-h").classList.add("invisible");
    document.getElementById("seller-gst").textContent = gst;
  }
}

function showMyDetails() {
  var eCompanyName = document.getElementById("seller-from");
  var eSellerName = document.getElementById("seller-name");
  var eSellerPhone = document.getElementById("seller-phone");
  var eSellerAddress = document.getElementById("seller-address");
  var eSellerGST = document.getElementById("seller-gst");

  if (eCompanyName) {
    document.getElementById("companyName").value = eCompanyName.textContent;
  }
  if (eSellerName) {
    document.getElementById("yourName").value = eSellerName.textContent;
  }
  if (eSellerPhone) {
    document.getElementById("yourPhone").value = eSellerPhone.textContent;
  }
  if (eSellerAddress) {
    document.getElementById("yourAddress").value = eSellerAddress.textContent;
  }
  if (eSellerGST) {
    document.getElementById("yourGST").value = eSellerGST.textContent;
  }
}

function addClient() {
  var company = document.getElementById("clientCompanyName").value;
  var name = document.getElementById("clientName").value;
  var ph = document.getElementById("clientPhone").value;
  var address = document.getElementById("clientAddress").value;
  var billid = document.getElementById("clientBillid").value;

  if (company != "") {
    document.getElementById("client-to-h").classList.remove("invisible");
    document.getElementById("client-to").textContent = company;
  } else {
    document.getElementById("client-to-h").classList.add("invisible");
    document.getElementById("client-to").textContent = company;
  }

  if (name != "") {
    document.getElementById("client-name-h").classList.remove("invisible");
    document.getElementById("client-name").textContent = name;
  } else {
    document.getElementById("client-name-h").classList.add("invisible");
    document.getElementById("client-name").textContent = name;
  }

  if (ph != "") {
    document.getElementById("client-phone-h").classList.remove("invisible");
    document.getElementById("client-phone").textContent = ph;
  } else {
    document.getElementById("client-phone-h").classList.add("invisible");
    document.getElementById("client-phone").textContent = ph;
  }

  if (address != "") {
    document.getElementById("client-address-h").classList.remove("invisible");
    document.getElementById("client-address").textContent = address;
  } else {
    document.getElementById("client-address-h").classList.add("invisible");
    document.getElementById("client-address").textContent = address;
  }

  if (billid != "") {
    document.getElementById("billid-h").classList.remove("invisible");
    document.getElementById("billid").textContent = billid;
  } else {
    document.getElementById("billid-h").classList.add("invisible");
    document.getElementById("billid").textContent = billid;
  }
}

function showClientDetails() {
  var eCompanyName = document.getElementById("client-to");
  var eClientName = document.getElementById("client-name");
  var eClientPhone = document.getElementById("client-phone");
  var eClientAddress = document.getElementById("client-address");
  var eClientBillid = document.getElementById("billid");

  if (eCompanyName) {
    document.getElementById("clientCompanyName").value =
      eCompanyName.textContent;
  }
  if (eClientName) {
    document.getElementById("clientName").value = eClientName.textContent;
  }
  if (eClientPhone) {
    document.getElementById("clientPhone").value = eClientPhone.textContent;
  }
  if (eClientAddress) {
    document.getElementById("clientAddress").value = eClientAddress.textContent;
  }
  if (eClientBillid) {
    document.getElementById("clientBillid").value = eClientBillid.textContent;
  }
}

function addTerm() {
  var term = prompt("Enter a Term: ");
  if (term != null && term != "") {
    var termid = "term" + termsCounter;
    var parentElement = document.getElementById("invoice-terms");
    // Create the new list item element
    var newListItem = document.createElement("li");
    newListItem.id = termid;
    newListItem.setAttribute("onclick", `javascript:deleteTerm('${termid}')`);
    newListItem.textContent = term;
    // Append the new list item to the parent element
    parentElement.appendChild(newListItem);
    termsCounter++;
  }
}

function addNote() {
  var note = prompt("Enter a Note: ");
  if (note != null && note != "") {
    var noteid = "note" + noteCounter;
    var parentElement = document.getElementById("invoice-note");
    // Create the new list item element
    var newListItem = document.createElement("li");
    newListItem.id = noteid;
    newListItem.setAttribute("onclick", `javascript:deleteNote('${noteid}')`);
    newListItem.textContent = note;
    // Append the new list item to the parent element
    parentElement.appendChild(newListItem);
    noteCounter++;
  }
}

function deleteNote(id) {
  var con = confirm("Are you sure want to delete!");
  if (con) {
    document.getElementById(id).remove();
  }
}

function deleteTerm(id) {
  var con = confirm("Are you sure want to delete!");
  if (con) {
    document.getElementById(id).remove();
  }
}

function printInvoice() {
  const elements = document.getElementsByClassName("delete-ico-bill");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  var cell = document.getElementById("change-colspan");
  cell.colSpan = 2;

  var terms = document.getElementById("invoice-terms").innerText;
  if (terms == "") {
    document.getElementById("invoice-terms-h").remove();
  }

  var notes = document.getElementById("invoice-note").innerText;
  if (notes == "") {
    document.getElementById("invoice-note-h").remove();
  }

  var preContent = `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta content="width=device-width, initial-scale=1.0" name="viewport" />
       <!-- Google Fonts -->
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
       <!-- Vendor CSS Files -->
       <link
         href="assets/vendor/bootstrap/css/bootstrap.min.css"
         rel="stylesheet"
   
       <!-- Template Main CSS File -->
       <link href="assets/css/style.css" rel="stylesheet" />
     </head>
   
     <body>`;
  var postContent = `</body></html>`;
  var iframe = preContent;
  var contentDiv = document.getElementById("printing-bill");
  var contentHTML = contentDiv.innerHTML;

  // Remove id attributes using a regular expression
  var modifiedHTML = contentHTML; //.replace(/ id="[^"]*"/g, "");

  iframe += modifiedHTML;
  iframe += postContent;
  // iframe += postContent
  // Set the modified HTML as the srcdoc of the iframe
  var previewFrame = document.getElementById("iframePrint");
  previewFrame.srcdoc = iframe;

  // Print the content of the iframe
  previewFrame.onload = function () {
    previewFrame.contentWindow.print();
  };

  // Remove the iframe
  setTimeout(function () {
    var con = confirm("Reload in process!");
    if (con) {
      location.reload();
    } else {
      location.reload();
    }
  }, 1000);
}
